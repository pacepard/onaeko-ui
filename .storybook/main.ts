import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(ts|tsx)'],
    addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    async viteFinal(config) {
        config.resolve = config.resolve ?? {};
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(rootDir, '../src'),
        };

        // Prevent HMR from watching the static build output (breaks indexing).
        config.server = config.server ?? {};
        config.server.watch = {
            ...config.server.watch,
            ignored: [
                '**/storybook-static/**',
                '**/dist/**',
                '**/coverage/**',
                '**/test-results/**',
                '**/playwright-report/**',
            ],
        };

        return config;
    },
};

export default config;
