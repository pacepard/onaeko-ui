import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from './Accordion';

describe('Accordion', () => {
    it('renders trigger and expands content on click', async () => {
        const user = userEvent.setup();

        render(
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Section one</AccordionTrigger>
                    <AccordionContent>Panel one body</AccordionContent>
                </AccordionItem>
            </Accordion>,
        );

        expect(screen.queryByText('Panel one body')).not.toBeInTheDocument();
        await user.click(screen.getByRole('button', { name: 'Section one' }));
        expect(screen.getByText('Panel one body')).toBeInTheDocument();
    });

    it('collapses when trigger is clicked again', async () => {
        const user = userEvent.setup();

        render(
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Section one</AccordionTrigger>
                    <AccordionContent>Panel one body</AccordionContent>
                </AccordionItem>
            </Accordion>,
        );

        const trigger = screen.getByRole('button', { name: 'Section one' });
        await user.click(trigger);
        expect(screen.getByText('Panel one body')).toBeInTheDocument();
        await user.click(trigger);
        expect(screen.queryByText('Panel one body')).not.toBeInTheDocument();
    });
});
