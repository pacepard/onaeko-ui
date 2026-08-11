/**
 * Storybook demos adapted from official Recharts examples
 * (recharts@v3.10.1 www/src/docs/exampleComponents/*).
 * RechartsDevtools omitted (dev-only). Docs CSS variables replaced with
 * the hex palette used in the same official Bar/Area examples.
 *
 * Catalog: https://recharts.github.io/en-US/examples/SimpleLineChart/
 * Package: https://www.npmjs.com/package/recharts
 */
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    ComposedChart,
    Funnel,
    FunnelChart,
    LabelList,
    Layer,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    RadialBar,
    RadialBarChart,
    Rectangle,
    ResponsiveContainer,
    Sankey,
    Scatter,
    ScatterChart,
    SunburstChart,
    Tooltip,
    Treemap,
    XAxis,
    YAxis,
    ZAxis,
    useChartWidth,
    type SankeyNodeProps,
    type SunburstData,
} from './Chart';

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
    title: 'Components/Chart',
    parameters: {
        docs: {
            description: {
                component:
                    'Recharts chart roots re-exported from @onaeko/ui. Examples follow the official Recharts docs and storybook (recharts 3.10.1). Import chart roots and series from @onaeko/ui or from recharts directly.',
            },
        },
    },
} satisfies Meta;

export default meta;
type Story = StoryObj;

/** Source: LineChart/SimpleLineChart.tsx */
export const SimpleLineChart: Story = {
    name: 'Simple Line Chart',
    render: () => (
        <LineChart
            style={chartFrame}
            responsive
            data={pageData}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    ),
};

/** Source: LineChart/DashedLineChart.tsx */
export const DashedLineChart: Story = {
    name: 'Dashed Line Chart',
    render: () => (
        <LineChart
            style={chartFrame}
            responsive
            data={pageData}
            margin={{ top: 15, right: 0, left: 0, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeDasharray="5 5"
            />
            <Line
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
                strokeDasharray="3 4 5 2"
            />
        </LineChart>
    ),
};

/** Source: AreaChart/SimpleAreaChart.tsx */
export const SimpleAreaChart: Story = {
    name: 'Simple Area Chart',
    render: () => (
        <AreaChart
            style={chartFrame}
            responsive
            data={pageData}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" niceTicks="snap125" />
            <YAxis width="auto" niceTicks="snap125" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    ),
};

/** Source: AreaChart/StackedAreaChart.tsx */
export const StackedAreaChart: Story = {
    name: 'Stacked Area Chart',
    render: () => (
        <AreaChart
            style={chartFrame}
            responsive
            data={pageData}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" niceTicks="snap125" />
            <YAxis width="auto" niceTicks="snap125" />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="uv"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
            />
            <Area
                type="monotone"
                dataKey="pv"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
            />
            <Area
                type="monotone"
                dataKey="amt"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
            />
        </AreaChart>
    ),
};

/** Source: BarChart/SimpleBarChart.tsx */
export const SimpleBarChart: Story = {
    name: 'Simple Bar Chart',
    render: () => (
        <BarChart
            style={chartFrame}
            responsive
            data={pageData}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar
                dataKey="pv"
                fill="#8884d8"
                activeBar={{ fill: 'pink', stroke: 'blue' }}
                radius={[10, 10, 0, 0]}
            />
            <Bar
                dataKey="uv"
                fill="#82ca9d"
                activeBar={{ fill: 'gold', stroke: 'purple' }}
                radius={[10, 10, 0, 0]}
            />
        </BarChart>
    ),
};

/** Source: BarChart/StackedBarChart.tsx */
export const StackedBarChart: Story = {
    name: 'Stacked Bar Chart',
    render: () => (
        <BarChart
            style={chartFrame}
            responsive
            data={pageData}
            margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" niceTicks="snap125" />
            <YAxis width="auto" niceTicks="snap125" />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" background />
            <Bar dataKey="uv" stackId="a" fill="#82ca9d" background />
        </BarChart>
    ),
};

/** Source: ComposedChart/LineBarAreaComposedChart.tsx */
export const LineBarAreaComposedChart: Story = {
    name: 'Line Bar Area Composed Chart',
    render: () => {
        const data = [
            { name: 'Page A', uv: 590, pv: 800, amt: 1400, cnt: 490 },
            { name: 'Page B', uv: 868, pv: 967, amt: 1506, cnt: 590 },
            { name: 'Page C', uv: 1397, pv: 1098, amt: 989, cnt: 350 },
            { name: 'Page D', uv: 1480, pv: 1200, amt: 1228, cnt: 480 },
            { name: 'Page E', uv: 1520, pv: 1108, amt: 1100, cnt: 460 },
            { name: 'Page F', uv: 1400, pv: 680, amt: 1700, cnt: 380 },
        ];
        return (
            <ComposedChart
                style={chartFrame}
                responsive
                data={data}
                margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis width="auto" niceTicks="snap125" />
                <Tooltip />
                <Legend />
                <Area
                    type="monotone"
                    dataKey="amt"
                    fill="#8884d8"
                    stroke="#8884d8"
                />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                <Scatter dataKey="cnt" fill="red" />
            </ComposedChart>
        );
    },
};

/** Source: PieChart/TwoLevelPieChart.tsx */
export const TwoLevelPieChart: Story = {
    name: 'Two Level Pie Chart',
    render: () => {
        const data01 = [
            { name: 'Group A', value: 400 },
            { name: 'Group B', value: 300 },
            { name: 'Group C', value: 300 },
            { name: 'Group D', value: 200 },
        ];
        const data02 = [
            { name: 'A1', value: 100 },
            { name: 'A2', value: 300 },
            { name: 'B1', value: 100 },
            { name: 'B2', value: 80 },
            { name: 'B3', value: 40 },
            { name: 'B4', value: 30 },
            { name: 'B5', value: 50 },
            { name: 'C1', value: 100 },
            { name: 'C2', value: 200 },
            { name: 'D1', value: 150 },
            { name: 'D2', value: 50 },
        ];
        return (
            <PieChart
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    maxHeight: '80vh',
                    aspectRatio: 1,
                }}
                responsive
            >
                <Pie
                    data={data01}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius="50%"
                    fill="#8884d8"
                />
                <Pie
                    data={data02}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="80%"
                    fill="#82ca9d"
                    label
                />
                <Tooltip />
            </PieChart>
        );
    },
};

