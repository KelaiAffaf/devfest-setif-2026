import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { brand, fontMono, asset } from '@/brand';
import { hackathon, trackB, links } from '@/data/event';
import { Section, SectionHeader, Pill, accentCore, Glyph } from './ui';

const facts = [
  { k: 'Team size', v: hackathon.teamSize },
  { k: 'Build time', v: hackathon.buildTime },
  { k: 'Hours', v: hackathon.hours },
  { k: 'Theme', v: 'Revealed on the day' },
];

export default function Hackathon() {
  const regOpen = Boolean(links.hackathonRegister);
  const milestones = trackB.filter((i) => ['09:15', '09:45', '11:00', '14:00', '16:30', '16:45'].includes(i.time) && i.title !== 'Pitch prep');

  return (
    <Section id="hackathon" bg={brand.black} sx={{ color: brand.offWhite }}>
      <Box
        component="img"
        src={asset('/brand/glyph-globe.png')}
        alt=""
        aria-hidden
        sx={{ position: 'absolute', width: 180, top: 0, right: 24, filter: 'invert(1)', opacity: 0.5, display: { xs: 'none', md: 'block' } }}
      />
      <SectionHeader
        eyebrow="track b"
        title={hackathon.name}
        accent="yellow"
        light
        intro="A full-day hackathon where every team builds an AI agent with Gemini. Bring your laptop and your team, or come solo and we match you."
      />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2 }}>
        {facts.map((f, i) => (
          <Box
            key={f.k}
            sx={{
              border: `2px solid ${brand.offWhite}`,
              borderRadius: 6,
              p: 3,
              bgcolor: i === 3 ? brand.yellow : 'transparent',
              color: i === 3 ? brand.black : brand.offWhite,
            }}
          >
            <Typography sx={{ fontFamily: fontMono, fontSize: '0.85rem', opacity: 0.8 }}>{f.k}</Typography>
            <Typography sx={{ mt: 1, fontSize: { xs: '1.3rem', md: '1.6rem' }, fontWeight: 500, lineHeight: 1.2 }}>{f.v}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 6, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' }, gap: 3 }}>
        <Box sx={{ border: `2px solid ${brand.offWhite}`, borderRadius: 6, p: { xs: 3, md: 4 } }}>
          <Typography variant="h5" sx={{ fontSize: '1.6rem', mb: 2 }}>
            Rules
          </Typography>
          <Box component="ol" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'grid', gap: 2 }}>
            {hackathon.rules.map((r, i) => (
              <Box component="li" key={r} sx={{ display: 'flex', gap: 2 }}>
                <Box
                  sx={{
                    flexShrink: 0,
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    bgcolor: Object.values(accentCore)[i % 4],
                    color: i % 4 === 2 ? brand.black : brand.white,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: fontMono,
                    fontWeight: 500,
                  }}
                >
                  {i + 1}
                </Box>
                <Typography sx={{ color: '#e0e0e0' }}>{r}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ border: `2px solid ${brand.offWhite}`, borderRadius: 6, p: { xs: 3, md: 4 } }}>
          <Typography variant="h5" sx={{ fontSize: '1.6rem', mb: 3 }}>
            Judging rubric
          </Typography>
          <Box sx={{ display: 'grid', gap: 2.5 }}>
            {hackathon.rubric.map((r) => (
              <Box key={r.criterion}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, gap: 2 }}>
                  <Typography>{r.criterion}</Typography>
                  <Typography sx={{ fontFamily: fontMono, fontWeight: 500 }}>{r.weight}%</Typography>
                </Box>
                <Box sx={{ height: 16, borderRadius: 999, border: `2px solid ${brand.offWhite}`, overflow: 'hidden' }}>
                  <Box sx={{ width: `${(r.weight / 30) * 100}%`, height: '100%', bgcolor: accentCore[r.accent] }} />
                </Box>
              </Box>
            ))}
          </Box>
          <Typography sx={{ mt: 4, color: '#bdbdbd', fontSize: '0.95rem' }}>
            Prizes for the top 3 teams, announced at the closing ceremony.
          </Typography>
        </Box>
      </Box>

      <Typography variant="h5" sx={{ fontSize: '1.6rem', mt: 6, mb: 2 }}>
        How the day runs
      </Typography>
      <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
        {milestones.map((m, i) => (
          <Pill key={`${m.time}-${m.title}`} bg={[brand.pastelBlue, brand.pastelGreen, brand.pastelYellow, brand.pastelRed][i % 4]}>
            <Box component="span" sx={{ fontFamily: fontMono }}>
              {m.time}
            </Box>
            {m.title}
          </Pill>
        ))}
      </Box>

      <Box sx={{ mt: 6, display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          href={regOpen ? links.hackathonRegister : '#register'}
          sx={{ bgcolor: brand.yellow, color: brand.black, borderColor: brand.offWhite, '&:hover': { bgcolor: brand.halftoneYellow, boxShadow: `4px 4px 0 ${brand.offWhite}` } }}
        >
          {regOpen ? 'Register your team' : 'Hackathon registration opens soon'}
        </Button>
      </Box>
    </Section>
  );
}
