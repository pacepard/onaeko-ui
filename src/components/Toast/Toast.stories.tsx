import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import { toast, Toaster } from './Toast';

const meta = {
    title: 'Components/Toast',
    component: Toaster,
    parameters: {
        docs: {
            description: {
                component:
                    'Viewport for transient toast notifications after user actions. Mount `Toaster` once near the app root and fire toasts from app logic. Use for lightweight success or neutral feedback; not for blocking errors or decisions that need a modal. Critical failures should also appear in persistent UI such as Alert.',
            },
        },
    },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <>
            <Toaster />
            <Button
                variant="outline"
                onClick={() => toast('Event has been created')}
            >
                Show toast
            </Button>
        </>
    ),
};

export const Success: Story = {
    render: () => (
        <>
            <Toaster />
            <Button
                onClick={() =>
                    toast.success('Profile updated successfully')
                }
            >
                Success toast
            </Button>
        </>
    ),
};

export const Error: Story = {
    render: () => (
        <>
            <Toaster />
            <Button
                variant="destructive"
                onClick={() => toast.error('Something went wrong')}
            >
                Error toast
            </Button>
        </>
    ),
};
