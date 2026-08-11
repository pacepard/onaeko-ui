import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/cn';

const gridVariants = cva('grid w-full', {
    variants: {
        cols: {
            1: 'grid-cols-1',
            2: 'grid-cols-1 sm:grid-cols-2',
            3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
            4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        },
        gap: {
            none: 'gap-0',
            sm: 'gap-2',
            md: 'gap-4',
            lg: 'gap-6',
            xl: 'gap-8',
        },
    },
    defaultVariants: {
        cols: 1,
        gap: 'md',
    },
});

export type GridProps = React.ComponentProps<'div'> &
    VariantProps<typeof gridVariants>;

function Grid({ className, cols, gap, ...props }: GridProps) {
    return (
        <div
            data-slot="grid"
            className={cn(gridVariants({ cols, gap }), className)}
            {...props}
        />
    );
}

export { Grid, gridVariants };
