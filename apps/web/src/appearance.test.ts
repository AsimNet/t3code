import { afterEach, describe, expect, it, vi } from "vite-plus/test";

import {
  applyDocumentAppearance,
  directionForLocale,
  LIGHT_TONE_BACKGROUND,
  prefersReducedMotion,
  resolveLocale,
} from "./appearance";

function createFakeDocument() {
  const properties = new Map<string, string>();
  const documentElement = {
    dataset: {} as Record<string, string>,
    lang: "",
    dir: "",
    style: {
      setProperty: (name: string, value: string) => {
        properties.set(name, value);
      },
    },
  };
  return { document: { documentElement }, documentElement, properties };
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("resolveLocale", () => {
  it("returns an explicit choice without consulting the browser", () => {
    expect(resolveLocale("ar", ["en-US"])).toBe("ar");
    expect(resolveLocale("en", ["ar-SA"])).toBe("en");
  });

  it("takes the first supported browser language for `system`", () => {
    expect(resolveLocale("system", ["ar-SA", "en-US"])).toBe("ar");
    expect(resolveLocale("system", ["EN-gb"])).toBe("en");
  });

  it("falls back to English when no browser language is supported", () => {
    expect(resolveLocale("system", ["fr-FR", "de"])).toBe("en");
    expect(resolveLocale("system", [])).toBe("en");
  });
});

describe("directionForLocale", () => {
  it("maps Arabic to rtl and English to ltr", () => {
    expect(directionForLocale("ar")).toBe("rtl");
    expect(directionForLocale("en")).toBe("ltr");
  });
});

describe("prefersReducedMotion", () => {
  it("is true when the setting asks for it, regardless of the OS", () => {
    vi.stubGlobal("window", {
      matchMedia: () => ({ matches: false }),
    });
    expect(prefersReducedMotion(true)).toBe(true);
  });

  it("falls back to the OS preference when the setting is off", () => {
    vi.stubGlobal("window", {
      matchMedia: (query: string) => ({ matches: query.includes("reduced-motion") }),
    });
    expect(prefersReducedMotion(false)).toBe(true);
  });

  it("is false when neither the setting nor the OS asks for it", () => {
    vi.stubGlobal("window", {
      matchMedia: () => ({ matches: false }),
    });
    expect(prefersReducedMotion(false)).toBe(false);
  });
});

describe("applyDocumentAppearance", () => {
  it("writes the text scale as a unitless multiplier", () => {
    const fake = createFakeDocument();
    vi.stubGlobal("document", fake.document);

    applyDocumentAppearance({
      fontScale: 130,
      language: "en",
      lightTone: "soft",
      reduceMotion: false,
    });

    expect(fake.properties.get("--font-scale")).toBe("1.3");
    expect(fake.documentElement.dataset.lightTone).toBe("soft");
  });

  it("puts the document in RTL for Arabic", () => {
    const fake = createFakeDocument();
    vi.stubGlobal("document", fake.document);

    const locale = applyDocumentAppearance({
      fontScale: 100,
      language: "ar",
      lightTone: "bright",
      reduceMotion: false,
    });

    expect(locale).toBe("ar");
    expect(fake.documentElement.lang).toBe("ar");
    expect(fake.documentElement.dir).toBe("rtl");
  });

  it("clears the reduced-motion flag when the setting is turned back off", () => {
    const fake = createFakeDocument();
    vi.stubGlobal("document", fake.document);

    applyDocumentAppearance({
      fontScale: 100,
      language: "en",
      lightTone: "bright",
      reduceMotion: true,
    });
    expect(fake.documentElement.dataset.reduceMotion).toBe("true");

    applyDocumentAppearance({
      fontScale: 100,
      language: "en",
      lightTone: "bright",
      reduceMotion: false,
    });
    expect(fake.documentElement.dataset.reduceMotion).toBeUndefined();
  });
});

describe("LIGHT_TONE_BACKGROUND", () => {
  it("covers every tone the boot script can read", () => {
    expect(Object.keys(LIGHT_TONE_BACKGROUND).sort()).toEqual(["bright", "paper", "soft"]);
  });
});
