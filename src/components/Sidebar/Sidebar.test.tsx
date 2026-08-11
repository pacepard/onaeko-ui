import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SidebarProvider, SidebarTrigger } from './Sidebar';

describe('Sidebar', () => {
    it('renders SidebarTrigger inside SidebarProvider', () => {
        render(
            <SidebarProvider>
                <SidebarTrigger />
            </SidebarProvider>,
        );

        expect(screen.getByRole('button', { name: 'Toggle Sidebar' })).toBeInTheDocument();
    });
});
