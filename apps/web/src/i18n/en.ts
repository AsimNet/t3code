/**
 * Source dictionary. Every key lives here in English; other locales are partial
 * and fall back to these values, so a missing translation shows English rather
 * than a key. Keys are grouped by surface, not by component.
 */
export const en = {
  "common.back": "Back",
  "common.cancel": "Cancel",
  "common.close": "Close",
  "common.done": "Done",
  "common.off": "Off",
  "common.on": "On",
  "common.reset": "Reset",
  "common.save": "Save",
  "common.system": "System",

  "settings.title": "Settings",
  "settings.restoreDefaults": "Restore defaults",
  "settings.reset.label": "Reset {setting}",
  "settings.nav.general": "General",
  "settings.nav.appearance": "Appearance",
  "settings.nav.keybindings": "Keybindings",
  "settings.nav.providers": "Providers",
  "settings.nav.sourceControl": "Source control",
  "settings.nav.connections": "Connections",
  "settings.nav.beta": "Beta",
  "settings.nav.archived": "Archived",
  "settings.nav.diagnostics": "Diagnostics",

  "settings.appearance.section": "Appearance",
  "settings.appearance.theme.title": "Theme",
  "settings.appearance.theme.description": "Choose how T3 Code looks across the app.",
  "settings.appearance.theme.light": "Light",
  "settings.appearance.theme.dark": "Dark",
  "settings.appearance.theme.system": "System",
  "settings.appearance.lightTone.title": "Light tone",
  "settings.appearance.lightTone.description":
    "How bright light surfaces get. Soft and Paper step the whole palette down so a large screen stops glaring.",
  "settings.appearance.lightTone.bright": "Bright",
  "settings.appearance.lightTone.soft": "Soft",
  "settings.appearance.lightTone.paper": "Paper",
  "settings.appearance.fontScale.title": "Text size",
  "settings.appearance.fontScale.description":
    "Scale text across the whole app. Spacing keeps its own rhythm, so only type changes size.",
  "settings.appearance.language.title": "Language",
  "settings.appearance.language.description":
    "Interface language. Arabic switches the whole app to right-to-left.",
  "settings.appearance.language.english": "English",
  "settings.appearance.language.arabic": "العربية",
  "settings.appearance.reduceMotion.title": "Reduce motion",
  "settings.appearance.reduceMotion.description":
    "Stop looping indicator animations and make every scroll instant instead of animated.",
  "settings.appearance.chatAutoScroll.title": "Follow agent output",
  "settings.appearance.chatAutoScroll.description":
    "Scroll the transcript automatically while an agent streams. Off keeps the view still; the scroll-to-end button jumps when you want it.",
  "settings.appearance.glassOpacity.title": "Glass opacity",
  "settings.appearance.glassOpacity.description":
    "Control how transparent glass surfaces are. Higher values make menus, dialogs, and the composer more solid.",
  "settings.appearance.wordWrap.title": "Word wrap",
  "settings.appearance.wordWrap.description":
    "Wrap long lines in code blocks, tables, diffs, and file previews by default.",
  "settings.appearance.environmentIdentification.title": "Environment identification",
  "settings.appearance.environmentIdentification.description":
    "Choose how Dev and Nightly environments are identified.",
  "settings.appearance.environmentIdentification.artwork": "Artwork",
  "settings.appearance.environmentIdentification.pill": "Version pill",
  "settings.appearance.environmentIdentification.none": "None",

  "chat.scrollToEnd": "Scroll to end",
} as const;

export type TranslationKey = keyof typeof en;
export type Dictionary = Readonly<Record<TranslationKey, string>>;
