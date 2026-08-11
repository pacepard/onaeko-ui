import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select';

describe('Select', () => {
    it('opens and chooses an item', async () => {
        const user = userEvent.setup();

        render(
            <Select>
                <SelectTrigger aria-label="Fruit">
                    <SelectValue placeholder="Pick a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                </SelectContent>
            </Select>,
        );

        expect(screen.getByRole('combobox', { name: 'Fruit' })).toHaveTextContent('Pick a fruit');
        await user.click(screen.getByRole('combobox', { name: 'Fruit' }));
        await user.click(await screen.findByRole('option', { name: 'Banana' }));
        expect(screen.getByRole('combobox', { name: 'Fruit' })).toHaveTextContent('Banana');
    });

    it('supports keyboard selection', async () => {
        const user = userEvent.setup();

        render(
            <Select>
                <SelectTrigger aria-label="Fruit">
                    <SelectValue placeholder="Pick a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                </SelectContent>
            </Select>,
        );

        const trigger = screen.getByRole('combobox', { name: 'Fruit' });
        await user.tab();
        expect(trigger).toHaveFocus();
        await user.keyboard('{Enter}');
        expect(await screen.findByRole('listbox')).toBeInTheDocument();
        await user.keyboard('{ArrowDown}{Enter}');
        expect(trigger).toHaveTextContent(/Apple|Banana/);
    });
});
