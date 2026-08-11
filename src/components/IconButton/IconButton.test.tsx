import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { IconButton } from './IconButton';

describe('IconButton', () => {
    it('requires accessible name via aria-label', () => {
        render(
            <IconButton aria-label="Settings">
                <span>S</span>
            </IconButton>,
        );

        expect(screen.getByRole('button', { name: 'Settings' })).toBeInTheDocument();
    });

    it('fires click handler', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(
            <IconButton aria-label="Settings" onClick={onClick}>
                <span>S</span>
            </IconButton>,
        );

        await user.click(screen.getByRole('button', { name: 'Settings' }));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
