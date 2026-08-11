import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/cn';

const containerVariants = cva('mx-auto w-full px-4 sm:px-6', {
    variants: {
        size: {
            sm: 'max-w-3xl',
            md: 'max-w-5xl',
            lg: 'max-w-7xl',
            full: 'max-w-none',
        },
    },
    defaultVariants: {
        size: 'lg',
    },
});

export type ContainerProps = React.ComponentProps<'div'> & VariantProps<typeof containerVariants>;

function Container({ className, size, ...props }: ContainerProps) {
    return <div data-slot="container" className={cn(containerVariants({ size }), className)} {...props} />;
}

export { Container, containerVariants };
