'use client';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddRounded from '@mui/icons-material/AddRounded';
import { brand } from '@/brand';
import { faqs } from '@/data/event';
import { Section, SectionHeader } from './ui';

export default function Faq() {
  return (
    <Section id="faq">
      <SectionHeader eyebrow="faq" title="Questions" accent="red" />
      <Box sx={{ display: 'grid', gap: 1.5, maxWidth: 880 }}>
        {faqs.map((f) => (
          <Accordion
            key={f.q}
            disableGutters
            sx={{
              borderRadius: '24px !important',
              border: `2px solid ${brand.black}`,
              '&:before': { display: 'none' },
              '&.Mui-expanded': { bgcolor: brand.pastelYellow },
            }}
          >
            <AccordionSummary expandIcon={<AddRounded />} sx={{ px: 3, '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': { transform: 'rotate(45deg)' } }}>
              <Typography sx={{ fontWeight: 500, fontSize: '1.1rem' }}>{f.q}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 3, pb: 3 }}>
              <Typography>{f.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Section>
  );
}
