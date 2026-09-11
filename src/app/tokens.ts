// Sydney Opera House — дизайн-токены
// Извлечены из soh-css-delta1.css (Drupal theme)

// ── Breakpoints ──────────────────────────────────────────────
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const;

// ── Colors ───────────────────────────────────────────────────
export const colors = {
  // Brand / interactive
  primary: '#ffaa18',
  primaryHover: '#ffd464',
  black: '#000',
  white: '#fff',

  // Backgrounds
  page: '#eceae6',
  header: '#fff',
  footer: '#eceae6',
  row: '#f4f4f4',
  card: '#fff',
  cardHover: '#e9e6e6',
  heroOverlay: 'rgba(0,0,0,0.8)',
  heroOverlayDeep: 'rgba(0,0,0,0.9)',
  findMoreHover: 'rgba(0,0,0,0.1)',
  platinum: "#d4d3cf",

  // Text
  text: '#000',
  textLowlight: '#5e5e5c',
  textOnBlack: '#fff',

  // Borders / dividers
  border: '#deddda',
  borderDefault: '#c6c6c6',
  borderLight: '#e9e6e6',
  silver: '#c6c6c6',
  gray: '#5e5e5e',
  mediumGray: '#757575',
  lightGray: '#d6d6d6',
  veryLightGray: '#e9e6e6',

  // Tag / category
  tagBg: '#f6f5f3',
  tagText: '#000',
  alertWarning: '#ffe2af',

  // Accessibility
  focus: '#007fff',
  focusBorder: '#aadbff',

  // Links
  linkVisited: '#784f9f',
  forestGreenw: "#466848",
  babyBlue: "#C5E7FF",
  vibrantCoral: "#FF8366",
  sageGreen: "#DAE9D3",
  eggplant: "#3D1D53",
  fuchsia: "#FF76EC",
  deepRose: "#DC6281",
  amber: "#FFAA18",
  mahogany: "#742C0B",
  palePink: "#FFAEC0",
  palePeriwinkle: "#B9C0DE",
  deepDerry: "#852146",
  lightMustard: "#FFD464",
  palePeach: "#FFBB94"
} as const;

// ── Typography ───────────────────────────────────────────────
export const fontFamily = {
  primary: '"LL Circular Pro", "Inter", system-ui, -apple-system, sans-serif',
  mono: 'monospace',
} as const;

export const fontWeight = {
  book: 400,
  bold: 700,
  black: 900,
} as const;

// ── Spacing ──────────────────────────────────────────────────
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

// ── Border radius ────────────────────────────────────────────
export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
} as const;

// ── Z-index ──────────────────────────────────────────────────
export const zIndex = {
  header: 100,
  mobileMenu: 110,
  overlay: 200,
  tooltip: 300,
} as const;
