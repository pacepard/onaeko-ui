import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Toggle } from './Toggle';

describe('Toggle', () => {
    it('toggles pressed state', async () => {
        const user = userEvent.setup();
        render(<Toggle aria-label="Bold">B</Toggle>);

        const button = screen.getByRole('button', { name: 'Bold' });
        expect(button).toHaveAttribute('aria-pressed', 'false');
        await user.click(button);
        expect(button).toHaveAttribute('aria-pressed', 'true');
    });
});
