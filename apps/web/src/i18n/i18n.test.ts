import { describe, expect, it } from "vite-plus/test";

import { ar } from "./ar";
import { en } from "./en";
import { translate } from "./index";

describe("translate", () => {
  it("returns the Arabic string when the locale has one", () => {
    expect(translate("ar", "settings.appearance.language.title")).toBe("اللغة");
  });

  it("falls back to English for keys a locale has not translated yet", () => {
    const untranslated = (Object.keys(en) as Array<keyof typeof en>).find((key) => !(key in ar));
    if (!untranslated) return;
    expect(translate("ar", untranslated)).toBe(en[untranslated]);
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
  it("only translates keys that exist in the English source", () => {
    const sourceKeys = new Set(Object.keys(en));
    const strays = Object.keys(ar).filter((key) => !sourceKeys.has(key));
    expect(strays).toEqual([]);
  });

  it("has no empty translations", () => {
    const empty = Object.entries(ar)
      .filter(([, value]) => value !== undefined && value.trim() === "")
      .map(([key]) => key);
    expect(empty).toEqual([]);
  });
});