/** Source: PieChart/PieChartWithPaddingAngle.tsx */
export const PieChartWithPaddingAngle: Story = {
    name: 'Pie Chart with padding angle',
    render: () => {
        const data = [
            { name: 'Group A', value: 400, fill: '#0088FE' },
            { name: 'Group B', value: 300, fill: '#00C49F' },
            { name: 'Group C', value: 300, fill: '#FFBB28' },
            { name: 'Group D', value: 200, fill: '#FF8042' },
        ];
        return (
            <PieChart
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    maxHeight: '80vh',
                    aspectRatio: 1,
                }}
                responsive
            >
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    cornerRadius="50%"
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                />
            </PieChart>
        );
    },
};

/** Source: PieChart/StraightAnglePieChart.tsx */
export const StraightAnglePieChart: Story = {
    name: 'Straight Angle Pie Chart',
    render: () => {
        const data = [
            { name: 'Group A', value: 400 },
            { name: 'Group B', value: 300 },
            { name: 'Group C', value: 300 },
            { name: 'Group D', value: 200 },
            { name: 'Group E', value: 278 },
            { name: 'Group F', value: 189 },
        ];
        return (
            <PieChart
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    maxHeight: '80vh',
                    aspectRatio: 2,
                }}
                responsive
            >
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="100%"
                    outerRadius="120%"
                    fill="#8884d8"
                    label
                />
            </PieChart>
        );
    },
};

/** Source: RadarChart/SimpleRadarChart.tsx */
export const SimpleRadarChart: Story = {
    name: 'Simple Radar Chart',
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
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    maxHeight: '80vh',
                    aspectRatio: 1,
                }}
                responsive
                outerRadius="80%"
                data={data}
                margin={{ top: 20, left: 20, right: 20, bottom: 20 }}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                    name="Mike"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                />
            </RadarChart>
        );
    },
};

