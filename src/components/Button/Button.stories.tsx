import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRightIcon, PlusIcon, TrashIcon } from 'lucide-react';

import { Button } from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        docs: {
            description: {
                component:
                    'Primary action control for submits, navigation, and commands. Use `variant` (primary, secondary, destructive, outline, ghost, link) and `size` (sm, md, lg, icon) to match emphasis; `iconBefore` / `iconAfter` add leading and trailing icons, and `loading` shows a spinner instead of `iconBefore`. Prefer links for in-content navigation and IconButton when the control is icon-only. While loading, keep the label meaningful and avoid double-submitting forms.',
            },
        },
    },
    args: {
        children: 'Continue',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'icon'],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { variant: 'primary' },
};

export const Secondary: Story = {
    args: { variant: 'secondary', children: 'Cancel' },
};

export const Destructive: Story = {
    args: { variant: 'destructive', children: 'Delete' },
};

export const Ghost: Story = {
    args: { variant: 'ghost', children: 'Learn more' },
};

export const Outline: Story = {
    args: { variant: 'outline', children: 'Outline' },
};

export const Link: Story = {
    args: { variant: 'link', children: 'Learn more' },
};

export const Disabled: Story = {
    args: { disabled: true },
};

export const Loading: Story = {
    args: { loading: true, children: 'Saving' },
};

export const LoadingWithIcons: Story = {
    args: {
        loading: true,
        children: 'Saving',
        iconBefore: <PlusIcon />,
        iconAfter: <ArrowRightIcon />,
    },
};

export const Small: Story = {
    args: { size: 'sm' },
};

export const Medium: Story = {
    args: { size: 'md' },
};

export const Large: Story = {
    args: { size: 'lg' },
};

export const IconBefore: Story = {
    args: {
        children: 'Create project',
        iconBefore: <PlusIcon />,
    },
};

export const IconAfter: Story = {
    args: {
        children: 'Continue',
        iconAfter: <ArrowRightIcon />,
    },
};

export const IconBeforeAndAfter: Story = {
    args: {
        children: 'Delete item',
        variant: 'destructive',
        iconBefore: <TrashIcon />,
        iconAfter: <ArrowRightIcon />,
    },
};
