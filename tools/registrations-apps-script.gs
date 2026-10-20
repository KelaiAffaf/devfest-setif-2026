// DevFest Setif 2026: saves each website registration as a row in this Google Sheet.
// Paste into Extensions > Apps Script, then Deploy > New deployment > Web app
// (Execute as: Me, Who has access: Anyone). Put the web app URL in src/data/event.ts.

const HEADERS = [
  'Submitted at', 'Full name', 'Email', 'Phone', 'Participation', 'Afternoon workshop track',
  'Team name', 'Team size', 'Profile', 'University or company', 'City',
  'Anything we should know', 'Consent to be contacted',
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    const first = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
    if (first.join('|') !== HEADERS.join('|')) {
      sheet.getRange(1, 1, 1, sheet.getMaxColumns()).clearContent();
      sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (data._honey) return json({ result: 'ignored' });
    const row = HEADERS.map((h) => (h === 'Submitted at' ? new Date() : clean(data[h])));
    sheet.appendRow(row);
    return json({ result: 'success' });
  } finally {
    lock.releaseLock();
  }
}

// Keeps text as text: blocks formulas and stops phone numbers turning into numbers.
function clean(value) {
  const v = value === undefined || value === null ? '' : String(value).slice(0, 2000);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
