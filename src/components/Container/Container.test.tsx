import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Container } from './Container';

describe('Container', () => {
    it('renders children', () => {
        render(<Container>Page content</Container>);
        expect(screen.getByText('Page content')).toBeInTheDocument();
    });
});
