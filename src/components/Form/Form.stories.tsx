import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import { Input } from '../Input';
import {
    Form,
    FormDescription,
    FormField,
    FormLabel,
    FormMessage,
} from './Form';

const meta = {
    title: 'Components/Form',
    component: Form,
    parameters: {
        docs: {
            description: {
                component:
                    'Form primitives wired for react-hook-form: field wrappers, labels, controls, descriptions, and error messages. Use for validated data entry where messages should stay tied to inputs. Not a replacement for ad-hoc inputs without labels or validation. Errors are linked to fields for assistive tech via described-by relationships.',
            },
        },
    },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Form
            className="max-w-sm"
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <FormField>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                />
                <FormDescription>
                    We will never share your email with anyone else.
                </FormDescription>
            </FormField>
            <Button type="submit">Submit</Button>
        </Form>
    ),
};

export const WithError: Story = {
    render: () => (
        <Form
            className="max-w-sm"
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <FormField>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input id="name" aria-invalid defaultValue="" />
                <FormMessage>Name is required.</FormMessage>
            </FormField>
            <Button type="submit">Submit</Button>
        </Form>
    ),
};
