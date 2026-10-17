// Single source of truth for event content.
// Source: Notion page "DevFest GDG Setif 2026" (Agenda, Talks and Workshops, Hackathon).
// Update this file as speakers confirm and links go live.

export type Accent = 'blue' | 'green' | 'yellow' | 'red';

export const event = {
  name: 'DevFest Setif 2026',
  organizer: 'GDG Setif',
  date: 'Saturday, November 21, 2026',
  shortDate: 'Nov 21, 2026',
  hours: '08:00 to 18:30',
  // Event start in Algiers time (UTC+01:00)
  startsAt: '2026-11-21T08:00:00+01:00',
  venue: 'Skills Center Setif',
  city: 'Setif, Algeria',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Skills+Center+Setif',
  tagline:
    'One day, two tracks. Talks and workshops on building in the agentic era, plus a full-day Agentathon with Gemini.',
  hashtags: ['#DevFest', '#GDGSetif'],
};

// Leave a URL empty to show a "coming soon" state on the site.
export const links = {
  register: '', // conference registration (opens week of Oct 20)
  hackathonRegister: '', // hackathon registration, team and solo options
  callForSpeakers: '', // local call for speakers, closes Nov 1
  advocu: 'https://advocu.com',
  chapter: 'https://gdg.community.dev/gdg-setif/',
  sponsorContact: '', // e.g. mailto:gdg.setif@example.com
  codeOfConduct: 'https://developers.google.com/community/gdg/code-of-conduct',
};

// Registration form: each submission is emailed to the organizer through FormSubmit (https://formsubmit.co).
// After activating the form from the first email, replace the address in `endpoint` with the random
// alias FormSubmit gives you, so the email address no longer appears in the page source.
export const registrationForm = {
  endpoint: 'https://formsubmit.co/ajax/afafkelly@gmail.com',
  subject: 'New DevFest Setif 2026 registration',
};

export type AgendaItem = {
  time: string;
  title: string;
  detail?: string;
  allHands?: boolean;
};

export const agendaOverview: { time: string; trackA: string; trackB: string; allHands?: boolean }[] = [
  { time: '08:00 to 08:45', trackA: 'Registration, badges, breakfast', trackB: 'Registration, team check-in' },
  { time: '08:45 to 09:15', trackA: 'Opening ceremony, main hall', trackB: 'Opening ceremony, main hall', allHands: true },
  { time: '09:15 to 12:45', trackA: 'Keynote, 4 talks, panel (main hall)', trackB: 'Theme reveal, build starts 09:45, mentor round 1' },
  { time: '12:45 to 14:00', trackA: 'Lunch and networking', trackB: 'Lunch on site', allHands: true },
  { time: '14:00 to 17:15', trackA: '4 workshops: Room 1 Builder track, Room 2 Developer track', trackB: 'Mentor round 2, code freeze 16:30' },
  { time: '16:45 to 17:45', trackA: 'Workshop attendees join demos at 17:15', trackB: 'Demos and judging' },
  { time: '18:00 to 18:30', trackA: 'Closing: awards, speaker thanks, group photo', trackB: 'Closing: awards, speaker thanks, group photo', allHands: true },
];

export const trackA: AgendaItem[] = [
  { time: '08:00', title: 'Registration, badges, breakfast' },
  { time: '08:45', title: 'Opening ceremony', detail: 'All participants, main hall', allHands: true },
  { time: '09:15', title: 'Keynote', detail: 'Main hall' },
  { time: '09:45', title: 'Talk 1', detail: 'Main hall' },
  { time: '10:15', title: 'Talk 2', detail: 'Main hall' },
  { time: '10:45', title: 'Coffee break' },
  { time: '11:00', title: 'Securing AI Agents in Arabic, French, and Darija', detail: 'Afaf Kelai, main hall' },
  { time: '11:30', title: 'Talk 4', detail: 'Main hall' },
  { time: '12:00', title: 'Panel or lightning talks', detail: 'Main hall' },
  { time: '12:45', title: 'Lunch and networking', detail: 'All participants', allHands: true },
  { time: '14:00', title: 'Workshops, round 1', detail: 'Room 1 Builder track, Room 2 Developer track' },
  { time: '15:30', title: 'Coffee break' },
  { time: '15:45', title: 'Workshops, round 2', detail: 'Room 1 Builder track, Room 2 Developer track' },
  { time: '17:15', title: 'Join the hackathon demos', detail: 'Hackathon room' },
  { time: '18:00', title: 'Closing ceremony', detail: 'Hackathon awards, speaker thanks, group photo', allHands: true },
];

export const trackB: AgendaItem[] = [
  { time: '08:00', title: 'Registration, team check-in' },
  { time: '08:45', title: 'Opening ceremony', detail: 'All participants, main hall', allHands: true },
  { time: '09:15', title: 'Theme reveal and rules', detail: 'Team formation for solo participants' },
  { time: '09:45', title: 'Build starts' },
  { time: '11:00', title: 'Mentor round 1', detail: 'Idea check' },
  { time: '12:45', title: 'Lunch on site', allHands: true },
  { time: '14:00', title: 'Mentor round 2', detail: 'Technical help' },
  { time: '16:30', title: 'Code freeze and submission', detail: 'Repo link, 1 slide, 1 minute demo' },
  { time: '16:30', title: 'Pitch prep' },
  { time: '16:45', title: 'Demos and judging', detail: '3 min pitch plus 2 min Q&A per team' },
  { time: '18:00', title: 'Awards at the closing', detail: 'Main hall', allHands: true },
];

