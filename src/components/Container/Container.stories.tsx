import type { Meta, StoryObj } from '@storybook/react-vite';

import { Container } from './Container';

const meta = {
    title: 'Components/Container',
    component: Container,
    parameters: {
        docs: {
            description: {
                component:
                    'Centers content and limits max width for readable page layouts. Set `size` to sm, md, lg, or full for marketing pages and app shells. Not for inner component spacing-use Stack or Grid inside. Pure layout wrapper with no additional interactive semantics.',
            },
        },
    },
    args: {
        size: 'lg',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'full'],
        },
    },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

function DemoBlock({ label }: { label: string }) {
    return <div className="bg-muted text-muted-foreground rounded-md border p-6 text-center text-sm">{label}</div>;
}

export const Default: Story = {
    render: (args) => (
        <Container {...args}>
            <DemoBlock label="Content constrained by container max width" />
        </Container>
    ),
};

export const Small: Story = {
    render: () => (
        <Container size="sm">
            <DemoBlock label="Small container (max-w-3xl)" />
        </Container>
    ),
};

export const Medium: Story = {
    render: () => (
        <Container size="md">
            <DemoBlock label="Medium container" />
        </Container>
    ),
};

export const FullWidth: Story = {
    render: () => (
        <Container size="full">
            <DemoBlock label="Full width container" />
        </Container>
    ),
};
