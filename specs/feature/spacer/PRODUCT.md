# spacer: Layout spacing primitive

## Summary

Ship a **Spacer** that inserts empty vertical and/or horizontal space via `height` / `width` so product apps share one intentional gap primitive instead of ad-hoc empty `div`s.

## Problem

Apps sprinkle empty `div`s with inline height/width for gaps (e.g. between copy and CTAs). Without a shared primitive, spacing is inconsistent, hard to find in code review, and easy to misuse for structure that should use `Stack` / CSS gap.

## Non-goals

- Replacing `Stack` `gap` or Tailwind spacing utilities as the primary layout system.
- Visual dividers (use `Separator`).
- Margin/padding props beyond optional `className`.
- Responsive token-based spacing API in v1 (can revisit later).

## Consumer

- Product engineers building pages and empty/error states in Onaeko apps (e.g. learn).
- Storybook as the visual contract.

---

## Behaviors

| Concern | Expected |
| ------- | -------- |
| Vertical space | `height` sets element height (`number` → px via style, `string` as CSS value) |
| Horizontal space | `width` sets element width the same way |
| Defaults | Missing `height` / `width` → `0` |
| `className` | Merged onto the root |
| A11y | Decorative only; hidden from assistive tech (`aria-hidden`) |
| Layout | Does not shrink in flex contexts (`shrink-0`) |

---

## Use cases

| ID | Actor | Trigger | Expected |
| -- | ----- | ------- | -------- |
| **UC-S01** | Engineer | `<Spacer height={16} />` | 16px tall empty block |
| **UC-S02** | Engineer | `<Spacer height="1rem" width="100%" />` | CSS string sizes applied |
| **UC-S03** | Engineer | Place between two blocks in a column | Visible gap without margins on siblings |

---

## Open questions

None for v1 — API matches the consumer snippet (`height` / `width` / `className`).

## Related docs

- [`TECH.md`](./TECH.md)
- Storybook: Components/Spacer
