'use client';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { brand, fontMono } from '@/brand';
import { event } from '@/data/event';

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

const cells: { key: keyof ReturnType<typeof diff>; label: string; bg: string }[] = [
  { key: 'days', label: 'days', bg: brand.pastelBlue },
  { key: 'hours', label: 'hours', bg: brand.pastelGreen },
  { key: 'minutes', label: 'min', bg: brand.pastelYellow },
  { key: 'seconds', label: 'sec', bg: brand.pastelRed },
];

export default function Countdown() {
  const target = new Date(event.startsAt).getTime();
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <Box sx={{ display: 'flex', gap: { xs: 1, sm: 1.5 } }} role="timer" aria-label="Time until DevFest Setif 2026">
      {cells.map((c) => (
        <Box
          key={c.key}
          sx={{
            bgcolor: c.bg,
            border: `2px solid ${brand.black}`,
            borderRadius: 4,
            px: { xs: 1.25, sm: 2 },
            py: 1,
            minWidth: { xs: 64, sm: 84 },
            textAlign: 'center',
          }}
        >
          <Typography sx={{ fontFamily: fontMono, fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 500, lineHeight: 1.1 }}>
            {t ? String(t[c.key]).padStart(2, '0') : '--'}
          </Typography>
          <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>{c.label}</Typography>
        </Box>
      ))}
    </Box>
  );
}
