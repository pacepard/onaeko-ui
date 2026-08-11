import type { Meta, StoryObj } from '@storybook/react-vite';
import { MoreHorizontalIcon, UserIcon } from 'lucide-react';

import { Button } from '../Button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './DropdownMenu';

const meta = {
    title: 'Components/DropdownMenu',
    component: DropdownMenu,
    parameters: {
        docs: {
            description: {
                component:
                    'Menu of actions opened from a trigger, with items, separators, and shortcuts. Use for overflow actions and contextual commands on rows or selections. Not for picking a single form value-use Select. Keyboard navigation follows menu roving tabindex patterns; label destructive items clearly.',
            },
        },
    },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                <DropdownMenuLabel>My account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <UserIcon />
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                    Sign out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};

export const IconTrigger: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="More options">
                    <MoreHorizontalIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};

export const Destructive: Story = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Account actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Transfer ownership</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                    Delete account
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
};
