import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';

describe('Tabs', () => {
    it('shows the active panel and switches tabs', async () => {
        const user = userEvent.setup();

        render(
            <Tabs defaultValue="account">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Account settings</TabsContent>
                <TabsContent value="billing">Billing settings</TabsContent>
            </Tabs>,
        );

        expect(screen.getByText('Account settings')).toBeVisible();
        expect(screen.queryByText('Billing settings')).not.toBeInTheDocument();

        await user.click(screen.getByRole('tab', { name: 'Billing' }));
        expect(screen.getByText('Billing settings')).toBeVisible();
        expect(screen.queryByText('Account settings')).not.toBeInTheDocument();
    });
});
