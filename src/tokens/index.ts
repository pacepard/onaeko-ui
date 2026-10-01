/**
 * Design token references for documentation and typed access.
 * Runtime theming uses CSS variables in `src/styles/globals.css`.
 * Authoritative: `DESIGN.md` (Onaeko Analysis).
 */

/** Hex palette aligned with DESIGN.md + logo sampling. */
export const palette = {
    orange: {
        400: '#ff8a4c',
        500: '#f36827',
        600: '#c44e1a',
        800: '#793400',
    },
    green: {
        500: '#2e503f',
        600: '#243f32',
        700: '#1f3a2d',
    },
    grey: {
        50: '#f6f5f4',
        100: '#f0efed',
        200: '#e6e6e6',
        300: '#dddddd',
        400: '#a39e98',
        500: '#615d59',
        600: '#31302e',
        900: '#000000',
    },
    accent: {
        sky: '#62aef0',
        purple: '#d6b6f6',
        purpleDeep: '#391c57',
        pink: '#ff64c8',
        orange: '#f36827',
        orangeDeep: '#793400',
        teal: '#2a9d99',
        green: '#2e503f',
        brown: '#523410',
    },
} as const;

/** DESIGN.md `colors:` front-matter as hex (documentation / non-CSS consumers). */
export const designColors = {
    primary: '#f36827',
    primaryActive: '#c44e1a',
    /** Forest green wordmark — hero / inverted band only, not CTA fill. */
    secondary: '#2e503f',
    onPrimary: '#ffffff',
    canvas: '#ffffff',
    canvasSoft: '#f6f5f4',
    surface: '#ffffff',
    ink: '#000000',
    inkSecondary: '#31302e',
    inkMuted: '#615d59',
    inkFaint: '#a39e98',
    hairline: '#e6e6e6',
    accentSky: '#62aef0',
    accentPurple: '#d6b6f6',
    accentPurpleDeep: '#391c57',
    accentPink: '#ff64c8',
    accentOrange: '#f36827',
    accentOrangeDeep: '#793400',
    accentTeal: '#2a9d99',
    accentGreen: '#2e503f',
    accentBrown: '#523410',
} as const;

export const colors = {
    background: 'var(--onaeko-background)',
    foreground: 'var(--onaeko-foreground)',
    primary: 'var(--onaeko-primary)',
    primaryForeground: 'var(--onaeko-primary-foreground)',
    primaryActive: 'var(--onaeko-primary-active)',
    secondary: 'var(--onaeko-secondary)',
    secondaryForeground: 'var(--onaeko-secondary-foreground)',
    muted: 'var(--onaeko-muted)',
    mutedForeground: 'var(--onaeko-muted-foreground)',
    accent: 'var(--onaeko-accent)',
    accentForeground: 'var(--onaeko-accent-foreground)',
    destructive: 'var(--onaeko-destructive)',
    border: 'var(--onaeko-border)',
    input: 'var(--onaeko-input)',
    ring: 'var(--onaeko-ring)',
    success: 'var(--onaeko-success)',
    hero: 'var(--onaeko-hero)',
    placeholder: 'var(--onaeko-placeholder)',
    chart1: 'var(--onaeko-chart-1)',
    chart2: 'var(--onaeko-chart-2)',
    chart3: 'var(--onaeko-chart-3)',
    chart4: 'var(--onaeko-chart-4)',
    chart5: 'var(--onaeko-chart-5)',
    chartGrid: 'var(--onaeko-chart-grid)',
} as const;

/**
 * Chart series hex (light). Not the same as `--primary` — orange is one series slot only.
 * Dark overrides live in `.dark` in globals.css.
 */
export const chartColorsHex = {
    chart1: '#62aef0',
    chart2: '#2a9d99',
    chart3: '#8b6cc9',
    chart4: '#f36827',
    chart5: '#615d59',
    chartGrid: '#e6e6e6',
} as const;

