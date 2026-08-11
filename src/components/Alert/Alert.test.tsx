import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Alert, AlertDescription, AlertTitle } from './Alert';

describe('Alert', () => {
    it('exposes alert role with title and description', () => {
        render(
            <Alert>
                <AlertTitle>Heads up</AlertTitle>
                <AlertDescription>You can change settings anytime.</AlertDescription>
            </Alert>,
        );

        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByText('Heads up')).toBeInTheDocument();
        expect(screen.getByText('You can change settings anytime.')).toBeInTheDocument();
    });
});
