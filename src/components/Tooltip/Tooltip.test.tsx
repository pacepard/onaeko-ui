import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Button } from '../Button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './Tooltip';

describe('Tooltip', () => {
    it('shows content on focus', async () => {
        const user = userEvent.setup();

        render(
            <TooltipProvider delayDuration={0}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button>Focus me</Button>
                    </TooltipTrigger>
                    <TooltipContent>Tooltip text</TooltipContent>
                </Tooltip>
            </TooltipProvider>,
        );

        expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
        await user.tab();
        expect(screen.getByRole('button', { name: 'Focus me' })).toHaveFocus();
        await waitFor(() => {
            expect(screen.getByText('Tooltip text')).toBeInTheDocument();
        });
    });
});
