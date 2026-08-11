import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from './Command';

describe('Command', () => {
    it('renders and filters items when typing', async () => {
        const user = userEvent.setup();

        render(
            <Command>
                <CommandInput placeholder="Search" />
                <CommandList>
                    <CommandEmpty>No results.</CommandEmpty>
                    <CommandGroup>
                        <CommandItem>Alpha</CommandItem>
                        <CommandItem>Beta</CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>,
        );

        expect(screen.getByText('Alpha')).toBeInTheDocument();
        expect(screen.getByText('Beta')).toBeInTheDocument();

        await user.type(screen.getByPlaceholderText('Search'), 'alp');
        expect(screen.getByText('Alpha')).toBeInTheDocument();
        expect(screen.queryByText('Beta')).not.toBeInTheDocument();
    });
});
