# input-otp: Tech Spec

## Context

See [`PRODUCT.md`](./PRODUCT.md). Dependency: `input-otp` (already in package).

---

## Implementation map

| Concern | Path |
| ------- | ---- |
| Component | [`src/components/InputOTP/InputOTP.tsx`](../../../src/components/InputOTP/InputOTP.tsx) |
| Stories | [`src/components/InputOTP/InputOTP.stories.tsx`](../../../src/components/InputOTP/InputOTP.stories.tsx) |
| Tests | [`src/components/InputOTP/InputOTP.test.tsx`](../../../src/components/InputOTP/InputOTP.test.tsx) |
| Export | [`src/components/InputOTP/index.ts`](../../../src/components/InputOTP/index.ts), [`src/index.ts`](../../../src/index.ts) |

---

## Code style

Match compound parts: `InputOTP` / `Group` / `Slot` / `Separator`. Prefer `cn` + `data-variant` over heavy abstraction.

```tsx
<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} aria-label="Verification code">
  <InputOTPGroup variant="separate">
    <InputOTPSlot index={0} />
    {/* ... */}
  </InputOTPGroup>
</InputOTP>
```

---

## Stories (required)

1. `Default` — connected 6-digit with separator  
2. `Separate` — six separate boxes  
3. `DigitsOnly` — `REGEXP_ONLY_DIGITS`  
4. `PasteFriendly` — `pasteTransformer`  
5. `Controlled` — live value readout  
6. `OnComplete` — feedback when filled  
7. `Disabled`

---

## Tests

| Case | Assert |
| ---- | ------ |
| Markup | Slot count; `data-variant` on separate group/slots |
| Interaction | Typing (or paste where jsdom allows) updates value |

---

## Boundaries

- **Always:** keep connected default; keep `data-slot`; run InputOTP tests before done.
- **Ask first:** replacing `input-otp`; renaming public props.
- **Never:** remove Default story behavior; invent a second OTP package.

---

## Verification commands

```bash
pnpm test -- src/components/InputOTP
pnpm typecheck
pnpm storybook   # Components/InputOTP
```
