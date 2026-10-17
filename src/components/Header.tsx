'use client';

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import MenuRounded from '@mui/icons-material/MenuRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { brand, asset } from '@/brand';

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Hackathon', href: '#hackathon' },
  { label: 'Venue', href: '#venue' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(240,240,240,0.88)',
        backdropFilter: 'blur(10px)',
        color: brand.black,
        border: 'none',
        borderBottom: `2px solid ${brand.black}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, gap: 2 }}>
          <Box component="a" href="#top" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}>
            <Box component="img" src={asset('/brand/logo-braces.png')} alt="DevFest" sx={{ height: { xs: 28, md: 34 } }} />
            <Box
              component="span"
              sx={{
                border: `2px solid ${brand.black}`,
                borderRadius: 999,
                px: 1.5,
                py: 0.25,
                fontWeight: 500,
                color: brand.black,
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}
            >
              Setif
            </Box>
          </Box>
          <Box sx={{ flex: 1 }} />
          <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {nav.map((n) => (
              <Button key={n.href} href={n.href} sx={{ border: 'none', color: brand.black, px: 1.75, '&:hover': { bgcolor: brand.pastelYellow } }}>
                {n.label}
              </Button>
            ))}
          </Box>
          <Button
            href="#registration-form"
            variant="contained"
            color="secondary"
            sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
          >
            Register
          </Button>
          <IconButton
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            sx={{ display: { md: 'none' }, border: `2px solid ${brand.black}` }}
          >
            <MenuRounded />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { width: 280, bgcolor: brand.offWhite, border: 'none', borderLeft: `2px solid ${brand.black}` } } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1.5 }}>
          <IconButton aria-label="Close menu" onClick={() => setOpen(false)} sx={{ border: `2px solid ${brand.black}` }}>
            <CloseRounded />
          </IconButton>
        </Box>
        <List>
          {[...nav, { label: 'Register', href: '#registration-form' }].map((n) => (
            <ListItemButton key={n.href} component="a" href={n.href} onClick={() => setOpen(false)}>
              <ListItemText primary={n.label} slotProps={{ primary: { sx: { fontSize: '1.2rem', fontWeight: 500 } } }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
