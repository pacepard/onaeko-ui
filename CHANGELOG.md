# @onaeko/ui

## 0.3.0

### Minor Changes

- 31fb097: Add Spacer layout primitive for explicit height/width gaps.

## 0.2.0

### Minor Changes

- a46c364: Re-port DatePicker-related set from shadcn/ui base-nova registry: Spinner, Kbd, InputOTP, Attachment, ContextMenu, HoverCard, NavigationMenu, Questionnaire, RadioGroup, Sonner/Toaster, and Toggle/ToggleGroup now match upstream Base UI sources.
- a46c364: Replace Calendar with the exact shadcn/ui base-nova implementation (locale, DayPicker timeZone, RTL-ready chevrons).
- 5e5170a: Wire Form to react-hook-form (FormProvider / Controller), declare `react-hook-form` and `react-is` peers, and document ChartTooltip / ChartLegend aliases. Form's previous plain `<form>` wrapper API is replaced.
- a46c364: Initial public release of the Onaeko UI design system.
- a46c364: Add Calendar, Chart, Command, CommandPalette, MultiSelect, Slider, and Sortable components.
- 180706f: Add optional peers for Form/Chart, ESM subpath exports (`tokens`, `theme`, per-component), and document package entrypoints.
- Initial public release of @onaeko/ui and @onaeko/icons.
- a46c364: Add DatePicker, InputOTP, Kbd, Attachment, ContextMenu, HoverCard, NavigationMenu, Questionnaire, Toggle, and ToggleGroup from shadcn/ui patterns. RadioGroup, Spinner, and Sonner/Toaster were already present and remain exported.

### Patch Changes

- a46c364: Replace Spinner with shadcn Loader2Icon implementation so animate-spin renders correctly.
- a03119f: Add `@onaeko/icons`, expand Recharts Storybook catalog coverage, and ship Sidebar + Questionnaire demos in Vite/Next examples.
