import { chat } from "./chat";
import { common } from "./common";
import { palette } from "./palette";
import { panel } from "./panel";
import { settings } from "./settings";
import { settingsProviders } from "./settingsProviders";
import { settingsWorkspace } from "./settingsWorkspace";
import { sidebar } from "./sidebar";

/**
 * Every user-facing string in the web client, merged from one module per
 * surface. Modules are split by surface so they can be edited independently;
 * the keys are namespaced, so a collision between two modules is a mistake
 * either way.
 */
export const STRINGS = {
  ...common,
  ...settings,
  ...settingsWorkspace,
  ...settingsProviders,
  ...sidebar,
  ...chat,
  ...panel,
  ...palette,
} as const;

export type TranslationKey = keyof typeof STRINGS;
