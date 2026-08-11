import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LoadingState } from './LoadingState';

describe('LoadingState', () => {
    it('renders default loading label and status', () => {
        render(<LoadingState />);
        expect(
            document.querySelector('[data-slot="loading-state"]'),
        ).toBeInTheDocument();
        expect(screen.getByText('Loading')).toBeInTheDocument();
        expect(screen.getByLabelText('Loading')).toBeInTheDocument();
    });

    it('renders custom label', () => {
        render(<LoadingState label="Fetching projects" />);
        expect(screen.getByText('Fetching projects')).toBeInTheDocument();
    });
});
