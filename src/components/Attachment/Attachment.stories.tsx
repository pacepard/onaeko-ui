import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileIcon, XIcon } from 'lucide-react';

import { Spinner } from '../Spinner';
import {
    Attachment,
    AttachmentAction,
    AttachmentActions,
    AttachmentContent,
    AttachmentDescription,
    AttachmentMedia,
    AttachmentTitle,
} from './Attachment';

const meta = {
    title: 'Components/Attachment',
    component: Attachment,
    parameters: {
        docs: {
            description: {
                component:
                    'File or media attachment chip. Supports `size` (default, sm, xs), `orientation` (horizontal, vertical), `state` (idle, uploading, processing, error, done), and media `variant` (icon, image).',
            },
        },
    },
} satisfies Meta<typeof Attachment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Attachment state="done">
            <AttachmentMedia>
                <FileIcon />
            </AttachmentMedia>
            <AttachmentContent>
                <AttachmentTitle>report.pdf</AttachmentTitle>
                <AttachmentDescription>245 KB</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
                <AttachmentAction aria-label="Remove">
                    <XIcon />
                </AttachmentAction>
            </AttachmentActions>
        </Attachment>
    ),
};

export const Uploading: Story = {
    render: () => (
        <Attachment state="uploading">
            <AttachmentMedia>
                <Spinner className="size-3.5" />
            </AttachmentMedia>
            <AttachmentContent>
                <AttachmentTitle>screenshot.png</AttachmentTitle>
                <AttachmentDescription>Uploading...</AttachmentDescription>
            </AttachmentContent>
        </Attachment>
    ),
};

export const Error: Story = {
    render: () => (
        <Attachment state="error">
            <AttachmentMedia>
                <FileIcon />
            </AttachmentMedia>
            <AttachmentContent>
                <AttachmentTitle>failed.pdf</AttachmentTitle>
                <AttachmentDescription>Upload failed</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
                <AttachmentAction aria-label="Remove">
                    <XIcon />
                </AttachmentAction>
            </AttachmentActions>
        </Attachment>
    ),
};

export const Small: Story = {
    render: () => (
        <Attachment state="done" size="sm">
            <AttachmentMedia>
                <FileIcon />
            </AttachmentMedia>
            <AttachmentContent>
                <AttachmentTitle>notes.txt</AttachmentTitle>
                <AttachmentDescription>12 KB</AttachmentDescription>
            </AttachmentContent>
        </Attachment>
    ),
};

export const Vertical: Story = {
    render: () => (
        <Attachment state="done" orientation="vertical">
            <AttachmentMedia>
                <FileIcon />
            </AttachmentMedia>
            <AttachmentContent>
                <AttachmentTitle>cover.png</AttachmentTitle>
                <AttachmentDescription>1.2 MB</AttachmentDescription>
            </AttachmentContent>
        </Attachment>
    ),
};

export const ImageMedia: Story = {
    name: 'Image media',
    render: () => (
        <Attachment state="done">
            <AttachmentMedia variant="image">
                <img src="https://picsum.photos/seed/onaeko/80/80" alt="" />
            </AttachmentMedia>
            <AttachmentContent>
                <AttachmentTitle>preview.jpg</AttachmentTitle>
                <AttachmentDescription>80 KB</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
                <AttachmentAction aria-label="Remove">
                    <XIcon />
                </AttachmentAction>
            </AttachmentActions>
        </Attachment>
    ),
};
