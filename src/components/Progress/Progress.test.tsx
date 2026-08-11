import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Progress } from './Progress';

describe('Progress', () => {
    it('renders progressbar with value', () => {
        render(<Progress value={40} aria-label="Upload progress" />);
        const bar = screen.getByRole('progressbar', { name: 'Upload progress' });
        expect(bar).toBeInTheDocument();
    });

    it('accepts zero value', () => {
        render(<Progress value={0} aria-label="Upload progress" />);
        expect(
            screen.getByRole('progressbar', { name: 'Upload progress' }),
        ).toBeInTheDocument();
    });
});
