import type { Meta, StoryObj } from '@storybook/react-vite';
import { CommandIcon } from 'lucide-react';

import { Kbd, KbdGroup } from './Kbd';

const meta = {
    title: 'Components/Kbd',
    component: Kbd,
    parameters: {
        docs: {
            description: {
                component:
                    'Keyboard key indicator for shortcuts and docs. Use KbdGroup to compose chord sequences. Decorative for sighted users; pair with aria-keyshortcuts where behavior matters.',
            },
        },
    },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <KbdGroup>
            <Kbd>
                <CommandIcon />
            </Kbd>
            <Kbd>K</Kbd>
        </KbdGroup>
    ),
};
