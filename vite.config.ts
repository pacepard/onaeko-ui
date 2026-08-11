import path from 'node:path';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const isStorybook = process.argv.some((arg) => arg.includes('storybook'));

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        !isStorybook &&
            dts({
                include: ['src'],
                exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx', 'src/**/*.test.ts'],
                outDir: 'dist',
                insertTypesEntry: true,
                tsconfigPath: './tsconfig.build.json',
            }),
    ].filter(Boolean),
    resolve: {
        alias: {
            '@': path.resolve(rootDir, 'src'),
        },
    },
    build: {
        lib: {
            entry: {
                index: path.resolve(rootDir, 'src/index.ts'),
                styles: path.resolve(rootDir, 'src/styles.ts'),
            },
            formats: ['es'],
            fileName: (_format, entryName) => (entryName === 'styles' ? 'styles.js' : 'index.js'),
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
                'react/jsx-dev-runtime',
                'react-hook-form',
                'react-is',
                /^@radix-ui\//,
                /^@base-ui\//,
                /^@dnd-kit\//,
                'lucide-react',
                'sonner',
                'vaul',
                'cmdk',
                'recharts',
                'react-day-picker',
                'date-fns',
                'input-otp',
                '@shadcn/react',
                /^@shadcn\/react\//,
                'class-variance-authority',
                'clsx',
                'tailwind-merge',
            ],
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name?.endsWith('.css')) {
                        return 'styles.css';
                    }
                    return 'assets/[name][extname]';
                },
            },
        },
        cssCodeSplit: false,
        sourcemap: true,
        emptyOutDir: true,
    },
});
