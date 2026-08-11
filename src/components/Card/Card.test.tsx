import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './Card';

describe('Card', () => {
    it('renders header, title, description, and content', () => {
        render(
            <Card>
                <CardHeader>
                    <CardTitle>Weekly summary</CardTitle>
                    <CardDescription>Last 7 days</CardDescription>
                </CardHeader>
                <CardContent>12 tasks completed</CardContent>
            </Card>,
        );

        expect(screen.getByText('Weekly summary')).toBeInTheDocument();
        expect(screen.getByText('Last 7 days')).toBeInTheDocument();
        expect(screen.getByText('12 tasks completed')).toBeInTheDocument();
    });
});
