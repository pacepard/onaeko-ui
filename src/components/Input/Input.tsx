import * as React from 'react';

import { cn } from '@/lib/cn';

export type InputProps = React.ComponentProps<'input'>;

function Input({ className, type, ...props }: InputProps) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                'file:text-foreground placeholder:text-placeholder selection:bg-primary selection:text-primary-foreground border-input flex h-9 w-full min-w-0 rounded-sm border bg-background px-1.5 py-1.5 text-[15px] leading-snug transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
                'focus-visible:border-ring focus-visible:shadow-[var(--onaeko-shadow-soft)]',
                'aria-invalid:border-destructive',
                className,
            )}
            {...props}
        />
    );
}

export { Input };
