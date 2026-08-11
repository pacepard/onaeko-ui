'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import type { DateRange } from 'react-day-picker';

import { Button } from '@/components/Button';
import { Calendar } from '@/components/Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { cn } from '@/lib/cn';

export type DatePickerProps = {
    value?: Date;
    defaultValue?: Date;
    onChange?: (date: Date | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    formatString?: string;
    id?: string;
    'aria-label'?: string;
};

function DatePicker({
    value,
    defaultValue,
    onChange,
    placeholder = 'Pick a date',
    disabled,
    className,
    formatString = 'PPP',
    id,
    'aria-label': ariaLabel,
}: DatePickerProps) {
    const [open, setOpen] = React.useState(false);
    const [uncontrolled, setUncontrolled] = React.useState<Date | undefined>(defaultValue);
    const date = value !== undefined ? value : uncontrolled;

    const setDate = (next: Date | undefined) => {
        if (value === undefined) {
            setUncontrolled(next);
        }
        onChange?.(next);
        if (next) {
            setOpen(false);
        }
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    id={id}
                    variant="outline"
                    disabled={disabled}
                    aria-label={ariaLabel}
                    data-empty={!date}
                    className={cn(
                        'w-[280px] justify-start text-left font-normal data-[empty=true]:text-muted-foreground',
                        className,
                    )}
                >
                    <CalendarIcon />
                    {date ? format(date, formatString) : <span>{placeholder}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
        </Popover>
    );
}

export type DatePickerRangeProps = {
    value?: DateRange;
    defaultValue?: DateRange;
    onChange?: (range: DateRange | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    formatString?: string;
    numberOfMonths?: number;
    id?: string;
    'aria-label'?: string;
};

function DatePickerRange({
    value,
    defaultValue,
    onChange,
    placeholder = 'Pick a date range',
    disabled,
    className,
    formatString = 'LLL dd, y',
    numberOfMonths = 2,
    id,
    'aria-label': ariaLabel,
}: DatePickerRangeProps) {
    const [open, setOpen] = React.useState(false);
    const [uncontrolled, setUncontrolled] = React.useState<DateRange | undefined>(defaultValue);
    const range = value !== undefined ? value : uncontrolled;

    const setRange = (next: DateRange | undefined) => {
        if (value === undefined) {
            setUncontrolled(next);
        }
        onChange?.(next);
    };

    const label =
        range?.from && range?.to
            ? `${format(range.from, formatString)} - ${format(range.to, formatString)}`
            : range?.from
              ? format(range.from, formatString)
              : null;

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    id={id}
                    variant="outline"
                    disabled={disabled}
                    aria-label={ariaLabel}
                    data-empty={!label}
                    className={cn(
                        'w-[300px] justify-start text-left font-normal data-[empty=true]:text-muted-foreground',
                        className,
                    )}
                >
                    <CalendarIcon />
                    {label ? label : <span>{placeholder}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={numberOfMonths} />
            </PopoverContent>
        </Popover>
    );
}

export { DatePicker, DatePickerRange };
