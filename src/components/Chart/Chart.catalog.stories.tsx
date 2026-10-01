/**
 * Expanded Recharts catalog coverage (recharts@v3.10.1 official
 * www/src/docs/exampleComponents/*). Complements Components/Chart.
 *
 * Omitted: RechartsDevtools, d3-shape-only Cardinal curves, and
 * playground/custom-animation lever demos. See specs/chart-catalog.md.
 *
 * Catalog: https://recharts.github.io/en-US/examples/
 */
import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    LineChart,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ReferenceLine,
    ResponsiveContainer,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis,
    ZAxis,
} from './Chart';

import { chartColors } from './chartColors';

const pageData = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const chartFrame = {
    width: '100%',
    maxWidth: '700px',
    maxHeight: '70vh',
    aspectRatio: 1.618,
} as const;

const meta = {
    title: 'Components/Chart/Catalog',
    parameters: {
        docs: {
            description: {
                component:
                    'Additional official Recharts examples toward full catalog coverage. Prefer ChartTooltip/ChartLegend from @onaeko/ui in apps.',
            },
        },
    },
} satisfies Meta;

export default meta;
type Story = StoryObj;

/** Source: LineChart/BiaxialLineChart.tsx */
export const BiaxialLineChart: Story = {
    name: 'Biaxial Line Chart',
    render: () => (
        <LineChart style={chartFrame} responsive data={pageData} margin={{ top: 15, right: 0, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" width="auto" />
            <YAxis yAxisId="right" orientation="right" width="auto" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="pv" stroke={chartColors[1]} activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="uv" stroke={chartColors[2]} />
        </LineChart>
    ),
};

/** Source: LineChart/VerticalLineChart.tsx */
export const VerticalLineChart: Story = {
    name: 'Vertical Line Chart',
    render: () => (
        <LineChart
            layout="vertical"
            style={{ width: '100%', maxWidth: '300px', maxHeight: '70vh', aspectRatio: 1 / 1.618 }}
            responsive
            data={pageData}
            margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width="auto" />
            <Tooltip />
            <Legend />
            <Line dataKey="pv" stroke={chartColors[1]} />
            <Line dataKey="uv" stroke={chartColors[2]} />
        </LineChart>
    ),
};

/** Source: LineChart/LineChartConnectNulls.tsx */
export const LineChartConnectNulls: Story = {
    name: 'Line Chart Connect Nulls',
    render: () => {
        const data = [
            { name: 'Page A', uv: 4000 },
            { name: 'Page B', uv: 3000 },
            { name: 'Page C', uv: 2000 },
            { name: 'Page D' },
            { name: 'Page E', uv: 1890 },
            { name: 'Page F', uv: 2390 },
            { name: 'Page G', uv: 3490 },
        ];
        const frame = {
            width: '100%',
            maxWidth: '700px',
            maxHeight: '30vh',
            aspectRatio: 1.618,
        } as const;
        return (
            <div style={{ width: '100%', display: 'grid', gap: 16 }}>
                <LineChart style={frame} responsive data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Line type="monotone" dataKey="uv" stroke={chartColors[1]} />
                </LineChart>
                <LineChart style={frame} responsive data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Line connectNulls type="monotone" dataKey="uv" stroke={chartColors[1]} />
                </LineChart>
            </div>
        );
    },
};

/** Source: AreaChart/TinyAreaChart.tsx */
export const TinyAreaChart: Story = {
    name: 'Tiny Area Chart',
    render: () => (
        <AreaChart
            style={{ width: '100%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618 }}
            responsive
            data={pageData}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
            <Area type="monotone" dataKey="uv" stroke={chartColors[1]} fill={chartColors[1]} />
        </AreaChart>
    ),
};

/** Source: AreaChart/PercentAreaChart.tsx (tooltip simplified) */
export const PercentAreaChart: Story = {
    name: 'Percent Area Chart',
    render: () => {
        const data = [
            { month: '2015.01', a: 4000, b: 2400, c: 2400 },
            { month: '2015.02', a: 3000, b: 1398, c: 2210 },
            { month: '2015.03', a: 2000, b: 9800, c: 2290 },
            { month: '2015.04', a: 2780, b: 3908, c: 2000 },
            { month: '2015.05', a: 1890, b: 4800, c: 2181 },
            { month: '2015.06', a: 2390, b: 3800, c: 2500 },
            { month: '2015.07', a: 3490, b: 4300, c: 2100 },
        ];
        return (
            <AreaChart
                style={chartFrame}
                responsive
                data={data}
                stackOffset="expand"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis width="auto" tickFormatter={(v) => `${(Number(v) * 100).toFixed(0)}%`} />
                <Tooltip />
                <Area type="monotone" dataKey="a" stackId="1" stroke={chartColors[1]} fill={chartColors[1]} />
                <Area type="monotone" dataKey="b" stackId="1" stroke={chartColors[2]} fill={chartColors[2]} />
                <Area type="monotone" dataKey="c" stackId="1" stroke={chartColors[4]} fill={chartColors[4]} />
            </AreaChart>
        );
    },
};

/** Source: AreaChart/AreaChartConnectNulls.tsx */
export const AreaChartConnectNulls: Story = {
    name: 'Area Chart Connect Nulls',
    render: () => {
        const data = [
            { name: 'Page A', uv: 4000 },
            { name: 'Page B', uv: 3000 },
            { name: 'Page C', uv: 2000 },
            { name: 'Page D' },
            { name: 'Page E', uv: 1890 },
            { name: 'Page F', uv: 2390 },
            { name: 'Page G', uv: 3490 },
        ];
        return (
            <AreaChart style={chartFrame} responsive data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Tooltip />
                <Area connectNulls type="monotone" dataKey="uv" stroke={chartColors[1]} fill={chartColors[1]} />
            </AreaChart>
        );
    },
};

/** Source: BarChart/TinyBarChart.tsx */
export const TinyBarChart: Story = {
    name: 'Tiny Bar Chart',
    render: () => (
        <BarChart
            style={{ width: '100%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618 }}
            responsive
            data={pageData}
        >
            <Bar dataKey="uv" fill={chartColors[1]} />
        </BarChart>
    ),
};

/** Source: BarChart/MixBarChart.tsx (stacked + grouped mix) */
export const MixBarChart: Story = {
    name: 'Mix Bar Chart',
    render: () => (
        <BarChart style={chartFrame} responsive data={pageData} margin={{ top: 20, right: 0, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill={chartColors[1]} />
            <Bar dataKey="amt" stackId="a" fill={chartColors[2]} />
            <Bar dataKey="uv" fill={chartColors[4]} />
        </BarChart>
    ),
};

/** Source: BarChart/PositiveAndNegativeBarChart.tsx */
export const PositiveAndNegativeBarChart: Story = {
    name: 'Positive And Negative Bar Chart',
    render: () => {
        const data = [
            { name: 'Page A', uv: 4000, pv: 2400 },
            { name: 'Page B', uv: -3000, pv: 1398 },
            { name: 'Page C', uv: -2000, pv: -9800 },
            { name: 'Page D', uv: 2780, pv: 3908 },
            { name: 'Page E', uv: -1890, pv: 4800 },
            { name: 'Page F', uv: 2390, pv: -3800 },
            { name: 'Page G', uv: 3490, pv: 4300 },
        ];
        return (
            <BarChart style={chartFrame} responsive data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="currentColor" />
                <Bar dataKey="pv" fill={chartColors[1]} />
                <Bar dataKey="uv" fill={chartColors[2]} />
            </BarChart>
        );
    },
};

/** Source: ComposedChart/SameDataComposedChart.tsx */
export const SameDataComposedChart: Story = {
    name: 'Same Data Composed Chart',
    render: () => {
        const data = [
            { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
            { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
            { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
            { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
            { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
            { name: 'Page F', uv: 1400, pv: 680, amt: 1700 },
        ];
        return (
            <ComposedChart style={chartFrame} responsive data={data} margin={{ top: 20, right: 0, bottom: 0, left: 0 }}>
                <CartesianGrid stroke={chartColors.grid} />
                <XAxis dataKey="name" scale="band" />
                <YAxis width="auto" />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" barSize={20} fill={chartColors[3]} />
                <Line type="monotone" dataKey="uv" stroke={chartColors[4]} />
            </ComposedChart>
        );
    },
};

/** Source: ComposedChart/VerticalComposedChart.tsx */
export const VerticalComposedChart: Story = {
    name: 'Vertical Composed Chart',
    render: () => {
        const data = [
            { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
            { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
            { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
            { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
            { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
            { name: 'Page F', uv: 1400, pv: 680, amt: 1700 },
        ];
        return (
            <ComposedChart
                layout="vertical"
                style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                <CartesianGrid stroke={chartColors.grid} />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" width="auto" />
                <Tooltip />
                <Legend />
                <Area dataKey="amt" fill={chartColors[1]} stroke={chartColors[1]} />
                <Bar dataKey="pv" barSize={20} fill={chartColors[3]} />
                <Line dataKey="uv" stroke={chartColors[4]} />
            </ComposedChart>
        );
    },
};

/** Source: ScatterChart/ThreeDimScatterChart.tsx */
export const ThreeDimScatterChart: Story = {
    name: 'Three Dim Scatter Chart',
    render: () => {
        const data01 = [
            { x: 100, y: 200, z: 200 },
            { x: 120, y: 100, z: 260 },
            { x: 170, y: 300, z: 400 },
            { x: 140, y: 250, z: 280 },
            { x: 150, y: 400, z: 500 },
            { x: 110, y: 280, z: 200 },
        ];
        const data02 = [
            { x: 200, y: 260, z: 240 },
            { x: 240, y: 290, z: 220 },
            { x: 190, y: 290, z: 250 },
            { x: 198, y: 250, z: 210 },
            { x: 180, y: 280, z: 260 },
            { x: 210, y: 220, z: 230 },
        ];
        return (
            <ScatterChart style={chartFrame} responsive margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                <YAxis type="number" dataKey="y" name="weight" unit="kg" width="auto" />
                <ZAxis type="number" dataKey="z" range={[60, 400]} name="score" unit="km" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="A school" data={data01} fill={chartColors[1]} shape="star" />
                <Scatter name="B school" data={data02} fill={chartColors[2]} shape="triangle" />
            </ScatterChart>
        );
    },
};

/** Source: RadarChart/SpecifiedDomainRadarChart.tsx */
export const SpecifiedDomainRadarChart: Story = {
    name: 'Specified Domain Radar Chart',
    render: () => {
        const data = [
            { subject: 'Math', A: 120, B: 110, fullMark: 150 },
            { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
            { subject: 'English', A: 86, B: 130, fullMark: 150 },
            { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
            { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
            { subject: 'History', A: 65, B: 85, fullMark: 150 },
        ];
        return (
            <RadarChart
                style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
                responsive
                outerRadius="80%"
                data={data}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Mike" dataKey="A" stroke={chartColors[1]} fill={chartColors[1]} fillOpacity={0.6} />
                <Radar name="Lily" dataKey="B" stroke={chartColors[2]} fill={chartColors[2]} fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        );
    },
};

/** Source: Legend/LegendEffectOpacity.tsx */
export const LegendEffectOpacity: Story = {
    name: 'Legend Effect Opacity',
    render: function LegendOpacityDemo() {
        const [hoveringDataKey, setHoveringDataKey] = React.useState<string | undefined>(undefined);
        const pvOpacity = hoveringDataKey === 'uv' ? 0.5 : 1;
        const uvOpacity = hoveringDataKey === 'pv' ? 0.5 : 1;

        return (
            <LineChart style={chartFrame} responsive data={pageData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Tooltip />
                <Legend
                    onMouseEnter={(payload) => setHoveringDataKey(String(payload.dataKey))}
                    onMouseLeave={() => setHoveringDataKey(undefined)}
                />
                <Line type="monotone" dataKey="pv" strokeOpacity={pvOpacity} stroke={chartColors[1]} />
                <Line type="monotone" dataKey="uv" strokeOpacity={uvOpacity} stroke={chartColors[2]} />
            </LineChart>
        );
    },
};

/** Source: ResponsiveContainer/ResponsiveContainerExample.tsx */
export const AreaResponsiveContainer: Story = {
    name: 'Area Responsive Container',
    render: () => (
        <ResponsiveContainer width="100%" aspect={1.618} maxHeight={500}>
            <AreaChart data={pageData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <ReferenceLine x="Page C" stroke={chartColors[2]} label="Min PAGE" />
                <ReferenceLine y={4000} label="Max" stroke={chartColors[4]} strokeDasharray="3 3" />
                <Area type="monotone" dataKey="uv" stroke={chartColors[1]} fill={chartColors[1]} />
            </AreaChart>
        </ResponsiveContainer>
    ),
};

/** Source: XAxis/MultiXAxisExample.tsx */
export const MultiXAxisExample: Story = {
    name: 'Multiple X Axes',
    render: () => (
        <LineChart style={chartFrame} responsive data={pageData}>
            <XAxis dataKey="name" xAxisId="a" orientation="top" height={40} />
            <XAxis mirror dataKey="uv" xAxisId="b" height={50} />
            <XAxis dataKey="pv" type="number" xAxisId="c" height={60} />
            <XAxis mirror dataKey="amt" type="number" orientation="top" xAxisId="d" height={20} />
            <Tooltip defaultIndex={2} axisId="a" />
            <Line dataKey="name" xAxisId="a" />
            <Line dataKey="uv" xAxisId="b" />
            <Line dataKey="pv" xAxisId="c" />
            <Line dataKey="amt" xAxisId="d" />
        </LineChart>
    ),
};
