# input-blocks: Tally / Notion-styled form input blocks

## Summary

Ship a **document-style form surface** inspired by [Tally input blocks](https://tally.so/help/input-blocks) and Notion’s block editor: questions and inputs live on a calm page canvas, not inside dense bordered “dashboard” cards.

Respondents answer **input blocks**. Authors (later) insert blocks with `/` (slash menu). Visual language is **Tally + Notion**: large readable question titles, minimal chrome, underline / ghost inputs, soft focus, letter-badge choices, generous vertical rhythm.

This is a **design-system feature** for `@onaeko/ui` — presentation + accessible interaction contracts. Apps own persistence, payments, spam, and analytics.

**Source of truth (product catalog):** [tally.so/help/input-blocks](https://tally.so/help/input-blocks).

## Problem

Today’s Form / Input / Select / Questionnaire pieces are shadcn-form chrome (boxed fields, compact labels). They work for settings UIs but feel wrong for **survey / application / onboarding forms** where Tally and Notion set the bar:

| Expectation | Current gap |
| ----------- | ----------- |
| Form reads like a document | Fields sit in bordered cards / dense stacks |
| Question title is the hero | Label is small accessory text |
| Inputs are quiet until focus | Always-on box borders compete with content |
| Choices feel like Notion list rows | Radio/checkbox look like settings toggles |
| One vocabulary for “blocks” | Engineers recompose primitives ad hoc |

Without a shared **Input Blocks** layer, Onaeko products (Learn, Pathfinder, apprenticeship apps, etc.) will fork inconsistent “pretty forms.”

## Non-goals

- **Full Tally clone** (hosted form builder product, Insights, themes marketplace).
- **Slash-menu authoring v1** as a required ship — slash menu is Phase 2; respondent rendering is Phase 1.
- **Stripe payments**, live CSAT Insights, Unsplash picker, or Google reCAPTCHA **service** wiring (UI shells only if ever needed; prefer omit until product asks).
- **Replacing** existing `Form` (RHF) or `Questionnaire` APIs — compose with them.
- **Auth, API clients, submission storage** inside `@onaeko/ui`.
- Purple/glow “AI form” aesthetics, pill-stat marketing chrome, or card-in-card layouts for the default block look.

## Consumer

| Consumer | Need |
| -------- | ---- |
| Onaeko product apps | Beautiful long-form / survey respondent UIs |
| Design-system engineers | One block vocabulary + Storybook catalog |
| Form authors (Phase 2+) | Slash insert + block settings chrome |

---

## Visual language (Tally × Notion)

Treat the form as a **document**, not a settings panel.

### Canvas

| Token / rule | Spec |
| ------------ | ---- |
| Page | Single column, max width ~640–720px, generous top padding |
| Background | Soft paper / page (`--onaeko-background` or dedicated `--onaeko-form-page`) — not a dashboard grid |
| Vertical rhythm | Large gaps between blocks (~24–40px); tight within a block (~8–12px) |
| No cards by default | Block root has **no** border, shadow, or filled panel unless focused/hovered for authoring |

### Typography

| Element | Spec |
| ------- | ---- |
| Form title | Display / large heading (Notion page title energy) — `text-3xl`–`text-4xl`, medium weight |
| Question title | `text-xl`–`text-2xl`, medium, `text-pretty`, comfortable line-height |
| Description / help | Muted, `text-sm`–`text-base`, under title |
| Required | Subtle `*` or “Required” chip — never shouty |
| Input text | Body size matching question (~`text-base`–`text-lg`) |
| Placeholder | Muted; authors can set placeholder by “typing into” the block metaphor (prop) |

Prefer a **document-friendly** pairing already in the system if available; if Inter-only, increase size/weight hierarchy rather than inventing a second brand. Ask before adding a new font dependency.

### Text inputs (short, long, email, phone, link, number)

**Default appearance (respondent):**

- Transparent / very subtle background
- **No full box border** — use **bottom edge only** (1px muted → stronger on hover → accent on focus), Notion/Tally underline feel
- Full width of content column (Tally’s CSS often forces full width; we default full-width in this appearance)
- Comfortable min-height; long answer grows (textarea autosize optional Phase 1.1)
- Focus: accent underline + soft ring **or** underline-only (prefer underline-only for document mode; soft ring for a11y high-contrast / forced-colors)

**Do not** use the default shadcn filled-border `Input` look when `appearance="document"` (name TBD — see TECH).

### Choices (multiple choice, checkboxes, ranking rows)

- Rows like Notion list items: full-width hit target, light hover wash
- Optional **letter / number badge** (Tally default letters: A, B, C…)
- Selected: accent border or fill wash + check — not a heavy Material card
- Multi vs single controlled by block setting, not a different component family
- “Other” option expands an underline text field inline

### Dropdown / multi-select

- Trigger matches document input (underline or soft field)
- Menu can reuse existing Select / MultiSelect popover chrome (slightly denser is OK in overlays)

### Rating / scale / NPS

- Large tappable glyphs or numbered buttons in a horizontal row
- Minimal labels under ends (Linear / NPS)
- No confetti or emoji-only APIs — icons via `@onaeko/icons` / Lucide

### File upload

- Dashed quiet dropzone or Attachment-style chip list; document spacing
- Reuse `Attachment` patterns; do not invent a second upload state machine

### Motion

2–3 intentional motions only:

1. Block focus / answer select — soft background fade (~150ms)
2. Underline focus — color/width transition
3. Optional enter for slash menu (Phase 2)

No parallax, glow pulses, or staggered marketing animations.

---

## Block catalog (from Tally)

Slash hints are **product copy** for Phase 2 authoring; Phase 1 exposes the same types as React components / a typed `kind` union.

### Text and number

| Kind | Slash (Tally) | Collects | Maps to (approx.) |
| ---- | ------------- | -------- | ----------------- |
| `short-answer` | `/short` | Short text (name, address line) | Document `Input` |
| `long-answer` | `/long` | Long text | Document `Textarea` |
| `number` | `/number` | Numeric | `Input type="number"` / inputMode decimal |

Placeholder text supported on all.

### Contact info

| Kind | Slash | Notes |
| ---- | ----- | ----- |
| `email` | `/email` | Email format validation (consumer schema or built-in pattern) |
| `phone` | `/phone` | Formatted phone; lib choice in TECH (ask before adding `libphonenumber`) |
| `link` | `/link` | URL |
| `signature` | `/signature` | Simple e-sign canvas — **Phase 2** |

### Choices

| Kind | Slash / shortcut | Notes |
| ---- | ---------------- | ----- |
| `multiple-choice` | `/multiple`, `[a]` | Single by default; settings → multiple + min/max |
| `dropdown` | `/dropdown`, `[v]` | Long single-select list |
| `checkboxes` | `/checkbox`, `[]` | Multi; consent use-case; min/max |
| `multi-select` | `/multi-select` | Multi from dropdown (reuse MultiSelect) |
| `matrix` | `/matrix` | Grid / Likert — **Phase 2** |

Multiple-choice settings to support over time (Tally parity): default answer, Other, randomize, badge letters/numbers/none, color-code, option images, bulk insert (authoring), column layout for options.

### Date & time

| Kind | Slash | Notes |
| ---- | ----- | ----- |
| `date` | `/date` | Date picker; display like `Nov 30, 1988` |
| `time` | `/time` | 24h `13:30` — **Phase 1.1** if Calendar time API thin |

### Rating & ranking

| Kind | Slash | Notes |
| ---- | ----- | ----- |
| `rating` | `/rating` | Stars (count configurable) |
| `csat` | `/csat` | 1–5 satisfaction — UI only (no Insights) |
| `linear-scale` | `/linear` | Numeric scale + end labels |
| `nps` | `/nps` | 0–10; labels configurable; **no** auto Insights scoring in UI package |
| `ranking` | `/ranking` | Reorder options — compose `Sortable` — **Phase 1.1 / 2** |

### File upload

| Kind | Slash | Notes |
| ---- | ----- | ----- |
| `file` | `/file` | Attachments; app supplies upload transport |

### Out of scope for DS (shells only / omit)

| Kind | Slash | Decision |
| ---- | ----- | -------- |
| `payment` | `/payment` | **Omit** — product + Stripe belong in apps |
| `recaptcha` | `/bot` | **Omit** — third-party script |
| `image` / `embed` | `/image`, `/embed` | Content blocks — **Phase 2** (not inputs); optional `InputBlocks.Content` |

---

## Information architecture

```
InputBlocks.Root          → page canvas + appearance provider
  InputBlocks.FormTitle   → document title
  InputBlocks.Block       → one question/input unit (kind + id)
    InputBlocks.Question  → title + description + required
    InputBlocks.Control   → kind-specific control
    InputBlocks.Error     → validation message
  InputBlocks.Actions     → submit / continue (optional)
```

**Appearance:** `appearance="document"` (default for this feature) vs `appearance="chrome"` (existing Form look) so apps can opt in without breaking settings forms.

**Composition with Form (RHF):** Each block control should be wrappable by `FormField` / `FormControl`. Document appearance changes visuals, not RHF contracts.

**Composition with Questionnaire:** Questionnaire remains multi-step “one item at a time.” Input Blocks are **scrollable document** (one page, many blocks) by default. A story may show Questionnaire **using** document-styled controls inside an item.

---

## Authoring (Phase 2 — specify now, build later)

| Affordance | Behavior |
| ---------- | -------- |
| `/` slash menu | Insert block by kind (Tally parity commands) |
| Block handle | Hover gutter control; open settings |
| Settings | Required, placeholder, default, min/max choices, badge, etc. |
| Reorder | Drag via Sortable |
| Columns | Drag blocks side-by-side — **Phase 3** |

Phase 1 ships **respondent rendering + Storybook catalog** only.

---

## Use cases

| ID | Actor | Trigger | Expected |
| -- | ----- | ------- | -------- |
| **UC-IB01** | Respondent | Open form page | Document canvas; titles dominate; inputs underline-style |
| **UC-IB02** | Respondent | Focus short answer | Underline accent; caret visible; no heavy box flash |
| **UC-IB03** | Respondent | Choose multiple-choice option | Letter badge row selects; keyboard works |
| **UC-IB04** | Respondent | Enable Other | Inline underline field appears |
| **UC-IB05** | Respondent | Fill email invalid | Inline error under block; focusable message |
| **UC-IB06** | Respondent | Upload file | Attachment list updates; errors surfaced |
| **UC-IB07** | Respondent | Rate 1–5 / NPS 0–10 | Clear selected state; roving tabindex |
| **UC-IB08** | Engineer | Wrap block in `FormField` | RHF value + error wire up |
| **UC-IB09** | Engineer | Browse Storybook | One story per Phase 1 kind + full “Tally-like form” composition |
| **UC-IB10** | Author (P2) | Type `/short` | Short-answer block inserted |

---

## Phasing

### Phase 1 — Respondent document UI (ship target for this spec)

- [ ] `appearance="document"` tokens + primitives for short/long/number/email/link
- [ ] `multiple-choice`, `checkboxes`, `dropdown`, `multi-select`
- [ ] `date`, `rating`, `linear-scale`, `nps`, `csat`
- [ ] `file` via Attachment
- [ ] Storybook catalog + one composed “application form” page
- [ ] Unit tests for selection, a11y names, document input focus styles
- [ ] Docs note: Tally catalog mapping + non-goals

### Phase 1.1

- [ ] `phone` (confirm lib), `time`, textarea autosize, ranking via Sortable
- [ ] Multiple-choice: Other, badge modes, min/max

### Phase 2 — Authoring chrome

- [ ] Slash menu, block settings, reorder
- [ ] `signature`, `matrix`, content `image` / embed shells

### Phase 3

- [ ] Columns, option images, color-code, randomize, bulk insert tooling

---

## ASSUMPTIONS

1. **Respondent-first:** Phase 1 does not require a form builder; apps pass props / children.
2. **Reuse primitives:** Prefer wrapping `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `MultiSelect`, `DatePicker`, `Attachment`, `Sortable` with a document appearance — avoid parallel uncontrolled forks.
3. **Default visual for Input Blocks is document mode**, not today’s chrome Input.
4. Existing chrome Form/Input **defaults stay unchanged** for settings UIs.
5. No Stripe / reCAPTCHA / Unsplash in this package.
6. Tally slash strings are the **canonical kind aliases** for docs and Phase 2 commands.

→ Correct these before implementation if wrong.

---

## Success criteria (Phase 1)

- [ ] Document appearance matches the visual rules above (Storybook + side-by-side vs chrome)
- [ ] Phase 1 kinds render and are keyboard accessible
- [ ] Composed demo feels closer to Tally/Notion than to a settings form
- [ ] RHF composition path documented and tested for at least text + multiple-choice
- [ ] `pnpm test` for new files + `pnpm check` pass
- [ ] Spec folder kept in sync when kinds ship

## Open questions

| # | Topic | Default |
| - | ----- | ------- |
| 1 | New font for document titles? | **No** — scale Inter/heading tokens first |
| 2 | Phone formatting library | **Ask** before adding dependency; pattern-only OK for P1 |
| 3 | Signature / matrix timing | Phase 2 |
| 4 | Should Questionnaire adopt document styles? | Optional story only in P1; no breaking default |
| 5 | Package export path | `@onaeko/ui` barrel + `@onaeko/ui/input-blocks` subpath |

## Related docs

- [`TECH.md`](./TECH.md)
- [Tally — Input blocks](https://tally.so/help/input-blocks)
- [Tally — Multiple choice](https://tally.so/help/multiple-choice)
- [`../form/PRODUCT.md`](../form/PRODUCT.md) — RHF primitives
- Questionnaire component (multi-step respondent flow)
