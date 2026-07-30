# Shipping a fork to TestFlight

Upstream's `mobile-eas-production.yml` builds under the T3 Tools Apple team
(`ARK85ZXQ4Z`), the `pingdotgg` Expo account, and T3's App Store Connect record.
A fork owns none of those, so it cannot use that workflow.

`mobile-testflight.yml` runs the same EAS build/submit flow with every identity
value supplied by repository variables. `apps/mobile/app.config.ts` defaults to
the upstream values, so an unconfigured checkout still builds exactly as before
and syncing with upstream does not conflict.

## What the app needs signed

The iOS app is not a single target. A fork's Apple team must be able to sign all
three identifiers plus the shared app group:

| Identifier       | Purpose                                                              |
| ---------------- | -------------------------------------------------------------------- |
| `<base>`         | main app                                                             |
| `<base>.widgets` | widget extension — push + frequent updates (`app.config.ts:111-129`) |
| `<base>.sharing` | share extension (`app.config.ts:131-153`)                            |
| `group.<base>`   | app group shared by all three                                        |

It also uses Sign in with Apple, push notifications, and associated domains.
EAS registers the identifiers, creates the app group, enables the capabilities,
and generates the three provisioning profiles. That automation is the reason
this pipeline uses EAS rather than a hand-rolled `fastlane` lane — the
`get_provisioning_profile` + manual-signing approach would need repeating per
target.

## One-time setup

### 1. Expo

```bash
npx eas-cli@latest login
cd apps/mobile
npx eas-cli@latest init --id <your-expo-project-id>
```

Note your Expo account slug (the `owner`) and project id — both become
repository variables below.

### 2. Apple

1. Enrol in the Apple Developer Program (paid). A free personal team cannot
   distribute via TestFlight, nor sign app groups, push, or Sign in with Apple.
2. Create the App Store Connect app record for `<base>`. Its numeric **Apple
   ID** is the `ASC_APP_ID` variable — it is the `/apps/<id>/` segment of the
   App Store Connect URL. `eas submit` can create the record, but creating it
   yourself keeps the workflow non-interactive from the first run.
3. Create an App Store Connect **API key** (Users and Access → Integrations)
   with the App Manager role. Keep the `.p8`, Key ID, and Issuer ID.
4. Give EAS permission to manage signing assets: run `npx eas-cli credentials`
   once and add the same API key, or add it under the project's iOS credentials
   in the Expo dashboard. Without this, the first build cannot create
   certificates and profiles non-interactively.

### 3. EAS environment variables (required)

The identity overrides have to exist **on EAS servers**, not just in CI. Expo's
docs are explicit: "Environment variables must be defined on EAS servers to be
made available to EAS Build builders." `app.config.ts` is evaluated twice — once
locally by EAS CLI to resolve the project and credentials, and again on the build
worker during prebuild — and the worker never sees the shell environment of
whatever triggered the build. Set them in CI only and the worker silently falls
back to the upstream defaults, producing a `com.t3tools.t3code` build signed
against a team you do not belong to.

```bash
cd apps/mobile
for environment in production preview; do
  eas env:set --name T3CODE_IOS_BUNDLE_ID   --value sa.hsb.t3code   --environment "$environment" --visibility plaintext
  eas env:set --name T3CODE_ANDROID_PACKAGE --value sa.hsb.t3code   --environment "$environment" --visibility plaintext
  eas env:set --name T3CODE_APPLE_TEAM_ID   --value 7GWSWUY5Y8      --environment "$environment" --visibility plaintext
  eas env:set --name T3CODE_EXPO_OWNER      --value asimnets-team   --environment "$environment" --visibility plaintext
  eas env:set --name T3CODE_EXPO_SLUG       --value asim            --environment "$environment" --visibility plaintext
  eas env:set --name T3CODE_EXPO_PROJECT_ID --value 5bb0dc77-bcc4-44b7-9021-6b2d602e4a24 --environment "$environment" --visibility plaintext
done
eas env:list --environment production
```

The `production` and `preview` build profiles already declare
`"environment": "production"` / `"preview"`, so those variables are picked up
automatically.

### 4. GitHub configuration (only for the GitHub Actions path)

Repository **variables** (Settings → Secrets and variables → Actions →
Variables). These are identity, not secrets:

| Variable                   | Value                                  | Required         |
| -------------------------- | -------------------------------------- | ---------------- |
| `T3CODE_IOS_BUNDLE_ID`     | `sa.hsb.t3code`                        | yes              |
| `T3CODE_APPLE_TEAM_ID`     | `7GWSWUY5Y8`                           | yes              |
| `T3CODE_EXPO_OWNER`        | `asimnets-team`                        | yes              |
| `T3CODE_EXPO_SLUG`         | `asim`                                 | yes              |
| `T3CODE_EXPO_PROJECT_ID`   | `5bb0dc77-bcc4-44b7-9021-6b2d602e4a24` | yes              |
| `ASC_APP_ID`               | `6796294147`                           | recommended      |
| `T3CODE_ANDROID_PACKAGE`   | `sa.hsb.t3code`                        | only for Android |
| `T3CODE_IOS_RELYING_PARTY` | a domain you control                   | no — see caveats |

