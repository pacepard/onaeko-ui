import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '../Button';
import { Input } from '../Input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './Form';

const meta = {
    title: 'Components/Form',
    parameters: {
        docs: {
            description: {
                component:
                    'Form primitives wired for react-hook-form: FormProvider, Controller-backed fields, labels, controls, descriptions, and error messages. Peer-depends on `react-hook-form`. Pair with `@hookform/resolvers` and a schema library (e.g. Zod) in the app for validation.',
            },
        },
    },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const emailSchema = z.object({
    email: z.string().email('Enter a valid email address.'),
});

type EmailValues = z.infer<typeof emailSchema>;

export const Default: Story = {
    render: function DefaultForm() {
        const form = useForm<EmailValues>({
            resolver: zodResolver(emailSchema),
            defaultValues: { email: '' },
        });

        return (
            <Form {...form}>
                <form className="flex max-w-sm flex-col gap-6" onSubmit={form.handleSubmit(() => undefined)} noValidate>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="you@example.com" {...field} />
                                </FormControl>
                                <FormDescription>We will never share your email with anyone else.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        );
    },
};

const nameSchema = z.object({
    name: z.string().min(1, 'Name is required.'),
});

type NameValues = z.infer<typeof nameSchema>;

export const WithError: Story = {
    render: function WithErrorForm() {
        const form = useForm<NameValues>({
            resolver: zodResolver(nameSchema),
            defaultValues: { name: '' },
            mode: 'onChange',
        });

        React.useEffect(() => {
            void form.trigger('name');
        }, [form]);

        return (
            <Form {...form}>
                <form className="flex max-w-sm flex-col gap-6" onSubmit={form.handleSubmit(() => undefined)} noValidate>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        );
    },
};
