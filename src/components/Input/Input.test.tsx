import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Input } from './Input';

describe('Input', () => {
    it('accepts typed input', async () => {
        const user = userEvent.setup();
        render(<Input aria-label="Email" />);
        const input = screen.getByLabelText('Email');
        await user.type(input, 'hello');
        expect(input).toHaveValue('hello');
    });

    it('supports disabled state', () => {
        render(<Input aria-label="Email" disabled />);
        expect(screen.getByLabelText('Email')).toBeDisabled();
    });

    it('supports aria-invalid', () => {
        render(<Input aria-label="Email" aria-invalid />);
        expect(screen.getByLabelText('Email')).toHaveAttribute(
            'aria-invalid',
            'true',
        );
    });
});
