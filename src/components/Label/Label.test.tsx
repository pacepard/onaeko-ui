import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Input } from '../Input';
import { Label } from './Label';

describe('Label', () => {
    it('associates with an input via htmlFor', () => {
        render(
            <>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
            </>,
        );

        const input = screen.getByLabelText('Email');
        expect(input).toHaveAttribute('id', 'email');
    });
});
