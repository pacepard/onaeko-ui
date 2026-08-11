import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
    it('renders children', () => {
        render(<Button>Continue</Button>);
        expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument();
    });

    it('fires click handlers', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(<Button onClick={onClick}>Continue</Button>);
        await user.click(screen.getByRole('button', { name: 'Continue' }));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('supports disabled state', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(
            <Button disabled onClick={onClick}>
                Continue
            </Button>,
        );
        const button = screen.getByRole('button', { name: 'Continue' });
        expect(button).toBeDisabled();
        await user.click(button);
        expect(onClick).not.toHaveBeenCalled();
    });

    it('supports loading state', () => {
        render(<Button loading>Saving</Button>);
        const button = screen.getByRole('button', { name: /Saving/i });
        expect(button).toBeDisabled();
        expect(button).toHaveAttribute('aria-busy', 'true');
        expect(screen.getByLabelText('Loading')).toBeInTheDocument();
    });

    it('renders iconBefore and iconAfter', () => {
        render(
            <Button
                iconBefore={<span data-testid="icon-before">B</span>}
                iconAfter={<span data-testid="icon-after">A</span>}
            >
                Continue
            </Button>,
        );

        expect(screen.getByTestId('icon-before')).toBeInTheDocument();
        expect(screen.getByTestId('icon-after')).toBeInTheDocument();
    });

    it('replaces iconBefore with spinner and hides iconAfter while loading', () => {
        render(
            <Button
                loading
                iconBefore={<span data-testid="icon-before">B</span>}
                iconAfter={<span data-testid="icon-after">A</span>}
            >
                Saving
            </Button>,
        );

        expect(screen.queryByTestId('icon-before')).not.toBeInTheDocument();
        expect(screen.queryByTestId('icon-after')).not.toBeInTheDocument();
        expect(screen.getByLabelText('Loading')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Saving/i })).toBeInTheDocument();
    });
});