/** Ordered light hex ramp for docs / canvas / non-CSS consumers. */
export const chartSeriesHex = [
    chartColorsHex.chart1,
    chartColorsHex.chart2,
    chartColorsHex.chart3,
    chartColorsHex.chart4,
    chartColorsHex.chart5,
] as const;

/** Semantic hex roles (DESIGN.md + light-first product UI). */
export const semanticHex = {
    light: {
        background: '#f6f5f4',
        foreground: '#000000',
        muted: '#f6f5f4',
        mutedForeground: '#615d59',
        placeholder: '#a39e98',
        card: '#ffffff',
        cardForeground: '#000000',
        border: '#e6e6e6',
        primary: '#f36827',
        primaryForeground: '#ffffff',
        primaryActive: '#c44e1a',
        hero: '#2e503f',
        destructive: '#c62828',
        destructiveForeground: '#ffffff',
        success: '#2a9d99',
        input: '#dddddd',
    },
    dark: {
        background: '#1a1918',
        foreground: '#f7f6f5',
        muted: '#2c2b29',
        mutedForeground: '#a39e98',
        placeholder: '#615d59',
        card: '#232220',
        cardForeground: '#f7f6f5',
        border: 'rgb(255 255 255 / 0.1)',
        primary: '#ff8a4c',
        primaryForeground: '#1a1918',
        primaryActive: '#f36827',
        hero: '#2e503f',
        destructive: '#ef5350',
        destructiveForeground: '#ffffff',
        success: '#4db6ac',
        input: 'rgb(255 255 255 / 0.14)',
    },
} as const;

/** DESIGN.md spacing front-matter + rem scale. */
export const spacing = {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '28px',
    xxl: '32px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
} as const;

/** DESIGN.md rounded scale — marketing CTAs use full; fields use xs/sm. */
export const radii = {
    xs: '4px',
    sm: '5px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
} as const;

export const shadows = {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: 'var(--onaeko-shadow-soft)',
    md: 'var(--onaeko-shadow-soft)',
    lg: 'rgba(0,0,0,0.05) 0 23px 52px',
} as const;

export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
} as const;

export const motion = {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const zIndex = {
    dropdown: 50,
    sticky: 40,
    overlay: 50,
    modal: 50,
    popover: 50,
    toast: 100,
    tooltip: 60,
} as const;

/** Inter / NotionInter type roles from DESIGN.md typography front-matter. */
export const typography = {
    fontSans: 'var(--font-sans)',
    fontMono: 'var(--font-mono)',
    family: 'Inter',
    weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
    sizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
    },
    roles: {
        display1: { fontSize: '64px', fontWeight: 700, lineHeight: 1, letterSpacing: '-2.125px' },
        display2: { fontSize: '54px', fontWeight: 700, lineHeight: 1.04, letterSpacing: '-1.875px' },
        heading1: { fontSize: '40px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-1px' },
        heading2: { fontSize: '26px', fontWeight: 700, lineHeight: 1.23, letterSpacing: '-0.625px' },
        heading3: { fontSize: '22px', fontWeight: 700, lineHeight: 1.27, letterSpacing: '-0.25px' },
        title: { fontSize: '20px', fontWeight: 600, lineHeight: 1.4, letterSpacing: '-0.125px' },
        bodyMd: { fontSize: '16px', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0' },
        bodySm: { fontSize: '15px', fontWeight: 400, lineHeight: 1.33, letterSpacing: '0' },
        button: { fontSize: '16px', fontWeight: 500, lineHeight: 1.5, letterSpacing: '0' },
        caption: { fontSize: '14px', fontWeight: 400, lineHeight: 1.43, letterSpacing: '0' },
        eyebrow: { fontSize: '12px', fontWeight: 600, lineHeight: 1.33, letterSpacing: '0.125px' },
    },
} as const;

export const tokens = {
    palette,
    designColors,
    semanticHex,
    chartColorsHex,
    chartSeriesHex,
    colors,
    spacing,
    radii,
    shadows,
    breakpoints,
    motion,
    zIndex,
    typography,
} as const;

export type OnaekoTokens = typeof tokens;
