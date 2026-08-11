import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
    it('renders default title and description', () => {
        render(<EmptyState />);
        expect(screen.getByRole('heading', { name: 'No data to display' })).toBeInTheDocument();
        expect(screen.getByText(/there is no data available yet/i)).toBeInTheDocument();
    });

    it('renders custom title and description', () => {
        render(<EmptyState title="No projects" description="Create your first project to get started." />);

        expect(screen.getByRole('heading', { name: 'No projects' })).toBeInTheDocument();
        expect(screen.getByText('Create your first project to get started.')).toBeInTheDocument();
    });
});
