import { AlertCircleIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/cn';

export type ErrorStateProps = React.ComponentProps<'div'> & {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
};

function ErrorState({
    className,
    title = 'Something went wrong',
    description = 'An unexpected error occurred. Please try again.',
    icon,
    children,
    ...props
}: ErrorStateProps) {
    return (
        <div
            data-slot="error-state"
            role="alert"
            className={cn(
                'flex flex-col items-center justify-center gap-6 py-16',
                className,
            )}
            {...props}
        >
            <div className="bg-destructive/10 flex size-20 items-center justify-center rounded-full">
                {icon ?? (
                    <AlertCircleIcon
                        className="text-destructive size-10"
                        aria-hidden
                    />
                )}
            </div>
            <div className="space-y-2 text-center">
                <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                <p className="text-muted-foreground max-w-md text-sm">
                    {description}
                </p>
            </div>
            {children ? <div className="mt-2">{children}</div> : null}
        </div>
    );
}

export { ErrorState };
