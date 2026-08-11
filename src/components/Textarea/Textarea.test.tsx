import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Textarea } from './Textarea';

describe('Textarea', () => {
    it('accepts typed text', async () => {
        const user = userEvent.setup();

        render(<Textarea aria-label="Notes" />);
        const field = screen.getByRole('textbox', { name: 'Notes' });
        await user.type(field, 'Hello team');
        expect(field).toHaveValue('Hello team');
    });

    it('supports disabled state', () => {
        render(<Textarea aria-label="Notes" disabled defaultValue="Locked" />);
        expect(screen.getByRole('textbox', { name: 'Notes' })).toBeDisabled();
    });
});
