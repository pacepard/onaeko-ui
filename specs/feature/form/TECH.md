# form: Tech Spec

## Context

See [`PRODUCT.md`](./PRODUCT.md). Breaking vs prior plain `<form>` wrappers.

---

## Implementation map

| Concern | Path |
| ------- | ---- |
| Component | [`src/components/Form/Form.tsx`](../../../src/components/Form/Form.tsx) |
| Stories | [`src/components/Form/Form.stories.tsx`](../../../src/components/Form/Form.stories.tsx) |
| Tests | [`src/components/Form/Form.test.tsx`](../../../src/components/Form/Form.test.tsx) |
| Export | [`src/components/Form/index.ts`](../../../src/components/Form/index.ts), [`src/index.ts`](../../../src/index.ts) |

---

## Peers

```json
"peerDependencies": {
  "react-hook-form": "^7.0.0"
}
```

Optional via `peerDependenciesMeta` where applicable. Do not add Zod as a package peer.

---

## Tests

| Case | Assert |
| ---- | ------ |
| Render | Form + field mounts |
| Validation | Error message on invalid submit |
| Success | Submit with valid values |

---

## Verification commands

```bash
pnpm test -- src/components/Form
pnpm test:e2e   # fill email; empty submit shows alert where covered
pnpm check
```

Storybook: `Components/Form` (Default, WithError).
