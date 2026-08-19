import * as React from 'react';

import { cn } from '@/lib/cn';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                'border-input placeholder:text-placeholder focus-visible:border-ring focus-visible:shadow-[var(--onaeko-shadow-soft)] aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-sm border bg-background px-1.5 py-1.5 text-[15px] leading-snug transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50',
                className,
            )}
            {...props}
        />
    );
}

export { Textarea };
