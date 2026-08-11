# Chart

## Goal

Re-export Recharts primitives from `@onaeko/ui`. Prefer `ChartTooltip` / `ChartLegend` at the package root to avoid clashing with UI Tooltip.

## Scope

- Curated Storybook demos from official Recharts examples (not the full catalog)
- Peer: `react-is` (optional peer; required when using charts)

## Verification

- Unit: smoke import/render where applicable
- Storybook: SimpleLineChart and related examples
- e2e: SimpleLineChart renders SVG/surface
