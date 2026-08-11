import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Button } from '../Button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './Dialog';

describe('Dialog', () => {
    it('opens and closes with accessible labeling', async () => {
        const user = userEvent.setup();

        render(
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Open</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Project settings</DialogTitle>
                        <DialogDescription>Update your project configuration.</DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>,
        );

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        await user.click(screen.getByRole('button', { name: 'Open' }));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Project settings' })).toBeInTheDocument();

        await user.keyboard('{Escape}');
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Open' })).toHaveFocus();
    });

    it('exposes title and description to the dialog', async () => {
        const user = userEvent.setup();

        render(
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Open</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Project settings</DialogTitle>
                        <DialogDescription>Update your project configuration.</DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>,
        );

        await user.click(screen.getByRole('button', { name: 'Open' }));
        const dialog = screen.getByRole('dialog');
        expect(dialog).toHaveAccessibleName('Project settings');
        expect(dialog).toHaveAccessibleDescription('Update your project configuration.');
    });
});
