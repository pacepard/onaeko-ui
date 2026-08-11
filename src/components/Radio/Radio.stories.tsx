import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '../Label';
import { RadioGroup, RadioGroupItem } from './Radio';

const meta = {
    title: 'Components/Radio',
    component: RadioGroup,
    parameters: {
        docs: {
            description: {
                component:
                    'Mutually exclusive choice among a small set of options via `RadioGroup` and `RadioGroupItem`. Use when all options should remain visible (roughly two to seven). Prefer Select for long lists and Switch for a single on/off preference. Provide a group label and item labels so selections are unambiguous to assistive tech.',
            },
        },
    },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <RadioGroup defaultValue="comfortable">
            <div className="flex items-center gap-2">
                <RadioGroupItem value="default" id="r-default" />
                <Label htmlFor="r-default">Default</Label>
            </div>
            <div className="flex items-center gap-2">
                <RadioGroupItem value="comfortable" id="r-comfortable" />
                <Label htmlFor="r-comfortable">Comfortable</Label>
            </div>
            <div className="flex items-center gap-2">
                <RadioGroupItem value="compact" id="r-compact" />
                <Label htmlFor="r-compact">Compact</Label>
            </div>
        </RadioGroup>
    ),
};

export const Disabled: Story = {
    render: () => (
        <RadioGroup defaultValue="a" disabled>
            <div className="flex items-center gap-2">
                <RadioGroupItem value="a" id="r-a" />
                <Label htmlFor="r-a">Option A</Label>
            </div>
            <div className="flex items-center gap-2">
                <RadioGroupItem value="b" id="r-b" />
                <Label htmlFor="r-b">Option B</Label>
            </div>
        </RadioGroup>
    ),
};
