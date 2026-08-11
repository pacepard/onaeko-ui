import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from './Chart';

describe('Chart (Recharts)', () => {
    it('renders a LineChart from recharts', () => {
        const data = [
            { name: 'A', uv: 100 },
            { name: 'B', uv: 200 },
        ];

        const { container } = render(
            <LineChart width={320} height={200} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" isAnimationActive={false} />
            </LineChart>,
        );

        expect(container.querySelector('.recharts-wrapper')).toBeInTheDocument();
        expect(container.querySelector('.recharts-line')).toBeInTheDocument();
        expect(screen.queryByText(/ChartContainer/i)).not.toBeInTheDocument();
    });
});
