import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from './Badge';

const meta = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        docs: {
            description: {
                component:
                    'Small status or category label for counts, tags, and metadata. Use `variant` (primary, secondary, destructive, outline) to reflect emphasis. Do not rely on badge color alone for critical safety or compliance state-repeat meaning in text. Badges supplement surrounding copy rather than replacing it.',
            },
        },
    },
    args: {
        children: 'Badge',
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Destructive: Story = { args: { variant: 'destructive' } };
export const Outline: Story = { args: { variant: 'outline' } };
