import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '../Label';
import { Checkbox } from './Checkbox';

const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        docs: {
            description: {
                component:
                    'Binary toggle or multi-select option in forms and settings lists. Use for optional consent, multi-value choices, or values submitted with a form. Prefer Switch for immediate single settings and Radio for exactly-one choice. Pair each checkbox with a visible label; use `aria-invalid` when validation fails.',
            },
        },
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
    ),
};

export const Checked: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Checkbox id="checked" defaultChecked />
            <Label htmlFor="checked">Subscribed to updates</Label>
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled">Unavailable option</Label>
        </div>
    ),
};
