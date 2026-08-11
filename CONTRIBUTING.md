# Contributing to @onaeko/ui

## Scope

This package is **presentation only**: design-system React components, tokens, and theme helpers.

Do **not** add authentication, API clients, analytics, or application business logic.

## Setup

```bash
pnpm install
pnpm storybook
```

## Workflow

1. Create or update the component under `src/components/ComponentName/`
2. Add Storybook stories for primary variants and edge states
3. Add Vitest + Testing Library coverage for behavior
4. Export from `src/components/.../index.ts` and `src/index.ts`
5. Add a changeset for any package-affecting change (`pnpm changeset`)
6. Before opening a PR, run:

```bash
pnpm typecheck
pnpm lint
pnpm format:check
pnpm test
pnpm build
pnpm build-storybook
pnpm test:e2e
```

## Conventions

- Prefer existing patterns (Radix / Base UI / `@shadcn/react` wrappers already in the tree)
- Keep public API stable; breaking Form/Chart/export changes need a **minor** or **major** changeset and docs updates
- Interactive islands that need browser APIs use `"use client"`
- Package is **ESM-only**
- Peers: `react`, `react-dom`, plus `react-hook-form` (Form) and `react-is` (Recharts)

## Docs

- Storybook = interactive source of truth for visuals and a11y
- Mintlify under `docs/` = install, theming, tokens, exports, Form, migrations, i18n/RTL
- Specs under `specs/` for high-risk surfaces (Form, InputOTP, Button, Dialog, Chart, …)

## Visual regression

Chromatic (or equivalent) is intentionally not required in CI until a project token is available. Prefer Storybook a11y + Playwright until then.

## Examples

`examples/vite` and `examples/next` are consumer smoke apps. Keep them building in CI. After API changes that affect demos, update both.
