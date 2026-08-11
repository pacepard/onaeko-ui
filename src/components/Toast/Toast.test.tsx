import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Button } from '../Button';
import { toast, Toaster } from './Toast';

describe('Toast', () => {
    it('renders Toaster and shows a toast message', async () => {
        const user = userEvent.setup();

        render(
            <>
                <Toaster theme="light" />
                <Button onClick={() => toast('Event has been created')}>
                    Show toast
                </Button>
            </>,
        );

        await user.click(screen.getByRole('button', { name: 'Show toast' }));
        await waitFor(() => {
            expect(screen.getByText('Event has been created')).toBeInTheDocument();
        });
    });
});
