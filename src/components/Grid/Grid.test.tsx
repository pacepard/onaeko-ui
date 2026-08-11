import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Grid } from './Grid';

describe('Grid', () => {
    it('renders children', () => {
        render(
            <Grid>
                <span>Cell A</span>
                <span>Cell B</span>
            </Grid>,
        );

        expect(screen.getByText('Cell A')).toBeInTheDocument();
        expect(screen.getByText('Cell B')).toBeInTheDocument();
    });
});
