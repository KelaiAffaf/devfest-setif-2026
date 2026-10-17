import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { brand, fontMono } from '@/brand';
import { event } from '@/data/event';
import { Section, SectionHeader, Pill } from './ui';

const rooms = [
  { name: 'Main hall', use: 'Opening, keynote, talks, panel, closing', bg: brand.pastelBlue },
  { name: 'Room 1', use: 'Builder track workshops', bg: brand.pastelGreen },
  { name: 'Room 2', use: 'Developer track workshops', bg: brand.pastelYellow },
  { name: 'Hackathon room', use: 'Agentathon, demos and judging', bg: brand.pastelRed },
];

export default function Venue() {
  return (
    <Section id="venue" bg={brand.white} sx={{ borderTop: `2px solid ${brand.black}`, borderBottom: `2px solid ${brand.black}` }}>
      <SectionHeader eyebrow="venue" title={event.venue} accent="blue" intro={`${event.city}. Volunteers welcome you from 08:00.`} />
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, alignItems: 'stretch' }}>
        <Box
          sx={{
            border: `2px solid ${brand.black}`,
            borderRadius: 6,
            p: { xs: 3, md: 4 },
            bgcolor: brand.offWhite,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Box>
            <Pill size="lg" bg={brand.white}>
              {event.venue}
            </Pill>
            <Typography sx={{ mt: 3, fontFamily: fontMono }}>
              {event.date}
              <br />
              {event.hours}
            </Typography>
          </Box>
          <Button variant="contained" color="secondary" href={event.mapsUrl} target="_blank" rel="noopener" sx={{ alignSelf: 'flex-start' }}>
            Open in Google Maps
          </Button>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {rooms.map((r) => (
            <Box key={r.name} sx={{ border: `2px solid ${brand.black}`, borderRadius: 6, p: 2.5, bgcolor: r.bg }}>
              <Typography sx={{ fontWeight: 500, fontSize: '1.2rem' }}>{r.name}</Typography>
              <Typography sx={{ mt: 0.5, fontSize: '0.95rem' }}>{r.use}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  );
}
