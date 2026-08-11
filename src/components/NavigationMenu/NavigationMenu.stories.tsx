import type { Meta, StoryObj } from '@storybook/react-vite';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from './NavigationMenu';

const meta = {
    title: 'Components/NavigationMenu',
    component: NavigationMenu,
    parameters: {
        docs: {
            description: {
                component:
                    'Site or app navigation with flyout panels (Base UI Navigation Menu). Prefer DropdownMenu for action menus.',
            },
        },
    },
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[240px] gap-1 p-1">
                            <li>
                                <NavigationMenuLink href="#">Platform</NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="#">Design system</NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="#">Docs</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    ),
};
