import { defineConfig, devices } from '@playwright/test';

const STORYBOOK_PORT = 6007;

export default defineConfig({
    testDir: './e2e',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'list',
    use: {
        // Dedicated port so local `pnpm storybook` (6006) is never reused.
        baseURL: `http://127.0.0.1:${STORYBOOK_PORT}`,
        trace: 'on-first-retry',
    },
    webServer: {
        command: `pnpm exec http-server storybook-static -p ${STORYBOOK_PORT} --silent`,
        url: `http://127.0.0.1:${STORYBOOK_PORT}`,
        reuseExistingServer: !process.env.CI,
        timeout: 60_000,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});
