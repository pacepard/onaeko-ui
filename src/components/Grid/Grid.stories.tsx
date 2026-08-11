import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';

import { Grid } from './Grid';

const meta = {
    title: 'Components/Grid',
    component: Grid,
    parameters: {
        docs: {
            description: {
                component:
                    'CSS grid wrapper for multi-column layouts. Configure `cols` (1-4) and `gap` (none, sm, md, lg, xl) for tiles, dashboards, and card grids. Prefer Stack for linear single-axis flows and forms. Layout-only; interactive elements inside retain their own accessibility semantics.',
            },
        },
    },
    args: {
        cols: 3,
        gap: 'md',
    },
    argTypes: {
        cols: {
            control: 'select',
            options: [1, 2, 3, 4],
        },
        gap: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg', 'xl'],
        },
    },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

function Cell({ children }: { children: ReactNode }) {
    return (
        <div className="bg-muted text-muted-foreground rounded-md border p-4 text-center text-sm">
            {children}
        </div>
    );
}

export const Default: Story = {
    render: (args) => (
        <Grid {...args}>
            <Cell>One</Cell>
            <Cell>Two</Cell>
            <Cell>Three</Cell>
            <Cell>Four</Cell>
            <Cell>Five</Cell>
            <Cell>Six</Cell>
        </Grid>
    ),
};

export const TwoColumns: Story = {
    render: () => (
        <Grid cols={2} gap="lg">
            <Cell>Column A</Cell>
            <Cell>Column B</Cell>
        </Grid>
    ),
};

export const FourColumns: Story = {
    render: () => (
        <Grid cols={4} gap="md">
            <Cell>1</Cell>
            <Cell>2</Cell>
            <Cell>3</Cell>
            <Cell>4</Cell>
        </Grid>
    ),
};

export const TightGap: Story = {
    name: 'Tight gap',
    render: () => (
        <Grid cols={3} gap="sm">
            <Cell>A</Cell>
            <Cell>B</Cell>
            <Cell>C</Cell>
        </Grid>
    ),
};
