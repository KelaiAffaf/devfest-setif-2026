import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { brand, fontMono } from '@/brand';
import { event, links } from '@/data/event';
import { Section, SectionHeader, Glyph } from './ui';
import RegistrationForm from './RegistrationForm';

type Card = {
  title: string;
  body: string;
  cta: string;
  pendingCta: string;
  href: string;
  bg: string;
};

export default function Register() {
  const cards: Card[] = [
    {
      title: 'Attend',
      body: 'Talks, workshops, lunch and networking. Pick the Builder or Developer track for the afternoon.',
      cta: 'Register to attend',
      pendingCta: 'Register to attend',
      href: links.register || '#registration-form',
      bg: brand.pastelBlue,
    },
    {
      title: 'Hack',
      body: 'Join the Agentathon with a team of 3 to 5, or register solo and get matched on the day.',
      cta: 'Register for the hackathon',
      pendingCta: 'Register for the hackathon',
      href: links.hackathonRegister || '#registration-form',
      bg: brand.pastelGreen,
    },
    {
      title: 'Sponsor',
      body: 'Reach developers, AI builders and students from Setif and the region. Booths and prize partnerships available.',
      cta: 'Get the sponsor deck',
      pendingCta: 'Contact GDG Setif',
      href: links.sponsorContact,
      bg: brand.pastelYellow,
    },
  ];

  return (
    <Section id="register">
      <Glyph name="arrow" sx={{ width: 120, top: 56, right: 24, display: { xs: 'none', md: 'block' } }} />
      <SectionHeader
        eyebrow="join"
        title="Be part of it"
        accent="yellow"
        intro={`${event.date}, ${event.venue}. Registration is open. Fill in the form below to save your seat in the talks and workshops or the Agentathon.`}
      />
      <Box className="df-stagger" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
        {cards.map((c) => {
          const live = Boolean(c.href);
          const internal = c.href.startsWith('#');
          return (
            <Box
              key={c.title}
              className="df-lift"
              sx={{ border: `2px solid ${brand.black}`, borderRadius: 6, p: 3, bgcolor: c.bg, display: 'flex', flexDirection: 'column', minHeight: 260 }}
            >
              <Typography sx={{ fontSize: '2.2rem', fontWeight: 500 }}>{c.title}</Typography>
              <Typography sx={{ mt: 1, flex: 1 }}>{c.body}</Typography>
              <Button
                variant="contained"
                color="secondary"
                href={live ? c.href : links.chapter}
                target={internal ? undefined : '_blank'}
                rel={internal ? undefined : 'noopener'}
                sx={{ mt: 3, alignSelf: 'flex-start' }}
              >
                {live ? c.cta : c.pendingCta}
              </Button>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ mt: { xs: 6, md: 8 } }}>
        <RegistrationForm />
      </Box>
      <Typography sx={{ mt: 3, fontFamily: fontMono, fontSize: '0.9rem', color: 'text.secondary' }}>
        Follow along: {event.hashtags.join(' ')}
      </Typography>
    </Section>
  );
}
