import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spinner } from './Spinner';

const meta = {
    title: 'Components/Spinner',
    component: Spinner,
    parameters: {
        docs: {
            description: {
                component:
                    'Indeterminate loading indicator (Loader2) for in-progress operations. Size with Tailwind `size-*` classes. Prefer Progress when completion percentage is known.',
            },
        },
    },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
    args: { className: 'size-3' },
};

export const Large: Story = {
    args: { className: 'size-6' },
};

export const WithLabel: Story = {
    render: () => (
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Spinner className="size-4" />
            Saving changes...
        </div>
    ),
};
