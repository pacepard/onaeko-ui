import type { Meta, StoryObj } from '@storybook/react-vite';

import { ScrollArea } from './ScrollArea';

const meta = {
    title: 'Components/ScrollArea',
    component: ScrollArea,
    parameters: {
        docs: {
            description: {
                component:
                    'Scrollable region with styled overflow for fixed-height panels. Use in sidebars, lists, or modals where content exceeds the viewport. Full-page scrolling can use native overflow instead. Ensure keyboard users can reach and scroll focused content inside the region.',
            },
        },
    },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = Array.from({ length: 24 }, (_, i) => `Item ${i + 1}`);

export const Default: Story = {
    render: () => (
        <ScrollArea className="h-48 w-full max-w-sm rounded-md border">
            <div className="p-4">
                {items.map((item) => (
                    <div key={item} className="border-b py-2 text-sm last:border-0">
                        {item}
                    </div>
                ))}
            </div>
        </ScrollArea>
    ),
};

export const TallerContent: Story = {
    render: () => (
        <ScrollArea className="h-32 w-full max-w-sm rounded-md border">
            <div className="space-y-2 p-4">
                {items.map((item) => (
                    <p key={item} className="text-muted-foreground text-sm">
                        {item}
                    </p>
                ))}
            </div>
        </ScrollArea>
    ),
};
