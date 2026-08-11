import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Button } from '../Button';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from './Popover';

describe('Popover', () => {
    it('opens and closes content', async () => {
        const user = userEvent.setup();

        render(
            <Popover>
                <PopoverTrigger asChild>
                    <Button>Open popover</Button>
                </PopoverTrigger>
                <PopoverContent>Popover body</PopoverContent>
            </Popover>,
        );

        expect(screen.queryByText('Popover body')).not.toBeInTheDocument();
        await user.click(screen.getByRole('button', { name: 'Open popover' }));
        expect(screen.getByText('Popover body')).toBeInTheDocument();
        await user.keyboard('{Escape}');
        expect(screen.queryByText('Popover body')).not.toBeInTheDocument();
    });
});
