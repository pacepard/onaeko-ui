import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './HoverCard';

const meta = {
    title: 'Components/HoverCard',
    component: HoverCard,
    parameters: {
        docs: {
            description: {
                component:
                    'Rich preview content shown on hover or focus of a trigger (Base UI Preview Card). Prefer Tooltip for short plain text.',
            },
        },
    },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <HoverCard>
            <HoverCardTrigger render={<Button variant="link" />}>@onaeko</HoverCardTrigger>
            <HoverCardContent>
                <div className="space-y-1">
                    <p className="text-sm font-medium">Onaeko</p>
                    <p className="text-sm text-muted-foreground">Design system and product tooling.</p>
                </div>
            </HoverCardContent>
        </HoverCard>
    ),
};
