# input-otp: Separate boxes + production behaviors

## Summary

Extend **InputOTP** so consumers can choose **connected** slots (default) or **separate** individual boxes, with Storybook coverage for production MFA behaviors (paste, digit pattern, controlled value, `onComplete`, disabled, SMS autofill).

## Problem

Connected-only OTP looks wrong for many MFA UIs. Apps also need documented paste, digit filtering, and `autoComplete="one-time-code"` without reimplementing `input-otp`.

## Non-goals

- A second OTP package or multi-native-`<input>` implementation.
- Changing the default visual away from **connected** (backward compatible).
- New runtime dependencies.

## Consumer

- App engineers building MFA / email-or-SMS verification UIs.

## Assumptions (approved)

1. Extend existing shadcn-style `InputOTP` (backed by `input-otp`).
2. “Separate boxes” is `variant="separate"` on `InputOTPGroup` (slots may override).
3. Paste / caret / autofill stay with `input-otp`; expose `REGEXP_ONLY_*` and `pasteTransformer` examples.
4. No new runtime dependencies.

---

## API (product)

### `InputOTPGroup`

| Prop | Type | Default | Notes |
| ---- | ---- | ------- | ----- |
| `variant` | `'connected' \| 'separate'` | `'connected'` | Connected = shared borders; separate = full border + gap |

### `InputOTPSlot`

| Prop | Type | Default | Notes |
| ---- | ---- | ------- | ----- |
| `variant` | `'connected' \| 'separate'` | from group | Visual only |

### Production passthrough

| Concern | Behavior |
| ------- | -------- |
| SMS autofill | Default `autoComplete="one-time-code"` |
| Digits | `pattern={REGEXP_ONLY_DIGITS}` (re-exported) |
| Paste | Built-in; optional `pasteTransformer` |
| Complete / controlled / disabled | Passthrough |

### Public re-exports

`REGEXP_ONLY_DIGITS`, `REGEXP_ONLY_CHARS`, `REGEXP_ONLY_DIGITS_AND_CHARS`

---

## Visual rules

- **Connected:** shared edges (`border-y border-r`, first/last radius).
- **Separate:** each slot `rounded-md border`, group `gap-2`.

---

## Use cases

| ID | Actor | Trigger | Expected |
| -- | ----- | ------- | -------- |
| **UC-O01** | Engineer | `variant="separate"` | Six independent boxes with gaps |
| **UC-O02** | User | Paste `123-456` with transformer | Digits fill slots |
| **UC-O03** | User | Complete length | `onComplete` fires |

---

## Success criteria

- [x] Separate variant renders independent rounded boxes
- [x] Connected default unchanged
- [x] `REGEXP_ONLY_*` exported
- [x] Stories: separate + paste + digits + controlled + onComplete + disabled
- [x] Tests cover separate markup + interaction
- [x] `pnpm test -- src/components/InputOTP` and typecheck pass

## Open questions

None blocking.

## Related docs

- [`TECH.md`](./TECH.md)
