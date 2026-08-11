import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input';
import { Label } from '../Label';
import { Stack } from '../Stack';

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        docs: {
            description: {
                component:
                    'Single-line text field for forms, search, and filters. Use with Label and optional helper text via `aria-describedby`; set `aria-invalid` when validation fails. Prefer Textarea for multi-line content and Select when the value must come from a fixed list. Disabled and read-only states should not be the only way to convey unavailable data-explain why in surrounding copy when it matters.',
            },
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Enter value',
    },
};

export const WithLabel: Story = {
    render: () => (
        <Stack gap="sm">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@onaeko.com" />
        </Stack>
    ),
};

export const Placeholder: Story = {
    args: {
        placeholder: 'Search projects...',
    },
};

export const Error: Story = {
    args: {
        'aria-invalid': true,
        defaultValue: 'not-an-email',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        defaultValue: 'Unavailable',
    },
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        defaultValue: 'Read only value',
    },
};

export const WithHelperText: Story = {
    render: () => (
        <Stack gap="sm">
            <Label htmlFor="name">Display name</Label>
            <Input id="name" placeholder="Onaeko" aria-describedby="name-help" />
            <p id="name-help" className="text-muted-foreground text-sm">
                This name is shown across Onaeko products.
            </p>
        </Stack>
    ),
};
