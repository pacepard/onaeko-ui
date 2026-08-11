import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Button } from '../Button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './Sheet';

describe('Sheet', () => {
    it('opens and shows content when triggered', async () => {
        const user = userEvent.setup();

        render(
            <Sheet>
                <SheetTrigger asChild>
                    <Button>Open sheet</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Notifications</SheetTitle>
                        <SheetDescription>
                            Manage how we reach you.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>,
        );

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        await user.click(screen.getByRole('button', { name: 'Open sheet' }));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: 'Notifications' }),
        ).toBeInTheDocument();
    });
});
