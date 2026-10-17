import Box, { BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { brand, fontMono } from '@/brand';
import type { Accent } from '@/data/event';

export const accentCore: Record<Accent, string> = {
  blue: brand.blue,
  green: brand.green,
  yellow: brand.yellow,
  red: brand.red,
};

export const accentPastel: Record<Accent, string> = {
  blue: brand.pastelBlue,
  green: brand.pastelGreen,
  yellow: brand.pastelYellow,
  red: brand.pastelRed,
};

export const accentHalftone: Record<Accent, string> = {
  blue: brand.halftoneBlue,
  green: brand.halftoneGreen,
  yellow: brand.halftoneYellow,
  red: brand.halftoneRed,
};

/** Outlined pill, the core shape of the DevFest 2026 lockups. */
export function Pill({
  children,
  bg = 'transparent',
  color = brand.black,
  size = 'md',
  sx,
}: {
  children: React.ReactNode;
  bg?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  sx?: BoxProps['sx'];
}) {
  const sizes = {
    sm: { px: 1.5, py: 0.25, fontSize: '0.85rem', border: 1.5 },
    md: { px: 2, py: 0.5, fontSize: '1rem', border: 2 },
    lg: { px: 3, py: 0.75, fontSize: { xs: '1.25rem', md: '1.6rem' }, border: 2.5 },
    xl: { px: { xs: 3, md: 5 }, py: { xs: 0.5, md: 1 }, fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3.2rem' }, border: 3 },
  }[size];
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        borderRadius: 999,
        border: `${sizes.border}px solid ${brand.black}`,
        bgcolor: bg,
        color,
        px: sizes.px,
        py: sizes.py,
        fontSize: sizes.fontSize,
        fontWeight: 500,
        lineHeight: 1.3,
        whiteSpace: 'nowrap',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export function Section({
  id,
  children,
  bg,
  sx,
}: {
  id?: string;
  children: React.ReactNode;
  bg?: string;
  sx?: BoxProps['sx'];
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{ py: { xs: 8, md: 12 }, bgcolor: bg, scrollMarginTop: 72, position: 'relative', overflow: 'hidden', ...sx }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        {children}
      </Container>
    </Box>
  );
}

/** Section heading in the "{ Title }" brace style of the DevFest wordmark. */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  accent = 'yellow',
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  accent?: Accent;
  light?: boolean;
}) {
  const fg = light ? brand.offWhite : brand.black;
  return (
    <Box sx={{ mb: { xs: 5, md: 7 }, maxWidth: 820 }}>
      {eyebrow && (
        <Typography
          variant="overline"
          component="p"
          sx={{ fontFamily: fontMono, color: light ? brand.halftoneYellow : accentCore[accent], mb: 1, fontWeight: 500 }}
        >
          {`// ${eyebrow}`}
        </Typography>
      )}
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: '2.25rem', md: '3.5rem' }, color: fg, display: 'flex', alignItems: 'baseline', gap: 1.5, flexWrap: 'wrap' }}
      >
        <Box component="span" sx={{ color: accentCore[accent], fontWeight: 400 }}>
          {'{'}
        </Box>
        {title}
        <Box component="span" sx={{ color: accentCore[accent], fontWeight: 400 }}>
          {'}'}
        </Box>
      </Typography>
      {intro && (
        <Typography sx={{ mt: 2, fontSize: { xs: '1.05rem', md: '1.2rem' }, color: light ? '#cfcfcf' : 'text.secondary', maxWidth: 720 }}>
          {intro}
        </Typography>
      )}
    </Box>
  );
}

export function Glyph({ name, sx, alt = '' }: { name: string; sx?: BoxProps['sx']; alt?: string }) {
  return (
    <Box
      component="img"
      src={`/brand/glyph-${name}.png`}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      sx={{ position: 'absolute', pointerEvents: 'none', userSelect: 'none', ...sx }}
    />
  );
}
