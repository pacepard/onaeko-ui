import type { Meta, StoryObj } from '@storybook/react-vite';

import { DatePicker, DatePickerRange } from './DatePicker';

const meta = {
    title: 'Components/DatePicker',
    component: DatePicker,
    parameters: {
        docs: {
            description: {
                component:
                    'Date selection composed from Popover and Calendar. Use DatePicker for a single day and DatePickerRange for inclusive ranges. See react-day-picker for advanced calendar modes.',
            },
        },
    },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <DatePicker aria-label="Pick a date" />,
};

export const Range: Story = {
    render: () => <DatePickerRange aria-label="Pick a date range" />,
};
