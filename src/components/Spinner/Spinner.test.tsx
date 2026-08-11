import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Spinner } from './Spinner';

describe('Spinner', () => {
    it('renders loading status with animate-spin', () => {
        render(<Spinner />);
        const el = screen.getByRole('status', { name: 'Loading' });
        expect(el).toBeInTheDocument();
        expect(el.tagName.toLowerCase()).toBe('svg');
        expect(el).toHaveClass('animate-spin');
        expect(el).toHaveAttribute('data-slot', 'spinner');
    });
});
