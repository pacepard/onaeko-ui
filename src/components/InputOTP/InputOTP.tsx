'use client';

import * as React from 'react';
import {
    OTPInput,
    OTPInputContext,
    REGEXP_ONLY_CHARS,
    REGEXP_ONLY_DIGITS,
    REGEXP_ONLY_DIGITS_AND_CHARS,
} from 'input-otp';
import { MinusIcon } from 'lucide-react';

import { cn } from '@/lib/cn';

type InputOTPSlotVariant = 'connected' | 'separate';

const InputOTPGroupContext = React.createContext<{
    variant: InputOTPSlotVariant;
}>({
    variant: 'connected',
});

function InputOTP({
    className,
    containerClassName,
    autoComplete = 'one-time-code',
    ...props
}: React.ComponentProps<typeof OTPInput> & {
    containerClassName?: string;
}) {
    return (
        <OTPInput
            data-slot="input-otp"
            autoComplete={autoComplete}
            containerClassName={cn('cn-input-otp flex items-center gap-2 has-disabled:opacity-50', containerClassName)}
            spellCheck={false}
            className={cn('disabled:cursor-not-allowed', className)}
            {...props}
        />
    );
}

function InputOTPGroup({
    className,
    variant = 'connected',
    ...props
}: React.ComponentProps<'div'> & {
    variant?: InputOTPSlotVariant;
}) {
    return (
        <InputOTPGroupContext.Provider value={{ variant }}>
            <div
                data-slot="input-otp-group"
                data-variant={variant}
                className={cn(
                    'flex items-center',
                    variant === 'connected' &&
                        'rounded-lg has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40',
                    variant === 'separate' && 'gap-2',
                    className,
                )}
                {...props}
            />
        </InputOTPGroupContext.Provider>
    );
}

function InputOTPSlot({
    index,
    className,
    variant: variantProp,
    ...props
}: React.ComponentProps<'div'> & {
    index: number;
    variant?: InputOTPSlotVariant;
}) {
    const inputOTPContext = React.useContext(OTPInputContext);
    const { variant: groupVariant } = React.useContext(InputOTPGroupContext);
    const variant = variantProp ?? groupVariant;
    const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

    return (
        <div
            data-slot="input-otp-slot"
            data-active={isActive}
            data-variant={variant}
            className={cn(
                'relative flex size-8 items-center justify-center border-input text-sm transition-all outline-none aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-3 data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40',
                variant === 'separate'
                    ? 'rounded-lg border'
                    : 'border-y border-r first:rounded-l-lg first:border-l last:rounded-r-lg',
                className,
            )}
            {...props}
        >
            {char}
            {hasFakeCaret && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
                </div>
            )}
        </div>
    );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="input-otp-separator"
            className="flex items-center [&_svg:not([class*='size-'])]:size-4"
            role="separator"
            {...props}
        >
            <MinusIcon />
        </div>
    );
}

export {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator,
    REGEXP_ONLY_CHARS,
    REGEXP_ONLY_DIGITS,
    REGEXP_ONLY_DIGITS_AND_CHARS,
};
export type { InputOTPSlotVariant };
