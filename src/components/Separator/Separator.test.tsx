import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Separator } from './Separator';

describe('Separator', () => {
    it('renders separator element', () => {
        const { container } = render(
            <Separator decorative={false} orientation="horizontal" />,
        );

        expect(
            container.querySelector('[data-slot="separator"]'),
        ).toBeInTheDocument();
        expect(screen.getByRole('separator')).toBeInTheDocument();
    });
});
