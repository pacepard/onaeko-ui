import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '../Label';
import { Switch } from './Switch';

const meta = {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        docs: {
            description: {
                component:
                    'Toggle control for settings that take effect immediately without a separate save action. Use for binary preferences in settings panels. Prefer Checkbox for values submitted with a form batch, or Radio when choosing among several options. Always associate a visible Label and describe the on/off meaning in text.',
            },
        },
    },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Switch id="airplane" />
            <Label htmlFor="airplane">Airplane mode</Label>
        </div>
    ),
};

export const Checked: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Switch id="notifications" defaultChecked />
            <Label htmlFor="notifications">Email notifications</Label>
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Switch id="disabled-switch" disabled />
            <Label htmlFor="disabled-switch">Unavailable</Label>
        </div>
    ),
};
