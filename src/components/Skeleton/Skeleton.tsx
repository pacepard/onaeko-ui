import * as React from 'react';

import { cn } from '@/lib/cn';

export type SkeletonProps = React.ComponentProps<'div'>;

function Skeleton({ className, ...props }: SkeletonProps) {
    return <div data-slot="skeleton" className={cn('bg-accent animate-pulse rounded-md', className)} {...props} />;
}

export { Skeleton };
