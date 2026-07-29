import { describe, expect, it } from "vite-plus/test";

import { STRINGS, translate, type TranslationKey } from "./index";

const entries = Object.entries(STRINGS) as ReadonlyArray<
  [TranslationKey, { readonly en: string; readonly ar?: string }]
>;

describe("translate", () => {
  it("returns the Arabic string when the key has one", () => {
    expect(translate("ar", "settings.appearance.language.title")).toBe("اللغة");
  });

  it("falls back to English for keys a locale has not translated yet", () => {
    const untranslated = entries.find(([, entry]) => entry.ar === undefined);
    if (!untranslated) return;
    expect(translate("ar", untranslated[0])).toBe(untranslated[1].en);
  });

  it("interpolates named placeholders", () => {
    expect(translate("en", "settings.reset.label", { setting: "text size" })).toBe(
      "Reset text size",
    );
  });

  it("leaves unknown placeholders in place rather than printing undefined", () => {
    expect(translate("en", "settings.reset.label")).toBe("Reset {setting}");
  });
});

describe("dictionaries", () => {
  it("has no empty strings", () => {
    const empty = entries
      .filter(([, entry]) => entry.en.trim() === "" || entry.ar?.trim() === "")
      .map(([key]) => key);
    expect(empty).toEqual([]);
  });

  // A translation may legitimately use FEWER placeholders than the source: the
  // Arabic singular reads better as "نموذج واحد متاح" than with the digit forced
  // in. What is always a bug is a placeholder the source does not define, since
  // nothing substitutes it and the braces render literally.
  it("never introduces a placeholder the English source does not define", () => {
    const placeholdersOf = (value: string) => new Set(value.match(/\{(\w+)\}/g) ?? []);
    const unknown = entries
      .filter(([, entry]) => entry.ar !== undefined)
      .flatMap(([key, entry]) => {
        const defined = placeholdersOf(entry.en);
        return [...placeholdersOf(entry.ar as string)]
          .filter((placeholder) => !defined.has(placeholder))
          .map((placeholder) => `${key}: ${placeholder}`);
      });
    expect(unknown).toEqual([]);
  });
});
