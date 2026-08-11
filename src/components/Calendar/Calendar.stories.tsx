import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { type DateRange } from 'react-day-picker';

import { Calendar } from './Calendar';

const meta = {
    title: 'Components/Calendar',
    component: Calendar,
    parameters: {
        docs: {
            description: {
                component:
                    'Date calendar from shadcn/ui base-nova, built on react-day-picker. Supports single and range selection, caption dropdowns, week numbers, locale/RTL, and DayPicker timeZone.',
            },
        },
    },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

function BasicDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-lg border" />;
}

function RangeDemo() {
    const [range, setRange] = React.useState<DateRange | undefined>();
    return <Calendar mode="range" selected={range} onSelect={setRange} className="rounded-lg border" />;
}

function CaptionDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            captionLayout="dropdown"
            className="rounded-lg border"
        />
    );
}

function TimeZoneDemo() {
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    const [timeZone, setTimeZone] = React.useState<string | undefined>(undefined);

    React.useEffect(() => {
        setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    }, []);

    return (
        <Calendar mode="single" selected={date} onSelect={setDate} timeZone={timeZone} className="rounded-lg border" />
    );
}

function WeekNumbersDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} showWeekNumber className="rounded-lg border" />;
}

function CustomCellSizeDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"
        />
    );
}

export const Default: Story = {
    render: () => <BasicDemo />,
};

export const Range: Story = {
    render: () => <RangeDemo />,
};

export const MonthAndYearSelector: Story = {
    name: 'Month and Year Selector',
    render: () => <CaptionDemo />,
};

export const WithTimeZone: Story = {
    name: 'Selected Date (With TimeZone)',
    render: () => <TimeZoneDemo />,
};

export const WeekNumbers: Story = {
    render: () => <WeekNumbersDemo />,
};

export const CustomCellSize: Story = {
    render: () => <CustomCellSizeDemo />,
};
