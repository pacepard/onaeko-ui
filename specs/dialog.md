# Dialog

## Goal

Modal overlay for focused tasks. Built on Radix Dialog.

## Behaviors

- Opens from trigger; closes on Escape and focus returns to trigger
- Exposes accessible name/description from title and description
- Traps focus while open

## Verification

- Unit: open/close, accessible name/description, focus restore
- Storybook: Default
- e2e: open and Escape close
- a11y smoke: closed trigger story
