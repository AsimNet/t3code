import { useCallback, useMemo } from "react";

import { directionForLocale, resolveLocale, type Locale, type TextDirection } from "~/appearance";
import { useClientSettings } from "~/hooks/useSettings";
import { STRINGS, type TranslationKey } from "./strings";
import type { TranslationEntry } from "./strings/types";

export type { Locale, TextDirection, TranslationKey };
export { STRINGS };

export type TranslationValues = Readonly<Record<string, string | number>>;

/** `{name}` placeholders are replaced; unknown placeholders are left as-is. */
function interpolate(template: string, values: TranslationValues): string {
  return template.replace(/\{(\w+)\}/g, (match, name: string) => {
    const value = values[name];
    return value === undefined ? match : String(value);
  });
}

/**
 * Non-hook translator. Falls back to the English source string so a partially
 * translated locale never renders a key.
 */
export function translate(locale: Locale, key: TranslationKey, values?: TranslationValues): string {
  // Annotated rather than inferred: indexing the merged map by the whole key
  // union yields a union of entry shapes (only some carry `ar`), and widening it
  // to the common shape here is what keeps the lookup readable.
  const entry: TranslationEntry = STRINGS[key];
  const template = locale === "en" ? entry.en : (entry.ar ?? entry.en);
  return values ? interpolate(template, values) : template;
}

export type Translate = (key: TranslationKey, values?: TranslationValues) => string;

/** The locale in effect, resolving `system` against the browser languages. */
export function useLocale(): Locale {
  const language = useClientSettings((settings) => settings.language);
  return useMemo(() => resolveLocale(language), [language]);
}

export function useDirection(): TextDirection {
  return directionForLocale(useLocale());
}

/**
 * Returns the translator for the active locale. Identity is stable per locale,
 * so it is safe in dependency arrays.
 */
export function useT(): Translate {
  const locale = useLocale();
  return useCallback(
    (key: TranslationKey, values?: TranslationValues) => translate(locale, key, values),
    [locale],
  );
}
