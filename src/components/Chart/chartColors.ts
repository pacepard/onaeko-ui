/**
 * Dedicated chart series colors (CSS var refs for SVG stroke/fill).
 * Prefer these over `--primary` so CTA rebrands do not collapse multi-series palettes.
 * Hex source of truth: `src/tokens` `chartColorsHex` / `globals.css` `--onaeko-chart-*`.
 */
export const chartColors = {
    1: 'var(--onaeko-chart-1)',
    2: 'var(--onaeko-chart-2)',
    3: 'var(--onaeko-chart-3)',
    4: 'var(--onaeko-chart-4)',
    5: 'var(--onaeko-chart-5)',
    grid: 'var(--onaeko-chart-grid)',
} as const;

/** Ordered series ramp for pies, funnels, and categorical fills. */
export const chartSeries = [chartColors[1], chartColors[2], chartColors[3], chartColors[4], chartColors[5]] as const;

export type ChartColorToken = keyof typeof chartColors;
