'use client';

import { createTheme } from '@mui/material/styles';

import { brand, fontSans, fontMono } from './brand';

export { brand, fontSans, fontMono } from './brand';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: brand.blue, contrastText: brand.white },
    secondary: { main: brand.black, contrastText: brand.offWhite },
    success: { main: brand.green },
    warning: { main: brand.yellow },
    error: { main: brand.red },
    background: { default: brand.offWhite, paper: brand.white },
    text: { primary: brand.black, secondary: '#4a4a4a' },
    divider: brand.black,
  },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: fontSans,
    h1: { fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.05 },
    h2: { fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1 },
    h3: { fontWeight: 500, letterSpacing: '-0.01em' },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    button: { textTransform: 'none', fontWeight: 500, fontSize: '1rem' },
    overline: { fontFamily: fontMono, letterSpacing: '0.08em', fontSize: '0.8rem' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: brand.offWhite },
        '::selection': { background: brand.halftoneYellow },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: '10px 24px',
          border: `2px solid ${brand.black}`,
        },
        contained: {
          '&:hover': { boxShadow: `4px 4px 0 ${brand.black}`, transform: 'translate(-2px,-2px)' },
          transition: 'transform .15s ease, box-shadow .15s ease',
        },
        outlined: {
          borderWidth: 2,
          color: brand.black,
          '&:hover': { borderWidth: 2, background: brand.pastelYellow },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          border: `2px solid ${brand.black}`,
          fontWeight: 500,
          height: 36,
          fontSize: '0.95rem',
        },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { border: `2px solid ${brand.black}` },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '1rem',
          borderRadius: 999,
          minHeight: 44,
          border: `2px solid ${brand.black}`,
          marginRight: 8,
          color: brand.black,
          '&.Mui-selected': { background: brand.black, color: brand.offWhite },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: { display: 'none' },
      },
    },
  },
});

export default theme;
