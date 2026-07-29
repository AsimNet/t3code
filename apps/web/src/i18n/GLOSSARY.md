# Arabic localization glossary

Follow this when adding strings. Consistency matters more than elegance: the same
concept must use the same word on every surface, or the UI reads as if several
people wrote it.

Arabic is Modern Standard (فصحى) at a professional software register. No dialect.
Prefer short phrasings — Arabic UI strings tend to run longer than English, and
buttons have to hold them.

## Established terms

| English        | Arabic               | Notes                          |
| -------------- | -------------------- | ------------------------------ |
| Settings       | الإعدادات            |                                |
| Appearance     | المظهر               |                                |
| Theme          | السمة                |                                |
| Language       | اللغة                |                                |
| Text size      | حجم الخط             |                                |
| Reduce motion  | تقليل الحركة         |                                |
| agent          | الوكيل               | the coding agent, not "الموظف" |
| thread         | المحادثة             |                                |
| project        | المشروع              |                                |
| provider       | المزوّد              |                                |
| Connections    | الاتصالات            |                                |
| Keybindings    | اختصارات المفاتيح    |                                |
| Source control | إدارة الإصدارات      |                                |
| Diagnostics    | التشخيص              |                                |
| Beta           | الميزات التجريبية    |                                |
| Archive        | الأرشيف              |                                |
| terminal       | الطرفية              |                                |
| diff           | الفروق               |                                |
| file / files   | ملف / ملفات          |                                |
| skill          | مهارة                |                                |
| task           | مهمة                 |                                |
| review         | مراجعة               |                                |
| checkpoint     | نقطة حفظ             |                                |
| worktree       | شجرة عمل             |                                |
| Word wrap      | التفاف النص          |                                |
| Scroll to end  | الانتقال إلى النهاية |                                |

## Never translate

Leave these in English, inside an Arabic sentence if needed:

- Product and brand names: T3 Code, Claude, Codex, Cursor, Grok, OpenCode, GitHub
- Model names and identifiers: `claude-opus-4-8`, Fable 5, High · 1M
- File paths, git refs, branch names, URLs, environment variables
- CLI commands, flags, and code identifiers
- Keyboard keys and shortcut glyphs: ⌘, ⇧, Esc, Enter

## Git operations stay in English

Button and menu labels that name a Git operation the user is invoking —
**Commit, Push, Pull, Fetch, Rebase, Merge, Stash, Checkout, Revert** — stay in
English. Arabic-speaking developers run these commands by these names, and
translating a button that maps one-to-one onto `git push` makes it harder to use,
not easier. Descriptive prose _around_ them is translated normally:

> "Push الفرع الحالي إلى origin" — not "دفع الفرع الحالي"

`branch` is the exception: **الفرع** is unambiguous and widely used.

## Mechanics

- Preserve `{placeholder}` tokens exactly, including their names. A missing or
  renamed placeholder is a test failure.
- Use Arabic punctuation: `،` for comma, `؟` for question mark, `؛` for
  semicolon.
- Keep Latin digits (0-9). Arabic-Indic digits (٠-٩) would clash with the line
  numbers, byte counts, and model names they sit beside.
- No trailing `...` — use the ellipsis character `…`, which does not reorder as
  visibly in a bidi run.
