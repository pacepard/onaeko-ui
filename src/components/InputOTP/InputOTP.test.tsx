import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { InputOTP, InputOTPGroup, InputOTPSlot, REGEXP_ONLY_DIGITS } from './InputOTP';

afterEach(() => {
    cleanup();
    vi.useRealTimers();
});

describe('InputOTP', () => {
    it('renders slots', () => {
        vi.useFakeTimers();
        const { unmount } = render(
            <InputOTP maxLength={4} aria-label="OTP">
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                </InputOTPGroup>
            </InputOTP>,
        );

        expect(screen.getByLabelText('OTP')).toBeInTheDocument();
        expect(document.querySelectorAll('[data-slot=input-otp-slot]')).toHaveLength(4);

        unmount();
        vi.runOnlyPendingTimers();
    });

    it('defaults autocomplete to one-time-code', () => {
        vi.useFakeTimers();
        const { unmount } = render(
            <InputOTP maxLength={4} aria-label="OTP autofill">
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                </InputOTPGroup>
            </InputOTP>,
        );

        expect(screen.getByLabelText('OTP autofill')).toHaveAttribute('autocomplete', 'one-time-code');

        unmount();
        vi.runOnlyPendingTimers();
    });

    it('applies separate variant to group and slots', () => {
        vi.useFakeTimers();
        const { unmount } = render(
            <InputOTP maxLength={4} aria-label="Separate OTP">
                <InputOTPGroup variant="separate">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                </InputOTPGroup>
            </InputOTP>,
        );

        expect(document.querySelector('[data-slot=input-otp-group]')).toHaveAttribute('data-variant', 'separate');
        expect(document.querySelectorAll('[data-slot=input-otp-slot][data-variant=separate]')).toHaveLength(4);

        unmount();
        vi.runOnlyPendingTimers();
    });

    it('accepts typed digits and calls onComplete', async () => {
        vi.useFakeTimers({ shouldAdvanceTime: true });
        const user = userEvent.setup({
            advanceTimers: vi.advanceTimersByTime,
        });
        const onComplete = vi.fn();

        const { unmount } = render(
            <InputOTP
                maxLength={4}
                pattern={REGEXP_ONLY_DIGITS}
                pushPasswordManagerStrategy="none"
                onComplete={onComplete}
                aria-label="Typed OTP"
            >
                <InputOTPGroup variant="separate">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                </InputOTPGroup>
            </InputOTP>,
        );

        const input = screen.getByLabelText('Typed OTP');
        await user.click(input);
        await user.keyboard('1234');

        expect(input).toHaveValue('1234');
        expect(onComplete).toHaveBeenCalledWith('1234');

        unmount();
        await vi.runOnlyPendingTimersAsync();
    });

    it('pastes hyphenated codes via pasteTransformer', async () => {
        vi.useFakeTimers({ shouldAdvanceTime: true });
        const user = userEvent.setup({
            advanceTimers: vi.advanceTimersByTime,
        });
        const onChange = vi.fn();

        const { unmount } = render(
            <InputOTP
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS}
                pushPasswordManagerStrategy="none"
                pasteTransformer={(pasted) => pasted.replace(/[\s-]/g, '')}
                onChange={onChange}
                aria-label="Paste OTP"
            >
                <InputOTPGroup variant="separate">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>,
        );

        const input = screen.getByLabelText('Paste OTP');
        await user.click(input);
        await user.paste('123-456');

        expect(onChange).toHaveBeenCalledWith('123456');
        expect(input).toHaveValue('123456');

        unmount();
        await vi.runOnlyPendingTimersAsync();
    });
});
