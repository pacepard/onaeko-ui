import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { MultiSelect } from './MultiSelect';

const options = [
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two' },
];

describe('MultiSelect', () => {
    it('opens, selects an option, and calls onValueChange', async () => {
        const user = userEvent.setup();
        const onValueChange = vi.fn();

        render(<MultiSelect options={options} onValueChange={onValueChange} placeholder="Pick items" />);

        await user.click(screen.getByRole('button', { name: 'Pick items' }));
        await user.click(screen.getByText('One'));

        expect(onValueChange).toHaveBeenCalledWith(['one']);
        expect(screen.getByRole('button').textContent).toContain('One');
    });
});
