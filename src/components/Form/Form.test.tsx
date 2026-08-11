import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Input } from '../Input';
import {
    Form,
    FormDescription,
    FormField,
    FormLabel,
    FormMessage,
} from './Form';

describe('Form', () => {
    it('renders fields with label and description', () => {
        render(
            <Form aria-label="Profile form">
                <FormField>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input id="name" />
                    <FormDescription>Your public display name.</FormDescription>
                </FormField>
            </Form>,
        );

        expect(screen.getByRole('form', { name: 'Profile form' })).toBeInTheDocument();
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
        expect(screen.getByText('Your public display name.')).toBeInTheDocument();
    });

    it('shows FormMessage when children are provided', () => {
        render(<FormMessage>Name is required</FormMessage>);
        expect(screen.getByRole('alert')).toHaveTextContent('Name is required');
    });

    it('does not render FormMessage when empty', () => {
        render(<FormMessage>{null}</FormMessage>);
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });
});
