import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from './Drawer';

const meta = {
    title: 'Components/Drawer',
    component: Drawer,
    parameters: {
        docs: {
            description: {
                component:
                    'Mobile-oriented bottom sheet overlay for filters, forms, or secondary flows. Compose trigger, content, header, and footer similar to Dialog. Prefer Sheet or Dialog on large screens when a side or center modal fits better. Manage focus while open and ensure dismiss gestures do not trap users without an alternative close path.',
            },
        },
    },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">Open drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Edit profile</DrawerTitle>
                    <DrawerDescription>Make changes to your profile here.</DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                    <p className="text-muted-foreground text-sm">Drawer body content goes here.</p>
                </div>
                <DrawerFooter>
                    <Button>Save</Button>
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    ),
};

export const Bottom: Story = {
    render: () => (
        <Drawer direction="bottom">
            <DrawerTrigger asChild>
                <Button>Open bottom drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Share link</DrawerTitle>
                    <DrawerDescription>Anyone with the link can view this item.</DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    ),
};

export const Left: Story = {
    render: () => (
        <Drawer direction="left">
            <DrawerTrigger asChild>
                <Button variant="outline">Open left drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Menu</DrawerTitle>
                    <DrawerDescription>Side drawer from the left.</DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    ),
};

export const Right: Story = {
    render: () => (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <Button variant="outline">Open right drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Details</DrawerTitle>
                    <DrawerDescription>Side drawer from the right.</DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    ),
};
