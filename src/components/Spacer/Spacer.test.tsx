import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Spacer } from './Spacer';

describe('Spacer', () => {
    it('applies numeric height and width as inline styles', () => {
        const { container } = render(<Spacer height={16} width={8} />);
        const el = container.querySelector('[data-slot="spacer"]') as HTMLElement;

        expect(el).toBeInTheDocument();
        expect(el).toHaveAttribute('aria-hidden', 'true');
        expect(el.style.height).toBe('16px');
        expect(el.style.width).toBe('8px');
    });

    it('applies string height and width', () => {
        const { container } = render(<Spacer height="1rem" width="100%" />);
        const el = container.querySelector('[data-slot="spacer"]') as HTMLElement;

        expect(el.style.height).toBe('1rem');
        expect(el.style.width).toBe('100%');
    });

    it('defaults missing axes to 0', () => {
        const { container } = render(<Spacer />);
        const el = container.querySelector('[data-slot="spacer"]') as HTMLElement;

        expect(el.style.height).toBe('0px');
        expect(el.style.width).toBe('0px');
    });

    it('merges className', () => {
        const { container } = render(<Spacer height={8} className="custom-spacer" />);
        const el = container.querySelector('[data-slot="spacer"]');

        expect(el).toHaveClass('custom-spacer');
        expect(el).toHaveClass('shrink-0');
    });
});
