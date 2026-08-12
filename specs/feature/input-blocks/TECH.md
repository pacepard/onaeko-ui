# input-blocks: Tech Spec

## Context

See [`PRODUCT.md`](./PRODUCT.md). Implementation lives in `@onaeko/ui`.

Upstream product catalog: [Tally input blocks](https://tally.so/help/input-blocks).

---

## Package layout (target)

```
src/components/InputBlocks/
  InputBlocks.tsx              → Root, FormTitle, Block, Question, Error, Actions
  appearance.ts                → CVA / cn helpers for document vs chrome
  kinds/
    ShortAnswer.tsx
    LongAnswer.tsx
    NumberAnswer.tsx
    EmailAnswer.tsx
    LinkAnswer.tsx
    PhoneAnswer.tsx            → Phase 1.1
    MultipleChoice.tsx
    Checkboxes.tsx
    DropdownAnswer.tsx
    MultiSelectAnswer.tsx
    DateAnswer.tsx
    TimeAnswer.tsx             → Phase 1.1
    Rating.tsx
    Csat.tsx
    LinearScale.tsx
    Nps.tsx
    Ranking.tsx                → Phase 1.1 / 2
    FileAnswer.tsx
  InputBlocks.stories.tsx      → per-kind + composed page
  InputBlocks.test.tsx
  index.ts
specs/feature/input-blocks/
  PRODUCT.md
  TECH.md
```

Export from `src/components/InputBlocks/index.ts` and `src/index.ts`. Add package subpath `./input-blocks` via `scripts/sync-package-exports.mjs` (folder name `InputBlocks` → `input-blocks`).

---

## Appearance system

```ts
type InputBlocksAppearance = 'document' | 'chrome';

type InputBlocksContextValue = {
  appearance: InputBlocksAppearance;
};
```

`InputBlocks.Root` provides context. Kind components read `appearance` and switch classes.

### Document tokens (CSS variables — add under theme/tokens)

| Variable | Purpose | Suggested start |
| -------- | ------- | --------------- |
| `--onaeko-ib-page-max` | Content width | `42rem` |
| `--onaeko-ib-block-gap` | Between blocks | `2rem` |
| `--onaeko-ib-title` | Question title size | `1.375rem`–`1.5rem` |
| `--onaeko-ib-input-underline` | Rest underline | `color-mix` muted |
| `--onaeko-ib-input-underline-focus` | Focus underline | accent / primary |
| `--onaeko-ib-choice-hover` | Choice row hover | subtle muted fill |
| `--onaeko-ib-choice-selected` | Selected wash | primary/10 |

Keep values in `src/styles/globals.css` or tokens module; do not hard-code one-off hex in every file.

### Document input recipe (`appearance="document"`)

```tsx
// illustrative — match repo cn/cva style
cn(
  'w-full bg-transparent px-0 py-2 text-base shadow-none rounded-none',
  'border-0 border-b border-border/80',
  'placeholder:text-muted-foreground/70',
  'focus-visible:border-primary focus-visible:ring-0 focus-visible:outline-none',
);
```

`appearance="chrome"` delegates to existing `Input` / `Textarea` / `Select` look.

---

## Public API (Phase 1)

### Root

```tsx
<InputBlocks.Root appearance="document" className="…">
  …
</InputBlocks.Root>
```

| Prop | Type | Default | Notes |
| ---- | ---- | ------- | ----- |
| `appearance` | `'document' \| 'chrome'` | `'document'` | Document = Tally/Notion look |
| `asChild` | boolean | false | Optional |

### Structure

```tsx
<InputBlocks.Root>
  <InputBlocks.FormTitle>Apply to Onaeko</InputBlocks.FormTitle>

  <InputBlocks.Block kind="short-answer" id="name" required>
    <InputBlocks.Question
      title="What's your full name?"
      description="As it appears on your ID."
    />
    <InputBlocks.ShortAnswer placeholder="Ada Lovelace" name="name" />
    <InputBlocks.Error />
  </InputBlocks.Block>

  <InputBlocks.Block kind="multiple-choice" id="track">
    <InputBlocks.Question title="Which track interests you?" />
    <InputBlocks.MultipleChoice
      name="track"
      options={[
        { value: 'eng', label: 'Engineering' },
        { value: 'design', label: 'Design' },
      ]}
      badge="letters"
    />
  </InputBlocks.Block>

  <InputBlocks.Actions>
    <Button type="submit">Submit</Button>
  </InputBlocks.Actions>
</InputBlocks.Root>
```

Exact compound export names may use flat exports (`InputBlocksRoot`) if that matches Button/Dialog conventions in this repo — **match existing compound style** (Questionnaire uses `QuestionnaireTitle`, etc.).

### Kind union

```ts
type InputBlockKind =
  | 'short-answer'
  | 'long-answer'
  | 'number'
  | 'email'
  | 'phone'
  | 'link'
  | 'multiple-choice'
  | 'dropdown'
  | 'checkboxes'
  | 'multi-select'
  | 'date'
  | 'time'
  | 'rating'
  | 'csat'
  | 'linear-scale'
  | 'nps'
  | 'ranking'
  | 'file'
  | 'signature' // Phase 2
  | 'matrix'; // Phase 2
```

### Multiple choice / checkboxes

```ts
type ChoiceOption = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  /** Phase 1.1+ */
  imageUrl?: string;
  color?: string;
};

type ChoiceBadge = 'letters' | 'numbers' | 'none';

type MultipleChoiceProps = {
  options: ChoiceOption[];
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  multiple?: boolean;
  minSelected?: number;
  maxSelected?: number;
  badge?: ChoiceBadge; // default 'letters'
  other?: boolean; // Phase 1.1 — expands text field
  name?: string;
  disabled?: boolean;
};
```

Keyboard: arrow keys move; Space/Enter select; selected option `aria-checked` / `role="radio"` or `role="checkbox"` depending on `multiple`.

### Rating / CSAT / linear / NPS

| Component | Value domain | UI |
| --------- | ------------ | -- |
| `Rating` | `1…max` (default max 5) | Star buttons |
| `Csat` | `1…5` | Labeled faces or numbers |
| `LinearScale` | `min…max` (default 1–5) | Number buttons + `lowLabel` / `highLabel` |
| `Nps` | `0…10` | Number row + end labels |

All: `value`, `onValueChange`, `name`, `disabled`, document spacing.

### File

Wrap `Attachment` list + hidden file input; props for `accept`, `multiple`, `maxFiles`. Upload I/O stays in the app (`onSelectFiles`).

---

## Reuse map (do not fork blindly)

| Kind | Build on |
| ---- | -------- |
| short / email / link / number | `Input` + document classes |
| long | `Textarea` + document classes |
| dropdown | `Select` |
| multi-select | `MultiSelect` |
| checkboxes | `Checkbox` group **or** shared choice-row primitive with multiple |
| multiple-choice (single) | Choice-row primitive (prefer over raw Radio for badge UX) |
| date | `DatePicker` / `Calendar` trigger restyled |
| file | `Attachment` |
| ranking | `Sortable` |
| RHF wiring | `Form`, `FormField`, `FormItem`, `FormControl`, `FormMessage` |

Extract a shared **`ChoiceRow`** used by multiple-choice and checkboxes to keep badge + hover + selected wash consistent.

---

## RHF integration pattern

```tsx
<Form {...form}>
  <InputBlocks.Root appearance="document">
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <InputBlocks.Block kind="email" id="email" required>
          <InputBlocks.Question title="Work email" />
          <FormItem>
            <FormControl>
              <InputBlocks.EmailAnswer {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        </InputBlocks.Block>
      )}
    />
  </InputBlocks.Root>
</Form>
```

Story: `WithReactHookForm`. Test: invalid email shows message.

---

## Accessibility

| Rule | Detail |
| ---- | ------ |
| Question → control | `InputBlocks.Question` label associates via `id` / `aria-labelledby` |
| Required | `aria-required` on control; visible indicator |
| Errors | `aria-describedby` + `aria-invalid` |
| Choice lists | Radiogroup / group roles; badges decorative (`aria-hidden` on letter) |
| Rating/NPS | `role="radiogroup"` + radio buttons, or slider only if value continuous (prefer discrete radios) |
| Focus visible | Never remove focus indicator entirely — underline change must meet contrast; add `:focus-visible` outline in forced-colors |

---

## Storybook (required)

Title prefix: `Components/InputBlocks` (alphabetical sidebar).

| Story | Purpose |
| ----- | ------- |
| `DocumentCanvas` | Form title + several kinds composed (hero demo) |
| `ChromeComparison` | Same fields `document` vs `chrome` |
| `ShortAndLong` | Text kinds + placeholders |
| `Contact` | Email, link (+ phone when shipped) |
| `MultipleChoice` | Letters badge, single select |
| `MultipleChoiceMulti` | multiple + min/max |
| `Checkboxes` | Consent + multi |
| `DropdownAndMultiSelect` | Long lists |
| `Date` | Date picker document trigger |
| `RatingScales` | Rating, CSAT, linear, NPS |
| `File` | Attachment flow mock |
| `WithReactHookForm` | Validation |
| `QuestionnaireDocumentControls` | Optional: one Questionnaire item using document inputs |

Motion: subtle select/focus only.

---

## Tests

| Case | Assert |
| ---- | ------ |
| Document input classes | Underline border-b; no full box border in document mode |
| Chrome mode | Existing chrome classes still applied |
| Multiple choice single | Selecting B deselects A; badge present |
| Multiple choice multi | Two options stay selected; max enforced if set |
| NPS | Can select 0 and 10; `onValueChange` called |
| RHF email | Submit empty/invalid → message |
| A11y | Question labelling; radiogroup name |

Commands:

```bash
pnpm test -- src/components/InputBlocks
pnpm check
pnpm storybook   # Components/InputBlocks
```

---

## e2e (optional Phase 1)

If cheap against Storybook: open `DocumentCanvas`, type in short answer, select choice, assert values visible. Skip if flaky with portals.

---

## Implementation order

1. Context + tokens + `ShortAnswer` / `LongAnswer` document styles  
2. `Question` / `Block` / `FormTitle` / `Error`  
3. `ChoiceRow` + `MultipleChoice` + `Checkboxes`  
4. Email / link / number  
5. Dropdown / MultiSelect wrappers  
6. Date  
7. Rating / CSAT / LinearScale / NPS  
8. File  
9. RHF story + tests  
10. Composed `DocumentCanvas` story + Mintlify blurb  

Do **not** start slash menu until Phase 1 checklist in PRODUCT is green.

---

## Boundaries

- **Always:** keep chrome defaults for existing Input/Form; document mode opt-in via InputBlocks; run targeted tests; update this TECH when kinds ship.
- **Ask first:** new font packages; `libphonenumber` (or similar); signature canvas dependency; any Stripe/reCAPTCHA SDK.
- **Never:** put submission APIs or payment secrets in this package; invent non-Tally kind names without updating PRODUCT; make document styles the global Input default without an RFC.

---

## Related implementation map

| Concern | Path |
| ------- | ---- |
| Feature specs | [`PRODUCT.md`](./PRODUCT.md) |
| Form RHF | [`src/components/Form`](../../../src/components/Form) |
| Questionnaire | [`src/components/Questionnaire`](../../../src/components/Questionnaire) |
| Input / Textarea | `src/components/Input`, `Textarea` |
| Select / MultiSelect | `src/components/Select`, `MultiSelect` |
| DatePicker | `src/components/DatePicker` |
| Attachment | `src/components/Attachment` |
| Sortable | `src/components/Sortable` |
| Tokens / theme | `src/tokens`, `src/styles/globals.css` |

---

## Open tech defaults

| # | Topic | Default |
| - | ----- | ------- |
| 1 | Autosize textarea | `yes` for long-answer in document mode (small helper or CSS) |
| 2 | Letter badges | `A`–`Z` then `AA`…; `aria-hidden` |
| 3 | Date display format | Locale-friendly medium date; match DatePicker |
| 4 | Controlled-only vs uncontrolled | Support both like Radix-style primitives |
