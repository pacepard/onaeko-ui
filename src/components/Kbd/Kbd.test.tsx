import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Kbd, KbdGroup } from './Kbd';

describe('Kbd', () => {
    it('renders key labels', () => {
        render(
            <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>S</Kbd>
            </KbdGroup>,
        );

        expect(screen.getByText('Ctrl')).toBeInTheDocument();
        expect(screen.getByText('S')).toBeInTheDocument();
    });
});
