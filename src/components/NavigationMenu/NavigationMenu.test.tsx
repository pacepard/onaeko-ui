import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './NavigationMenu';

describe('NavigationMenu', () => {
    it('renders links', () => {
        render(
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#docs">Docs</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>,
        );

        expect(screen.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '#docs');
    });
});
