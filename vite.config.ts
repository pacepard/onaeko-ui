import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const isStorybook = process.argv.some((arg) => arg.includes('storybook'));

function toKebabCase(name: string) {
    return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function discoverComponentEntries() {
    const componentsDir = path.resolve(rootDir, 'src/components');
    const entries: Record<string, string> = {};

    for (const dirent of fs.readdirSync(componentsDir, { withFileTypes: true })) {
        if (!dirent.isDirectory()) continue;
        const entry = path.join(componentsDir, dirent.name, 'index.ts');
        if (!fs.existsSync(entry)) continue;
        entries[toKebabCase(dirent.name)] = entry;
    }

    return entries;
}

const componentEntries = discoverComponentEntries();

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
                tokens: path.resolve(rootDir, 'src/tokens/index.ts'),
                theme: path.resolve(rootDir, 'src/theme/index.ts'),
                ...componentEntries,
            },
            formats: ['es'],
            fileName: (_format, entryName) => {
                if (entryName === 'styles') return 'styles.js';
                if (entryName === 'index') return 'index.js';
                return `${entryName}.js`;
            },
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
