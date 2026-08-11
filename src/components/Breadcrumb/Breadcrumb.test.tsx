import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from './Breadcrumb';

describe('Breadcrumb', () => {
    it('renders navigation landmark with trail items', () => {
        render(
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Projects</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>,
        );

        expect(screen.getByRole('navigation', { name: 'breadcrumb' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
        expect(screen.getByText('Projects')).toBeInTheDocument();
    });
});
