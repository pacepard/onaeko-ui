# @onaeko/ui

Onaeko design system and React UI component library. Framework-agnostic presentation components for Next.js, Vite, and other React applications.

## Description

`@onaeko/ui` is the shared design system for Onaeko products — the presentation layer Accounts, Academy, Pathfinder, Workspace, and marketing use so every surface stays visually consistent.

It ships tokens, theme helpers, and accessible components (buttons, forms, dialogs, and more) driven by [`DESIGN.md`](./DESIGN.md): Notion-style warm paper canvas, Inter type, pill CTAs, and Onaeko orange primary (`#f36827`) with forest-green hero (`#2e503f`). Import components plus `@onaeko/ui/styles.css`; keep auth, API clients, and business logic out of this package.

## Installation

```bash
pnpm add @onaeko/ui
```

```bash
npm install @onaeko/ui
```

## Quick start

```tsx
import { Button, Card, Input } from '@onaeko/ui';
import '@onaeko/ui/styles.css';

export function Example() {
    return (
        <Card>
            <Input placeholder="Email" />
            <Button>Continue</Button>
        </Card>
    );
}
```

## Theming

Semantic CSS variables power light and dark themes. Initialize theme on the client:

```tsx
import { initTheme, setTheme } from '@onaeko/ui';

initTheme('system', { cookieDomain: '.onaeko.com' });
setTheme('dark');
```

Themes: `light`, `dark`, `system`. Tokens follow [`DESIGN.md`](./DESIGN.md): orange primary `#f36827`, paper canvas `#f6f5f4`, forest-green hero `#2e503f`, Inter, pill marketing CTAs (`rounded-full`). Use `Button` variants `primary` (Onaeko orange) and `secondary` (white chrome). Prefixed vars are `--onaeko-*` with short aliases like `--primary`.

## Development

```bash
pnpm install
pnpm storybook
pnpm check
pnpm build-storybook
```

## Storybook

Storybook is the visual development environment:

```bash
pnpm storybook
```

Includes the accessibility addon. Violations are treated as errors (`a11y.test: 'error'`).

## Documentation

- **Storybook** — interactive components, props, a11y
- **Mintlify** — conceptual docs under `docs/` (installation, theming, tokens)
- **DESIGN.md** — brand source of truth (Onaeko); archived Notion analysis in `notion/DESIGN.md`

Mintlify content is intended for product docs and does not duplicate every Storybook example.

```bash
# Preview Mintlify docs locally (requires Mintlify CLI)
cd docs && npx mintlify dev
```

## Testing

- Unit/component: Vitest + React Testing Library (`pnpm test`)
- Browser flows: Playwright against Storybook (`pnpm build-storybook && pnpm test:e2e`)
  - Dialog, Dropdown, Tabs, Form, Toast/Sonner, InputOTP, Checkbox, Switch, Select, Accordion, Chart, Sheet, theme
  - Axe smoke (`e2e/a11y.spec.ts`) via Storybook’s axe on Button, Form, Dialog, Tabs, Checkbox, Select (serious/critical; color-contrast disabled)
- Visual regression (Chromatic) is optional and not wired until a project token exists

## Publishing

Versioning uses Changesets. On merge to `master`, the release workflow can open a release PR or publish to npm.

```bash
pnpm changeset
```

## Package exports

| Import | Purpose |
| --- | --- |
| `@onaeko/ui` | Components, utilities, theme helpers |
| `@onaeko/ui/styles.css` | Design tokens and component styles |
| `@onaeko/ui/tokens` | Typed token references (`designColors`, `palette`, …) |
| `@onaeko/ui/theme` | Theme helpers (`initTheme`, `setTheme`) |
| `@onaeko/ui/<name>` | Per-component ESM entry (kebab-case), e.g. `@onaeko/ui/button` |

ESM-only. Peers: React, React DOM. Optional peers: `react-hook-form` (Form), `react-is` (Recharts). Chart tooltips/legends: import `ChartTooltip` / `ChartLegend` from `@onaeko/ui`.

## Examples

Local consumer apps under `examples/`. They depend on the published npm packages (`@onaeko/ui` / `@onaeko/icons`), not the workspace sources:

```bash
# Vite
cd examples/vite && pnpm install && pnpm build

# Next.js
cd examples/next && pnpm install && pnpm build
```

Both examples include Sidebar shell, Questionnaire, Form, Toast, Dialog, Table, Chart, and `@onaeko/icons`.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) and [AGENTS.md](./AGENTS.md) for humans and coding agents.

1. Add or update the component under `src/components/ComponentName/`
2. Include Storybook stories and tests for behavior
3. Export from `src/index.ts`
4. Add a changeset for package-affecting changes
5. Ensure `pnpm format:check && pnpm check` pass

Do not add authentication, API clients, analytics, or application business logic to this package.
