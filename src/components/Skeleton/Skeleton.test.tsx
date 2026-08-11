import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
    it('renders placeholder element', () => {
        const { container } = render(<Skeleton data-testid="skeleton-block" />);
        expect(
            container.querySelector('[data-slot="skeleton"]'),
        ).toBeInTheDocument();
    });
});
