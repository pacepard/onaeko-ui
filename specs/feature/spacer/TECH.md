# spacer: Tech Spec

## Context

See [`PRODUCT.md`](./PRODUCT.md). Implementation lives in `@onaeko/ui`.

---

## Implementation map

| Concern | Path |
| ------- | ---- |
| Component | [`src/components/Spacer/Spacer.tsx`](../../../src/components/Spacer/Spacer.tsx) |
| Stories | [`src/components/Spacer/Spacer.stories.tsx`](../../../src/components/Spacer/Spacer.stories.tsx) |
| Tests | [`src/components/Spacer/Spacer.test.tsx`](../../../src/components/Spacer/Spacer.test.tsx) |
| Export | [`src/components/Spacer/index.ts`](../../../src/components/Spacer/index.ts), [`src/index.ts`](../../../src/index.ts) |
| Package entry | `./spacer` via `pnpm sync:exports` |

---

## Public API (target)

```tsx
import { Spacer } from '@onaeko/ui';
// or
import { Spacer } from '@onaeko/ui/spacer';

<Spacer height={16} />
<Spacer height="16px" width="100%" className="bg-transparent" />
```

```ts
type SpacerProps = {
    height?: string | number;
    width?: string | number;
    className?: string;
};
```

### Conventions (vs consumer snippet)

- Named export `Spacer` (design-system default; not `export default`).
- Function component + exported `SpacerProps` (match `Skeleton` / `Stack`; no `FC`).
- `data-slot="spacer"` for consistency with other primitives.
- `aria-hidden` + `shrink-0` for decorative flex-safe spacing.

---

## Tests

| Case | Assert |
| ---- | ------ |
| Height number | Inline style height is `16` (or equivalent) for `height={16}` |
| Height string | Inline style height is `"16px"` for `height="16px"` |
| Width | Inline style width applied |
| Defaults | Missing axes → `0` |
| Slot / a11y | `data-slot="spacer"`, `aria-hidden="true"` |
| className | Custom class present on root |

---

## Verification commands

```bash
pnpm test -- src/components/Spacer
pnpm typecheck
pnpm lint
pnpm build
```

Storybook: `Components/Spacer`.
