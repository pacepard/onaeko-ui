import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { describe, expect, it } from 'vitest';

import { Button } from '../Button';
import {
    CommandPaletteDialog,
    CommandPaletteGroup,
    CommandPaletteInput,
    CommandPaletteItem,
    CommandPaletteList,
} from './CommandPalette';

describe('CommandPalette', () => {
    it('renders and filters palette items', async () => {
        const user = userEvent.setup();

        render(
            <CommandPaletteDialog open onOpenChange={() => {}}>
                <CommandPaletteInput placeholder="Search" />
                <CommandPaletteList>
                    <CommandPaletteGroup heading="Actions">
                        <CommandPaletteItem>Create file</CommandPaletteItem>
                        <CommandPaletteItem>Open settings</CommandPaletteItem>
                    </CommandPaletteGroup>
                </CommandPaletteList>
            </CommandPaletteDialog>,
        );

        expect(screen.getByText('Create file')).toBeInTheDocument();
        await user.type(screen.getByPlaceholderText('Search'), 'settings');
        expect(screen.getByText('Open settings')).toBeInTheDocument();
        expect(screen.queryByText('Create file')).not.toBeInTheDocument();
    });

    it('opens from trigger', async () => {
        const user = userEvent.setup();

        function Demo() {
            const [open, setOpen] = React.useState(false);
            return (
                <>
                    <Button onClick={() => setOpen(true)}>Show palette</Button>
                    <CommandPaletteDialog open={open} onOpenChange={setOpen}>
                        <CommandPaletteInput placeholder="Search" />
                        <CommandPaletteList>
                            <CommandPaletteItem>Item one</CommandPaletteItem>
                        </CommandPaletteList>
                    </CommandPaletteDialog>
                </>
            );
        }

        render(<Demo />);
        await user.click(screen.getByRole('button', { name: 'Show palette' }));
        expect(screen.getByText('Item one')).toBeInTheDocument();
    });
});
