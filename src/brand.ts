// DevFest 2026 brand palette (from the official DevFest 2026 Brand Guide)
export const brand = {
  blue: '#4285f4',
  green: '#34a853',
  yellow: '#f9ab00',
  red: '#ea4335',
  halftoneBlue: '#57caff',
  halftoneGreen: '#5cdb6d',
  halftoneYellow: '#ffd427',
  halftoneRed: '#ff7daf',
  pastelBlue: '#c3ecf6',
  pastelGreen: '#ccf6c5',
  pastelYellow: '#ffe7a5',
  pastelRed: '#f8d8d8',
  offWhite: '#f0f0f0',
  black: '#1e1e1e',
  white: '#ffffff',
} as const;

export const fontSans =
  '"Google Sans", "Google Sans Text", "Product Sans", Roboto, "Helvetica Neue", Arial, sans-serif';
export const fontMono = '"Roboto Mono", "PT Mono", ui-monospace, monospace';

// Base path for static hosting under a sub-folder (GitHub Pages: /devfest-setif-2026).
// Empty in local dev. Set BASE_PATH at build time; next.config.mjs exposes it here.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const asset = (path: string) => `${basePath}${path}`;
