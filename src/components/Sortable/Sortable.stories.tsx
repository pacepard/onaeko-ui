import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { GripVerticalIcon } from 'lucide-react';

import {
    Sortable,
    SortableContent,
    SortableItem,
    SortableItemHandle,
} from './Sortable';

const meta = {
    title: 'Components/Sortable',
    component: Sortable,
    parameters: {
        docs: {
            description: {
                component:
                    'Drag-and-drop sortable lists built on dnd-kit. Compose Sortable, SortableContent, SortableItem, and optional handles. Use `orientation` (vertical, horizontal, mixed).',
            },
        },
    },
} satisfies Meta<typeof Sortable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VerticalList: Story = {
    args: {
        value: ['Alpha', 'Beta', 'Gamma'],
        onValueChange: () => {},
    },
    render: function SortableVerticalListStory() {
        const [items, setItems] = React.useState(['Alpha', 'Beta', 'Gamma']);
        return (
            <Sortable
                value={items}
                onValueChange={setItems}
                orientation="vertical"
            >
                <SortableContent className="flex max-w-sm flex-col gap-2">
                    {items.map((item) => (
                        <SortableItem
                            key={item}
                            value={item}
                            className="flex items-center gap-2 rounded-md border bg-card px-3 py-2"
                        >
                            <SortableItemHandle className="text-muted-foreground">
                                <GripVerticalIcon className="size-4" />
                            </SortableItemHandle>
                            {item}
                        </SortableItem>
                    ))}
                </SortableContent>
            </Sortable>
        );
    },
};

export const HorizontalList: Story = {
    args: {
        value: ['One', 'Two', 'Three', 'Four'],
        onValueChange: () => {},
    },
    render: function SortableHorizontalListStory() {
        const [items, setItems] = React.useState([
            'One',
            'Two',
            'Three',
            'Four',
        ]);
        return (
            <Sortable
                value={items}
                onValueChange={setItems}
                orientation="horizontal"
            >
                <SortableContent className="flex flex-row gap-2">
                    {items.map((item) => (
                        <SortableItem
                            key={item}
                            value={item}
                            className="flex min-w-24 items-center justify-center gap-2 rounded-md border bg-card px-3 py-2"
                        >
                            <SortableItemHandle className="text-muted-foreground">
                                <GripVerticalIcon className="size-4" />
                            </SortableItemHandle>
                            {item}
                        </SortableItem>
                    ))}
                </SortableContent>
            </Sortable>
        );
    },
};
