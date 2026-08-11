# chart-catalog: Recharts Storybook coverage

## Summary

Expand Storybook coverage toward the **official Recharts example catalog** (`recharts` `www/src/docs/exampleComponents` / `allExamples`) without inventing non-Recharts APIs.

## Problem

A tiny chart story set under-represents what Recharts can do. Engineers need discoverable examples that map to upstream demos, with clear omissions called out.

## Non-goals

- `@recharts/devtools`
- Cardinal area curves that need extra `d3-shape` wiring beyond our deps
- Custom-animation / controls-playground examples
- Bundle-size sunburst/treemap demos that depend on generated size datasets

## Consumer

- Design-system contributors and app engineers browsing Storybook.
- Depends on [`chart`](../chart/PRODUCT.md) re-export surface.

---

## Storybook groups

| Group | Stories |
| ----- | ------- |
| `Components/Chart` | Core set (line/area/bar/composed/pie/radar/radial/scatter/treemap/sunburst/funnel/sankey) |
| `Components/Chart/Catalog` | Biaxial/vertical/connect-nulls line; tiny/percent/connect-nulls area; tiny/mix/± bar; composed variants; 3D scatter; domain radar; legend opacity; responsive container; multi X-axis |

---

## Use cases

| ID | Actor | Trigger | Expected |
| -- | ----- | ------- | -------- |
| **UC-CC01** | Engineer | Open Catalog stories | Examples render without throw |
| **UC-CC02** | Contributor | Compare to Recharts `allExamples` | Omissions match PRODUCT non-goals |

---

## Open questions

None blocking — omissions above are intentional.

## Related docs

- [`TECH.md`](./TECH.md)
- [`chart/PRODUCT.md`](../chart/PRODUCT.md)
