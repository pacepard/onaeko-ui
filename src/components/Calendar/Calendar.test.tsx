import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Calendar } from './Calendar';

describe('Calendar', () => {
    it('renders the calendar grid', () => {
        render(<Calendar mode="single" />);
        expect(screen.getByRole('grid')).toBeInTheDocument();
        expect(document.querySelector('[data-slot=calendar]')).toBeInTheDocument();
    });

    it('supports caption dropdown layout', () => {
        render(<Calendar mode="single" captionLayout="dropdown" className="rounded-lg border" />);
        expect(screen.getByRole('grid')).toBeInTheDocument();
    });
});
