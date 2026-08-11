import type { Meta, StoryObj } from '@storybook/react-vite';

import { Stack } from './Stack';

const meta = {
    title: 'Components/Stack',
    component: Stack,
    parameters: {
        docs: {
            description: {
                component:
                    'Flex layout helper that stacks children with consistent spacing. Use `direction` (row, column) and `gap` (none, sm, md, lg, xl) for forms, toolbars, and vertical rhythm. Not a semantic list-use list elements when content is a list of items. Child components keep their own roles and labels.',
            },
        },
    },
    args: {
        direction: 'column',
        gap: 'md',
    },
    argTypes: {
        direction: {
            control: 'select',
            options: ['row', 'column'],
        },
        gap: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg', 'xl'],
        },
    },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

function Box({ label }: { label: string }) {
    return <div className="bg-muted text-muted-foreground rounded-md border px-4 py-3 text-sm">{label}</div>;
}

export const Column: Story = {
    render: (args) => (
        <Stack {...args}>
            <Box label="First" />
            <Box label="Second" />
            <Box label="Third" />
        </Stack>
    ),
};

export const Row: Story = {
    render: () => (
        <Stack direction="row" gap="sm" align="center">
            <Box label="One" />
            <Box label="Two" />
            <Box label="Three" />
        </Stack>
    ),
};

export const SpacedBetween: Story = {
    render: () => (
        <Stack direction="row" justify="between" className="w-full max-w-md rounded-md border p-4">
            <Box label="Start" />
            <Box label="End" />
        </Stack>
    ),
};

export const Centered: Story = {
    render: () => (
        <Stack direction="row" gap="md" align="center" justify="center">
            <Box label="Aligned" />
            <Box label="Center" />
        </Stack>
    ),
};

export const LargeGap: Story = {
    name: 'Large gap',
    render: () => (
        <Stack direction="column" gap="xl">
            <Box label="Wide spacing" />
            <Box label="Between items" />
        </Stack>
    ),
};
