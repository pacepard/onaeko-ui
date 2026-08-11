import { expect, test } from '@playwright/test';

test.describe('Storybook interactions', () => {
    test('Button primary story renders', async ({ page }) => {
        await page.goto(
            '/iframe.html?id=components-button--primary&viewMode=story',
        );
        await expect(
            page.getByRole('button', { name: 'Continue' }),
        ).toBeVisible();
    });

    test('Dialog opens and closes', async ({ page }) => {
        await page.goto(
            '/iframe.html?id=components-dialog--default&viewMode=story',
        );
        await page.getByRole('button', { name: 'Open dialog' }).click();
        await expect(page.getByRole('dialog')).toBeVisible();
        await page.keyboard.press('Escape');
        await expect(page.getByRole('dialog')).toHaveCount(0);
    });

    test('theme toolbar applies dark class', async ({ page }) => {
        await page.goto(
            '/iframe.html?id=components-button--primary&viewMode=story&globals=theme:dark',
        );
        await expect(page.locator('html')).toHaveClass(/dark/);
    });

    test('Dropdown works with keyboard', async ({ page }) => {
        await page.goto(
            '/iframe.html?id=components-dropdownmenu--default&viewMode=story',
        );
        const trigger = page.getByRole('button', { name: 'Open menu' });
        await trigger.focus();
        await page.keyboard.press('Enter');
        await expect(page.getByRole('menu')).toBeVisible();
        await expect(
            page.getByRole('menuitem', { name: /Profile/i }),
        ).toBeVisible();
        await page.keyboard.press('Escape');
        await expect(page.getByRole('menu')).toHaveCount(0);
    });

    test('Tabs work correctly', async ({ page }) => {
        await page.goto(
            '/iframe.html?id=components-tabs--default&viewMode=story',
        );
        await expect(
            page.getByText('Make changes to your account settings here.'),
        ).toBeVisible();
        await page.getByRole('tab', { name: 'Password' }).click();
        await expect(
            page.getByText('Change your password here.'),
        ).toBeVisible();
        await page.getByRole('tab', { name: 'Account' }).click();
        await expect(
            page.getByText('Make changes to your account settings here.'),
        ).toBeVisible();
    });

    test('Form interaction works', async ({ page }) => {
        await page.goto(
            '/iframe.html?id=components-form--default&viewMode=story',
        );
        const email = page.getByLabel('Email');
        await email.fill('you@onaeko.com');
        await expect(email).toHaveValue('you@onaeko.com');
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(email).toBeVisible();
    });
});
