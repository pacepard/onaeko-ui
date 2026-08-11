# button: Tech Spec

## Context

See [`PRODUCT.md`](./PRODUCT.md). Implementation lives in `@onaeko/ui`.

---

## Implementation map

| Concern | Path |
| ------- | ---- |
| Component | [`src/components/Button/Button.tsx`](../../../src/components/Button/Button.tsx) |
| Stories | [`src/components/Button/Button.stories.tsx`](../../../src/components/Button/Button.stories.tsx) |
| Tests | [`src/components/Button/Button.test.tsx`](../../../src/components/Button/Button.test.tsx) |
| Export | [`src/components/Button/index.ts`](../../../src/components/Button/index.ts), [`src/index.ts`](../../../src/index.ts) |

---

## Public API (target)

```tsx
<Button variant="primary" size="md" loading={false} iconBefore={...} iconAfter={...} asChild>
  Continue
</Button>
```

- Prefer `cn` + `cva` (or existing variant helpers) matching sibling components.
- Keep `data-slot` / design-token classes consistent with the rest of the system.

---

## Tests

| Case | Assert |
| ---- | ------ |
| Click | Handler called when enabled |
| Disabled / loading | No activation; `aria-busy` when loading |
| Icons | Before/after render; spinner while loading |
| Variant / size | Class or role coverage for options |
| asChild | Child receives merged props/classes |

---

## Verification commands

```bash
pnpm test -- src/components/Button
pnpm check
```

Storybook: `Components/Button`. e2e: Primary story visible.
