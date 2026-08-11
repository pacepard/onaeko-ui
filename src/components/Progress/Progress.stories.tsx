import type { Meta, StoryObj } from '@storybook/react-vite';

import { Progress } from './Progress';

const meta = {
    title: 'Components/Progress',
    component: Progress,
    parameters: {
        docs: {
            description: {
                component:
                    'Determinate progress bar for tasks with a known completion ratio. Pass `value` between 0 and 100 for uploads, installs, or step completion. Use Spinner or Skeleton when duration or percentage is unknown. Expose progress to assistive technologies with appropriate value attributes when the bar conveys status.',
            },
        },
    },
    args: {
        value: 45,
    },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <Progress {...args} className="w-full max-w-sm" />
    ),
};

export const Empty: Story = {
    render: () => <Progress value={0} className="w-full max-w-sm" />,
};

export const Complete: Story = {
    render: () => <Progress value={100} className="w-full max-w-sm" />,
};

export const Indeterminate: Story = {
    render: () => <Progress className="w-full max-w-sm" />,
};
