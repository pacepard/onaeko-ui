import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Button } from '../Button';
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from './Drawer';

describe('Drawer', () => {
    it('opens and shows content when triggered', async () => {
        const user = userEvent.setup();

        render(
            <Drawer>
                <DrawerTrigger asChild>
                    <Button>Open drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Filters</DrawerTitle>
                        <DrawerDescription>
                            Adjust your view options.
                        </DrawerDescription>
                    </DrawerHeader>
                </DrawerContent>
            </Drawer>,
        );

        expect(screen.queryByText('Filters')).not.toBeInTheDocument();
        await user.click(screen.getByRole('button', { name: 'Open drawer' }));
        expect(screen.getByText('Filters')).toBeInTheDocument();
        expect(
            screen.getByText('Adjust your view options.'),
        ).toBeInTheDocument();
    });
});
