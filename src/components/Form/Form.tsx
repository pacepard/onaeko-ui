import * as React from 'react';

import { Label } from '@/components/Label';
import { cn } from '@/lib/cn';

function Form({ className, ...props }: React.ComponentProps<'form'>) {
    return (
        <form
            data-slot="form"
            className={cn('flex flex-col gap-6', className)}
            {...props}
        />
    );
}

function FormField({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="form-field"
            className={cn('flex flex-col gap-2', className)}
            {...props}
        />
    );
}

function FormLabel({
    className,
    ...props
}: React.ComponentProps<typeof Label>) {
    return (
        <Label
            data-slot="form-label"
            className={cn(className)}
            {...props}
        />
    );
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>) {
    return (
        <p
            data-slot="form-description"
            className={cn('text-muted-foreground text-sm', className)}
            {...props}
        />
    );
}

function FormMessage({
    className,
    children,
    ...props
}: React.ComponentProps<'p'>) {
    if (!children) {
        return null;
    }

    return (
        <p
            data-slot="form-message"
            role="alert"
            className={cn('text-destructive text-sm', className)}
            {...props}
        >
            {children}
        </p>
    );
}

export { Form, FormField, FormLabel, FormDescription, FormMessage };
