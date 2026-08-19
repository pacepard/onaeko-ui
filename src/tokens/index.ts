/**
 * Design token references for documentation and typed access.
 * Runtime theming uses CSS variables in `src/styles/globals.css`.
 */

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
} as const;

export const spacing = {
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

export const radii = {
    sm: '4px',
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

export const typography = {
    fontSans: 'var(--font-sans)',
    fontMono: 'var(--font-mono)',
    sizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
    },
} as const;

export const tokens = {
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
