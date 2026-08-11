import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ErrorState } from './ErrorState';

describe('ErrorState', () => {
    it('renders default title and description with alert role', () => {
        render(<ErrorState />);
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Something went wrong' })).toBeInTheDocument();
        expect(screen.getByText('An unexpected error occurred. Please try again.')).toBeInTheDocument();
    });

    it('renders custom copy', () => {
        render(<ErrorState title="Load failed" description="We could not fetch your data." />);

        expect(screen.getByRole('heading', { name: 'Load failed' })).toBeInTheDocument();
        expect(screen.getByText('We could not fetch your data.')).toBeInTheDocument();
    });
});
