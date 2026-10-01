# chart: Tech Spec

## Context

See [`PRODUCT.md`](./PRODUCT.md).

---

## Implementation map

| Concern | Path |
| ------- | ---- |
| Re-exports | [`src/components/Chart/Chart.tsx`](../../../src/components/Chart/Chart.tsx) |
| Series colors | [`src/components/Chart/chartColors.ts`](../../../src/components/Chart/chartColors.ts) — CSS vars; hex in `src/tokens` |
| Stories (core) | [`src/components/Chart/Chart.stories.tsx`](../../../src/components/Chart/Chart.stories.tsx) |
| Tests | [`src/components/Chart/Chart.test.tsx`](../../../src/components/Chart/Chart.test.tsx) |
| Package aliases | [`src/index.ts`](../../../src/index.ts) — `ChartTooltip`, `ChartLegend`, `chartColors` |

Series must use `--onaeko-chart-*` / `chartColors`, not `--primary` alone, so CTA rebrands do not collapse multi-series palettes.

---

## Public API notes

```ts
/** Prefer these at the package root to avoid clashing with UI Tooltip. */
export { Tooltip as ChartTooltip, Legend as ChartLegend } from './components/Chart';
```

Peer: `react-is` (optional in `peerDependenciesMeta`; required when charts are used).

---

## Tests

| Case | Assert |
| ---- | ------ |
| Smoke | Import/render where jsdom allows |
| Story / e2e | SimpleLineChart renders SVG or chart surface |

---

## Verification commands

```bash
pnpm test -- src/components/Chart
pnpm check
```

Storybook: `Components/Chart`.
