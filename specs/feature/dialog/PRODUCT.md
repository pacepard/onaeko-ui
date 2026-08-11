# dialog: Modal overlay

## Summary

Provide a **Dialog** modal for focused tasks: open from a trigger, trap focus, expose accessible name/description, close on Escape with focus restore.

## Problem

Modals that skip focus trap, Escape handling, or naming create a11y and UX regressions. Apps need one Radix-backed Dialog that matches Onaeko chrome.

## Non-goals

- Sheet / Drawer side panels (separate components).
- Non-modal popovers (use Popover / HoverCard).
- App-level routing modals.

## Consumer

- Product engineers for confirmations, short forms, and focused tasks.
- Playwright a11y smoke on Storybook.

---

## Behaviors

| Concern | Expected |
| ------- | -------- |
| Open | From trigger |
| Close | Escape (and dismiss controls); focus returns to trigger |
| Name / description | From Dialog title and description |
| Focus | Trapped while open |

---

## Use cases

| ID | Actor | Trigger | Expected |
| -- | ----- | ------- | -------- |
| **UC-D01** | User | Activate trigger | Dialog opens, focus moves inside |
| **UC-D02** | User | Press Escape | Dialog closes; focus on trigger |
| **UC-D03** | AT user | Open dialog | Accessible name/description announced |

---

## Open questions

None — shipped baseline.

## Related docs

- [`TECH.md`](./TECH.md)
- Storybook: `Components/Dialog`
