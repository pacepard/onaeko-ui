import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
    REGEXP_ONLY_DIGITS,
} from './InputOTP';

const meta = {
    title: 'Components/InputOTP',
    parameters: {
        docs: {
            description: {
                component:
                    'One-time passcode input built on input-otp. Use for MFA and verification codes. Provide a visible label or aria-label on the root InputOTP. Use InputOTPGroup variant="separate" for individual boxes. Paste, SMS autofill (autoComplete="one-time-code"), pattern, pasteTransformer, and onComplete are supported.',
            },
        },
    },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <InputOTP maxLength={6} aria-label="One-time password">
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
        </InputOTP>
    ),
};

export const Separate: Story = {
    name: 'Separate boxes',
    render: () => (
        <InputOTP maxLength={6} aria-label="One-time password">
            <InputOTPGroup variant="separate">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
        </InputOTP>
    ),
};

export const FourDigits: Story = {
    render: () => (
        <InputOTP
            maxLength={4}
            pattern={REGEXP_ONLY_DIGITS}
            aria-label="PIN"
        >
            <InputOTPGroup variant="separate">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
            </InputOTPGroup>
        </InputOTP>
    ),
};

export const DigitsOnly: Story = {
    render: () => (
        <InputOTP
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS}
            inputMode="numeric"
            aria-label="6-digit code"
        >
            <InputOTPGroup variant="separate">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
        </InputOTP>
    ),
};

export const PasteFriendly: Story = {
    name: 'Paste friendly',
    render: () => (
        <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
                Paste formats like 123-456 or 123 456 — hyphens and spaces are
                stripped.
            </p>
            <InputOTP
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS}
                inputMode="numeric"
                pasteTransformer={(pasted) => pasted.replace(/[\s-]/g, '')}
                aria-label="Pasteable verification code"
            >
                <InputOTPGroup variant="separate">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>
        </div>
    ),
};

export const Controlled: Story = {
    render: function ControlledStory() {
        const [value, setValue] = React.useState('');

        return (
            <div className="flex flex-col gap-2">
                <InputOTP
                    maxLength={6}
                    value={value}
                    onChange={setValue}
                    pattern={REGEXP_ONLY_DIGITS}
                    inputMode="numeric"
                    aria-label="Controlled OTP"
                >
                    <InputOTPGroup variant="separate">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
                <p className="text-sm text-muted-foreground">
                    Value: {value || '(empty)'}
                </p>
            </div>
        );
    },
};

export const OnComplete: Story = {
    render: function OnCompleteStory() {
        const [status, setStatus] = React.useState('Waiting for 6 digits…');

        return (
            <div className="flex flex-col gap-2">
                <InputOTP
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS}
                    inputMode="numeric"
                    onComplete={(code) => setStatus(`Complete: ${code}`)}
                    onChange={(value) => {
                        if (value.length < 6) {
                            setStatus('Waiting for 6 digits…');
                        }
                    }}
                    aria-label="OTP with onComplete"
                >
                    <InputOTPGroup variant="separate">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
                <p className="text-sm text-muted-foreground" role="status">
                    {status}
                </p>
            </div>
        );
    },
};

export const Disabled: Story = {
    render: () => (
        <InputOTP
            maxLength={6}
            disabled
            value="123456"
            aria-label="Disabled OTP"
        >
            <InputOTPGroup variant="separate">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
        </InputOTP>
    ),
};
