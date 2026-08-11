# chart-catalog: Tech Spec

## Context

See [`PRODUCT.md`](./PRODUCT.md). Official registry reference: `recharts` docs example components (`allExamples`).

---

## Implementation map

| Concern | Path |
| ------- | ---- |
| Catalog stories | [`src/components/Chart/Chart.catalog.stories.tsx`](../../../src/components/Chart/Chart.catalog.stories.tsx) |
| Core stories | [`src/components/Chart/Chart.stories.tsx`](../../../src/components/Chart/Chart.stories.tsx) |
| Re-export surface | [`src/components/Chart/Chart.tsx`](../../../src/components/Chart/Chart.tsx) |

---

## Rules

1. Copy / adapt **official** Recharts examples — do not invent chart APIs.
2. Prefer `ChartTooltip` / `ChartLegend` from `@onaeko/ui` in demos and docs.
3. Keep Sidebar alphabetical Storybook sort; catalog titles under `Components/Chart/Catalog`.

---

## Verification commands

```bash
pnpm storybook   # Components/Chart/Catalog
pnpm build-storybook
```

No dedicated unit suite required beyond chart smoke tests unless a catalog story introduces new helpers.
