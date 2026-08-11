import type { Meta, StoryObj } from '@storybook/react-vite';
import { BoldIcon, ItalicIcon } from 'lucide-react';

import { Toggle } from './Toggle';

const meta = {
    title: 'Components/Toggle',
    component: Toggle,
    parameters: {
        docs: {
            description: {
                component:
                    'Two-state pressed button for formatting and filters. Supports `variant` (default, outline) and `size` (sm, default, lg). Use ToggleGroup when several options share a selection model.',
            },
        },
    },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Toggle aria-label="Bold">
            <BoldIcon />
        </Toggle>
    ),
};

export const Outline: Story = {
    render: () => (
        <Toggle aria-label="Bold" variant="outline">
            <BoldIcon />
        </Toggle>
    ),
};

export const WithLabel: Story = {
    render: () => (
        <Toggle aria-label="Italic" variant="outline">
            <ItalicIcon />
            Italic
        </Toggle>
    ),
};

export const Small: Story = {
    render: () => (
        <Toggle aria-label="Bold" variant="outline" size="sm">
            <BoldIcon />
        </Toggle>
    ),
};

export const Large: Story = {
    render: () => (
        <Toggle aria-label="Bold" variant="outline" size="lg">
            <BoldIcon />
        </Toggle>
    ),
};
