import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertCircleIcon, InfoIcon } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from './Alert';

const meta = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        docs: {
            description: {
                component:
                    'Inline banner for persistent status, warning, or error messages on the page. Use `variant` styling to match severity and include a title plus description when helpful. Not for fleeting feedback after an action-use Toast. Urgent errors should use alert semantics so screen readers announce them promptly.',
            },
        },
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Alert className="max-w-lg">
            <InfoIcon />
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>
                You can add components to your app using the CLI.
            </AlertDescription>
        </Alert>
    ),
};

export const Destructive: Story = {
    render: () => (
        <Alert variant="destructive" className="max-w-lg">
            <AlertCircleIcon />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                Your session has expired. Please sign in again.
            </AlertDescription>
        </Alert>
    ),
};
