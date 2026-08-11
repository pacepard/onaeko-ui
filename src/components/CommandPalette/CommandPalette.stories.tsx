import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Button } from '../Button';
import {
    CommandPaletteDialog,
    CommandPaletteEmpty,
    CommandPaletteGroup,
    CommandPaletteInput,
    CommandPaletteItem,
    CommandPaletteList,
} from './CommandPalette';

const meta = {
    title: 'Components/CommandPalette',
    component: CommandPaletteDialog,
    parameters: {
        docs: {
            description: {
                component:
                    'Spotlight-style command palette with search and enter hint on the selected row. Use for global shortcuts and quick navigation.',
            },
        },
    },
} satisfies Meta<typeof CommandPaletteDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: function CommandPaletteDefaultStory() {
        const [open, setOpen] = React.useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)}>Open palette</Button>
                <CommandPaletteDialog open={open} onOpenChange={setOpen}>
                    <CommandPaletteInput placeholder="Search commands..." />
                    <CommandPaletteList>
                        <CommandPaletteEmpty>No commands found.</CommandPaletteEmpty>
                        <CommandPaletteGroup heading="Navigation">
                            <CommandPaletteItem>Home</CommandPaletteItem>
                            <CommandPaletteItem>Projects</CommandPaletteItem>
                            <CommandPaletteItem>Settings</CommandPaletteItem>
                        </CommandPaletteGroup>
                    </CommandPaletteList>
                </CommandPaletteDialog>
            </>
        );
    },
};
