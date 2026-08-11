import type { Meta, StoryObj } from '@storybook/react-vite';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './Card';
import { Button } from '../Button';

const meta = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        docs: {
            description: {
                component:
                    'Grouped surface for related content, optional header, description, and footer actions. Use for dashboards, summaries, and list tiles. Avoid deep nesting of cards or using a card where a plain section with a heading suffices. Use heading elements inside the card for a logical reading order.',
            },
        },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Card className="w-[360px]">
            <CardHeader>
                <CardTitle>Project overview</CardTitle>
                <CardDescription>
                    Track progress across your Onaeko workspace.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm">3 active milestones this week.</p>
            </CardContent>
            <CardFooter>
                <Button size="sm">View details</Button>
            </CardFooter>
        </Card>
    ),
};
