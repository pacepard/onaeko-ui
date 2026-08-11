import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select';

const meta = {
    title: 'Components/Select',
    component: Select,
    parameters: {
        docs: {
            description: {
                component:
                    'Dropdown for choosing one option from a list in forms. Compose `Select`, `SelectTrigger`, `SelectContent`, and `SelectItem` for labeled values. Use DropdownMenu for commands, not form values; consider search patterns for very long lists. Label the trigger and rely on Radix wiring for listbox accessibility.',
            },
        },
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
        </Select>
    ),
};

export const WithDefaultValue: Story = {
    render: () => (
        <Select defaultValue="banana">
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
        </Select>
    ),
};

export const Small: Story = {
    render: () => (
        <Select>
            <SelectTrigger size="sm" className="w-[140px]">
                <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="sm">Small</SelectItem>
                <SelectItem value="md">Medium</SelectItem>
                <SelectItem value="lg">Large</SelectItem>
            </SelectContent>
        </Select>
    ),
};
