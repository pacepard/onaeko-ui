import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/cn';

const stackVariants = cva('flex', {
    variants: {
        direction: {
            row: 'flex-row',
            column: 'flex-col',
        },
        gap: {
            none: 'gap-0',
            sm: 'gap-2',
            md: 'gap-4',
            lg: 'gap-6',
            xl: 'gap-8',
        },
        align: {
            start: 'items-start',
            center: 'items-center',
            end: 'items-end',
            stretch: 'items-stretch',
        },
        justify: {
            start: 'justify-start',
            center: 'justify-center',
            end: 'justify-end',
            between: 'justify-between',
        },
    },
    defaultVariants: {
        direction: 'column',
        gap: 'md',
        align: 'stretch',
        justify: 'start',
    },
});

export type StackProps = React.ComponentProps<'div'> & VariantProps<typeof stackVariants>;

function Stack({ className, direction, gap, align, justify, ...props }: StackProps) {
    return (
        <div
            data-slot="stack"
            className={cn(stackVariants({ direction, gap, align, justify }), className)}
            {...props}
        />
    );
}

export { Stack, stackVariants };
