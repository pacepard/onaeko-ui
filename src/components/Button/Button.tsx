import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { Spinner } from '@/components/Spinner';
import { cn } from '@/lib/cn';

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                /** @deprecated Prefer `primary`. Kept for shadcn/ui parity. */
                default: 'rounded-full bg-primary text-primary-foreground active:bg-primary-active active:scale-[0.97]',
                primary: 'rounded-full bg-primary text-primary-foreground active:bg-primary-active active:scale-[0.97]',
                secondary:
                    'rounded-full bg-secondary text-secondary-foreground shadow-[var(--onaeko-shadow-soft)] active:scale-[0.97]',
                destructive:
                    'rounded-full bg-destructive text-destructive-foreground active:opacity-90 focus-visible:ring-destructive',
                outline: 'rounded-md border border-border bg-background text-foreground hover:bg-accent',
                ghost: 'rounded-md hover:bg-accent hover:text-accent-foreground',
                link: 'rounded-md text-primary underline-offset-4 hover:underline',
            },
            size: {
                /** @deprecated Prefer `md`. Kept for shadcn/ui parity. */
                default: 'h-9 px-4 py-2 has-[>svg]:px-3',
                xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
                sm: 'h-8 gap-1.5 px-3 text-sm has-[>svg]:px-2.5',
                md: 'h-9 px-4 py-2 has-[>svg]:px-3',
                lg: 'h-10 px-6 has-[>svg]:px-4',
                icon: 'size-9 rounded-full',
                'icon-xs': "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
                'icon-sm': 'size-7 rounded-md',
                'icon-lg': 'size-10 rounded-full',
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
