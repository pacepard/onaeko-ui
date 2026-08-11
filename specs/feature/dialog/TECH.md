# dialog: Tech Spec

## Context

See [`PRODUCT.md`](./PRODUCT.md). Built on Radix Dialog.

---

## Implementation map

| Concern | Path |
| ------- | ---- |
| Component | [`src/components/Dialog/Dialog.tsx`](../../../src/components/Dialog/Dialog.tsx) |
| Stories | [`src/components/Dialog/Dialog.stories.tsx`](../../../src/components/Dialog/Dialog.stories.tsx) |
| Tests | [`src/components/Dialog/Dialog.test.tsx`](../../../src/components/Dialog/Dialog.test.tsx) |
| Export | [`src/components/Dialog/index.ts`](../../../src/components/Dialog/index.ts) |

---

## Compound parts

Typical surface: `Dialog`, `DialogTrigger`, `DialogContent`, `DialogTitle`, `DialogDescription`, `DialogClose` (and header/footer helpers if present). Match existing file exports; do not invent parallel APIs.

---

## Tests

| Case | Assert |
| ---- | ------ |
| Open / close | Trigger opens; Escape closes |
| A11y name | Title/description wired |
| Focus restore | Focus returns to trigger after close |

---

## Verification commands

```bash
pnpm test -- src/components/Dialog
pnpm test:e2e   # open + Escape where covered
```

Storybook: `Components/Dialog`. a11y smoke: closed trigger story.
