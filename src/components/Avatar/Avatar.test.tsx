import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

describe('Avatar', () => {
    it('renders fallback text when image is unavailable', () => {
        render(
            <Avatar>
                <AvatarImage src="/missing.png" alt="User avatar" />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>,
        );

        expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('renders custom fallback initials', () => {
        render(
            <Avatar>
                <AvatarFallback>AB</AvatarFallback>
            </Avatar>,
        );

        expect(screen.getByText('AB')).toBeInTheDocument();
    });
});
