# Chart catalog coverage

Official registry: `recharts@v3.10.1` `www/src/docs/exampleComponents` (`allExamples`).

## Storybook

| Group | Stories |
| --- | --- |
| `Components/Chart` | Core set (line/area/bar/composed/pie/radar/radial/scatter/treemap/sunburst/funnel/sankey) |
| `Components/Chart/Catalog` | Biaxial/vertical/connect-nulls line, tiny/percent/connect-nulls area, tiny/mix/± bar, composed variants, 3D scatter, domain radar, legend opacity, responsive container, multi X-axis |

## Intentionally omitted

- `@recharts/devtools`
- Cardinal area (`d3-shape` curveCardinal)
- Custom-animation / controls-playground examples
- Bundle-size sunburst/treemap demos that depend on generated size data

Re-export surface remains in `src/components/Chart/Chart.tsx`. Prefer `ChartTooltip` / `ChartLegend` from `@onaeko/ui` in apps.
