# Button

## Goal

Primary action control with variants, sizes, loading, and `asChild` composition.

## Behaviors

- Click fires handlers when enabled
- `disabled` and `loading` prevent activation; loading sets `aria-busy`
- `iconBefore` / `iconAfter` swap for spinner while loading
- `asChild` merges styles onto a child element (e.g. link)

## Verification

- Unit: click, disabled, loading, icons, variant/size, asChild
- Storybook: Primary and variant stories
- e2e: Primary story visible
