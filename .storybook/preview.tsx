import type { Preview } from '@storybook/react-vite';

import '../src/styles/globals.css';
import { applyTheme, type Theme } from '../src/theme';

const preview: Preview = {
    globalTypes: {
        theme: {
            description: 'Color theme',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: [
                    { value: 'light', title: 'Light' },
                    { value: 'dark', title: 'Dark' },
                    { value: 'system', title: 'System' },
                ],
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        theme: 'light',
    },
    decorators: [
        (Story, context) => {
            const theme = (context.globals.theme as Theme) ?? 'light';
            applyTheme(theme);
            return (
                <div className="bg-background text-foreground min-h-screen p-6">
                    <Story />
                </div>
            );
        },
    ],
    parameters: {
        options: {
            // Keep sidebar always alphabetical (components and stories).
            storySort: {
                method: 'alphabetical',
                order: [],
                locales: 'en-US',
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            // Fail Storybook builds/tests on accessibility violations.
            test: 'error',
        },
        docs: {
            toc: true,
        },
        layout: 'fullscreen',
    },
};

export default preview;
