import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: {
        docs: {
            description: {
                component:
                    'Tabbed interface for switching between related panels. Use for settings groups or peer sections. Avoid hiding required workflow steps across tabs. Supports arrow-key navigation and ARIA tab roles.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: () => (
        <Tabs defaultValue="account" className="w-full max-w-md">
            <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <p className="text-muted-foreground text-sm">Make changes to your account settings here.</p>
            </TabsContent>
            <TabsContent value="password">
                <p className="text-muted-foreground text-sm">Change your password here.</p>
            </TabsContent>
        </Tabs>
    ),
};

export const ThreeTabs: Story = {
    render: () => (
        <Tabs defaultValue="overview" className="w-full max-w-lg">
            <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">Overview content</TabsContent>
            <TabsContent value="analytics">Analytics content</TabsContent>
            <TabsContent value="reports">Reports content</TabsContent>
        </Tabs>
    ),
};
