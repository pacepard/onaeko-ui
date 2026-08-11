# Spec: InputOTP separate boxes + production behaviors

## Objective

Extend `@onaeko/ui` `InputOTP` so consumers can choose **connected** slots (current look) or **separate** individual boxes, and ship Storybook + docs coverage for production OTP behaviors (paste, digit pattern, controlled value, `onComplete`, disabled, SMS autofill).

**Users:** App engineers building MFA / email-or-SMS verification UIs.

**Success:** One prop switches layout; paste and digit filtering work out of the box via `input-otp`; stories demonstrate real MFA flows.

## ASSUMPTIONS

1. Extend the existing shadcn-style `InputOTP` (backed by `input-otp`), not a new multi-`<input>` implementation.
2. Default visual remains **connected** (backward compatible).
3. “Separate boxes” is a **visual variant** (`variant="separate"` on `InputOTPGroup`), not a second component.
4. Paste / caret / autofill stay with `input-otp` (single native input); we expose helpers (`REGEXP_ONLY_*`, `pasteTransformer` examples) rather than reimplementing paste.
5. No new runtime dependencies.

→ Correct these if wrong; implementation follows this spec.

## Tech Stack

- React 18/19, TypeScript, Tailwind v4, Vitest + Testing Library, Storybook 9
- Dependency: `input-otp@^1.4.2` (already in package)

## Commands

```bash
pnpm test -- src/components/InputOTP
pnpm typecheck
pnpm lint
pnpm storybook   # Components/InputOTP
```

## Project Structure

```
specs/input-otp-separate-and-production.md   → this spec
src/components/InputOTP/InputOTP.tsx         → variants + defaults
src/components/InputOTP/InputOTP.stories.tsx → connected, separate, production demos
src/components/InputOTP/InputOTP.test.tsx    → render + variant + interaction
src/components/InputOTP/index.ts             → public exports
src/index.ts                                 → re-exports
```

## Code Style

Match existing compound components (`InputOTP` / `Group` / `Slot` / `Separator`). Prefer `cn` + `data-variant` over heavy abstraction.

```tsx
<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} aria-label="Verification code">
  <InputOTPGroup variant="separate">
    <InputOTPSlot index={0} />
    {/* ... */}
  </InputOTPGroup>
</InputOTP>
```

## API

### `InputOTPGroup`

| Prop | Type | Default | Notes |
|------|------|---------|--------|
| `variant` | `'connected' \| 'separate'` | `'connected'` | Connected = shared borders; separate = each slot fully bordered + rounded, group uses gap |

Slots inherit group variant via React context. Slot-level `variant` overrides when set.

### `InputOTPSlot`

| Prop | Type | Default | Notes |
|------|------|---------|--------|
| `variant` | `'connected' \| 'separate'` | from group / `'connected'` | Visual only |

### `InputOTP` production defaults / passthrough

| Concern | Behavior |
|---------|----------|
| SMS autofill | Default `autoComplete="one-time-code"` (overridable) |
| Digits only | Consumer passes `pattern={REGEXP_ONLY_DIGITS}` (re-exported) |
| Paste | Built-in via `input-otp`; optional `pasteTransformer` for codes like `123-456` |
| Complete | Native `onComplete` passthrough |
| Controlled | `value` + `onChange` passthrough |
| Disabled | Passthrough; container keeps `has-disabled:opacity-50` |
| Password managers | Passthrough `pushPasswordManagerStrategy` |

### Public re-exports

From `@onaeko/ui` (and package index):

- `REGEXP_ONLY_DIGITS`
- `REGEXP_ONLY_CHARS`
- `REGEXP_ONLY_DIGITS_AND_CHARS`

## Visual rules

**Connected (default):** unchanged — `border-y border-r`, first/last radius, shared edge.

**Separate:** each slot `rounded-md border` (all sides), no first/last edge collapsing; group `gap-2`.

Active / invalid / dark styles mirror current slot ring treatment for both variants.

## Stories (required)

1. `Default` — connected 6-digit with separator (existing)
2. `Separate` — 6 separate boxes, no separator
3. `DigitsOnly` — `pattern={REGEXP_ONLY_DIGITS}`
4. `PasteFriendly` — `pasteTransformer` stripping spaces/hyphens + short usage note
5. `Controlled` — local state + live value readout
6. `OnComplete` — toast or text when length filled
7. `Disabled` — disabled OTP

## Testing Strategy

- Unit/RTL: slot count; `data-variant` on separate group/slots; typing fills value; paste (where jsdom allows) updates value with transformer.
- No e2e required for this slice unless Storybook smoke is already cheap.
- Coverage bar: new stories render without throw; tests green under `pnpm test -- src/components/InputOTP`.

## Boundaries

- **Always:** keep connected default; keep `data-slot` attributes; run InputOTP tests before done.
- **Ask first:** replacing `input-otp` with custom multi-input; changing public prop names of existing exports.
- **Never:** commit secrets; remove existing Default story behavior; invent a second OTP package.

## Success Criteria

- [x] `InputOTPGroup variant="separate"` renders six independent rounded boxes with gaps
- [x] Connected default unchanged visually and in Default story
- [x] `REGEXP_ONLY_*` exported from package entry
- [x] Stories cover separate + paste + digits + controlled + onComplete + disabled
- [x] Tests cover separate variant markup and at least one interaction (type or paste)
- [x] `pnpm test -- src/components/InputOTP` and `pnpm typecheck` pass

## Open Questions

None blocking — assumptions above are taken as approved for this implementation pass.
