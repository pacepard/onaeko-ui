import type { Meta, StoryObj } from '@storybook/react-vite';
import { PlusIcon, SettingsIcon, TrashIcon } from 'lucide-react';

import { IconButton } from './IconButton';

const meta = {
    title: 'Components/IconButton',
    component: IconButton,
    parameters: {
        docs: {
            description: {
                component:
                    'Compact button that shows only an icon for toolbars and dense UI. Requires a descriptive `aria-label`; supports `variant` and disabled states like Button. Do not use without an accessible name or when a text label fits. Loading behavior mirrors Button when used with async actions.',
            },
        },
    },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        'aria-label': 'Add item',
        children: <PlusIcon />,
    },
};

export const Secondary: Story = {
    args: {
        'aria-label': 'Add item',
        variant: 'secondary',
        children: <PlusIcon />,
    },
};

export const Outline: Story = {
    args: {
        'aria-label': 'Open settings',
        variant: 'outline',
        children: <SettingsIcon />,
    },
};

export const Ghost: Story = {
    args: {
        'aria-label': 'Add item',
        variant: 'ghost',
        children: <PlusIcon />,
    },
};

export const Destructive: Story = {
    args: {
        'aria-label': 'Delete item',
        variant: 'destructive',
        children: <TrashIcon />,
    },
};

export const Disabled: Story = {
    args: {
        'aria-label': 'Add item',
        disabled: true,
        children: <PlusIcon />,
    },
};
