// Single source of truth for event content.
// Source: Notion page "DevFest GDG Setif 2026" (Agenda, Talks and Workshops, Hackathon).
// Update this file as speakers confirm and links go live.

export type Accent = 'blue' | 'green' | 'yellow' | 'red';

export const event = {
  name: 'DevFest Setif 2026',
  organizer: 'GDG Setif',
  date: 'Saturday, November 21, 2026',
  shortDate: 'Nov 21, 2026',
  hours: '09:00 to 19:15',
  // Event start in Algiers time (UTC+01:00)
  startsAt: '2026-11-21T09:00:00+01:00',
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
  { time: '09:00 to 09:30', trackA: 'Welcome, registration, badges', trackB: 'Registration, team check-in' },
  { time: '09:30 to 10:00', trackA: 'Opening ceremony, main hall', trackB: 'Opening ceremony, main hall', allHands: true },
  { time: '10:00 to 13:30', trackA: 'Keynote and 5 talks (main hall)', trackB: 'Theme reveal, build starts 10:30, mentor round 1' },
  { time: '13:30 to 14:45', trackA: 'Lunch and networking', trackB: 'Lunch on site', allHands: true },
  { time: '14:45 to 18:00', trackA: 'Workshops: Room 1 Builder track, Room 2 Developer track', trackB: 'Mentor round 2, code freeze 17:15' },
  { time: '17:30 to 18:30', trackA: 'Workshop attendees join demos at 18:00', trackB: 'Demos and judging' },
  { time: '18:45 to 19:15', trackA: 'Closing: awards, speaker thanks, group photo', trackB: 'Closing: awards, speaker thanks, group photo', allHands: true },
];

export const trackA: AgendaItem[] = [
  { time: '09:00', title: 'Welcome and registration', detail: 'Badges and coffee' },
  { time: '09:30', title: 'Opening ceremony', detail: 'GDG Setif organizers, all participants, main hall', allHands: true },
  { time: '10:00', title: 'Keynote', detail: 'Speaker announced soon, main hall' },
  { time: '10:30', title: 'Applied AI and computer vision', detail: 'Dr. Asma Merabet, main hall' },
  { time: '11:00', title: 'Securing AI Agents', detail: 'Afaf Kelai, main hall' },
  { time: '11:30', title: 'Coffee break' },
  { time: '11:45', title: 'Bridging the Gap: How We Built Hybrid Mobile AI Before Google Made It Native', detail: 'Chiraz Chahbani, main hall' },
  { time: '12:15', title: 'Flutter & Dart', detail: 'Tarek Alabd, main hall' },
  { time: '12:45', title: 'Android, Jetpack Compose & KMP', detail: 'Ahmed Nabil, main hall' },
  { time: '13:30', title: 'Lunch and networking', detail: 'All participants', allHands: true },
  { time: '14:45', title: 'Workshops, round 1', detail: 'Room 1: Build your own vibe app on Google Cloud, Udesh Udayakumar. Room 2: Developer track, announced soon' },
  { time: '16:15', title: 'Coffee break' },
  { time: '16:30', title: 'Workshops, round 2', detail: 'Room 1 Builder track, Room 2 Developer track, announced soon' },
  { time: '18:00', title: 'Join the hackathon demos', detail: 'Hackathon room' },
  { time: '18:45', title: 'Closing ceremony', detail: 'Hackathon awards, speaker thanks, group photo', allHands: true },
];

export const trackB: AgendaItem[] = [
  { time: '09:00', title: 'Registration, team check-in' },
  { time: '09:30', title: 'Opening ceremony', detail: 'All participants, main hall', allHands: true },
  { time: '10:00', title: 'Theme reveal and rules', detail: 'Team formation for solo participants' },
  { time: '10:30', title: 'Build starts' },
  { time: '11:45', title: 'Mentor round 1', detail: 'Idea check' },
  { time: '13:30', title: 'Lunch on site', allHands: true },
  { time: '14:45', title: 'Mentor round 2', detail: 'Technical help' },
  { time: '17:15', title: 'Code freeze and submission', detail: 'Repo link, 1 slide, 1 minute demo' },
  { time: '17:15', title: 'Pitch prep' },
  { time: '17:30', title: 'Demos and judging', detail: '3 min pitch plus 2 min Q&A per team' },
  { time: '18:45', title: 'Awards at the closing', detail: 'Main hall', allHands: true },
];

// Speakers from the "Fiche Technique: Programme & Intervenants" (GDG Setif).
// Time slots for each speaker live in trackA above.
export type Speaker = {
  name: string;
  role: string;
  company?: string;
  location?: string;
  gde?: string;
  bio: string;
  expertise: string[];
  session: string;
  sessionDescription?: string;
  sessionConfirmed: boolean;
  link?: { label: string; url: string };
  accent: Accent;
};

