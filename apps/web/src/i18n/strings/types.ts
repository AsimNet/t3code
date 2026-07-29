/**
 * One entry per user-facing string, with its translations co-located. Keeping
 * `en` and `ar` side by side is what stops the two from drifting: adding a
 * string without its Arabic is visible in the same diff, and there is no second
 * file to forget.
 *
 * `ar` is optional. A missing translation falls back to `en` at render time, so
 * a half-translated surface degrades to English instead of showing a raw key.
 */
export interface TranslationEntry {
  readonly en: string;
  readonly ar?: string;
}

export type StringModule = Readonly<Record<string, TranslationEntry>>;
