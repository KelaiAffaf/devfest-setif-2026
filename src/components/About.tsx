import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { brand, fontMono } from '@/brand';
import { audiences, technologies } from '@/data/event';
import { Section, SectionHeader, accentCore, accentPastel, Glyph } from './ui';

const stats = [
  { n: '1', label: 'day', accent: 'blue' as const },
  { n: '2', label: 'parallel tracks', accent: 'red' as const },
  { n: '10', label: 'talks, panel and workshops', accent: 'yellow' as const },
  { n: '6.5h', label: 'of hackathon build time', accent: 'green' as const },
];

export default function About() {
  return (
    <Section id="about" bg={brand.white} sx={{ borderTop: `2px solid ${brand.black}`, borderBottom: `2px solid ${brand.black}` }}>
      <Glyph name="braces" sx={{ width: 120, top: 40, right: 24, display: { xs: 'none', md: 'block' } }} />
      <SectionHeader
        eyebrow="about"
        title="DevFest Setif"
        accent="blue"
        intro={
          <>
            DevFest is the yearly community tech conference hosted by Google Developer Groups worldwide. In Setif, we run
            two tracks in parallel. Track A: talks in the morning, hands-on workshops in the afternoon. Track B: a full-day
            Agentathon where teams build with Gemini.
          </>
        }
      />

      <Box className="df-stagger" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2 }}>
        {stats.map((s) => (
          <Box key={s.label} className="df-lift" sx={{ border: `2px solid ${brand.black}`, borderRadius: 6, p: 3, bgcolor: accentPastel[s.accent] }}>
            <Typography sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 500, lineHeight: 1 }}>{s.n}</Typography>
            <Typography sx={{ mt: 1, fontWeight: 500 }}>{s.label}</Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="h4" sx={{ mt: { xs: 8, md: 10 }, mb: 3, fontSize: { xs: '1.6rem', md: '2rem' } }}>
        Who DevFest Setif is for
      </Typography>
      <Box className="df-stagger" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
        {audiences.map((a) => (
          <Box
            key={a.who}
            className="df-lift"
            sx={{ border: `2px solid ${brand.black}`, borderRadius: 6, p: 3, bgcolor: brand.offWhite, display: 'flex', flexDirection: 'column' }}
          >
            <Box sx={{ width: 44, height: 12, borderRadius: 999, bgcolor: accentCore[a.accent], border: `2px solid ${brand.black}`, mb: 2 }} />
            <Typography variant="h5" sx={{ fontSize: '1.4rem' }}>
              {a.who}
            </Typography>
            <Typography sx={{ mt: 1, flex: 1 }}>{a.promise}</Typography>
            <Typography sx={{ mt: 2, fontFamily: fontMono, fontSize: '0.85rem', color: 'text.secondary' }}>→ {a.where}</Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="h4" sx={{ mt: { xs: 8, md: 10 }, mb: 3, fontSize: { xs: '1.6rem', md: '2rem' } }}>
        Technologies on stage
      </Typography>
      <Box className="df-stagger" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
        {technologies.map((t) => (
          <Box
            key={t.name}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              border: `2px solid ${brand.black}`,
              borderRadius: 999,
              px: 2.5,
              py: 1,
              fontWeight: 500,
              fontSize: '1.05rem',
              bgcolor: brand.white,
              transition: 'background .15s',
              '&:hover': { bgcolor: accentPastel[t.accent] },
            }}
          >
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: accentCore[t.accent] }} />
            {t.name}
          </Box>
        ))}
      </Box>
    </Section>
  );
}
