# Publishing the Onaeko UI Package

This document defines how to structure, publish, version, verify, and consume the `@onaeko/ui` npm package (and its sibling `@onaeko/icons`).

## Package Identity

Repository:

```text
https://github.com/onaeko/onaeko-ui
```

npm package name (`package.json`):

```json
{
  "name": "@onaeko/ui",
  "version": "0.3.0",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts"
}
```

The GitHub repository URL, `"homepage"`, `"bugs.url"`, and `"name"` in `package.json` must continue to match. Consumers use the npm package name when installing. They import from `@onaeko/ui`, which resolves through the `"exports"` map to compiled files in `dist/`, not to `src/`.

Scope rules:

- Every publish uses `"publishConfig": { "access": "public" }`, so both packages stay public scoped packages.
- The scope owner is the npm account that holds the `@onaeko` org (`npm whoami` must be that account or a member with publish rights).
- Published versions are immutable. Renaming `package.json` `"name"` later does not move existing versions: already-published versions remain on the registry forever under their old name.

## Required Project Structure

TypeScript source lives under `src/`. The published artifact is `dist/`.

```text
onaeko-ui/
├── .changeset/                 # release intent (version bump + changelog entry)
├── .docs/
│   └── publish.md
├── .github/
│   └── workflows/
│       ├── ci.yml              # format, check, storybook, examples, playwright
│       └── release.yml         # changesets: version PR or publish on master
├── docs/
│   ├── docs.json
│   └── ui/*.mdx                # installation, theming, components
├── examples/
│   ├── next/
│   └── vite/
├── packages/
│   └── icons/                  # @onaeko/icons (tsup build -> dist/)
├── scripts/
│   └── sync-package-exports.mjs
├── src/
│   ├── components/Name/
│   │   ├── Name.tsx
│   │   ├── Name.stories.tsx
│   │   ├── Name.test.tsx
│   │   └── index.ts
│   ├── styles/
│   ├── theme/
│   ├── tokens/
│   └── index.ts                # public barrel
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.build.json
├── vite.config.ts
└── README.md
```

`pnpm build` runs `sync:exports` (rewrites the `"exports"` map from `src/`) and then `vite build`, which emits ES modules plus declarations into `dist/`. `"files": ["dist", "styles.css.d.ts"]` must keep covering every entry the `"exports"` map points at, so consumers receive compiled output, not source.

### Keep Source Under `src/` and Publish Only `dist/`

This is a library. Source belongs in `src/`; consumers must never import it:

```ts
// Avoid this.
import { Button } from '@onaeko/ui/src/components/Button'
```

Consumers import documented subpaths only:

```ts
import { Button, Card, Input } from '@onaeko/ui'
import { Button } from '@onaeko/ui/button'
import { initTheme, setTheme } from '@onaeko/ui/theme'
import '@onaeko/ui/styles.css'
```

### The Exports Map Is Generated

`package.json` `"exports"` is produced by `scripts/sync-package-exports.mjs` and is regenerated on every `pnpm build`:

```bash
pnpm sync:exports
```

Never hand-edit `"exports"` to add a subpath. Add `src/components/<Name>/index.ts`, run the script, and commit the regenerated `"package.json"`. A subpath in `"exports"` whose `dist/*.js` file does not exist is a broken publish.

### Keep `src/index.ts` as the Public Barrel

This repository is a library, not an application. `src/index.ts` is the public contract. Do not turn it into a side-effectful entry:

```ts
// Avoid this in src/index.ts.
import { initTheme } from './theme'
initTheme() // runs on consumer import
```

Re-export from the modules that own the symbols:

```ts
export * from './components/Button'
export * from './components/Card'
export { initTheme, setTheme } from './theme'
export * from './tokens'
```

Anything exported from the barrel plus every documented `"exports"` subpath is the public API. Storybook, `docs/ui/components.mdx`, and the barrel must agree.

### Two Published Packages

| Package | Root | Version script | Build |
| --- | --- | --- | --- |
| `@onaeko/ui` | repository root | changesets | `pnpm build` (`vite build` -> `dist/`) |
| `@onaeko/icons` | `packages/icons/` | changesets | `pnpm build:icons` (`tsup` -> `dist/`) |

`pnpm release` builds both (`build:all`) before `changeset publish`. Workspace examples (`examples/*`) are ignored by changesets via `.changeset/config.json` `"ignore"`.

## Initial Publication

### 1. Confirm Package Identity and Entry

From the repository root:

```bash
node -p "require('./package.json').name"
node -p "require('./package.json').version"
node -p "require('./package.json').exports['.']"
```

Expected output:

```text
@onaeko/ui
0.3.0
[object Object]
```

