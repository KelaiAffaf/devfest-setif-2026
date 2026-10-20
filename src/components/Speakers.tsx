import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { brand, fontMono } from '@/brand';
import { speakers, workshopTracks, links } from '@/data/event';
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
        title="Meet the speakers"
        accent="red"
        intro="Google Developer Experts and builders from Algeria, Egypt and beyond. Talks in the main hall in the morning, hands-on workshops in the afternoon. Times are in the agenda."
      />

      <Box className="df-stagger" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
        {speakers.map((sp) => (
          <Box
            key={sp.name}
            className="df-lift"
            sx={{
              border: `2px solid ${brand.black}`,
              borderRadius: 6,
              p: { xs: 2.5, md: 3 },
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              bgcolor: brand.white,
            }}
          >
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Box
                aria-hidden
                sx={{
                  flexShrink: 0,
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  border: `2px solid ${brand.black}`,
                  bgcolor: accentCore[sp.accent],
                  color: sp.accent === 'yellow' ? brand.black : brand.white,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.7rem',
                  fontWeight: 500,
                }}
              >
                {initials(sp.name.replace(/^Dr\. /, ''))}
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="h5" component="h3" sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, lineHeight: 1.2 }}>
                  {sp.name}
                </Typography>
                <Typography sx={{ fontWeight: 500, mt: 0.25 }}>
                  {sp.role}
                  {sp.company ? `, ${sp.company}` : ''}
                </Typography>
                {sp.location && (
                  <Typography sx={{ fontFamily: fontMono, fontSize: '0.85rem', color: 'text.secondary', mt: 0.25 }}>
                    {sp.location}
                  </Typography>
                )}
              </Box>
            </Box>

            {sp.gde && (
              <Box>
                <Pill size="sm" bg={accentPastel[sp.accent]} color={brand.black}>
                  Google Developer Expert, {sp.gde}
                </Pill>
              </Box>
            )}

            <Box sx={{ border: `2px solid ${brand.black}`, borderRadius: 4, p: 2, bgcolor: accentPastel[sp.accent] }}>
              <Typography sx={{ fontFamily: fontMono, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }}>
                Session
              </Typography>
              <Typography sx={{ fontWeight: 500, fontSize: '1.1rem', mt: 0.5, lineHeight: 1.3 }}>{sp.session}</Typography>
              {sp.sessionDescription && <Typography sx={{ mt: 1, fontSize: '0.95rem' }}>{sp.sessionDescription}</Typography>}
            </Box>

            <Typography sx={{ fontSize: '0.98rem' }}>{sp.bio}</Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 'auto' }}>
              {sp.expertise.map((e) => (
                <Box
                  key={e}
                  component="span"
                  sx={{ fontFamily: fontMono, fontSize: '0.78rem', border: `1.5px solid ${brand.black}`, borderRadius: 999, px: 1.25, py: 0.25 }}
                >
                  {e}
                </Box>
              ))}
            </Box>

            {sp.link && (
              <Box>
                <Button variant="outlined" size="small" href={sp.link.url} target="_blank" rel="noopener">
                  {sp.link.label}
                </Button>
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
