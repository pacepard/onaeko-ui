# chart: Recharts surface in `@onaeko/ui`

## Summary

Re-export **Recharts** primitives from `@onaeko/ui` so apps share one chart entrypoint, with **`ChartTooltip` / `ChartLegend`** aliases at the package root to avoid clashing with UI Tooltip.

## Problem

Apps that import Recharts ad hoc diverge on versions and collide on `Tooltip` / `Legend` names with Onaeko UI primitives. The design system should own a curated, documented chart surface.

## Non-goals

- Inventing Onaeko-only chart wrappers that replace Recharts APIs.
- Shipping `@recharts/devtools` or animation playgrounds.
- Bundling Zod or app-specific dashboard layouts.

## Consumer

- Product engineers building analytics / learning dashboards.
- Optional peer: `react-is` (required when using Recharts).

---

## Scope

| In | Out |
| -- | --- |
| Re-export Recharts primitives used by Storybook demos | Full Recharts internal catalog (see chart-catalog) |
| Root aliases `ChartTooltip`, `ChartLegend` | Competing Tooltip naming at app import sites |

---

## Use cases

| ID | Actor | Trigger | Expected |
| -- | ----- | ------- | -------- |
| **UC-C01** | Engineer | `import { LineChart, ChartTooltip } from '@onaeko/ui'` | Resolves without Tooltip clash |
| **UC-C02** | Engineer | Render SimpleLineChart story | SVG / surface paints |

---

## Open questions

None for the curated core set. Catalog expansion is [`chart-catalog`](../chart-catalog/PRODUCT.md).

## Related docs

- [`TECH.md`](./TECH.md)
- [`chart-catalog/PRODUCT.md`](../chart-catalog/PRODUCT.md)
- `docs/ui` Chart / installation peers