Confirm the workspace names too:

```bash
node -p "require('./packages/icons/package.json').name"
```

### 2. Normalize Dependencies

```bash
pnpm install --frozen-lockfile
```

Commit `package.json`, `packages/icons/package.json`, and `pnpm-lock.yaml` together. Do not add `pnpm-lock.yaml` to `.gitignore`.

### 3. Run the Release Checks

```bash
pnpm format:check
pnpm check
pnpm build:all
```

`pnpm check` runs `typecheck`, `lint`, `test`, and `build`. `pnpm build:all` builds `@onaeko/icons` first, then `@onaeko/ui`.

Confirm the entry files exist:

```bash
ls dist/index.js dist/index.d.ts dist/styles.css packages/icons/dist/index.js
```

Do not publish a version if any command fails.

### 4. Review the Pending Release

```bash
git status
git diff
git diff --stat
npm pack --dry-run
```

Confirm that:

- no credentials, `.env` files, or tokens are included;
- `node_modules/`, `storybook-static/`, `test-results/`, `.next/`, and coverage output are not in the tarball;
- `.docs/`, `specs/`, `e2e/`, and `docs/` are documentation only and are not required in the published package (they are excluded by `"files"`);
- `README.md` documents new public APIs and the correct install command;
- exported components, hooks, types, and tokens have stable names;
- breaking changes are identified before selecting a version number;
- `"files"` in `package.json` includes `dist` and `styles.css.d.ts`;
- every entry in `"exports"` exists in `dist/`.

### 5. Commit and Push the Source

The current default branch is `master`:

```bash
git add .
git commit -m "feat: describe the change"
git push origin master
```

CI runs `pnpm format:check && pnpm check`, a Storybook build, both example builds, and Playwright. Do not publish from a commit that failed CI.

### 6. Add a Changeset

Release intent is a markdown file in `.changeset/`. Create it interactively:

```bash
pnpm changeset
```

Or write the file by hand (this is the file format changesets consumes):

```markdown
---
'@onaeko/ui': minor
---

Add a DatePicker popover variant with keyboard navigation.
```

Rules:

- front matter is a YAML map of package name to bump level;
- quote the package name (`'@onaeko/ui'`) exactly as it appears in `package.json`;
- list several packages in one file when a single change spans them;
- the body becomes the `CHANGELOG.md` entry;
- one file per release intent, not one file per commit.

If the change affects no published package, no changeset is needed (examples and docs only).

### 7. Version the Packages

Two equivalent paths:

```bash
# Locally
pnpm version-packages        # changeset version: writes new versions + CHANGELOG, deletes used changesets
```

```text
# In CI (release.yml on push to master)
changesets/action opens a "chore: release" pull request containing the same version commits
```

Both bump `version` in `package.json`, append `CHANGELOG.md`, and remove the consumed `.changeset/*.md` files. Commit that result; it is the release commit.

### 8. Publish to the npm Registry

Path A — CI (default, provenance-enabled):

```text
merge the release PR (or push the version commit) to master
  -> .github/workflows/release.yml runs `pnpm release`
  -> pnpm build:all && changeset publish
  -> NODE_AUTH_TOKEN from the NPM_TOKEN repository secret
  -> npm dist-tag `latest` points at the new version
```

Confirm the `NPM_TOKEN` secret exists in the repository settings before merging:

```bash
gh secret list --repo onaeko/onaeko-ui
```

Path B — manual (only when CI is unavailable):

```bash
npm whoami            # must be logged in and 2FA-ready
pnpm build:all
pnpm release          # build:all && changeset publish
```

For a single package instead of the changesets flow:

```bash
pnpm build
npm publish --access public            # repository root -> @onaeko/ui
npm publish --access public            # from packages/icons -> @onaeko/icons
```

Confirm tarball contents before a first publish:

```bash
npm pack --dry-run
```

### 9. Verify the Published Version

```bash
npm view @onaeko/ui name version versions dist-tags
npm view @onaeko/icons name version
```

Expected output includes:

```text
name = '@onaeko/ui'
version = '<newest>'
dist-tags = { latest: '<newest>' }
```

### 10. Verify Package Documentation

Open:

```text
https://www.npmjs.com/package/@onaeko/ui
https://github.com/onaeko/onaeko-ui
```

npm renders the `README.md` from the published tarball; GitHub renders it from the default branch. Keep them in sync at release time.

Until the package resolves for a consumer, install from GitHub:

```bash
npm install github:onaeko/onaeko-ui#v0.4.0
```

## Installing the Package

Install a specific stable version:

```bash
pnpm add @onaeko/ui@0.4.0
# or
npm install @onaeko/ui@0.4.0
```

Import the CSS once at the application root, then components where needed:

