import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from './Label';
import { Input } from '../Input';
import { Stack } from '../Stack';

const meta = {
    title: 'Components/Label',
    component: Label,
    parameters: {
        docs: {
            description: {
                component:
                    'Accessible label associated with a form control via `htmlFor`. Use with every Input, Select, Textarea, Checkbox, Switch, and Radio item users must identify. Do not use as generic section headings unrelated to a single control. Clicking or activating the label moves focus to the linked field.',
            },
        },
    },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Stack gap="sm">
            <Label htmlFor="username">Username</Label>
            <Input id="username" />
        </Stack>
    ),
};
