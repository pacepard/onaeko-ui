# @onaeko/ui

## 1.0.0

### Major Changes

- 22a8a2d: First stable Onaeko-branded release. The package was renamed from `@onaeko/ui` to `@onaeko/ui`, so imports, installs, and CSS entrypoints change (`pnpm add @onaeko/ui`, `import '@onaeko/ui/styles.css'`). Component APIs are unchanged apart from the token/color rebrand.

### Minor Changes

- e4996c5: Restyle semantic tokens and core chrome (Button, Input, Textarea, Select, Card, Badge, Table) to follow DESIGN.md: warm paper canvas, Notion blue as the only structural accent, pill primary CTAs, and 4px form fields.
- 22a8a2d: Recolor the design system to Onaeko from DESIGN.md: orange primary (#f36827), forest-green hero (#2e503f), Notion-style chrome unchanged. Expand typed tokens with palette, designColors, and semanticHex. Add dedicated `--onaeko-chart-*` series tokens and wire Chart stories to `chartColors` so series colors stay independent of CTA primary.
- b1bc2c2: Share theme preference across subdomains via cookie (optional cookieDomain).

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
