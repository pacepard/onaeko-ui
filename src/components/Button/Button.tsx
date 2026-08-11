import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { Spinner } from '@/components/Spinner';
import { cn } from '@/lib/cn';

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                /** @deprecated Prefer `primary`. Kept for shadcn/ui parity. */
                default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
                primary: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
                secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
                destructive:
                    'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
                outline:
                    'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
                ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                /** @deprecated Prefer `md`. Kept for shadcn/ui parity. */
                default: 'h-9 px-4 py-2 has-[>svg]:px-3',
                xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
                sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
                md: 'h-9 px-4 py-2 has-[>svg]:px-3',
                lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
                icon: 'size-9',
                'icon-xs': "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
                'icon-sm': 'size-7 rounded-md',
                'icon-lg': 'size-10',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    },
);

export type ButtonProps = React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
        loading?: boolean;
        /** Icon rendered before the label. Replaced by a spinner while loading. */
        iconBefore?: React.ReactNode;
        /** Icon rendered after the label. Hidden while loading. */
        iconAfter?: React.ReactNode;
    };

function Button({
    className,
    variant,
    size,
    asChild = false,
    loading = false,
    disabled,
    iconBefore,
    iconAfter,
    children,
    ...props
}: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = Boolean(disabled || loading);

    const before = loading ? <Spinner className="size-3.5 opacity-90" data-slot="button-spinner" /> : iconBefore;

    const after = loading ? null : iconAfter;

    if (asChild) {
        return (
            <Comp
                data-slot="button"
                className={cn(buttonVariants({ variant, size, className }))}
                aria-busy={loading || undefined}
                aria-disabled={isDisabled || undefined}
                {...props}
            >
                {children}
            </Comp>
        );
    }

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            disabled={isDisabled}
            aria-busy={loading || undefined}
            aria-disabled={isDisabled || undefined}
            {...props}
        >
            {before}
            {children}
            {after}
        </Comp>
    );
}

export { Button, buttonVariants };
