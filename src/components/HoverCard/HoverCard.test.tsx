import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Button } from '../Button';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from './HoverCard';

describe('HoverCard', () => {
    it('shows content on hover', async () => {
        const user = userEvent.setup();

        render(
            <HoverCard>
                <HoverCardTrigger
                    delay={0}
                    closeDelay={0}
                    render={<Button />}
                >
                    Hover
                </HoverCardTrigger>
                <HoverCardContent>Preview body</HoverCardContent>
            </HoverCard>,
        );

        await user.hover(screen.getByRole('button', { name: 'Hover' }));
        await waitFor(() => {
            expect(screen.getByText('Preview body')).toBeInTheDocument();
        });
    });
});