export const speakers: Speaker[] = [
  {
    name: 'Tarek Alabd',
    role: 'Software Engineer Team Leader',
    company: 'Mega Trust Group',
    location: 'Cairo, Egypt',
    gde: 'Flutter & Dart',
    bio: 'Software engineer with 8+ years of experience, 5+ of them in Flutter, plus front-end web, native Android (Java) and native iOS (Swift). Technical content creator on YouTube, trainer and international speaker.',
    expertise: ['Flutter', 'Dart', 'Clean Architecture', 'OOP', 'TDD', 'Android', 'iOS'],
    session: 'Flutter & Dart',
    sessionConfirmed: false,
    link: { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tarekalabd/' },
    accent: 'blue',
  },
  {
    name: 'Dr. Asma Merabet',
    role: 'Data Scientist, Data Aggregation & Agent Infrastructure',
    company: 'Distinct Health',
    location: 'El Eulma, Algeria',
    gde: 'AI',
    bio: 'PhD in AI (computer vision and agentic AI), specialized in vision-language models and Keras, and a qualified lawyer (CAPA). Founder of Smart ColoTrust, an explainable agentic AI platform for colorectal cancer diagnosis built from her doctoral research. Lead Organizer of GDG Setif.',
    expertise: ['Explainable AI', 'Vision-Language Models', 'Keras', 'Agentic AI', 'Medical imaging'],
    session: 'Applied AI and computer vision',
    sessionConfirmed: false,
    accent: 'green',
  },
  {
    name: 'Afaf Kelai',
    role: 'AI Engineer',
    location: 'Algeria',
    company: 'Second Brain',
    bio: 'AI engineer at Second Brain, where she builds multi-agent LLM systems that read, extract and verify information from real-world documents. Instructor and mentor to 1,000+ students in software development and data science, from their first line of code to portfolio-ready projects, and author of course content for IT schools. Active in Google Developer Groups since 2015, she leads workshops and talks on cloud and machine learning and has helped run hackathons in Algeria and abroad. Organizer at GDG Setif.',
    expertise: ['Multi-agent LLM systems', 'Agentic AI', 'AI security', 'Cloud', 'Machine learning'],
    session: 'Securing AI Agents',
    sessionDescription:
      'Prompt injection attacks in Arabic, French, Darija and English, what they reveal about agents in production, and a practical checklist to secure agents built with Gemini and Google Cloud.',
    sessionConfirmed: true,
    accent: 'red',
  },
  {
    name: 'Ahmed Nabil',
    role: 'Senior Software Tech Lead',
    company: 'Vodafone Intelligent Solutions (VOIS)',
    gde: 'Android',
    bio: '25+ years of expertise, coding since age 11. Specialist in large-scale mobile architecture with a focus on Android, Jetpack Compose and Kotlin Multiplatform. Led projects with 10M+ downloads, passionate open-source contributor and mentor to 100,000+ developers across 6 countries.',
    expertise: ['Android', 'Jetpack Compose', 'Kotlin Multiplatform'],
    session: 'Android, Jetpack Compose & KMP',
    sessionConfirmed: false,
    link: { label: 'Linktree', url: 'https://linktr.ee/AhmedNMahran' },
    accent: 'yellow',
  },
  {
    name: 'Chiraz Chahbani',
    role: 'Software Engineer',
    company: 'InterForma',
    gde: 'Cloud',
    bio: 'Software engineer and agrifood innovation specialist, with a Master in Innovation and Entrepreneurship in the Mediterranean agrifood sector. GDG organizer and Women Techmakers Ambassador. Runs hands-on workshops on Google Cloud, generative AI and cloud-native technologies.',
    expertise: ['Google Cloud', 'Generative AI', 'MLOps', 'Cloud-native'],
    session: 'Bridging the Gap: How We Built Hybrid Mobile AI Before Google Made It Native',
    sessionConfirmed: true,
    accent: 'blue',
  },
  {
    name: 'Udesh Udayakumar',
    role: 'Enterprise Architect',
    company: 'Aviato Consulting',
    bio: '5+ years in sales, presales, enterprise training and delivery on Google Cloud, with expertise in infrastructure modernization, automation, DevOps and Kubernetes. Creator of the YouTube channel and podcast "The Cloud Pilot". Speaker at 100+ events.',
    expertise: ['Google Cloud', 'DevOps', 'Kubernetes', 'Automation'],
    session: 'Build your own vibe app on Google Cloud',
    sessionConfirmed: true,
    accent: 'green',
  },
];

export const audiences:{ who: string; promise: string; where: string; accent: Accent }[] = [
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
  hours: '10:00 to 18:30',
  teamSize: '3 to 5',
  buildTime: '6.5 hours',
  rules: [
    'Teams of 3 to 5. Solo participants get matched at 10:00.',
    'All code written on the day. Ideas and designs prepared ahead are allowed.',
    'Every team builds with Gemini. A live leaderboard shows mentor round scores.',
    'Every project uses at least one more Google tool: AI Studio, Gemini CLI, Antigravity, Firebase, Flutter, Android, or Google Cloud.',
    'Submit at code freeze (17:15): repo link, 1 slide, 1 minute demo video or live demo.',
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
    a: 'Yes. Register as solo and we match you into a team of 3 to 5 at 10:00 on the day.',
  },
  {
    q: 'What do I bring to the hackathon?',
    a: 'A charged laptop, your charger, and a Google account. We provide Wi-Fi, power strips, food, and mentors.',
  },
  {
    q: 'Can I attend both tracks?',
    a: 'Talk and workshop attendees join the hackathon demos at 18:00. Hackathon teams stay in the hackathon room during build time.',
  },
];
