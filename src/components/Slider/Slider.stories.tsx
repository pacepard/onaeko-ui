import type { Meta, StoryObj } from '@storybook/react-vite';

import { Slider } from './Slider';

const meta = {
    title: 'Components/Slider',
    component: Slider,
    parameters: {
        docs: {
            description: {
                component:
                    'Range input for numeric values on a track. Supports single or multiple thumbs via value arrays.',
            },
        },
    },
    args: {
        defaultValue: [40],
        max: 100,
        step: 1,
        className: 'max-w-sm',
    },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Range: Story = {
    args: {
        defaultValue: [25, 75],
    },
};
