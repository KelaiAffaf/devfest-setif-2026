'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { brand, fontMono } from '@/brand';
import { agendaOverview, trackA, trackB, type AgendaItem } from '@/data/event';
import { Section, SectionHeader, Glyph } from './ui';

function Timeline({ items, accent }: { items: AgendaItem[]; accent: string }) {
  return (
    <Box component="ol" sx={{ listStyle: 'none', p: 0, m: 0, display: 'grid', gap: 1.25 }}>
      {items.map((it, i) => (
        <Box
          component="li"
          key={`${it.time}-${i}`}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '72px 1fr', sm: '110px 1fr' },
            alignItems: 'stretch',
            border: `2px solid ${brand.black}`,
            borderRadius: 5,
            overflow: 'hidden',
            bgcolor: it.allHands ? brand.pastelYellow : brand.white,
          }}
        >
          <Box
            sx={{
              fontFamily: fontMono,
              fontWeight: 500,
              fontSize: { xs: '0.95rem', sm: '1.1rem' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRight: `2px solid ${brand.black}`,
              bgcolor: it.allHands ? brand.yellow : accent,
            }}
          >
            {it.time}
          </Box>
          <Box sx={{ p: { xs: 1.5, sm: 2 } }}>
            <Typography sx={{ fontWeight: 500, fontSize: { xs: '1rem', sm: '1.15rem' } }}>{it.title}</Typography>
            {it.detail && <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem' }}>{it.detail}</Typography>}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

function Overview() {
  return (
    <Box sx={{ overflowX: 'auto', border: `2px solid ${brand.black}`, borderRadius: 5, bgcolor: brand.white }}>
      <Box component="table" sx={{ width: '100%', minWidth: 640, borderCollapse: 'collapse', '& td, & th': { p: 2, textAlign: 'left', verticalAlign: 'top' } }}>
        <Box component="thead">
          <Box component="tr" sx={{ bgcolor: brand.black, color: brand.offWhite }}>
            <Box component="th" sx={{ width: 150, fontFamily: fontMono, fontWeight: 500 }}>Time</Box>
            <Box component="th" sx={{ fontWeight: 500 }}>Track A: Talks and Workshops</Box>
            <Box component="th" sx={{ fontWeight: 500 }}>Track B: Hackathon</Box>
          </Box>
        </Box>
        <Box component="tbody">
          {agendaOverview.map((row) => (
            <Box
              component="tr"
              key={row.time}
              sx={{ borderTop: `2px solid ${brand.black}`, bgcolor: row.allHands ? brand.pastelYellow : 'transparent' }}
            >
              <Box component="td" sx={{ fontFamily: fontMono, fontWeight: 500, whiteSpace: 'nowrap' }}>
                {row.time}
              </Box>
              {row.allHands ? (
                <Box component="td" colSpan={2} sx={{ fontWeight: 500 }}>
                  {row.trackA} · all participants
                </Box>
              ) : (
                <>
                  <Box component="td">{row.trackA}</Box>
                  <Box component="td" sx={{ borderLeft: `2px dashed ${brand.black}` }}>
                    {row.trackB}
                  </Box>
                </>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default function Agenda() {
  const [tab, setTab] = useState(0);
  return (
    <Section id="agenda">
      <Glyph name="code" sx={{ width: 160, top: 0, right: 24, display: { xs: 'none', md: 'block' } }} />
      <SectionHeader
        eyebrow="agenda"
        title="Agenda"
        accent="green"
        intro="Saturday, November 21. Doors open at 08:00. Yellow rows bring everyone together in the main hall. Session titles land as speakers confirm."
      />
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        variant="scrollable"
        allowScrollButtonsMobile
        aria-label="Agenda views"
        sx={{ mb: 3, minHeight: 0 }}
      >
        <Tab label="Overview" />
        <Tab label="Track A: Talks and Workshops" />
        <Tab label="Track B: Hackathon" />
      </Tabs>
      <Box role="tabpanel">
        {tab === 0 && <Overview />}
        {tab === 1 && <Timeline items={trackA} accent={brand.pastelBlue} />}
        {tab === 2 && <Timeline items={trackB} accent={brand.pastelGreen} />}
      </Box>
    </Section>
  );
}
