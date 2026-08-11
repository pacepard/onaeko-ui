import * as React from 'react';

import { Spinner } from '@/components/Spinner';
import { cn } from '@/lib/cn';

export type LoadingStateProps = React.ComponentProps<'div'> & {
    label?: string;
};

function LoadingState({
    className,
    label = 'Loading',
    ...props
}: LoadingStateProps) {
    return (
        <div
            data-slot="loading-state"
            role="status"
            aria-live="polite"
            className={cn(
                'text-muted-foreground flex flex-col items-center justify-center gap-3 py-16',
                className,
            )}
            {...props}
        >
            <Spinner className="size-6" />
            <span className="text-sm">{label}</span>
        </div>
    );
}

export { LoadingState };
