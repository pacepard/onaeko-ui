import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '../Label';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
    title: 'Components/Textarea',
    component: Textarea,
    parameters: {
        docs: {
            description: {
                component:
                    'Multi-line text input for descriptions and comments. Pair with Label like Input. Prefer Input for single-line values. Use aria-invalid and helper text for validation errors.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
    args: {
        placeholder: 'Type your message here.',
    },
};

export const WithLabel: Story = {
    render: () => (
        <div className="grid w-full max-w-sm gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Write something..." />
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        disabled: true,
        placeholder: 'Disabled textarea',
    },
};
