import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Button } from '../Button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './DropdownMenu';

describe('DropdownMenu', () => {
    it('opens menu and shows items', async () => {
        const user = userEvent.setup();

        render(
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button>Actions</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>,
        );

        expect(screen.queryByRole('menu')).not.toBeInTheDocument();
        await user.click(screen.getByRole('button', { name: 'Actions' }));
        expect(screen.getByRole('menu')).toBeInTheDocument();
        expect(screen.getByRole('menuitem', { name: 'Edit' })).toBeInTheDocument();
        expect(
            screen.getByRole('menuitem', { name: 'Duplicate' }),
        ).toBeInTheDocument();
    });
});
