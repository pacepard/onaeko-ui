import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Sortable, SortableContent, SortableItem } from './Sortable';

describe('Sortable', () => {
    it('renders list items', () => {
        render(
            <Sortable value={['a', 'b']} onValueChange={() => {}}>
                <SortableContent>
                    <SortableItem value="a">Item A</SortableItem>
                    <SortableItem value="b">Item B</SortableItem>
                </SortableContent>
            </Sortable>,
        );

        expect(screen.getByText('Item A')).toBeInTheDocument();
        expect(screen.getByText('Item B')).toBeInTheDocument();
    });
});
