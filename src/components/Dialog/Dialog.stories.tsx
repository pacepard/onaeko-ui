import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './Dialog';

const meta = {
    title: 'Components/Dialog',
    component: Dialog,
    parameters: {
        docs: {
            description: {
                component:
                    'Modal overlay for focused tasks such as edits, wizards, or confirmations that need the full viewport. Compose `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogDescription`, and `DialogFooter` for structure; focus is trapped and Escape closes the dialog. Use for non-destructive or reversible flows; prefer AlertDialog when the user must explicitly confirm irreversible or high-risk actions. Provide a visible title and description so screen reader users understand purpose and outcome.',
            },
        },
    },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit project</DialogTitle>
                    <DialogDescription>
                        Make changes to your project details.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="secondary">Cancel</Button>
                    <Button>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
};

export const Confirmation: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Confirm action</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Confirm changes</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to apply these changes?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="secondary">Cancel</Button>
                    <Button>Confirm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
};

export const Destructive: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive">Delete</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete project</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="secondary">Cancel</Button>
                    <Button variant="destructive">Delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
};
