import { zodResolver } from '@hookform/resolvers/zod';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';
import { describe, expect, it, vi } from 'vitest';
import { z } from 'zod';

import { Input } from '../Input';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './Form';

const profileSchema = z.object({
    name: z.string().min(1, 'Name is required'),
});

type ProfileValues = z.infer<typeof profileSchema>;

function ProfileForm({
    onSubmit,
}: {
    onSubmit?: (values: ProfileValues) => void;
}) {
    const form = useForm<ProfileValues>({
        resolver: zodResolver(profileSchema),
        defaultValues: { name: '' },
    });

    return (
        <Form {...form}>
            <form
                aria-label="Profile form"
                onSubmit={form.handleSubmit((values) => onSubmit?.(values))}
                noValidate
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                Your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <button type="submit">Save</button>
            </form>
        </Form>
    );
}

describe('Form', () => {
    it('renders fields with label and description', () => {
        render(<ProfileForm />);

        expect(
            screen.getByRole('form', { name: 'Profile form' }),
        ).toBeInTheDocument();
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
        expect(
            screen.getByText('Your public display name.'),
        ).toBeInTheDocument();
    });

    it('shows FormMessage when validation fails', async () => {
        const user = userEvent.setup();
        render(<ProfileForm />);

        await user.click(screen.getByRole('button', { name: 'Save' }));

        expect(await screen.findByRole('alert')).toHaveTextContent(
            'Name is required',
        );
    });

    it('does not render FormMessage when the field is valid', async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn();
        render(<ProfileForm onSubmit={onSubmit} />);

        await user.type(screen.getByLabelText('Name'), 'Ada');
        await user.click(screen.getByRole('button', { name: 'Save' }));

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledWith({ name: 'Ada' });
        });
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });
});
