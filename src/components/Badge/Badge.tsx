import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/cn';

const badgeVariants = cva(
    'inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
    {
        variants: {
            variant: {
                primary: 'border-transparent bg-card text-primary [a&]:hover:bg-accent',
                secondary: 'border-transparent bg-muted text-muted-foreground [a&]:hover:bg-accent',
                destructive: 'border-transparent bg-destructive text-destructive-foreground [a&]:hover:opacity-90',
                outline: 'border-border bg-background text-foreground [a&]:hover:bg-accent',
            },
        },
        defaultVariants: {
            variant: 'primary',
        },
    },
);

export type BadgeProps = React.ComponentProps<'span'> &
    VariantProps<typeof badgeVariants> & {
        asChild?: boolean;
    };

function Badge({ className, variant, asChild = false, ...props }: BadgeProps) {
    const Comp = asChild ? Slot : 'span';

    return <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