```tsx
import '@onaeko/ui/styles.css'
import { Button, Card, Input } from '@onaeko/ui'
import { initTheme, setTheme } from '@onaeko/ui/theme'
```

Peer dependencies the consumer must provide: `react`, `react-dom`, and optionally `react-hook-form` + `react-is` (Form) and `react-is` (Chart).

After adding the dependency, consumers should run:

```bash
pnpm install
pnpm build
```

Local development from a sibling app:

```json
{
  "dependencies": {
    "@onaeko/ui": "workspace:*"
  }
}
```

`workspace:*` never publishes outside the workspace; the examples use it for that reason.

## Publishing Source-Code Changes

Every published change requires a new version. Never unpublish, overwrite, or retag a version that consumers may already have installed.

npm treats a published version as immutable. Reusing a version with different source causes `EEXIST` on publish and lockfile/checksum errors for consumers.

### 1. Make Changes on a Branch

```bash
git switch -c feat/descriptive-change
```

Implement the change, add/adjust tests, update `README.md` and `docs/ui/*.mdx` when the public API changes, and export new public symbols from `src/index.ts`.

### 2. Run the Release Checks

```bash
pnpm install --frozen-lockfile
pnpm format:check
pnpm check
pnpm build:all
npm pack --dry-run
```

For interaction or routing changes in Storybook stories, also:

```bash
pnpm build-storybook && pnpm test:e2e
```

### 3. Select the New Version With a Changeset

changesets derives the version from the bump level in the changeset, not from an edited `package.json`.

```text
MAJOR.MINOR.PATCH
```

#### Patch Release

`'@onaeko/ui': patch` — backward-compatible fixes or internal improvements that do not alter the public contract.

```text
0.3.0 -> 0.3.1
```

Examples:

- fixing token values that rendered wrong colors;
- correcting an ARIA attribute on an existing component;
- internal performance work without API change;
- tests or documentation only.

#### Minor Release

`'@onaeko/ui': minor` — backward-compatible functionality.

```text
0.3.0 -> 0.4.0
```

Examples:

- adding a new component or export;
- adding an optional prop;
- adding a new `"exports"` subpath;
- new design tokens.

Reset `PATCH` to zero when incrementing `MINOR`.

#### Major Release

`'@onaeko/ui': major` — breaking changes.

```text
0.4.0 -> 1.0.0
```

Examples:

- removing or renaming a component or export;
- changing prop types incompatibly;
- changing token names consumers reference;
- removing a `"exports"` subpath.

Unlike Go modules, npm does not need a `/v2` path suffix. Consumers install version 2 as `npm install @onaeko/ui@2.0.0`; imports stay `from '@onaeko/ui'`.

`package.json` `"version"` is written by `pnpm version-packages` / the release PR. Do not hand-edit it as part of feature work, and do not change `"name"` unless the package is intentionally renamed (that is a new package, not a major release).

### 4. Merge and Push the Release Commit

```bash
git switch master
git pull origin master
git merge --no-ff feat/descriptive-change
git push origin master
```

### 5. Publish the Version

```text
release.yml -> changesets/action -> version PR -> merge -> pnpm release -> npm
```

Manual equivalent:

```bash
pnpm version-packages
git add -A && git commit -m "chore: release"
git push origin master
pnpm release
git push origin master --follow-tags
```

### 6. Verify the New Version

```bash
npm view @onaeko/ui versions
npm view @onaeko/ui@0.4.0
npm view @onaeko/ui dist-tags
```

### 7. Upgrade a Consuming Project

```bash
pnpm add @onaeko/ui@0.4.0
```

List available versions:

```bash
npm view @onaeko/ui versions
```

Inspect the resolved version in a consumer:

```bash
npm ls @onaeko/ui
```

Consuming Onaeko apps (`onaeko-internal`, `onaeko-accounts`, `onaeko-learn`, `onaeko-admin`, `onaeko-pathfinder`) then bump the range in their `package.json` and re-run `pnpm install` so `pnpm-lock.yaml` records it.

## Pre-Release Versions

Use a pre-release identifier when a version is not ready for general use.

changesets pre mode:

```bash
pnpm changeset pre enter beta
pnpm changeset
pnpm version-packages
pnpm release --tag beta
pnpm changeset pre exit
```

Manual equivalent:

```bash
npm version prerelease --preid=beta -m "Release %s"
git push origin master --follow-tags
npm publish --tag beta --access public
```

Consumers must request it explicitly:

```bash
pnpm add @onaeko/ui@beta
pnpm add @onaeko/ui@0.5.0-beta.0
```

Never publish a pre-release to the `latest` dist-tag. Publish the stable release after validation:

