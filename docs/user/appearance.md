# Appearance

Everything here lives in **Settings → Appearance** and is stored per device with
the rest of the client settings (`t3code:client-settings:v1` in the browser,
`client-settings.json` on desktop). Nothing in this panel syncs to other
devices, and none of it reaches the server.

## Language and reading direction

`Language` is `System`, `English`, or `العربية`.

- `System` picks the first browser language T3 Code has a dictionary for and
  falls back to English.
- Choosing Arabic also puts the interface in right-to-left: `<html dir="rtl">`,
  and Base UI menus, popovers, and sliders mirror with it.

Translation is partial. Keys without an Arabic string render the English source
string rather than a placeholder, so an untranslated surface degrades to English
instead of breaking. To translate more of the UI:

1. Add the English string to `apps/web/src/i18n/en.ts` under a
   `surface.thing` style key.
2. Add the Arabic string for the same key to `apps/web/src/i18n/ar.ts`.
3. Replace the literal in the component with `t("surface.thing")` from
   `useT()`.

`apps/web/src/i18n/i18n.test.ts` fails if `ar.ts` gains a key that `en.ts` does
not have, which is what keeps the two files from drifting.

### What stays left-to-right on purpose

Code is not prose. Even with the whole app mirrored, these keep their reading
order, because mirroring them would scramble identifiers, paths, and diff
markers:

- code blocks and inline code in agent output
- diff surfaces and file previews
- the terminal (xterm has no bidi support at all)

The file tree still mirrors, since it is a list of names rather than code; the
names themselves are unaffected because each run keeps its own direction.

Chat messages and the composer use `unicode-bidi: plaintext`, so each paragraph
takes its direction from its own first strong character. An Arabic reply and an
English one sit in the same transcript, each aligned correctly, whatever the
interface language is.

Window chrome also stays put. macOS traffic lights are physically left and the
Windows control overlay is physically right no matter what language the app is
in, because the OS decides that, not this setting. So the workspace titlebar
controls — and the padding that reserves room for them — stay physical too;
mirroring only our half would park our buttons on top of the native ones.

### Known gaps

- The React Native mobile app is unaffected: it has its own token set and its
  own font-size preference, and it does not read these settings.
- Most of the UI outside Settings is still English, per the note above.
- The floating sidebar-toggle button stays at the window's physical top-left in
  RTL, because it shares an inset with the native window controls. The sidebar
  itself moves; its toggle does not.
- On desktop, client settings live in a JSON file rather than localStorage, so
  the boot script cannot read them: the first paint uses the defaults and
  corrects itself once the app hydrates. Browser sessions are unaffected.
- A few decorative details do not mirror: the pairing-screen gradient glow, the
  right-panel resize handle, and the mobile drawer's slide-in animation.

## Text size

`Text size` scales from 80% to 140% in 5% steps. It multiplies every `--text-*`
step through `--font-scale`, so text set with a size utility — `text-xs`,
`text-sm`, `text-2xs`, and the rest — scales together, including the composer and
the whole chat transcript. Spacing keeps its own rhythm: this is a type control,
not a zoom, so the layout does not reflow the way browser zoom makes it.

Line heights are unitless ratios and follow their font size automatically.

A handful of places still pin a size in pixels (parts of the keybindings editor,
a few plan-sidebar labels) and do not scale yet. Converting one means replacing
`text-[13px]` with a token or a `calc(… * var(--font-scale))` value.

## Light tone

`Light tone` decides how bright the light palette is allowed to get. It has no
effect in dark mode.

| Tone     | What it does                                                               |
| -------- | -------------------------------------------------------------------------- |
| `Bright` | The original near-white surfaces.                                          |
| `Soft`   | The whole neutral hierarchy stepped down, so nothing is near-white.        |
| `Paper`  | The same hierarchy pulled toward amber, with a warmer foreground to match. |

`Soft` is the default in this fork. Tones are defined once as `--tone-*`
primitives in `apps/web/src/index.css`; both light palettes read them with the
original values as fallbacks, which is why `Bright` needs no rules of its own.

The boot script in `apps/web/index.html` carries the same three background
colors so the first paint is already the right tone instead of flashing white.
Change one and change the other.

## Follow agent output

Off by default. When on, the transcript scrolls itself to stay at the live edge
while an agent streams; that fires once per streamed chunk, which is the
continuous scrolling that makes long sessions tiring to read.

With it off:

- the transcript holds still while output streams in
- sending a message still positions the new turn once, so you are not left
  looking at old messages
- the scroll-to-end button appears whenever you are away from the live edge, so
  jumping to the end stays one click away

## Reduce motion

Forces the reduced-motion path on even when the OS does not ask for it:

- every scroll becomes instant instead of animated — the new-turn jump, the
  scroll-to-end button, and the minimap
- looping indicator animations stop (status pulse, skeleton shimmer, the working
  indicator, the ultrathink gradients)
- the composer morph and the mobile route view-transition are skipped

Spinners keep spinning. A frozen spinner reads as a hung app, which is worse
than the motion it would remove.

`prefers-reduced-motion: reduce` from the OS still applies on its own, whatever
this setting says.

## RTL notes for contributors

Two separate axes, and conflating them is the usual source of bugs:

- **Direction** is layout. Use logical utilities (`ps-`/`pe-`, `ms-`/`me-`,
  `start-`/`end-`, `border-s`/`border-e`, `text-start`) so it mirrors for free.
  Things that cannot mirror on their own — gradients, `translate-x`, masks,
  `env()` safe-area insets — read a direction variable defined in `index.css`
  instead of being duplicated per side.
- **Script** is typography, scoped with `:lang(ar)`. Arabic letters join, so
  letter-spacing is neutralized; it is unicameral, so `uppercase` is a no-op;
  its diacritics need a looser line-height at small sizes; and underlines get an
  offset so they miss the dots under ب ج خ.

For truncated text the distinction matters concretely: `unicode-bidi: plaintext`
fixes _reordering_ but not the ellipsis, because it does not change `direction`.
Anything user- or agent-authored that can be truncated — thread titles, project
names — needs `dir="auto"` so the ellipsis lands on the correct end. Identifiers
that are always Latin (git refs, code) get `force-ltr` instead.

Known caveat: the app styles a lot of text with alpha (`text-muted-foreground/70`).
Semi-transparent Arabic can show seams where connected letters overlap, since the
joins get blended twice. Fixing it properly means opaque colors on Arabic text,
which has not been done.
