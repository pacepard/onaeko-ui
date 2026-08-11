import { expect, test, type Page } from '@playwright/test';

type AxeViolation = {
    id: string;
    impact?: string | null;
    description: string;
    nodes: { html: string }[];
};

async function expectNoSeriousViolations(page: Page) {
    // Storybook addon-a11y already injects axe; reuse it instead of @axe-core/playwright.
    await page.waitForFunction(() => typeof (window as unknown as { axe?: { run: unknown } }).axe?.run === 'function');

    const violations = await page.evaluate(async () => {
        const axe = (
            window as unknown as {
                axe: { run: (ctx: Document, opts: object) => Promise<{ violations: AxeViolation[] }> };
            }
        ).axe;
        const results = await axe.run(document, {
            rules: {
                'color-contrast': { enabled: false },
            },
        });
        return results.violations;
    });

    const blocking = violations.filter((v) => v.impact === 'critical' || v.impact === 'serious');

    expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
}

test.describe('Storybook a11y smoke', () => {
    test.describe.configure({ mode: 'serial' });

    test('Button primary has no serious axe violations', async ({ page }) => {
        await page.goto('/iframe.html?id=components-button--primary&viewMode=story');
        await expect(page.getByRole('button', { name: 'Continue' })).toBeVisible();
        await expectNoSeriousViolations(page);
    });

    test('Form default has no serious axe violations', async ({ page }) => {
        await page.goto('/iframe.html?id=components-form--default&viewMode=story');
        await expect(page.getByLabel('Email')).toBeVisible();
        await expectNoSeriousViolations(page);
    });

    test('Dialog closed trigger has no serious axe violations', async ({ page }) => {
        await page.goto('/iframe.html?id=components-dialog--default&viewMode=story');
        await expect(page.getByRole('button', { name: 'Open dialog' })).toBeVisible();
        await expectNoSeriousViolations(page);
    });
});
