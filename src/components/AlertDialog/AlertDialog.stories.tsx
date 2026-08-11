import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from './AlertDialog';

const meta = {
    title: 'Components/AlertDialog',
    component: AlertDialog,
    parameters: {
        docs: {
            description: {
                component:
                    'Modal confirmation that blocks the page until the user chooses an action, ideal for destructive or irreversible operations. Compose trigger, content, title, description, and cancel/confirm actions. Use Dialog for editable content; avoid AlertDialog for low-stakes dismissible notices. Focus is trapped; label confirm and cancel actions distinctly for assistive tech.',
            },
        },
    },
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Show alert</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. It will permanently delete your account and remove your data from
                        our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    ),
};

export const Destructive: Story = {
    render: () => (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete project</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Delete this project?</AlertDialogTitle>
                    <AlertDialogDescription>
                        All associated data will be removed. This cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    ),
};
