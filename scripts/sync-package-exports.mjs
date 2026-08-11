#!/usr/bin/env node
/**
 * Syncs package.json `exports` for the root barrel, styles, tokens, theme,
 * and one subpath per component (`@onaeko/ui/button`, etc.).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const packagePath = path.join(rootDir, 'package.json');
const componentsDir = path.join(rootDir, 'src/components');

function toKebabCase(name) {
    return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

const exportsMap = {
    '.': {
        types: './dist/index.d.ts',
        import: './dist/index.js',
    },
    './styles.css': {
        types: './styles.css.d.ts',
        import: './dist/styles.css',
        default: './dist/styles.css',
    },
    './tokens': {
        types: './dist/tokens.d.ts',
        import: './dist/tokens.js',
    },
    './theme': {
        types: './dist/theme.d.ts',
        import: './dist/theme.js',
    },
    './package.json': './package.json',
};

for (const dirent of fs.readdirSync(componentsDir, { withFileTypes: true })) {
    if (!dirent.isDirectory()) continue;
    const entry = path.join(componentsDir, dirent.name, 'index.ts');
    if (!fs.existsSync(entry)) continue;
    const kebab = toKebabCase(dirent.name);
    exportsMap[`./${kebab}`] = {
        types: `./dist/${kebab}.d.ts`,
        import: `./dist/${kebab}.js`,
    };
}

pkg.exports = exportsMap;
fs.writeFileSync(packagePath, `${JSON.stringify(pkg, null, 4)}\n`);
console.log(`Synced ${Object.keys(exportsMap).length} package exports.`);
