# button: Primary action control

## Summary

Ship a **Button** that covers primary actions with variants, sizes, loading, icons, and `asChild` composition so product apps share one accessible action control.

## Problem

Without a single Button API, apps invent inconsistent variants, loading states, and link-as-button patterns. Loading and disabled must block activation the same way everywhere.

## Non-goals

- Icon-only toolbar buttons as the primary API (use `IconButton`).
- Navigation chrome / sidebar items (use Sidebar / NavigationMenu).
- Replacing native `<button>` semantics with custom roles.

## Consumer

- Product engineers building forms, dialogs, and CTAs in Onaeko apps.
- Storybook / e2e as the visual and smoke contract.

---

## Behaviors

| Concern | Expected |
| ------- | -------- |
| Click | Fires handlers when enabled |
| `disabled` / `loading` | Prevent activation; loading sets `aria-busy` |
| Icons | `iconBefore` / `iconAfter`; spinner replaces `iconBefore` while loading |
| `asChild` | Merges styles onto a child element (e.g. link) |
| Variants | `primary`, `secondary`, `destructive`, `outline`, `ghost`, `link` |
| Sizes | `sm`, `md`, `lg`, `icon` |

---

## Use cases

| ID | Actor | Trigger | Expected |
| -- | ----- | ------- | -------- |
| **UC-B01** | User | Click enabled button | Handler runs |
| **UC-B02** | User | Click while `disabled` or `loading` | No activation |
| **UC-B03** | Engineer | `asChild` with `<a>` | Link looks like button, keeps link semantics |

---

## Open questions

None — shipped baseline for the design system.

## Related docs

- [`TECH.md`](./TECH.md)
- Mintlify / Storybook: Components/Button
