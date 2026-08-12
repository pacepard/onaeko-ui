import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spacer } from './Spacer';

const meta = {
    title: 'Components/Spacer',
    component: Spacer,
    parameters: {
        docs: {
            description: {
                component:
                    'Empty layout gap via height and/or width. Prefer Stack gap or CSS spacing for most layouts; use Spacer when you need an explicit empty block between siblings (e.g. error pages). Decorative only (aria-hidden).',
            },
        },
    },
    args: {
        height: 16,
        width: 0,
    },
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
    render: (args) => (
        <div className="flex w-full max-w-sm flex-col items-start border border-dashed p-4">
            <span className="text-sm">Above</span>
            <Spacer {...args} />
            <span className="text-sm">Below</span>
        </div>
    ),
};

export const Horizontal: Story = {
    args: {
        height: 0,
        width: 24,
    },
    render: (args) => (
        <div className="flex items-center border border-dashed p-4">
            <span className="text-sm">Left</span>
            <Spacer {...args} />
            <span className="text-sm">Right</span>
        </div>
    ),
};

export const BothAxes: Story = {
    args: {
        height: 48,
        width: 48,
        className: 'bg-muted',
    },
    render: (args) => (
        <div className="flex items-center gap-2 border border-dashed p-4">
            <span className="text-sm">Before</span>
            <Spacer {...args} />
            <span className="text-sm">After</span>
        </div>
    ),
};
