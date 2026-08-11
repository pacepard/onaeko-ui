import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { RadioGroup, RadioGroupItem } from './Radio';

describe('Radio', () => {
    it('selects an option in the group', async () => {
        const user = userEvent.setup();

        render(
            <RadioGroup defaultValue="a">
                <RadioGroupItem value="a" aria-label="Option A" />
                <RadioGroupItem value="b" aria-label="Option B" />
            </RadioGroup>,
        );

        const optionA = screen.getByRole('radio', { name: 'Option A' });
        const optionB = screen.getByRole('radio', { name: 'Option B' });
        expect(optionA).toHaveAttribute('aria-checked', 'true');
        expect(optionB).toHaveAttribute('aria-checked', 'false');

        await user.click(optionB);
        expect(optionB).toHaveAttribute('aria-checked', 'true');
        expect(optionA).toHaveAttribute('aria-checked', 'false');
    });

    it('does not change selection when disabled', async () => {
        const user = userEvent.setup();

        render(
            <RadioGroup defaultValue="a">
                <RadioGroupItem value="a" aria-label="Option A" />
                <RadioGroupItem value="b" aria-label="Option B" disabled />
            </RadioGroup>,
        );

        const optionB = screen.getByRole('radio', { name: 'Option B' });
        expect(optionB).toHaveAttribute('aria-disabled', 'true');
        await user.click(optionB);
        expect(screen.getByRole('radio', { name: 'Option A' })).toHaveAttribute('aria-checked', 'true');
    });
});
