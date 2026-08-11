import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import { toast, Toaster } from './index';

const meta = {
    title: 'Components/Sonner',
    component: Toaster,
    parameters: {
        docs: {
            description: {
                component:
                    'Sonner-backed toast surface (same implementation as Toast). Mount `Toaster` once near the app root. Prefer `toast` / `toast.success` / `toast.error` for transient feedback. Import as `Sonner` / `sonnerToast` from `@onaeko/ui` if you want the Sonner-named aliases.',
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
            <Button variant="outline" onClick={() => toast('Event has been created')}>
                Show toast
            </Button>
        </>
    ),
};

export const Success: Story = {
    render: () => (
        <>
            <Toaster />
            <Button onClick={() => toast.success('Profile updated successfully')}>Success toast</Button>
        </>
    ),
};

export const Error: Story = {
    render: () => (
        <>
            <Toaster />
            <Button variant="destructive" onClick={() => toast.error('Something went wrong')}>
                Error toast
            </Button>
        </>
    ),
};

export const PromiseToast: Story = {
    render: () => (
        <>
            <Toaster />
            <Button
                variant="secondary"
                onClick={() =>
                    toast.promise(
                        new Promise<{ name: string }>((resolve) => {
                            setTimeout(() => resolve({ name: 'Event' }), 1200);
                        }),
                        {
                            loading: 'Saving…',
                            success: (data) => `${data.name} saved`,
                            error: 'Could not save',
                        },
                    )
                }
            >
                Promise toast
            </Button>
        </>
    ),
};
