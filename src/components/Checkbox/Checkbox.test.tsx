import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
    it('toggles checked state', async () => {
        const user = userEvent.setup();
        const onCheckedChange = vi.fn();

        render(<Checkbox aria-label="Accept terms" onCheckedChange={onCheckedChange} />);

        const checkbox = screen.getByRole('checkbox', { name: 'Accept terms' });
        expect(checkbox).not.toBeChecked();
        await user.click(checkbox);
        expect(checkbox).toBeChecked();
        expect(onCheckedChange).toHaveBeenCalledWith(true);
    });

    it('does not toggle when disabled', async () => {
        const user = userEvent.setup();
        const onCheckedChange = vi.fn();

        render(<Checkbox disabled aria-label="Accept terms" onCheckedChange={onCheckedChange} />);

        const checkbox = screen.getByRole('checkbox', { name: 'Accept terms' });
        expect(checkbox).toBeDisabled();
        await user.click(checkbox);
        expect(onCheckedChange).not.toHaveBeenCalled();
    });

    it('toggles with the keyboard', async () => {
        const user = userEvent.setup();
        const onCheckedChange = vi.fn();

        render(<Checkbox aria-label="Accept terms" onCheckedChange={onCheckedChange} />);

        const checkbox = screen.getByRole('checkbox', { name: 'Accept terms' });
        checkbox.focus();
        await user.keyboard(' ');
        expect(onCheckedChange).toHaveBeenCalledWith(true);
        expect(checkbox).toBeChecked();
    });
});
