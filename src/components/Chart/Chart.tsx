/**
 * Recharts chart surface for @onaeko/ui.
 *
 * Sources (do not invent APIs):
 * - https://www.npmjs.com/package/recharts (v3.10.1 installed)
 * - https://recharts.github.io/en-US/storybook/
 * - Official examples: recharts@v3.10.1 www/src/docs/exampleComponents/*
 *
 * This module re-exports Recharts chart roots and common series/helpers.
 * It intentionally does not wrap charts in shadcn ChartContainer/ChartConfig.
 * Series colors: use `chartColors` / `--onaeko-chart-*` — not `--primary` alone.
 */
export {
    // Chart roots (from recharts package exports)
    AreaChart,
    BarChart,
    ComposedChart,
    FunnelChart,
    LineChart,
    PieChart,
    RadarChart,
    RadialBarChart,
    Sankey,
    ScatterChart,
    SunburstChart,
    Treemap,
    // Series / polar / cartesian building blocks used by official examples
    Area,
    Bar,
    Brush,
    CartesianGrid,
    Cell,
    Funnel,
    LabelList,
    Layer,
    Legend,
    Line,
    Pie,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadialBar,
    Rectangle,
    ReferenceArea,
    ReferenceDot,
    ReferenceLine,
    ResponsiveContainer,
    Scatter,
    Tooltip,
    XAxis,
    YAxis,
    ZAxis,
    useChartWidth,
} from 'recharts';

export type { SankeyData, SankeyLinkProps, SankeyNodeProps, SankeyProps, SunburstData } from 'recharts';
