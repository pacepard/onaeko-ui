import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Button } from '../Button';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './Command';

const meta = {
    title: 'Components/Command',
    component: Command,
    parameters: {
        docs: {
            description: {
                component:
                    'Command menu built on cmdk for searchable lists. Use CommandDialog for modal command palettes or embed Command inline in popovers.',
            },
        },
    },
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inline: Story = {
    render: () => (
        <Command className="max-w-md rounded-lg border shadow-md">
            <CommandInput placeholder="Search actions..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search</CommandItem>
                    <CommandItem>Settings</CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    ),
};

export const Dialog: Story = {
    render: function CommandDialogStory() {
        const [open, setOpen] = React.useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)}>Open command</Button>
                <CommandDialog open={open} onOpenChange={setOpen}>
                    <CommandInput placeholder="Type a command..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Actions">
                            <CommandItem>Profile</CommandItem>
                            <CommandItem>Billing</CommandItem>
                        </CommandGroup>
                    </CommandList>
                </CommandDialog>
            </>
        );
    },
};
