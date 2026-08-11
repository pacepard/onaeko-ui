import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Button } from '../Button';
import { toast, Toaster } from './index';

describe('Sonner', () => {
    it('shows a toast via the Sonner export path', async () => {
        const user = userEvent.setup();

        render(
            <>
                <Toaster theme="light" />
                <Button onClick={() => toast('Saved via Sonner')}>Show toast</Button>
            </>,
        );

        await user.click(screen.getByRole('button', { name: 'Show toast' }));
        await waitFor(() => {
            expect(screen.getByText('Saved via Sonner')).toBeInTheDocument();
        });
    });

    it('shows a success toast', async () => {
        const user = userEvent.setup();

        render(
            <>
                <Toaster theme="light" />
                <Button onClick={() => toast.success('Profile updated')}>Success</Button>
            </>,
        );

        await user.click(screen.getByRole('button', { name: 'Success' }));
        await waitFor(() => {
            expect(screen.getByText('Profile updated')).toBeInTheDocument();
        });
    });
});
