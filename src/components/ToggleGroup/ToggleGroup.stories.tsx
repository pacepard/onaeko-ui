import type { Meta, StoryObj } from '@storybook/react-vite';
import {
    AlignCenterIcon,
    AlignLeftIcon,
    AlignRightIcon,
    BoldIcon,
    ItalicIcon,
    UnderlineIcon,
} from 'lucide-react';

import { ToggleGroup, ToggleGroupItem } from './ToggleGroup';

const meta = {
    title: 'Components/ToggleGroup',
    parameters: {
        docs: {
            description: {
                component:
                    'Group of toggles with single or multiple selection (Base UI). Supports `variant` (default, outline), `size` (sm, default, lg), and `orientation` (horizontal, vertical). Use defaultValue as a string array.',
            },
        },
    },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <ToggleGroup defaultValue={['left']} aria-label="Text alignment">
            <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeftIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenterIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRightIcon />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const Outline: Story = {
    render: () => (
        <ToggleGroup
            variant="outline"
            defaultValue={['left']}
            aria-label="Text alignment outline"
        >
            <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeftIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenterIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRightIcon />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const Small: Story = {
    render: () => (
        <ToggleGroup
            variant="outline"
            size="sm"
            defaultValue={['bold']}
            aria-label="Text style small"
        >
            <ToggleGroupItem value="bold" aria-label="Bold">
                <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
                <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
                <UnderlineIcon />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const Large: Story = {
    render: () => (
        <ToggleGroup
            variant="outline"
            size="lg"
            defaultValue={['bold']}
            aria-label="Text style large"
        >
            <ToggleGroupItem value="bold" aria-label="Bold">
                <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
                <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
                <UnderlineIcon />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};

export const Vertical: Story = {
    render: () => (
        <ToggleGroup
            variant="outline"
            orientation="vertical"
            defaultValue={['left']}
            aria-label="Vertical alignment"
        >
            <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeftIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenterIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRightIcon />
            </ToggleGroupItem>
        </ToggleGroup>
    ),
};
