import type { Meta, StoryObj } from '@storybook/react-vite';

import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from './ContextMenu';

const meta = {
    title: 'Components/ContextMenu',
    component: ContextMenu,
    parameters: {
        docs: {
            description: {
                component:
                    'Right-click menu for contextual actions on a target. Items support variant default and destructive. Prefer DropdownMenu when the trigger is an explicit button.',
            },
        },
    },
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <ContextMenu>
            <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
                Right click here
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem>Back</ContextMenuItem>
                <ContextMenuItem>Forward</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Reload</ContextMenuItem>
                <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    ),
};

export const Destructive: Story = {
    render: () => (
        <ContextMenu>
            <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
                Right click for destructive actions
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem>Archive</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">
                    Remove permanently
                </ContextMenuItem>
                <ContextMenuItem variant="destructive">
                    Delete forever
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    ),
};

export const WithSubmenu: Story = {
    render: () => (
        <ContextMenu>
            <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
                Right click for more options
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuCheckboxItem checked>
                    Show bookmarks
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem>Show full URLs</ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                    <ContextMenuSubTrigger>More tools</ContextMenuSubTrigger>
                    <ContextMenuSubContent>
                        <ContextMenuItem>Save page as</ContextMenuItem>
                        <ContextMenuItem>Create shortcut</ContextMenuItem>
                        <ContextMenuItem variant="destructive">
                            Clear browsing data
                        </ContextMenuItem>
                    </ContextMenuSubContent>
                </ContextMenuSub>
            </ContextMenuContent>
        </ContextMenu>
    ),
};