/** Source: RadialBarChart/SimpleRadialBarChart.tsx */
export const SimpleRadialBarChart: Story = {
    name: 'Simple Radial Bar Chart',
    render: () => {
        const data = [
            { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
            { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
            { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
            { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d' },
            { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c' },
            { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57' },
            { name: 'unknown', uv: 6.67, pv: 4800, fill: '#ffc658' },
        ];
        const style = {
            top: '50%',
            right: 0,
            transform: 'translate(0, -50%)',
            lineHeight: '24px',
        };
        return (
            <RadialBarChart
                style={{
                    width: '100%',
                    maxWidth: '700px',
                    maxHeight: '80vh',
                    aspectRatio: 1.618,
                }}
                responsive
                cx="30%"
                barSize={14}
                data={data}
            >
                <RadialBar
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    dataKey="uv"
                />
                <Legend
                    iconSize={10}
                    layout="vertical"
                    verticalAlign="middle"
                    wrapperStyle={style}
                />
                <Tooltip />
            </RadialBarChart>
        );
    },
};

/** Source: ScatterChart/ScatterChartExample.tsx */
export const SimpleScatterChart: Story = {
    name: 'Simple Scatter Chart',
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
            <ScatterChart
                style={chartFrame}
                responsive
                margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" type="number" name="stature" unit="cm" />
                <YAxis
                    dataKey="y"
                    type="number"
                    name="weight"
                    unit="kg"
                    width="auto"
                />
                <ZAxis
                    dataKey="z"
                    type="number"
                    range={[64, 144]}
                    name="score"
                    unit="km"
                />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="A school" data={data01} fill="#8884d8" />
                <Scatter name="B school" data={data02} fill="#82ca9d" />
            </ScatterChart>
        );
    },
};

/** Source: TreeMap/SimpleTreemap.tsx (data truncated to keep Storybook light; structure unchanged) */
export const SimpleTreemap: Story = {
    name: 'Simple Treemap',
    render: () => {
        const data = [
            {
                name: 'axis',
                children: [
                    { name: 'Axes', size: 1302 },
                    { name: 'Axis', size: 24593 },
                    { name: 'AxisGridLine', size: 652 },
                    { name: 'AxisLabel', size: 636 },
                    { name: 'CartesianAxes', size: 6703 },
                ],
            },
            {
                name: 'controls',
                children: [
                    { name: 'AnchorControl', size: 2138 },
                    { name: 'ClickControl', size: 3824 },
                    { name: 'Control', size: 1353 },
                    { name: 'HoverControl', size: 4896 },
                    { name: 'TooltipControl', size: 8435 },
                ],
            },
            {
                name: 'data',
                children: [
                    { name: 'Data', size: 20544 },
                    { name: 'DataList', size: 19788 },
                    { name: 'DataSprite', size: 10349 },
                    { name: 'ScaleBinding', size: 11275 },
                    { name: 'Tree', size: 7147 },
                ],
            },
            {
                name: 'legend',
                children: [
                    { name: 'Legend', size: 20859 },
                    { name: 'LegendItem', size: 4614 },
                    { name: 'LegendRange', size: 10530 },
                ],
            },
        ];
        return (
            <Treemap
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    maxHeight: '80vh',
                    aspectRatio: 4 / 3,
                }}
                data={data}
                dataKey="size"
                aspectRatio={4 / 3}
                stroke="#fff"
                fill="#8884d8"
            />
        );
    },
};

/** Source: SunburstChart/SunburstChartExample.tsx */
export const SunburstChartExample: Story = {
    name: 'Sunburst Chart',
    render: () => {
        const hierarchy: SunburstData = {
            name: 'Root',
            value: 100,
            children: [
                {
                    name: 'Child1',
                    fill: '#264653',
                    value: 30,
                    children: [
                        { name: 'third child', value: 10 },
                        { name: 'another child', value: 5 },
                        {
                            name: 'next child',
                            value: 15,
                            children: [
                                { name: 'third level child', value: 5 },
                                { name: 'third level child', value: 5 },
                                {
                                    name: 'third level child',
                                    value: 5,
                                    children: [{ name: 'level 4', value: 2 }],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'Child2',
                    fill: '#2a9d8f',
                    value: 20,
                    children: [
                        { name: 'another child', value: 10 },
                        {
                            name: 'next child',
                            value: 10,
                            children: [
                                { name: 'level 3 of child 2', value: 5 },
                                { name: 'level 3 of child 2', value: 3 },
                                { name: 'level 3 of child 2', value: 2 },
                            ],
                        },
                    ],
                },
                { name: 'Child3', fill: '#e9c46a', value: 20 },
                {
                    name: 'Child4',
                    fill: '#F4A261',
                    value: 10,
                    children: [
                        { name: 'child4 child', value: 5 },
                        { name: 'child4 child', value: 5 },
                    ],
                },
                { name: 'Child5', fill: '#e76f51', value: 20 },
            ],
        };
        return (
            <ResponsiveContainer width="100%" height={450}>
                <SunburstChart startAngle={90} endAngle={270} data={hierarchy}>
                    <Tooltip />
                </SunburstChart>
            </ResponsiveContainer>
        );
    },
};

/** Source: FunnelChart/FunnelChartExample.tsx */
export const FunnelChartExample: Story = {
    name: 'Funnel Chart',
    render: () => {
        const data = [
            { value: 100, name: 'Impression', fill: '#8884d8' },
            { value: 80, name: 'Click', fill: '#83a6ed' },
            { value: 50, name: 'Visit', fill: '#8dd1e1' },
            { value: 40, name: 'Consult', fill: '#82ca9d' },
            { value: 26, name: 'Order', fill: '#a4de6c' },
        ];
        return (
            <FunnelChart
                style={chartFrame}
                responsive
                margin={{ right: 30 }}
            >
                <Tooltip />
                <Funnel dataKey="value" data={data}>
                    <LabelList
                        position="right"
                        fill="#000"
                        stroke="none"
                        dataKey="name"
                    />
                </Funnel>
            </FunnelChart>
        );
    },
};

/** Source: Sankey/SankeyCustomNodeExample.tsx (data shape from Sankey.d.ts @example) */
export const SankeyChartExample: Story = {
    name: 'Sankey Chart',
    render: () => {
        const data0 = {
            nodes: [
                { name: 'Visit' },
                { name: 'Direct-Favourite' },
                { name: 'Page-Click' },
                { name: 'Detail-Favourite' },
                { name: 'Lost' },
            ],
            links: [
                { source: 0, target: 1, value: 3728.3 },
                { source: 0, target: 2, value: 354170 },
                { source: 2, target: 3, value: 62429 },
                { source: 2, target: 4, value: 291741 },
            ],
        };

        function MyCustomSankeyNode({
            x,
            y,
            width,
            height,
            index,
            payload,
        }: SankeyNodeProps) {
            const containerWidth = useChartWidth();
            if (containerWidth == null) {
                return null;
            }
            const isOut = x + width + 6 > containerWidth;
            return (
                <Layer key={`CustomNode${index}`}>
                    <Rectangle
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill="#5192ca"
                        fillOpacity="1"
                    />
                    <text
                        textAnchor={isOut ? 'end' : 'start'}
                        x={isOut ? x - 6 : x + width + 6}
                        y={y + height / 2}
                        fontSize="14"
                        stroke="#333"
                    >
                        {payload.name}
                    </text>
                    <text
                        textAnchor={isOut ? 'end' : 'start'}
                        x={isOut ? x - 6 : x + width + 6}
                        y={y + height / 2 + 13}
                        fontSize="12"
                        stroke="#333"
                        strokeOpacity="0.5"
                    >
                        {`${payload.value}k`}
                    </text>
                </Layer>
            );
        }

        return (
            <ResponsiveContainer width="100%" aspect={2}>
                <Sankey
                    data={data0}
                    node={MyCustomSankeyNode}
                    nodePadding={50}
                    margin={{ bottom: 30 }}
                    link={{ stroke: '#77c878' }}
                >
                    <Tooltip />
                </Sankey>
            </ResponsiveContainer>
        );
    },
};
