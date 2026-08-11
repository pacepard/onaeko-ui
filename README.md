# @onaeko/ui

Onaeko design system and React UI component library. Framework-agnostic presentation components for Next.js, Vite, and other React applications.

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

initTheme('system');
setTheme('dark');
```

Themes: `light`, `dark`, `system`. Components use tokens such as `--onaeko-primary` and short aliases like `--primary`.

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

Mintlify content is intended for `docs.onaeko.com` and does not duplicate every Storybook example.

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
| `@onaeko/ui/tokens` | Typed token references |
| `@onaeko/ui/theme` | Theme helpers (`initTheme`, `setTheme`) |
| `@onaeko/ui/<name>` | Per-component ESM entry (kebab-case), e.g. `@onaeko/ui/button` |

ESM-only. Peers: React, React DOM. Optional peers: `react-hook-form` (Form), `react-is` (Recharts). Chart tooltips/legends: import `ChartTooltip` / `ChartLegend` from `@onaeko/ui`.

## Examples

Local consumer apps under `examples/`:

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
