import { DEFAULT_FONT_SCALE, type AppLanguage, type ClientSettings } from "@t3tools/contracts";
import type { LightTone } from "@t3tools/contracts/settings";

export type Locale = "en" | "ar";
export type TextDirection = "ltr" | "rtl";

/** Locales with a dictionary in `~/i18n`. Everything else falls back to `en`. */
export const SUPPORTED_LOCALES = ["en", "ar"] as const satisfies readonly Locale[];

const RTL_LOCALES: ReadonlySet<Locale> = new Set<Locale>(["ar"]);

/**
 * Background painted before React mounts, per light tone. These mirror
 * `--tone-background` in index.css; the boot script in index.html carries the
 * same values because it runs before any stylesheet is available.
 */
export const LIGHT_TONE_BACKGROUND: Record<LightTone, string> = {
  bright: "#fcfcfc",
  soft: "#f3f3f3",
  paper: "#f7f3ec",
};

export function directionForLocale(locale: Locale): TextDirection {
  return RTL_LOCALES.has(locale) ? "rtl" : "ltr";
}

/** Browser-preferred language tags, most preferred first. */
export function navigatorLanguages(): readonly string[] {
  if (typeof navigator === "undefined") return [];
  if (navigator.languages && navigator.languages.length > 0) return navigator.languages;
  return navigator.language ? [navigator.language] : [];
}

/**
 * `system` takes the first browser language we ship a dictionary for, so an
 * `ar-SA` browser lands in Arabic without the user choosing anything.
 */
export function resolveLocale(
  language: AppLanguage,
  preferredLanguages: readonly string[] = navigatorLanguages(),
): Locale {
  if (language !== "system") return language;

  for (const tag of preferredLanguages) {
    const base = tag.toLowerCase().split("-")[0];
    const supported = SUPPORTED_LOCALES.find((locale) => locale === base);
    if (supported) return supported;
  }

  return "en";
}

/** The setting forces reduced motion on; the OS preference can also ask for it. */
export function prefersReducedMotion(reduceMotionSetting: boolean): boolean {
  if (reduceMotionSetting) return true;
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true
  );
}

export type AppearanceSnapshot = Pick<
  ClientSettings,
  "fontScale" | "language" | "lightTone" | "reduceMotion"
>;

/**
 * Writes the appearance settings the stylesheet reads off `<html>`: the text
 * scale multiplier, the light tone, the calm-mode flag, and the locale's
 * language/direction pair.
 */
export function applyDocumentAppearance(appearance: AppearanceSnapshot): Locale {
  const locale = resolveLocale(appearance.language);
  if (typeof document === "undefined") return locale;

  const root = document.documentElement;
  root.style.setProperty("--font-scale", `${appearance.fontScale / DEFAULT_FONT_SCALE}`);
  root.dataset.lightTone = appearance.lightTone;
  root.lang = locale;
  root.dir = directionForLocale(locale);
  if (appearance.reduceMotion) {
    root.dataset.reduceMotion = "true";
  } else {
    delete root.dataset.reduceMotion;
  }

  return locale;
}
