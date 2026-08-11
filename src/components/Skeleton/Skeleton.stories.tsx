import type { Meta, StoryObj } from '@storybook/react-vite';

import { Skeleton } from './Skeleton';

const meta = {
    title: 'Components/Skeleton',
    component: Skeleton,
    parameters: {
        docs: {
            description: {
                component:
                    'Placeholder blocks that mirror loading content shape to reduce layout shift. Use while structured data is fetching and layout is predictable. Replace with real content quickly; prefer Spinner for indeterminate small waits. Treat as decorative loading chrome-hide from assistive tech when it does not convey meaningful status.',
            },
        },
    },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: 'h-4 w-48',
    },
};

export const Avatar: Story = {
    args: {
        className: 'size-12 rounded-full',
    },
};
