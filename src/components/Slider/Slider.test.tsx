import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Slider } from './Slider';

describe('Slider', () => {
    it('renders slider thumbs', () => {
        render(<Slider defaultValue={[30]} aria-label="Volume" />);
        expect(screen.getByRole('slider')).toBeInTheDocument();
    });
});
