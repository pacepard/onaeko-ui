import type { Meta, StoryObj } from '@storybook/react-vite';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './Accordion';

const meta = {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        docs: {
            description: {
                component:
                    'Expandable sections for progressive disclosure of related content. Use for FAQs, dense settings, or optional detail that does not need to stay visible. Avoid for primary navigation or when users must compare all sections at once without expanding. Follows the WAI-ARIA accordion pattern with keyboard support for headers.',
            },
        },
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'single',
        collapsible: true,
    },
    render: (args) => (
        <Accordion {...args} className="w-full max-w-md">
            <AccordionItem value="item-1">
                <AccordionTrigger>What is Onaeko?</AccordionTrigger>
                <AccordionContent>
                    Onaeko is a design system and component library for building product interfaces.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>How do I get started?</AccordionTrigger>
                <AccordionContent>
                    Install the package and import components from the library entry point.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};

export const Multiple: Story = {
    args: {
        type: 'multiple',
    },
    render: (args) => (
        <Accordion {...args} className="w-full max-w-md">
            <AccordionItem value="a">
                <AccordionTrigger>Section A</AccordionTrigger>
                <AccordionContent>Content for section A.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
                <AccordionTrigger>Section B</AccordionTrigger>
                <AccordionContent>Content for section B.</AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};
