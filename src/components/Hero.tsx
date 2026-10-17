import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CalendarMonthRounded from '@mui/icons-material/CalendarMonthRounded';
import PlaceRounded from '@mui/icons-material/PlaceRounded';
import ScheduleRounded from '@mui/icons-material/ScheduleRounded';
import { brand, asset } from '@/brand';
import { event } from '@/data/event';
import { Pill, Glyph } from './ui';
import Countdown from './Countdown';

export default function Hero() {
  return (
    <Box id="top" component="section" sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 6, md: 10 }, pb: { xs: 8, md: 12 } }}>
      <Glyph name="asterisk" sx={{ width: 110, top: 48, right: '6%', opacity: 0.9, display: { xs: 'none', md: 'block' } }} />
      <Glyph name="arrow" sx={{ width: 140, bottom: 40, left: '-30px', display: { xs: 'none', md: 'block' } }} />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.15fr 1fr' },
            gap: { xs: 6, md: 4 },
            alignItems: 'center',
          }}
        >
          <Box>
            <Box
              component="img"
              src={asset('/brand/logo-braces.png')}
              alt="DevFest"
              sx={{ width: '100%', maxWidth: 560, display: 'block' }}
            />
            <Stack direction="row" spacing={1.5} sx={{ mt: { xs: 2, md: 3 }, alignItems: 'center', flexWrap: 'wrap', rowGap: 1.5 }}>
              <Pill size="xl" bg={brand.white}>Setif</Pill>
              <Pill size="xl" bg={brand.yellow}>2026</Pill>
            </Stack>

            <Stack direction="row" sx={{ mt: 4, flexWrap: 'wrap', gap: 1 }}>
              <Pill bg={brand.pastelBlue}>
                <CalendarMonthRounded fontSize="small" /> {event.date}
              </Pill>
              <Pill bg={brand.pastelGreen}>
                <ScheduleRounded fontSize="small" /> {event.hours}
              </Pill>
              <Pill bg={brand.pastelRed}>
                <PlaceRounded fontSize="small" /> {event.venue}
              </Pill>
            </Stack>

            <Typography sx={{ mt: 3, fontSize: { xs: '1.15rem', md: '1.35rem' }, maxWidth: 560 }}>{event.tagline}</Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
              <Button href="#register" variant="contained" color="secondary" size="large">
                Save your seat
              </Button>
              <Button href="#agenda" variant="outlined" size="large">
                See the agenda
              </Button>
            </Stack>

            <Box sx={{ mt: 5 }}>
              <Countdown />
            </Box>
          </Box>

          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                bgcolor: brand.white,
                border: `2px solid ${brand.black}`,
                borderRadius: 8,
                overflow: 'hidden',
                boxShadow: `8px 8px 0 ${brand.black}`,
              }}
            >
              <Box
                component="img"
                src={asset('/brand/stickers.png')}
                alt="DevFest 2026 sticker glyphs"
                sx={{ width: '100%', display: 'block', aspectRatio: '16 / 9', objectFit: 'cover' }}
              />
              <Box sx={{ borderTop: `2px solid ${brand.black}`, p: { xs: 2, md: 2.5 }, display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Typography sx={{ fontWeight: 500 }}>Organized by {event.organizer}</Typography>
                <Stack direction="row" spacing={1}>
                  {event.hashtags.map((h) => (
                    <Pill key={h} size="sm">
                      {h}
                    </Pill>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
