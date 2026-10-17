import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { brand, fontMono } from '@/brand';
import { sessions, workshopTracks, links } from '@/data/event';
import { Section, SectionHeader, Pill, accentCore, accentPastel, Glyph } from './ui';

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function Speakers() {
  const cfpOpen = Boolean(links.callForSpeakers);
  return (
    <Section id="speakers" bg={brand.white} sx={{ borderTop: `2px solid ${brand.black}`, borderBottom: `2px solid ${brand.black}` }}>
      <Glyph name="at" sx={{ width: 120, top: 40, right: 24, display: { xs: 'none', md: 'block' } }} />
      <SectionHeader
        eyebrow="speakers"
        title="Talks and workshops"
        accent="red"
        intro="1 keynote, 4 talks and a panel in the main hall. 4 hands-on workshops in the afternoon across 2 rooms. Speakers get announced from November 4."
      />

      <Box className="df-stagger" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
        {sessions.map((s) => (
          <Box
            key={s.slot}
              className="df-lift"
            sx={{
              border: `2px solid ${brand.black}`,
              borderRadius: 6,
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              bgcolor: s.confirmed ? accentPastel[s.accent] : brand.offWhite,
              gridColumn: s.confirmed ? { md: 'span 2' } : undefined,
              minHeight: 220,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, flexWrap: 'wrap' }}>
              <Pill size="sm" bg={accentCore[s.accent]} color={s.accent === 'yellow' ? brand.black : brand.white}>
                {s.slot}
              </Pill>
              <Typography sx={{ fontFamily: fontMono, fontSize: '0.9rem' }}>
                {s.time} · {s.room}
                {s.track ? ` · ${s.track}` : ''}
              </Typography>
            </Box>

            {s.confirmed ? (
              <Box sx={{ display: 'flex', gap: 2.5, mt: 3, alignItems: 'flex-start', flexDirection: { xs: 'column', sm: 'row' } }}>
                <Box
                  aria-hidden
                  sx={{
                    flexShrink: 0,
                    width: 96,
                    height: 96,
                    borderRadius: '50%',
                    border: `2px solid ${brand.black}`,
                    bgcolor: accentCore[s.accent],
                    color: brand.white,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 500,
                  }}
                >
                  {initials(s.speaker!)}
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontSize: { xs: '1.35rem', md: '1.6rem' }, lineHeight: 1.2 }}>
                    {s.title}
                  </Typography>
                  <Typography sx={{ mt: 0.5, fontWeight: 500 }}>{s.speaker}</Typography>
                  <Typography sx={{ mt: 1.5 }}>{s.description}</Typography>
                </Box>
              </Box>
            ) : (
              <Box sx={{ mt: 'auto', pt: 4 }}>
                <Typography sx={{ fontSize: '1.4rem', fontWeight: 500, color: '#8a8a8a' }}>{'{ speaker TBA }'}</Typography>
                <Typography sx={{ mt: 0.5, color: 'text.secondary', fontSize: '0.95rem' }}>Announced soon</Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>

      <Typography variant="h4" sx={{ mt: { xs: 8, md: 10 }, mb: 3, fontSize: { xs: '1.6rem', md: '2rem' } }}>
        Two afternoon workshop tracks
      </Typography>
      <Box className="df-stagger" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
        {workshopTracks.map((w) => (
          <Box key={w.name} sx={{ border: `2px solid ${brand.black}`, borderRadius: 6, overflow: 'hidden', bgcolor: brand.white }}>
            <Box sx={{ bgcolor: accentPastel[w.accent], p: 3, borderBottom: `2px solid ${brand.black}` }}>
              <Typography sx={{ fontFamily: fontMono, fontSize: '0.9rem' }}>
                {w.room} · {w.audience}
              </Typography>
              <Typography variant="h5" sx={{ fontSize: '1.6rem', mt: 0.5 }}>
                {w.name}
              </Typography>
            </Box>
            <Box component="ul" sx={{ m: 0, p: 3, pl: 5, display: 'grid', gap: 1 }}>
              {w.topics.map((t) => (
                <Typography component="li" key={t}>
                  {t}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          mt: 6,
          border: `2px solid ${brand.black}`,
          borderRadius: 6,
          p: { xs: 3, md: 4 },
          bgcolor: brand.black,
          color: brand.offWhite,
          display: 'flex',
          gap: 3,
          alignItems: { md: 'center' },
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ fontSize: '1.6rem' }}>
            Want to speak or run a workshop?
          </Typography>
          <Typography sx={{ mt: 1, color: '#cfcfcf' }}>
            Our call for speakers closes November 1. GDEs and Googlers apply through Advocu Speaker Matching.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', flexShrink: 0, '& .MuiButton-root': { whiteSpace: 'nowrap' } }}>
          <Button
            variant="contained"
            href={cfpOpen ? links.callForSpeakers : '#speakers'}
            disabled={!cfpOpen}
            target="_blank"
            rel="noopener"
            sx={{ bgcolor: brand.yellow, color: brand.black, borderColor: brand.offWhite, '&.Mui-disabled': { bgcolor: '#3a3a3a', color: '#aaa', borderColor: '#555' } }}
          >
            {cfpOpen ? 'Submit a session' : 'Call for speakers opens soon'}
          </Button>
          <Button
            variant="outlined"
            href={links.advocu}
            target="_blank"
            rel="noopener"
            sx={{ color: brand.offWhite, borderColor: brand.offWhite, '&:hover': { color: brand.black } }}
          >
            Advocu
          </Button>
        </Box>
      </Box>
    </Section>
  );
}
