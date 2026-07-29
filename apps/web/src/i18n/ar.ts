import type { Dictionary } from "./en";

/**
 * Arabic translations. Partial on purpose: anything absent falls back to the
 * English source string, so the dictionary can grow surface by surface without
 * ever rendering a raw key.
 */
export const ar: Partial<Dictionary> = {
  "common.back": "رجوع",
  "common.cancel": "إلغاء",
  "common.close": "إغلاق",
  "common.done": "تم",
  "common.off": "معطّل",
  "common.on": "مُفعّل",
  "common.reset": "إعادة تعيين",
  "common.save": "حفظ",
  "common.system": "النظام",

  "settings.title": "الإعدادات",
  "settings.restoreDefaults": "استعادة الإعدادات الافتراضية",
  "settings.reset.label": "إعادة تعيين {setting}",
  "settings.nav.general": "عام",
  "settings.nav.appearance": "المظهر",
  "settings.nav.keybindings": "اختصارات المفاتيح",
  "settings.nav.providers": "المزوّدون",
  "settings.nav.sourceControl": "إدارة الإصدارات",
  "settings.nav.connections": "الاتصالات",
  "settings.nav.beta": "الميزات التجريبية",
  "settings.nav.archived": "المؤرشفة",
  "settings.nav.diagnostics": "التشخيص",

  "settings.appearance.section": "المظهر",
  "settings.appearance.theme.title": "السمة",
  "settings.appearance.theme.description": "اختر مظهر T3 Code في جميع أنحاء التطبيق.",
  "settings.appearance.theme.light": "فاتح",
  "settings.appearance.theme.dark": "داكن",
  "settings.appearance.theme.system": "النظام",
  "settings.appearance.lightTone.title": "سطوع الوضع الفاتح",
  "settings.appearance.lightTone.description":
    "مدى سطوع الأسطح الفاتحة. تخفّض درجتا «هادئ» و«ورقي» لوحة الألوان بأكملها حتى لا تُبهر الشاشة الكبيرة عينيك.",
  "settings.appearance.lightTone.bright": "ساطع",
  "settings.appearance.lightTone.soft": "هادئ",
  "settings.appearance.lightTone.paper": "ورقي",
  "settings.appearance.fontScale.title": "حجم الخط",
  "settings.appearance.fontScale.description":
    "تكبير النصوص في التطبيق بالكامل. تحتفظ المسافات بتناسبها، فيتغيّر حجم الخط وحده.",
  "settings.appearance.language.title": "اللغة",
  "settings.appearance.language.description":
    "لغة الواجهة. اختيار العربية يحوّل التطبيق بالكامل إلى الاتجاه من اليمين إلى اليسار.",
  "settings.appearance.language.english": "English",
  "settings.appearance.language.arabic": "العربية",
  "settings.appearance.reduceMotion.title": "تقليل الحركة",
  "settings.appearance.reduceMotion.description":
    "إيقاف حركات المؤشرات المتكرّرة وجعل كل تمرير فوريًا بدلًا من متحرّك.",
  "settings.appearance.chatAutoScroll.title": "متابعة مخرجات الوكيل",
  "settings.appearance.chatAutoScroll.description":
    "تمرير المحادثة تلقائيًا أثناء بثّ الوكيل لمخرجاته. الإيقاف يُبقي العرض ثابتًا، ويظل زر الانتقال إلى النهاية متاحًا وقتما تشاء.",
  "settings.appearance.glassOpacity.title": "شفافية الزجاج",
  "settings.appearance.glassOpacity.description":
    "تحكّم في مدى شفافية الأسطح الزجاجية. القيم الأعلى تجعل القوائم والنوافذ ومربّع الكتابة أكثر تعتيمًا.",
  "settings.appearance.wordWrap.title": "التفاف النص",
  "settings.appearance.wordWrap.description":
    "التفاف الأسطر الطويلة في مقاطع الشيفرة والجداول والفروق ومعاينات الملفات تلقائيًا.",
  "settings.appearance.environmentIdentification.title": "تمييز البيئة",
  "settings.appearance.environmentIdentification.description":
    "اختر طريقة تمييز بيئتي Dev و Nightly.",
  "settings.appearance.environmentIdentification.artwork": "رسم مميّز",
  "settings.appearance.environmentIdentification.pill": "شريط الإصدار",
  "settings.appearance.environmentIdentification.none": "بدون",

  "chat.scrollToEnd": "الانتقال إلى النهاية",
};
