import type { StringModule } from "./types";

export const settings = {
  "settings.title": {
    en: "Settings",
    ar: "الإعدادات",
  },
  "settings.restoreDefaults": {
    en: "Restore defaults",
    ar: "استعادة الإعدادات الافتراضية",
  },
  "settings.reset.label": {
    en: "Reset {setting}",
    ar: "إعادة تعيين {setting}",
  },
  "settings.nav.general": {
    en: "General",
    ar: "عام",
  },
  "settings.nav.appearance": {
    en: "Appearance",
    ar: "المظهر",
  },
  "settings.nav.keybindings": {
    en: "Keybindings",
    ar: "اختصارات المفاتيح",
  },
  "settings.nav.providers": {
    en: "Providers",
    ar: "المزوّدون",
  },
  "settings.nav.sourceControl": {
    en: "Source control",
    ar: "إدارة الإصدارات",
  },
  "settings.nav.connections": {
    en: "Connections",
    ar: "الاتصالات",
  },
  "settings.nav.beta": {
    en: "Beta",
    ar: "الميزات التجريبية",
  },
  "settings.nav.archived": {
    en: "Archived",
    ar: "المؤرشفة",
  },
  "settings.nav.diagnostics": {
    en: "Diagnostics",
    ar: "التشخيص",
  },
  "settings.appearance.section": {
    en: "Appearance",
    ar: "المظهر",
  },
  "settings.appearance.theme.title": {
    en: "Theme",
    ar: "السمة",
  },
  "settings.appearance.theme.description": {
    en: "Choose how T3 Code looks across the app.",
    ar: "اختر مظهر T3 Code في جميع أنحاء التطبيق.",
  },
  "settings.appearance.theme.light": {
    en: "Light",
    ar: "فاتح",
  },
  "settings.appearance.theme.dark": {
    en: "Dark",
    ar: "داكن",
  },
  "settings.appearance.theme.system": {
    en: "System",
    ar: "النظام",
  },
  "settings.appearance.lightTone.title": {
    en: "Light tone",
    ar: "سطوع الوضع الفاتح",
  },
  "settings.appearance.lightTone.description": {
    en: "How bright light surfaces get. Soft and Paper step the whole palette down so a large screen stops glaring.",
    ar: "مدى سطوع الأسطح الفاتحة. تخفّض درجتا «هادئ» و«ورقي» لوحة الألوان بأكملها حتى لا تُبهر الشاشة الكبيرة عينيك.",
  },
  "settings.appearance.lightTone.bright": {
    en: "Bright",
    ar: "ساطع",
  },
  "settings.appearance.lightTone.soft": {
    en: "Soft",
    ar: "هادئ",
  },
  "settings.appearance.lightTone.paper": {
    en: "Paper",
    ar: "ورقي",
  },
  "settings.appearance.fontScale.title": {
    en: "Text size",
    ar: "حجم الخط",
  },
  "settings.appearance.fontScale.description": {
    en: "Scale text across the whole app. Spacing keeps its own rhythm, so only type changes size.",
    ar: "تكبير النصوص في التطبيق بالكامل. تحتفظ المسافات بتناسبها، فيتغيّر حجم الخط وحده.",
  },
  "settings.appearance.language.title": {
    en: "Language",
    ar: "اللغة",
  },
  "settings.appearance.language.description": {
    en: "Interface language. Arabic switches the whole app to right-to-left.",
    ar: "لغة الواجهة. اختيار العربية يحوّل التطبيق بالكامل إلى الاتجاه من اليمين إلى اليسار.",
  },
  "settings.appearance.language.english": {
    en: "English",
    ar: "English",
  },
  "settings.appearance.language.arabic": {
    en: "العربية",
    ar: "العربية",
  },
  "settings.appearance.reduceMotion.title": {
    en: "Reduce motion",
    ar: "تقليل الحركة",
  },
  "settings.appearance.reduceMotion.description": {
    en: "Stop looping indicator animations and make every scroll instant instead of animated.",
    ar: "إيقاف حركات المؤشرات المتكرّرة وجعل كل تمرير فوريًا بدلًا من متحرّك.",
  },
  "settings.appearance.chatAutoScroll.title": {
    en: "Follow agent output",
    ar: "متابعة مخرجات الوكيل",
  },
  "settings.appearance.chatAutoScroll.description": {
    en: "Scroll the transcript automatically while an agent streams. Off keeps the view still; the scroll-to-end button jumps when you want it.",
    ar: "تمرير المحادثة تلقائيًا أثناء بثّ الوكيل لمخرجاته. الإيقاف يُبقي العرض ثابتًا، ويظل زر الانتقال إلى النهاية متاحًا وقتما تشاء.",
  },
  "settings.appearance.glassOpacity.title": {
    en: "Glass opacity",
    ar: "شفافية الزجاج",
  },
  "settings.appearance.glassOpacity.description": {
    en: "Control how transparent glass surfaces are. Higher values make menus, dialogs, and the composer more solid.",
    ar: "تحكّم في مدى شفافية الأسطح الزجاجية. القيم الأعلى تجعل القوائم والنوافذ ومربّع الكتابة أكثر تعتيمًا.",
  },
  "settings.appearance.wordWrap.title": {
    en: "Word wrap",
    ar: "التفاف النص",
  },
  "settings.appearance.wordWrap.description": {
    en: "Wrap long lines in code blocks, tables, diffs, and file previews by default.",
    ar: "التفاف الأسطر الطويلة في مقاطع الشيفرة والجداول والفروق ومعاينات الملفات تلقائيًا.",
  },
  "settings.appearance.environmentIdentification.title": {
    en: "Environment identification",
    ar: "تمييز البيئة",
  },
  "settings.appearance.environmentIdentification.description": {
    en: "Choose how Dev and Nightly environments are identified.",
    ar: "اختر طريقة تمييز بيئتي Dev و Nightly.",
  },
  "settings.appearance.environmentIdentification.artwork": {
    en: "Artwork",
    ar: "رسم مميّز",
  },
  "settings.appearance.environmentIdentification.pill": {
    en: "Version pill",
    ar: "شريط الإصدار",
  },
  "settings.appearance.environmentIdentification.none": {
    en: "None",
    ar: "بدون",
  },
} as const satisfies StringModule;