```bash
pnpm changeset pre exit      # if still in pre mode
pnpm version-packages
pnpm release                 # dist-tag latest
```

## Handling a Bad Release

Do not change an existing published version. Fix the problem and publish another patch version.

```bash
# Fix and commit the defect first.
pnpm changeset               # patch changeset
pnpm version-packages
pnpm release
```

If a version must be formally withdrawn, deprecate it. Deprecation warns consumers; it does not erase the old immutable version:

```bash
npm deprecate @onaeko/ui@0.4.0 "Contains a critical defect. Use 0.4.1 or later."
```

Avoid `npm unpublish` except inside the npm unpublish window (72 hours) and only when no consumer could have installed the version. Published versions in `CHANGELOG.md` history should stay visible.

## Troubleshooting

### npm Returns `404` or `E404`

Confirm you are logged in and the package exists:

```bash
npm whoami
npm view @onaeko/ui
```

`@onaeko/ui` resolves only after its first successful publish. Before that, consumers install from GitHub (see step 10 above).

Confirm repository metadata:

```bash
gh repo view onaeko/onaeko-ui --json nameWithOwner,visibility,url
```

Confirm the release commit was tagged/published:

```bash
gh run list --workflow=release.yml --limit 5
```

### The Published Tarball Is Missing `dist/` Entries

Inspect the tarball:

```bash
npm pack --dry-run
```

Confirm `"files"` includes `dist` and `styles.css.d.ts`, and that `pnpm build` ran before publishing (it is part of `pnpm release`). A subpath in `"exports"` without a matching `dist/*.js` file breaks `import` for consumers. Fix `package.json`/`vite.config.ts`, commit, and publish a new patch — never rewrite a published version.

### Tagged `package.json` Name or Version Is Incorrect

Inspect the release commit:

```bash
git show <release-sha>:package.json | node -e "let s='';process.stdin.on('data',d=>s+=d);process.stdin.on('end',()=>{const p=JSON.parse(s);console.log(p.name,p.version)})"
```

Do not rewrite a published tag. Correct `package.json`, commit the correction, and publish a new patch version.

### A Changeset References the Wrong Package Name

Changesets silently drops front matter that does not match a workspace package name, which ships a release with no version bump. Verify the name matches `package.json` exactly:

```bash
node -p "require('./package.json').name"
grep -h "'@onaeko" .changeset/*.md
```

Fix the file, re-run `pnpm version-packages`, and confirm `version` actually moved before publishing.

### Consumer Cannot Find an Export

Confirm the symbol is on the barrel and in the built declarations:

```bash
pnpm build
grep -n "export" dist/index.d.ts
```

Confirm the consumer imports the package name or a documented subpath, not a source or dist path:

```ts
import { Button } from '@onaeko/ui'          // ok
import { Button } from '@onaeko/ui/button'    // ok
import { Button } from '@onaeko/ui/dist/Button' // not part of the API
```

If a new subpath was intended, add `src/components/<Name>/index.ts` and re-run `pnpm sync:exports`.

### `npm publish` Fails With `EEXIST`

That version is already on the registry. Bump with a changeset and publish again. Never reuse a version number.

### `npm publish` Fails With `E401`, `E403`, or OTP

```bash
npm whoami
npm login
```

- `E401`: no token — log in, or set `NPM_TOKEN` in GitHub Actions for CI publishes.
- `E403`: the account lacks publish rights on the scope — it must be a member of the `@onaeko` org with publish permission.
- OTP/`EOTP`: 2FA required — retry with `--otp <code>` locally; for CI use a granular access token with publish rights rather than an account password.

### CI Release Workflow Does Not Publish

```bash
gh run list --workflow=release.yml --limit 5
gh secret list --repo onaeko/onaeko-ui
```

Confirm the `NPM_TOKEN` secret exists, that the pushed commit touched a `.changeset/*.md` (or is the version commit), and that `release.yml` has `permissions: id-token: write` for npm provenance (`NPM_CONFIG_PROVENANCE: true`).

## Official References

- [Creating and publishing scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
- [npm-publish](https://docs.npmjs.com/cli/v10/commands/npm-publish)
- [npm-access](https://docs.npmjs.com/cli/v10/commands/npm-access)
- [About semantic versioning](https://docs.npmjs.com/about-semantic-versioning)
- [Changesets — releasing packages](https://github.com/changesets/changesets/blob/main/docs/releasing-packages.md)
- [changesets/action](https://github.com/changesets/action)
- [Deprecating and undeprecating packages or package versions](https://docs.npmjs.com/deprecating-and-undeprecating-packages-or-package-versions)
- [package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)
- [npm provenance](https://docs.npmjs.com/generating-provenance-statements)
