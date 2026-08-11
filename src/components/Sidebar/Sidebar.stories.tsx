import type { Meta, StoryObj } from '@storybook/react-vite';
import { HomeIcon, InboxIcon, SettingsIcon } from 'lucide-react';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from './Sidebar';

const meta = {
    title: 'Components/Sidebar',
    component: SidebarProvider,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Application sidebar shell. Root supports `variant` (sidebar, floating, inset) and `side` (left, right). Menu buttons support `variant` and `size`.',
            },
        },
    },
} satisfies Meta<typeof SidebarProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

function SidebarDemo({
    variant = 'sidebar',
    side = 'left',
    title = 'Dashboard',
}: {
    variant?: 'sidebar' | 'floating' | 'inset';
    side?: 'left' | 'right';
    title?: string;
}) {
    return (
        <SidebarProvider>
            <Sidebar variant={variant} side={side}>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton isActive>
                                        <HomeIcon />
                                        <span>Home</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <InboxIcon />
                                        <span>Inbox</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton variant="outline">
                                        <SettingsIcon />
                                        <span>Settings</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <header className="flex h-14 items-center gap-2 border-b px-4">
                    <SidebarTrigger />
                    <span className="text-sm font-medium">{title}</span>
                </header>
                <main className="p-6">
                    <p className="text-muted-foreground text-sm">Main content area beside the sidebar.</p>
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}

export const Default: Story = {
    render: () => <SidebarDemo />,
};

export const Floating: Story = {
    render: () => <SidebarDemo variant="floating" title="Floating sidebar" />,
};

export const Inset: Story = {
    render: () => <SidebarDemo variant="inset" title="Inset sidebar" />,
};

export const RightSide: Story = {
    name: 'Right side',
    render: () => <SidebarDemo side="right" title="Right sidebar" />,
};
