import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

const meta = {
    title: 'Components/Popover',
    component: Popover,
    parameters: {
        docs: {
            description: {
                component:
                    'Floating panel anchored to a trigger for compact tools, pickers, or contextual content. Use when the user needs a bit more UI without a full modal. Prefer Dialog for blocking workflows and Tooltip for non-interactive hints only. Move focus into the popover when it contains form controls or actions.',
            },
        },
    },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="space-y-2">
                    <h4 className="leading-none font-medium">Dimensions</h4>
                    <p className="text-muted-foreground text-sm">Set the width and height for the layer.</p>
                </div>
            </PopoverContent>
        </Popover>
    ),
};

export const AlignedStart: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="secondary">Aligned start</Button>
            </PopoverTrigger>
            <PopoverContent align="start">
                <p className="text-sm">Popover content aligned to the start.</p>
            </PopoverContent>
        </Popover>
    ),
};
