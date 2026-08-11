# Form — react-hook-form integration

## Goal

`Form` must be a real react-hook-form integration (shadcn-style), not a styled `<form>` shell.

## Public API

| Export | Role |
| --- | --- |
| `Form` | `FormProvider` |
| `FormField` | `Controller` + field name context |
| `FormItem` | Layout + id context |
| `FormControl` | Slot that binds `id` / `aria-*` from field state |
| `FormLabel` | Label tied to control id; error styling |
| `FormDescription` | Helper text id |
| `FormMessage` | Field error message (or children fallback) |
| `useFormField` | Read field/item ids and error state |

## Peers

- Required for Form consumers: `react-hook-form`
- Stories/apps typically also use `@hookform/resolvers` + `zod` (dev/app deps, not package peers)

## Non-goals

- Shipping Zod or resolvers inside `@onaeko/ui`
- Replacing Questionnaire (separate multi-step flow)

## Verification

- Unit tests: render + validation message + successful submit
- Storybook: Default + WithError
- e2e: fill email; empty submit shows alert
