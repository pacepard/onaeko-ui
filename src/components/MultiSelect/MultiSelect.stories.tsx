import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { MultiSelect } from './MultiSelect';

const options = [
    { label: 'Design', value: 'design' },
    { label: 'Engineering', value: 'engineering' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Sales', value: 'sales' },
];

const meta = {
    title: 'Components/MultiSelect',
    component: MultiSelect,
    parameters: {
        docs: {
            description: {
                component:
                    'Multi-value combobox with search, select all, and badge chips. Built from Popover and Command primitives. Badge chip styling uses `variant` (default, secondary, destructive, inverted).',
            },
        },
    },
    args: {
        options,
        onValueChange: () => {},
        placeholder: 'Choose teams',
    },
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

function MultiSelectDemo({
    variant,
}: {
    variant?: 'default' | 'secondary' | 'destructive' | 'inverted';
}) {
    const [value, setValue] = React.useState<string[]>(['design', 'engineering']);
    return (
        <MultiSelect
            options={options}
            placeholder="Choose teams"
            defaultValue={value}
            onValueChange={setValue}
            variant={variant}
            className="max-w-sm"
        />
    );
}

export const Default: Story = {
    render: () => <MultiSelectDemo />,
};

export const Secondary: Story = {
    render: () => <MultiSelectDemo variant="secondary" />,
};

export const Destructive: Story = {
    render: () => <MultiSelectDemo variant="destructive" />,
};

export const Inverted: Story = {
    render: () => <MultiSelectDemo variant="inverted" />,
};
