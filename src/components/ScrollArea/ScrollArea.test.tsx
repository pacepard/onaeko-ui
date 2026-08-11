import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ScrollArea } from './ScrollArea';

describe('ScrollArea', () => {
    it('renders children inside the viewport', () => {
        render(
            <ScrollArea className="h-24 w-48">
                <p>Scrollable content</p>
            </ScrollArea>,
        );

        expect(screen.getByText('Scrollable content')).toBeInTheDocument();
    });
});
