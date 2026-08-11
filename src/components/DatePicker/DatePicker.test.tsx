import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
    it('renders placeholder trigger', () => {
        render(<DatePicker aria-label="Event date" placeholder="Pick a date" />);
        expect(screen.getByRole('button', { name: 'Event date' })).toBeInTheDocument();
        expect(screen.getByText('Pick a date')).toBeInTheDocument();
    });
});
