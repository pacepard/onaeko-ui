import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from './Pagination';

describe('Pagination', () => {
    it('renders navigation landmark with page links', () => {
        render(
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>,
        );

        expect(
            screen.getByRole('navigation', { name: 'pagination' }),
        ).toBeInTheDocument();
        expect(screen.getByRole('link', { name: '1' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: '2' })).toBeInTheDocument();
    });
});
