import type { Meta, StoryObj } from '@storybook/react-vite';
import { InfoIcon } from 'lucide-react';

import { Button } from '../Button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Tooltip';

const meta = {
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: {
        docs: {
            description: {
                component:
                    'Short supplementary label shown on hover or focus, anchored to a trigger. Use to clarify icon-only controls or abbreviated UI text. Do not hide instructions or required field rules only in a tooltip. Content is exposed on keyboard focus as well as pointer hover.',
            },
        },
    },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add to library</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ),
};

export const WithIcon: Story = {
    render: () => (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="More info">
                        <InfoIcon />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                    <p>Additional information about this field.</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ),
};
