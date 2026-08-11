import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from './ContextMenu';

describe('ContextMenu', () => {
    it('opens on right click', async () => {
        const user = userEvent.setup();

        render(
            <ContextMenu>
                <ContextMenuTrigger>Target</ContextMenuTrigger>
                <ContextMenuContent>
                    <ContextMenuItem>Edit</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>,
        );

        await user.pointer({ keys: '[MouseRight]', target: screen.getByText('Target') });
        expect(await screen.findByRole('menuitem', { name: 'Edit' })).toBeInTheDocument();
    });
});
