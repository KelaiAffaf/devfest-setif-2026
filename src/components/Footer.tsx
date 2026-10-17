import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { brand, fontMono, asset } from '@/brand';
import { event, links } from '@/data/event';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: brand.black, color: brand.offWhite, py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: 4,
            alignItems: { md: 'flex-end' },
          }}
        >
          <Box>
            <Box
              component="img"
              src={asset('/brand/logo-2026.png')}
              alt="DevFest 2026"
              sx={{ width: { xs: 260, md: 380 }, display: 'block', bgcolor: brand.offWhite, borderRadius: 999, px: 3, py: 1.5, boxSizing: 'content-box' }}
            />
            <Typography sx={{ mt: 3, fontWeight: 500, fontSize: '1.2rem' }}>
              {event.name} · {event.shortDate} · {event.venue}
            </Typography>
            <Typography sx={{ mt: 0.5, color: '#bdbdbd' }}>Organized by {event.organizer}, a Google Developer Group.</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, '& a': { color: brand.offWhite } }}>
            <Link href={links.chapter} target="_blank" rel="noopener">
              GDG Setif on the community platform
            </Link>
            <Link href={links.codeOfConduct} target="_blank" rel="noopener">
              Code of conduct
            </Link>
            <Typography sx={{ fontFamily: fontMono, fontSize: '0.85rem', color: '#9e9e9e', mt: 1 }}>{event.hashtags.join(' ')}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, mt: 6 }} aria-hidden>
          {[brand.blue, brand.red, brand.yellow, brand.green].map((c) => (
            <Box key={c} sx={{ flex: 1, height: 8, borderRadius: 999, bgcolor: c }} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
