import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Switch } from './Switch';

describe('Switch', () => {
    it('toggles checked state', async () => {
        const user = userEvent.setup();
        const onCheckedChange = vi.fn();

        render(
            <Switch aria-label="Enable alerts" onCheckedChange={onCheckedChange} />,
        );

        const toggle = screen.getByRole('switch', { name: 'Enable alerts' });
        expect(toggle).not.toBeChecked();
        await user.click(toggle);
        expect(toggle).toBeChecked();
        expect(onCheckedChange).toHaveBeenCalledWith(true);
    });

    it('does not toggle when disabled', async () => {
        const user = userEvent.setup();
        const onCheckedChange = vi.fn();

        render(
            <Switch
                disabled
                aria-label="Enable alerts"
                onCheckedChange={onCheckedChange}
            />,
        );

        const toggle = screen.getByRole('switch', { name: 'Enable alerts' });
        expect(toggle).toBeDisabled();
        await user.click(toggle);
        expect(onCheckedChange).not.toHaveBeenCalled();
    });
});
