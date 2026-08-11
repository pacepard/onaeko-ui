import type { Meta, StoryObj } from '@storybook/react-vite';

import { Separator } from './Separator';

const meta = {
    title: 'Components/Separator',
    component: Separator,
    parameters: {
        docs: {
            description: {
                component:
                    'Visual divider between sections, horizontal or vertical. Use to separate groups in menus, sidebars, or stacked content. Avoid relying on separators alone for document structure-use headings where hierarchy matters. Decorative separators can be hidden from assistive technologies when purely visual.',
            },
        },
    },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    render: () => (
        <div className="w-full max-w-sm space-y-4">
            <div className="text-sm">Section above</div>
            <Separator />
            <div className="text-sm">Section below</div>
        </div>
    ),
};

export const Vertical: Story = {
    render: () => (
        <div className="flex h-8 items-center gap-4">
            <span className="text-sm">Left</span>
            <Separator orientation="vertical" />
            <span className="text-sm">Right</span>
        </div>
    ),
};
