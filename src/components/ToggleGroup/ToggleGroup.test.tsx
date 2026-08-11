import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { ToggleGroup, ToggleGroupItem } from './ToggleGroup';

describe('ToggleGroup', () => {
    it('selects a single item', async () => {
        const user = userEvent.setup();
        render(
            <ToggleGroup aria-label="Align" defaultValue={['left']}>
                <ToggleGroupItem value="left" aria-label="Left">
                    L
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Right">
                    R
                </ToggleGroupItem>
            </ToggleGroup>,
        );

        await user.click(screen.getByRole('button', { name: 'Right' }));
        expect(screen.getByRole('button', { name: 'Right' })).toHaveAttribute(
            'aria-pressed',
            'true',
        );
        expect(screen.getByRole('button', { name: 'Left' })).toHaveAttribute(
            'aria-pressed',
            'false',
        );
    });
});
