# Specs

Feature specs for `@onaeko/ui` follow the **PRODUCT + TECH** pair used across Onaeko (see the feat-0002 pattern).

## Layout

```
specs/
  README.md
  feature/
    <feature-id>/
      PRODUCT.md   → problem, consumers, behaviors, non-goals, success
      TECH.md      → files, API surface, implementation notes, tests
```

## Rules

1. Every significant or high-risk change gets a folder under `specs/feature/`.
2. Write **PRODUCT** first (what / why / for whom). **TECH** is how we implement and verify it in this repo.
3. Link PRODUCT ↔ TECH with relative paths.
4. Keep specs accurate after ship; mark completed success criteria with `[x]`.
5. Do not put product business logic specs here that belong in other Onaeko apps — only design-system surfaces.

## Existing features

| Folder | Topic |
| ------ | ----- |
| [`feature/button`](./feature/button/PRODUCT.md) | Button variants, loading, asChild |
| [`feature/dialog`](./feature/dialog/PRODUCT.md) | Dialog focus and a11y |
| [`feature/chart`](./feature/chart/PRODUCT.md) | Recharts re-exports and aliases |
| [`feature/chart-catalog`](./feature/chart-catalog/PRODUCT.md) | Storybook Recharts catalog coverage |
| [`feature/form`](./feature/form/PRODUCT.md) | react-hook-form Form primitives |
| [`feature/input-blocks`](./feature/input-blocks/PRODUCT.md) | Tally/Notion-styled form input blocks |
| [`feature/input-otp`](./feature/input-otp/PRODUCT.md) | Separate boxes + production OTP behaviors |
| [`feature/spacer`](./feature/spacer/PRODUCT.md) | Empty height/width layout Spacer |