`T3CODE_EXPO_OWNER` is the Expo **account** that owns the project
(`expo.dev/accounts/<owner>/projects/<slug>`), which for an organisation is the
org name and not your personal username. `T3CODE_EXPO_SLUG` must equal the Expo
project's slug: EAS resolves the project by id and then checks the manifest slug
against it, so a project created under a different name fails the build until
this matches.

Set them in one shot with the `gh` CLI:

```bash
gh variable set T3CODE_IOS_BUNDLE_ID   --body sa.hsb.t3code
gh variable set T3CODE_ANDROID_PACKAGE --body sa.hsb.t3code
gh variable set T3CODE_APPLE_TEAM_ID   --body 7GWSWUY5Y8
gh variable set T3CODE_EXPO_OWNER      --body asimnets-team
gh variable set T3CODE_EXPO_SLUG       --body asim
gh variable set T3CODE_EXPO_PROJECT_ID --body 5bb0dc77-bcc4-44b7-9021-6b2d602e4a24
gh variable set ASC_APP_ID             --body 6796294147
```

Secrets are deliberately not scriptable here — paste them in the GitHub UI, or
use `gh secret set <NAME> < file` so the value never lands in shell history.

Repository **secrets**:

| Secret            | Purpose                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------- |
| `EXPO_TOKEN`      | Expo access token with access to the owning account. Without it the workflow fails its preflight check. |
| `ASC_KEY_CONTENT` | Base64 of the App Store Connect `.p8`.                                                                  |
| `ASC_KEY_ID`      | API key id.                                                                                             |
| `ASC_ISSUER_ID`   | API key issuer id.                                                                                      |

The three `ASC_*` secrets use the same names and shapes as the `family-social`
pipeline, so one App Store Connect key can serve both repositories. If they are
absent the workflow still runs and falls back to whatever credentials EAS has
stored.

### 5. Runtime configuration

The app needs its Clerk and relay settings as EAS environment variables for the
chosen environment (`T3CODE_CLERK_PUBLISHABLE_KEY`, `T3CODE_CLERK_JWT_TEMPLATE`,
`T3CODE_RELAY_URL`). Set them in the Expo dashboard, or the build will produce an
app that cannot authenticate. `eas env:pull` in the workflow is best-effort and
does not fail the build when an environment has no variables.

## Running it

There are two ways to trigger the same EAS build and submission. The compiling
always happens on EAS Build either way; the only difference is what orchestrates
it.

### EAS Workflows — Expo's infrastructure (preferred)

`apps/mobile/.eas/workflows/testflight.yml`. No GitHub runner, no `EXPO_TOKEN`,
and no App Store Connect key in GitHub: the ASC connection on the Expo project is
used directly.

```bash
cd apps/mobile
eas workflow:run .eas/workflows/testflight.yml
```

Or from the project's Workflows page on expo.dev. Note that `.eas/` lives beside
`eas.json` — inside `apps/mobile`, not at the repository root.

### GitHub Actions

Actions → **Mobile TestFlight** → Run workflow. Requires the repository
variables and secrets above. The workflow only appears once the file is on the
default branch — `workflow_dispatch` is not registered from a branch.

| Input     | Meaning                                                |
| --------- | ------------------------------------------------------ |
| `profile` | `production` or `preview` (also sets `APP_VARIANT`)    |
| `submit`  | upload to TestFlight on success (default on)           |
| `wait`    | block the job until EAS finishes; off queues and exits |

Version and build numbers are managed remotely — `eas.json` sets
`appVersionSource: remote` with `autoIncrement` on the production profile, so no
manual bumping is needed.

## Caveats

- **Associated domains.** `applinks:`/`webcredentials:` default to
  `clerk.t3.codes`, a domain a fork does not control, so Universal Links and
  passkey autofill will not verify. The build and TestFlight upload still
  succeed. Point `T3CODE_IOS_RELYING_PARTY` at a domain you serve an
  `apple-app-site-association` from to fix it, or ignore it for internal testing.
- **Push notifications** need an APNs key registered with EAS before device
  pushes work; the widget extension declares the entitlement regardless.
- **First build is the risky one.** It is where credential generation happens.
  If it fails, run `npx eas-cli build --platform ios --profile production` locally
  once — interactively it will prompt for and fix whatever is missing.
- **Android** is intentionally not wired here. `eas.json` has a Play `internal`
  track configured, but shipping it needs a Play service account and a signing
  keystore that this workflow does not set up.
