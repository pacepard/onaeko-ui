import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Badge } from './Badge';

describe('Badge', () => {
    it('renders label text', () => {
        render(<Badge>New</Badge>);
        expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('forwards native attributes', () => {
        render(<Badge data-testid="status-badge">Active</Badge>);
        expect(screen.getByTestId('status-badge')).toHaveTextContent('Active');
    });
});
