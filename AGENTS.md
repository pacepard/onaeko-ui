# AGENTS.md — @onaeko/ui

Guidance for coding agents working in this repository.

## Mission

Ship a framework-agnostic React design system (`@onaeko/ui`). Prefer small, reviewable changes. Do not invent APIs that are not backed by this repo or cited upstream docs (Radix, Recharts, input-otp, shadcn patterns already mirrored here).

## Hard constraints

- No auth, API clients, analytics, or product business logic in this package
- Do not push to remote or amend commits unless the user asks
- Do not commit secrets (`.env`, credentials)
- Prefer matching existing file layout: `src/components/Name/{Name.tsx,Name.stories.tsx,Name.test.tsx,index.ts}`
- Keep Storybook sidebar alphabetical (`parameters.options.storySort.method: 'alphabetical'`)

## Default verification

```bash
pnpm check
```

For interaction or Storybook URL changes, also:

```bash
pnpm build-storybook && pnpm test:e2e
```

## Form / Chart notes

- `Form` is react-hook-form `FormProvider` + `FormField`/`FormItem`/`FormControl` (not a plain `<form>` wrapper)
- Import `ChartTooltip` / `ChartLegend` from `@onaeko/ui` (Recharts aliases)
- Peers: `react-hook-form`, `react-is`

## Docs touchpoints

| Change type | Update |
| --- | --- |
| New public export | `src/index.ts`, Storybook, often `docs/ui/components.mdx` |
| Form API | `docs/ui/forms.mdx`, Form stories/tests/e2e |
| Install/peers | `docs/ui/installation.mdx`, README peers section |
| Package-affecting | `.changeset/*.md` via `pnpm changeset` |

## Branch / CI

Local default branch is `master`. CI runs `pnpm format:check && pnpm check`, Storybook build, example builds, Playwright.
