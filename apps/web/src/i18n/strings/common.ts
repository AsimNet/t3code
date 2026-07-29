import type { StringModule } from "./types";

export const common = {
  "common.back": {
    en: "Back",
    ar: "رجوع",
  },
  "common.cancel": {
    en: "Cancel",
    ar: "إلغاء",
  },
  "common.close": {
    en: "Close",
    ar: "إغلاق",
  },
  "common.done": {
    en: "Done",
    ar: "تم",
  },
  "common.off": {
    en: "Off",
    ar: "معطّل",
  },
  "common.on": {
    en: "On",
    ar: "مُفعّل",
  },
  "common.reset": {
    en: "Reset",
    ar: "إعادة تعيين",
  },
  "common.save": {
    en: "Save",
    ar: "حفظ",
  },
  "common.system": {
    en: "System",
    ar: "النظام",
  },
} as const satisfies StringModule;
