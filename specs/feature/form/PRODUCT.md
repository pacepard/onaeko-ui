# form: react-hook-form integration

## Summary

`Form` is a real **react-hook-form** integration (shadcn-style `FormProvider` + field primitives), not a styled `<form>` shell.

## Problem

A plain form wrapper looked like a design-system Form but lacked field state, errors, and a11y wiring. Consumers need Controller-backed fields with label/description/message ids.

## Non-goals

- Shipping Zod or `@hookform/resolvers` inside `@onaeko/ui`.
- Replacing Questionnaire (separate multi-step flow).
- Keeping the previous plain-`<form>` wrapper API (breaking change).

## Consumer

- Apps that already use `react-hook-form` (declared peer).
- Stories/apps typically add `@hookform/resolvers` + `zod` as app deps.

---

## Public API (product contract)

| Export | Role |
| ------ | ---- |
| `Form` | `FormProvider` |
| `FormField` | `Controller` + field name context |
| `FormItem` | Layout + id context |
| `FormControl` | Slot binding `id` / `aria-*` from field state |
| `FormLabel` | Label tied to control id; error styling |
| `FormDescription` | Helper text id |
| `FormMessage` | Field error message (or children fallback) |
| `useFormField` | Read field/item ids and error state |

---

## Use cases

| ID | Actor | Trigger | Expected |
| -- | ----- | ------- | -------- |
| **UC-F01** | User | Submit invalid field | `FormMessage` shows validation |
| **UC-F02** | User | Submit valid values | Submit handler receives data |
| **UC-F03** | Engineer | Wire `useForm` + `FormField` | Control gets correct `aria-describedby` |

---

## Open questions

None — shipped; document peers in installation docs.

## Related docs

- [`TECH.md`](./TECH.md)
- `docs/ui/forms.mdx`, `docs/ui/installation.mdx`
