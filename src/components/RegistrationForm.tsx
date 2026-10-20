'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleRounded from '@mui/icons-material/CheckCircleRounded';
import { brand, fontMono } from '@/brand';
import { registrationForm, event } from '@/data/event';

type Participation = 'conference' | 'hackathon-team' | 'hackathon-solo';

const participationOptions: { value: Participation; label: string; hint: string; bg: string }[] = [
  { value: 'conference', label: 'Talks and workshops', hint: 'Track A', bg: brand.pastelBlue },
  { value: 'hackathon-team', label: 'Agentathon with my team', hint: 'Track B, team of 3 to 5', bg: brand.pastelGreen },
  { value: 'hackathon-solo', label: 'Agentathon solo', hint: 'Track B, we match you', bg: brand.pastelYellow },
];

const profiles = ['Student', 'Professional developer', 'AI builder (non-developer)', 'Researcher or teacher', 'Other'];

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 3,
    bgcolor: brand.white,
    '& fieldset': { borderWidth: 2, borderColor: brand.black },
    '&:hover fieldset': { borderColor: brand.black },
    '&.Mui-focused fieldset': { borderColor: brand.blue, borderWidth: 2 },
  },
};

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'done'; name: string } | { kind: 'error'; message: string };

export default function RegistrationForm() {
  const [participation, setParticipation] = useState<Participation>('conference');
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Honeypot: bots fill hidden fields, people don't.
    if (data._honey) return;

    const participationLabel = participationOptions.find((o) => o.value === participation)?.label ?? participation;
    const payload: Record<string, string> = {
      _subject: `${registrationForm.subject}: ${data.fullName} (${participationLabel})`,
      _template: 'table',
      _replyto: data.email,
      'Full name': data.fullName,
      Email: data.email,
      Phone: data.phone,
      Participation: participationLabel,
      ...(participation === 'conference' ? { 'Afternoon workshop track': data.workshopTrack } : {}),
      ...(participation === 'hackathon-team' ? { 'Team name': data.teamName, 'Team size': data.teamSize } : {}),
      Profile: data.profile,
      'University or company': data.organization || '-',
      City: data.city || '-',
      'Anything we should know': data.notes || '-',
      'Consent to be contacted': data.consent ? 'Yes' : 'No',
      'Submitted at': new Date().toISOString(),
    };

    setStatus({ kind: 'sending' });
    try {
      // The sheet (Apps Script) does not send CORS headers, so the request is opaque.
      // A resolved fetch means the row reached Google.
      const toSheet = registrationForm.sheetEndpoint
        ? fetch(registrationForm.sheetEndpoint, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload),
          }).then(() => true)
        : Promise.resolve(false);
      const toEmail = fetch(registrationForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
        .then(async (res) => {
          const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
          if (!res.ok || String(json.success) !== 'true') {
            throw new Error(json.message || 'The registration service did not accept the form.');
          }
          return true;
        });
      const [sheet, email] = await Promise.allSettled([toSheet, toEmail]);
      const saved = (sheet.status === 'fulfilled' && sheet.value) || (email.status === 'fulfilled' && email.value);
      if (!saved) {
        const reason = email.status === 'rejected' ? email.reason : null;
        throw reason instanceof Error ? reason : new Error('The registration service did not accept the form.');
      }
      setStatus({ kind: 'done', name: data.fullName.split(' ')[0] || data.fullName });
      form.reset();
      setParticipation('conference');
    } catch (err) {
      setStatus({
        kind: 'error',
        message: err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      });
    }
  }

  if (status.kind === 'done') {
    return (
      <Box
        id="registration-form"
        sx={{
          scrollMarginTop: 96,
          border: `2px solid ${brand.black}`,
          borderRadius: 6,
          bgcolor: brand.pastelGreen,
          p: { xs: 4, md: 6 },
          textAlign: 'center',
          boxShadow: `8px 8px 0 ${brand.black}`,
        }}
      >
        <CheckCircleRounded className="df-enter-pop" sx={{ fontSize: 72, color: brand.green }} />
        <Typography variant="h4" sx={{ mt: 2, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
          You&apos;re registered, {status.name}!
        </Typography>
        <Typography sx={{ mt: 1.5, maxWidth: 520, mx: 'auto' }}>
          See you on {event.date} at {event.venue}. The GDG Setif team will follow up by email with event details.
        </Typography>
        <Button variant="outlined" sx={{ mt: 3 }} onClick={() => setStatus({ kind: 'idle' })}>
          Register someone else
        </Button>
      </Box>
    );
  }

  const sending = status.kind === 'sending';

  return (
    <Box
      id="registration-form"
      component="form"
      onSubmit={onSubmit}
      sx={{
        scrollMarginTop: 96,
        border: `2px solid ${brand.black}`,
        borderRadius: 6,
        bgcolor: brand.offWhite,
        p: { xs: 3, md: 5 },
        boxShadow: `8px 8px 0 ${brand.black}`,
      }}
    >
      <Typography variant="overline" component="p" sx={{ fontFamily: fontMono, color: brand.blue, fontWeight: 500 }}>
        {'// registration'}
      </Typography>
      <Typography variant="h4" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 1 }}>
        Save your seat
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 4 }}>Takes one minute. Fields with * are required.</Typography>

      {/* Honeypot, hidden from people */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

      <FormControl component="fieldset" sx={{ width: '100%', mb: 4 }}>
        <FormLabel component="legend" sx={{ color: brand.black, fontWeight: 500, mb: 1.5, '&.Mui-focused': { color: brand.black } }}>
          I want to join *
        </FormLabel>
        <RadioGroup
          value={participation}
          onChange={(e) => setParticipation(e.target.value as Participation)}
          sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 1.5 }}
        >
          {participationOptions.map((o) => {
            const active = participation === o.value;
            return (
              <FormControlLabel
                key={o.value}
                value={o.value}
                control={<Radio sx={{ color: brand.black, '&.Mui-checked': { color: brand.black } }} />}
                label={
                  <Box>
                    <Typography sx={{ fontWeight: 500 }}>{o.label}</Typography>
                    <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>{o.hint}</Typography>
                  </Box>
                }
                sx={{
                  m: 0,
                  p: 1.5,
                  pr: 2,
                  border: `2px solid ${brand.black}`,
                  borderRadius: 4,
                  bgcolor: active ? o.bg : brand.white,
                  transition: 'background-color .2s, transform .2s, box-shadow .2s',
                  transform: active ? 'translate(-2px,-2px)' : 'none',
                  boxShadow: active ? `4px 4px 0 ${brand.black}` : 'none',
                }}
              />
            );
          })}
        </RadioGroup>
      </FormControl>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2.5 }}>
        <TextField name="fullName" label="Full name" required autoComplete="name" sx={fieldSx} />
        <TextField name="email" label="Email" type="email" required autoComplete="email" sx={fieldSx} />
        <TextField
          name="phone"
          label="Phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+213 ..."
          slotProps={{ htmlInput: { pattern: '[0-9 +\\(\\)\\-]{8,}', title: 'Digits, spaces and + ( ) - only' } }}
          sx={fieldSx}
        />
        <TextField name="profile" label="I am a" select required defaultValue="" sx={fieldSx}>
          {profiles.map((p) => (
            <MenuItem key={p} value={p}>
              {p}
            </MenuItem>
          ))}
        </TextField>
        <TextField name="organization" label="University or company" autoComplete="organization" sx={fieldSx} />
        <TextField name="city" label="City" defaultValue="Setif" autoComplete="address-level2" sx={fieldSx} />

        {participation === 'conference' && (
          <TextField
            name="workshopTrack"
            label="Afternoon workshop track"
            select
            required
            defaultValue=""
            sx={{ ...fieldSx, gridColumn: { md: 'span 2' } }}
          >
            <MenuItem value="Builder track (Room 1, no code needed)">Builder track (Room 1, no code needed)</MenuItem>
            <MenuItem value="Developer track (Room 2)">Developer track (Room 2)</MenuItem>
            <MenuItem value="Not sure yet">Not sure yet</MenuItem>
          </TextField>
        )}

        {participation === 'hackathon-team' && (
          <>
            <TextField name="teamName" label="Team name" required sx={fieldSx} />
            <TextField name="teamSize" label="Team size" select required defaultValue="" sx={fieldSx}>
              {['3', '4', '5'].map((n) => (
                <MenuItem key={n} value={n}>
                  {n} people
                </MenuItem>
              ))}
            </TextField>
          </>
        )}

        <TextField
          name="notes"
          label="Anything we should know? (accessibility, dietary needs, questions)"
          multiline
          minRows={3}
          sx={{ ...fieldSx, gridColumn: { md: 'span 2' } }}
        />
      </Box>

      <FormControlLabel
        sx={{ mt: 2.5, display: 'flex', alignItems: 'flex-start', mr: 0 }}
        control={<Checkbox name="consent" required sx={{ color: brand.black, '&.Mui-checked': { color: brand.black }, mt: -0.75 }} />}
        label="I agree that GDG Setif uses these details to contact me about DevFest Setif 2026."
      />

      {status.kind === 'error' && (
        <Alert severity="error" sx={{ mt: 2, border: `2px solid ${brand.red}`, borderRadius: 3 }}>
          {status.message}
        </Alert>
      )}

      <Button
        type="submit"
        variant="contained"
        color="secondary"
        size="large"
        disabled={sending}
        sx={{ mt: 3, minWidth: 220, display: 'flex' }}
        startIcon={sending ? <CircularProgress size={18} color="inherit" /> : undefined}
      >
        {sending ? 'Sending…' : participation === 'conference' ? 'Register to attend' : 'Register for the Agentathon'}
      </Button>
    </Box>
  );
}
