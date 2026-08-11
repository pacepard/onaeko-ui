import { expect, test } from '@playwright/test';

test.describe('Storybook interactions', () => {
    test('Button primary story renders', async ({ page }) => {
        await page.goto('/iframe.html?id=components-button--primary&viewMode=story');
        await expect(page.getByRole('button', { name: 'Continue' })).toBeVisible();
    });

    test('Dialog opens and closes', async ({ page }) => {
        await page.goto('/iframe.html?id=components-dialog--default&viewMode=story');
        await page.getByRole('button', { name: 'Open dialog' }).click();
        await expect(page.getByRole('dialog')).toBeVisible();
        await page.keyboard.press('Escape');
        await expect(page.getByRole('dialog')).toHaveCount(0);
    });

    test('theme toolbar applies dark class', async ({ page }) => {
        await page.goto('/iframe.html?id=components-button--primary&viewMode=story&globals=theme:dark');
        await expect(page.locator('html')).toHaveClass(/dark/);
    });

    test('Dropdown works with keyboard', async ({ page }) => {
        await page.goto('/iframe.html?id=components-dropdownmenu--default&viewMode=story');
        const trigger = page.getByRole('button', { name: 'Open menu' });
        await trigger.focus();
        await page.keyboard.press('Enter');
        await expect(page.getByRole('menu')).toBeVisible();
        await expect(page.getByRole('menuitem', { name: /Profile/i })).toBeVisible();
        await page.keyboard.press('Escape');
        await expect(page.getByRole('menu')).toHaveCount(0);
    });

    test('Tabs work correctly', async ({ page }) => {
        await page.goto('/iframe.html?id=components-tabs--default&viewMode=story');
        await expect(page.getByText('Make changes to your account settings here.')).toBeVisible();
        await page.getByRole('tab', { name: 'Password' }).click();
        await expect(page.getByText('Change your password here.')).toBeVisible();
        await page.getByRole('tab', { name: 'Account' }).click();
        await expect(page.getByText('Make changes to your account settings here.')).toBeVisible();
    });

    test('Form interaction works', async ({ page }) => {
        await page.goto('/iframe.html?id=components-form--default&viewMode=story');
        const email = page.getByLabel('Email');
        await email.fill('you@onaeko.com');
        await expect(email).toHaveValue('you@onaeko.com');
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(email).toBeVisible();
    });

    test('Form shows validation error for empty email', async ({ page }) => {
        await page.goto('/iframe.html?id=components-form--default&viewMode=story');
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.getByRole('alert')).toBeVisible();
    });

    test('Toast shows after click', async ({ page }) => {
        await page.goto('/iframe.html?id=components-toast--default&viewMode=story');
        await page.getByRole('button', { name: 'Show toast' }).click();
        await expect(page.getByText('Event has been created')).toBeVisible();
    });

    test('Sonner success toast shows after click', async ({ page }) => {
        await page.goto('/iframe.html?id=components-sonner--success&viewMode=story');
        await page.getByRole('button', { name: 'Success toast' }).click();
        await expect(page.getByText('Profile updated successfully')).toBeVisible();
    });

    test('InputOTP accepts typed digits', async ({ page }) => {
        await page.goto('/iframe.html?id=components-inputotp--default&viewMode=story');
        const otp = page.getByLabel('One-time password');
        await otp.click();
        await page.keyboard.type('123456');
        await expect(otp).toHaveValue('123456');
    });

    test('Checkbox toggles', async ({ page }) => {
        await page.goto('/iframe.html?id=components-checkbox--default&viewMode=story');
        const checkbox = page.getByRole('checkbox');
        await expect(checkbox).not.toBeChecked();
        await checkbox.click();
        await expect(checkbox).toBeChecked();
    });

    test('Switch toggles', async ({ page }) => {
        await page.goto('/iframe.html?id=components-switch--default&viewMode=story');
        const sw = page.getByRole('switch');
        await expect(sw).not.toBeChecked();
        await sw.click();
        await expect(sw).toBeChecked();
    });

    test('Select chooses an option', async ({ page }) => {
        await page.goto('/iframe.html?id=components-select--default&viewMode=story');
        await page.getByRole('combobox').click();
        await page.getByRole('option', { name: 'Banana' }).click();
        await expect(page.getByRole('combobox')).toContainText('Banana');
    });

    test('Accordion expands and collapses', async ({ page }) => {
        await page.goto('/iframe.html?id=components-accordion--default&viewMode=story');
        await page.getByRole('button', { name: 'What is Onaeko?' }).click();
        await expect(
            page.getByText('Onaeko is a design system and component library for building product interfaces.'),
        ).toBeVisible();
    });

    test('Chart line story renders svg', async ({ page }) => {
        await page.goto('/iframe.html?id=components-chart--simple-line-chart&viewMode=story');
        await expect(page.locator('.recharts-surface, svg').first()).toBeVisible();
    });

    test('Sheet opens from trigger', async ({ page }) => {
        await page.goto('/iframe.html?id=components-sheet--default&viewMode=story');
        await page.getByRole('button', { name: 'Open sheet' }).click();
        await expect(page.getByRole('dialog')).toBeVisible();
    });
});
