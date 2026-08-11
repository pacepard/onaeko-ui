import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import { ErrorState } from './ErrorState';

const meta = {
    title: 'Components/ErrorState',
    component: ErrorState,
    parameters: {
        docs: {
            description: {
                component:
                    'Full-area message when data failed to load or an operation could not complete. Use with a clear title, explanation, and retry or support actions. Not for individual field validation-surface those on the form control. Headings and buttons should describe the failure and next step for screen reader users.',
            },
        },
    },
} satisfies Meta<typeof ErrorState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomCopy: Story = {
    args: {
        title: 'Failed to load',
        description: 'We could not fetch your data. Check your connection.',
    },
};

export const WithAction: Story = {
    render: () => (
        <ErrorState title="Request failed" description="Something went wrong while processing your request.">
            <Button variant="outline">Try again</Button>
        </ErrorState>
    ),
};