export type Session = {
  slot: string;
  time: string;
  room: string;
  speaker?: string;
  title?: string;
  description?: string;
  track?: 'Builder' | 'Developer';
  confirmed: boolean;
  accent: Accent;
};

export const sessions: Session[] = [
  { slot: 'Keynote', time: '09:15', room: 'Main hall', confirmed: false, accent: 'blue' },
  { slot: 'Talk 1', time: '09:45', room: 'Main hall', confirmed: false, accent: 'green' },
  { slot: 'Talk 2', time: '10:15', room: 'Main hall', confirmed: false, accent: 'yellow' },
  {
    slot: 'Talk 3',
    time: '11:00',
    room: 'Main hall',
    speaker: 'Afaf Kelai',
    title: 'Securing AI Agents in Arabic, French, and Darija',
    description:
      'Results from an open-source suite of prompt injection attacks in English, French, and Arabic, and a practical checklist to secure agents built with Gemini and Google Cloud.',
    confirmed: true,
    accent: 'red',
  },
  { slot: 'Talk 4', time: '11:30', room: 'Main hall', confirmed: false, accent: 'blue' },
  { slot: 'Panel', time: '12:00', room: 'Main hall', confirmed: false, accent: 'green' },
  { slot: 'Workshop 1A', time: '14:00', room: 'Room 1', track: 'Builder', confirmed: false, accent: 'yellow' },
  { slot: 'Workshop 1B', time: '14:00', room: 'Room 2', track: 'Developer', confirmed: false, accent: 'red' },
  { slot: 'Workshop 2A', time: '15:45', room: 'Room 1', track: 'Builder', confirmed: false, accent: 'blue' },
  { slot: 'Workshop 2B', time: '15:45', room: 'Room 2', track: 'Developer', confirmed: false, accent: 'green' },
];

export const audiences: { who: string; promise: string; where: string; accent: Accent }[] = [
  {
    who: 'Professional developers',
    promise: 'Engineering workflows for the agentic era. Safe, scalable apps.',
    where: 'Morning talks, Developer track, hackathon',
    accent: 'blue',
  },
  {
    who: 'AI builders',
    promise: 'Go from vibe coding a first app to an app ready to scale. No dev background needed.',
    where: 'Builder track workshops',
    accent: 'green',
  },
  {
    who: 'Students and tech enthusiasts',
    promise: 'Live Gemini demos, hands-on workshops, networking.',
    where: 'Keynote, lunch networking, hackathon demos',
    accent: 'yellow',
  },
];

export const workshopTracks = [
  {
    name: 'Builder track',
    room: 'Room 1',
    audience: 'For non-developers',
    topics: ['Build an app with Google AI Studio', 'From prompt to production', 'AI automation for a local industry'],
    accent: 'green' as Accent,
  },
  {
    name: 'Developer track',
    room: 'Room 2',
    audience: 'For developers',
    topics: ['Agentic apps with Flutter and Firebase', 'The Gemini API in practice', 'Agents on Google Cloud'],
    accent: 'blue' as Accent,
  },
];

export const technologies: { name: string; accent: Accent }[] = [
  { name: 'Gemini API', accent: 'blue' },
  { name: 'Google AI Studio', accent: 'red' },
  { name: 'Gemini CLI', accent: 'yellow' },
  { name: 'Google Antigravity', accent: 'green' },
  { name: 'Firebase', accent: 'yellow' },
  { name: 'Flutter', accent: 'blue' },
  { name: 'Android', accent: 'green' },
  { name: 'Google Cloud', accent: 'red' },
];

export const hackathon = {
  name: 'Agentathon',
  hours: '09:15 to 17:45',
  teamSize: '3 to 5',
  buildTime: '6.5 hours',
  rules: [
    'Teams of 3 to 5. Solo participants get matched at 09:15.',
    'All code written on the day. Ideas and designs prepared ahead are allowed.',
    'Every team builds with Gemini. A live leaderboard shows mentor round scores.',
    'Every project uses at least one more Google tool: AI Studio, Gemini CLI, Antigravity, Firebase, Flutter, Android, or Google Cloud.',
    'Submit at code freeze (16:30): repo link, 1 slide, 1 minute demo video or live demo.',
  ],
  rubric: [
    { criterion: 'Impact and fit with the theme', weight: 30, accent: 'blue' as Accent },
    { criterion: 'Technical execution', weight: 30, accent: 'red' as Accent },
    { criterion: 'Use of Google technologies', weight: 20, accent: 'yellow' as Accent },
    { criterion: 'Demo and pitch', weight: 20, accent: 'green' as Accent },
  ],
};

export const faqs = [
  {
    q: 'Who organizes DevFest Setif?',
    a: 'GDG Setif, a volunteer-run Google Developer Group. DevFest is the yearly series of community tech conferences hosted by GDG chapters worldwide.',
  },
  {
    q: 'Do I need to code to attend?',
    a: 'No. The Builder track in Room 1 targets non-developers who want to build with AI tools like Google AI Studio.',
  },
  {
    q: 'Can I join the hackathon solo?',
    a: 'Yes. Register as solo and we match you into a team of 3 to 5 at 09:15 on the day.',
  },
  {
    q: 'What do I bring to the hackathon?',
    a: 'A charged laptop, your charger, and a Google account. We provide Wi-Fi, power strips, food, and mentors.',
  },
  {
    q: 'Can I attend both tracks?',
    a: 'Talk and workshop attendees join the hackathon demos at 17:15. Hackathon teams stay in the hackathon room during build time.',
  },
];
