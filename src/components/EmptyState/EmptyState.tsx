import { InboxIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/cn';

export type EmptyStateProps = React.ComponentProps<'div'> & {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
};

function EmptyState({
    className,
    title = 'No data to display',
    description = 'It looks like there is no data available yet. Try adding some new items.',
    icon,
    children,
    ...props
}: EmptyStateProps) {
    return (
        <div
            data-slot="empty-state"
            className={cn(
                'flex flex-col items-center justify-center gap-6 py-16',
                className,
            )}
            {...props}
        >
            <div className="bg-muted flex size-20 items-center justify-center rounded-full">
                {icon ?? (
                    <InboxIcon
                        className="text-muted-foreground size-10"
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

export { EmptyState };
