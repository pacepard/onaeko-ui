import type { Meta, StoryObj } from '@storybook/react-vite';
import { FolderOpenIcon } from 'lucide-react';

import { Button } from '../Button';
import { EmptyState } from './EmptyState';

const meta = {
    title: 'Components/EmptyState',
    component: EmptyState,
    parameters: {
        docs: {
            description: {
                component:
                    'Friendly placeholder when a list or view has no items yet. Use to explain why content is empty and offer a primary action such as create or import. Do not show while data is still loading-use LoadingState instead. Use a heading and actionable controls so the state is understandable without visuals alone.',
            },
        },
    },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomCopy: Story = {
    args: {
        title: 'No projects yet',
        description: 'Create your first project to get started.',
    },
};

export const WithAction: Story = {
    render: () => (
        <EmptyState title="No files" description="Upload a file to begin.">
            <Button>Upload file</Button>
        </EmptyState>
    ),
};

export const CustomIcon: Story = {
    render: () => (
        <EmptyState
            icon={<FolderOpenIcon className="text-muted-foreground size-10" />}
            title="Empty folder"
            description="This folder does not contain any items."
        />
    ),
};
