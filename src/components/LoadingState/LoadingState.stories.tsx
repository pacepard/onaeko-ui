import type { Meta, StoryObj } from '@storybook/react-vite';

import { LoadingState } from './LoadingState';

const meta = {
    title: 'Components/LoadingState',
    component: LoadingState,
    parameters: {
        docs: {
            description: {
                component:
                    'Placeholder layout shown while a section or page is fetching data. Use for full-region waits where structure is known. Prefer inline Spinner or Skeleton for partial updates within an otherwise loaded view. Include visible messaging or busy semantics so users know loading is in progress.',
            },
        },
    },
} satisfies Meta<typeof LoadingState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomLabel: Story = {
    args: {
        label: 'Fetching projects...',
    },
};
