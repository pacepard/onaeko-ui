import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

const meta = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        docs: {
            description: {
                component:
                    'User or entity avatar with image and fallback initials. Use in headers, comments, and member lists to identify people. Not for decorative imagery or large marketing photos. Provide meaningful alt text on the image when identity matters to the task.',
            },
        },
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Avatar>
            <AvatarImage
                src="https://github.com/shadcn.png"
                alt="User avatar"
            />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    ),
};

export const Fallback: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="/broken-image.png" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
        </Avatar>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar className="size-8">
                <AvatarFallback className="text-xs">SM</AvatarFallback>
            </Avatar>
            <Avatar className="size-12">
                <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar className="size-16">
                <AvatarFallback className="text-lg">LG</AvatarFallback>
            </Avatar>
        </div>
    ),
};
