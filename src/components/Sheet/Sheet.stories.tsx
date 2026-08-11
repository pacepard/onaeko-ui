import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './Sheet';

const meta = {
    title: 'Components/Sheet',
    component: Sheet,
    parameters: {
        docs: {
            description: {
                component:
                    'Slide-in panel from an screen edge for secondary tasks, filters, or detail views. Compose trigger, content, header, and footer like Dialog but anchored to a side. Prefer Dialog for centered modal tasks; use Drawer for mobile bottom sheets when appropriate. Focus is managed while open; provide a clear close control.',
            },
        },
    },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open sheet</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you
                        are done.
                    </SheetDescription>
                </SheetHeader>
                <div className="px-4 py-2">
                    <p className="text-muted-foreground text-sm">
                        Sheet body content.
                    </p>
                </div>
                <SheetFooter>
                    <Button>Save changes</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    ),
};

export const Left: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger asChild>
                <Button>Open left sheet</Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription>
                        Browse sections from the side panel.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    ),
};

export const Top: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open top sheet</Button>
            </SheetTrigger>
            <SheetContent side="top">
                <SheetHeader>
                    <SheetTitle>Announcements</SheetTitle>
                    <SheetDescription>
                        Banner-style sheet from the top edge.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    ),
};

export const Bottom: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open bottom sheet</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
                <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                        Bottom edge panel for filter controls.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    ),
};
