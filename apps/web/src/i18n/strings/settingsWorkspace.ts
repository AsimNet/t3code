import type { StringModule } from "./types";

export const settingsWorkspace = {
  // ---------------------------------------------------------------------------
  // Shared settings chrome (rows, sections, reset affordances)
  // ---------------------------------------------------------------------------
  "settings.layout.resetToDefault": {
    en: "Reset to default",
    ar: "إعادة التعيين إلى الافتراضي",
  },
  "settings.layout.resetSettingToDefault": {
    en: "Reset {setting} to default",
    ar: "إعادة تعيين {setting} إلى الافتراضي",
  },

  // ---------------------------------------------------------------------------
  // General
  // ---------------------------------------------------------------------------
  "settings.general.section": {
    en: "General",
    ar: "عام",
  },
  "settings.general.projectGrouping.title": {
    en: "Project Grouping",
    ar: "تجميع المشاريع",
  },
  "settings.general.projectGrouping.description": {
    en: "Combine matching repositories across environments.",
    ar: "دمج المستودعات المتطابقة عبر البيئات.",
  },
  "settings.general.timeFormat.title": {
    en: "Time format",
    ar: "تنسيق الوقت",
  },
  "settings.general.timeFormat.description": {
    en: "System default follows your browser or OS clock preference.",
    ar: "يتبع «افتراضي النظام» إعداد الساعة في المتصفح أو نظام التشغيل.",
  },
  "settings.general.timeFormat.ariaLabel": {
    en: "Timestamp format",
    ar: "تنسيق الطوابع الزمنية",
  },
  "settings.general.timeFormat.locale": {
    en: "System default",
    ar: "افتراضي النظام",
  },
  "settings.general.timeFormat.12Hour": {
    en: "12-hour",
    ar: "12 ساعة",
  },
  "settings.general.timeFormat.24Hour": {
    en: "24-hour",
    ar: "24 ساعة",
  },
  "settings.general.diffWhitespace.title": {
    en: "Hide whitespace changes",
    ar: "إخفاء تغييرات المسافات",
  },
  "settings.general.diffWhitespace.description": {
    en: "Set whether the diff panel ignores whitespace-only edits by default.",
    ar: "تحديد ما إذا كانت لوحة الفروق تتجاهل التعديلات المقتصرة على المسافات تلقائيًا.",
  },
  "settings.general.diffWhitespace.ariaLabel": {
    en: "Hide whitespace changes by default",
    ar: "إخفاء تغييرات المسافات تلقائيًا",
  },
  "settings.general.assistantOutput.title": {
    en: "Assistant output",
    ar: "مخرجات المساعد",
  },
  "settings.general.assistantOutput.description": {
    en: "Show token-by-token output while a response is in progress.",
    ar: "عرض المخرجات تدريجيًا أثناء توليد الرد.",
  },
  "settings.general.assistantOutput.ariaLabel": {
    en: "Stream assistant messages",
    ar: "بثّ رسائل المساعد",
  },
  "settings.general.providerUpdateChecks.title": {
    en: "Provider update checks",
    ar: "التحقق من تحديثات المزوّدين",
  },
  "settings.general.providerUpdateChecks.description": {
    en: "Check installed provider CLIs for newer available versions.",
    ar: "التحقق من توفّر إصدارات أحدث لأدوات CLI المثبّتة للمزوّدين.",
  },
  "settings.general.providerUpdateChecks.ariaLabel": {
    en: "Check provider versions",
    ar: "التحقق من إصدارات المزوّدين",
  },
  "settings.general.backgroundActivity.title": {
    en: "Background activity",
    ar: "النشاط في الخلفية",
  },
  "settings.general.backgroundActivity.policyTooltip": {
    en: "This shared policy gates background work such as Git refreshes and provider health probes after their individual intervals elapse.",
    ar: "تتحكّم هذه السياسة المشتركة في العمل الخلفي مثل تحديثات Git وفحوص سلامة المزوّدين بعد انقضاء الفواصل الزمنية الخاصة بكل منها.",
  },
  "settings.general.backgroundActivity.policyDetailsAriaLabel": {
    en: "Background policy details",
    ar: "تفاصيل سياسة الخلفية",
  },
  "settings.general.backgroundActivity.profileAriaLabel": {
    en: "Background activity profile",
    ar: "نمط النشاط في الخلفية",
  },
  "settings.general.backgroundActivity.balanced": {
    en: "Balanced",
    ar: "متوازن",
  },
  "settings.general.backgroundActivity.performance": {
    en: "Performance",
    ar: "الأداء",
  },
  "settings.general.backgroundActivity.batterySaver": {
    en: "Battery saver",
    ar: "توفير البطارية",
  },
  "settings.general.backgroundActivity.advanced": {
    en: "Advanced",
    ar: "متقدّم",
  },
  "settings.general.backgroundActivity.balanced.description": {
    en: "Pauses background probes when clients are idle, the host is locked, or low power mode is active.",
    ar: "يوقف الفحوص الخلفية مؤقتًا عندما تكون العملاء خاملة أو المضيف مقفلًا أو وضع توفير الطاقة مُفعّلًا.",
  },
  "settings.general.backgroundActivity.performance.description": {
    en: "Allows scoped background probes while any subscribed client remains connected.",
    ar: "يسمح بفحوص خلفية محدودة النطاق ما دام أي عميل مشترك متصلًا.",
  },
  "settings.general.backgroundActivity.batterySaver.description": {
    en: "Also pauses background probes when the host or client is on battery.",
    ar: "يوقف الفحوص الخلفية مؤقتًا كذلك عندما يعمل المضيف أو العميل على البطارية.",
  },
  "settings.general.backgroundActivity.advanced.description": {
    en: "Uses custom background intervals with the selected shared power policy. Current shared policy: {policy}.",
    ar: "يستخدم فواصل زمنية مخصّصة للخلفية مع سياسة الطاقة المشتركة المحدّدة. السياسة المشتركة الحالية: {policy}.",
  },
  "settings.general.backgroundActivity.configureAriaLabel": {
    en: "Configure advanced background activity",
    ar: "تهيئة النشاط المتقدّم في الخلفية",
  },
  "settings.general.backgroundActivity.configureTooltip": {
    en: "Configure background activity",
    ar: "تهيئة النشاط في الخلفية",
  },
  "settings.general.backgroundActivity.dialog.title": {
    en: "Background Activity",
    ar: "النشاط في الخلفية",
  },
  "settings.general.backgroundActivity.dialog.description": {
    en: "Tune the shared power policy and the background intervals that feed it.",
    ar: "اضبط سياسة الطاقة المشتركة والفواصل الزمنية الخلفية التي تعتمد عليها.",
  },
  "settings.general.backgroundActivity.sharedPolicy.title": {
    en: "Shared policy",
    ar: "السياسة المشتركة",
  },
  "settings.general.backgroundActivity.sharedPolicy.description": {
    en: "Controls whether background work may run after a subscribed interval fires.",
    ar: "تحدّد ما إذا كان يُسمح بتشغيل العمل الخلفي بعد انقضاء فاصل زمني مشترَك.",
  },
  "settings.general.backgroundActivity.sharedPolicy.ariaLabel": {
    en: "Shared background policy",
    ar: "سياسة الخلفية المشتركة",
  },
  "settings.general.backgroundActivity.gitFetch.title": {
    en: "Git fetch interval",
    ar: "الفاصل الزمني لـ Git fetch",
  },
  "settings.general.backgroundActivity.gitFetch.description": {
    en: "Refresh remote branch status in the background.",
    ar: "تحديث حالة الفروع البعيدة في الخلفية.",
  },
  "settings.general.backgroundActivity.gitFetch.decrease": {
    en: "Decrease Git fetch interval",
    ar: "تقليل الفاصل الزمني لـ Git fetch",
  },
  "settings.general.backgroundActivity.gitFetch.input": {
    en: "Git fetch interval in seconds",
    ar: "الفاصل الزمني لـ Git fetch بالثواني",
  },
  "settings.general.backgroundActivity.gitFetch.increase": {
    en: "Increase Git fetch interval",
    ar: "زيادة الفاصل الزمني لـ Git fetch",
  },
  "settings.general.backgroundActivity.providerHealth.title": {
    en: "Provider health interval",
    ar: "الفاصل الزمني لفحص سلامة المزوّدين",
  },
  "settings.general.backgroundActivity.providerHealth.description": {
    en: "Refresh provider availability, versions, auth state, and model metadata.",
    ar: "تحديث توفّر المزوّدين وإصداراتهم وحالة المصادقة وبيانات النماذج.",
  },
  "settings.general.backgroundActivity.providerHealth.decrease": {
    en: "Decrease provider health interval",
    ar: "تقليل الفاصل الزمني لفحص سلامة المزوّدين",
  },
  "settings.general.backgroundActivity.providerHealth.input": {
    en: "Provider health interval in seconds",
    ar: "الفاصل الزمني لفحص سلامة المزوّدين بالثواني",
  },
  "settings.general.backgroundActivity.providerHealth.increase": {
    en: "Increase provider health interval",
    ar: "زيادة الفاصل الزمني لفحص سلامة المزوّدين",
  },
  "settings.general.backgroundActivity.hostPower.title": {
    en: "Host power monitor",
    ar: "مراقبة طاقة المضيف",
  },
  "settings.general.backgroundActivity.hostPower.description": {
    en: "Poll host power state while clients are active.",
    ar: "استعلام حالة طاقة المضيف أثناء نشاط العملاء.",
  },
  "settings.general.backgroundActivity.hostPower.decrease": {
    en: "Decrease active host power interval",
    ar: "تقليل الفاصل الزمني لطاقة المضيف النشط",
  },
  "settings.general.backgroundActivity.hostPower.input": {
    en: "Active host power interval in seconds",
    ar: "الفاصل الزمني لطاقة المضيف النشط بالثواني",
  },
  "settings.general.backgroundActivity.hostPower.increase": {
    en: "Increase active host power interval",
    ar: "زيادة الفاصل الزمني لطاقة المضيف النشط",
  },
  "settings.general.backgroundActivity.idleHost.title": {
    en: "Idle host monitor",
    ar: "مراقبة المضيف الخامل",
  },
  "settings.general.backgroundActivity.idleHost.description": {
    en: "Poll host power state when no foreground client is active.",
    ar: "استعلام حالة طاقة المضيف عند عدم وجود عميل نشط في المقدّمة.",
  },
  "settings.general.backgroundActivity.idleHost.decrease": {
    en: "Decrease idle host power interval",
    ar: "تقليل الفاصل الزمني لطاقة المضيف الخامل",
  },
  "settings.general.backgroundActivity.idleHost.input": {
    en: "Idle host power interval in seconds",
    ar: "الفاصل الزمني لطاقة المضيف الخامل بالثواني",
  },
  "settings.general.backgroundActivity.idleHost.increase": {
    en: "Increase idle host power interval",
    ar: "زيادة الفاصل الزمني لطاقة المضيف الخامل",
  },
  "settings.general.backgroundActivity.seconds": {
    en: "seconds",
    ar: "ثانية",
  },
  "settings.general.backgroundActivity.pauseWhenHostLocked": {
    en: "Pause when host is locked",
    ar: "الإيقاف المؤقت عند قفل المضيف",
  },
  "settings.general.backgroundActivity.pauseWhenHostLowPower": {
    en: "Pause on host low power",
    ar: "الإيقاف المؤقت عند انخفاض طاقة المضيف",
  },
  "settings.general.backgroundActivity.pauseWhenClientLowPower": {
    en: "Pause on client low power",
    ar: "الإيقاف المؤقت عند انخفاض طاقة العميل",
  },
  "settings.general.backgroundActivity.pauseWhenOnBattery": {
    en: "Pause on battery",
    ar: "الإيقاف المؤقت عند العمل على البطارية",
  },
  "settings.general.backgroundActivity.resetAll": {
    en: "Reset all",
    ar: "إعادة تعيين الكل",
  },
  "settings.general.autoOpenTaskPanel.title": {
    en: "Auto-open task panel",
    ar: "فتح لوحة المهام تلقائيًا",
  },
  "settings.general.autoOpenTaskPanel.description": {
    en: "Open the right-side plan and task panel automatically when steps appear.",
    ar: "فتح لوحة الخطة والمهام الجانبية تلقائيًا عند ظهور خطوات.",
  },
  "settings.general.autoOpenTaskPanel.ariaLabel": {
    en: "Open the task panel automatically",
    ar: "فتح لوحة المهام تلقائيًا",
  },
  "settings.general.newThreads.title": {
    en: "New threads",
    ar: "المحادثات الجديدة",
  },
  "settings.general.newThreads.description": {
    en: "Pick the default workspace mode for newly created draft threads.",
    ar: "اختر وضع مساحة العمل الافتراضي للمحادثات المسودّة الجديدة.",
  },
  "settings.general.newThreads.ariaLabel": {
    en: "Default thread mode",
    ar: "وضع المحادثة الافتراضي",
  },
  "settings.general.newThreads.local": {
    en: "Local",
    ar: "محلي",
  },
  "settings.general.newThreads.worktree": {
    en: "New worktree",
    ar: "شجرة عمل جديدة",
  },
  "settings.general.startFromOrigin.title": {
    en: "Start from origin",
    ar: "البدء من origin",
  },
  "settings.general.startFromOrigin.description": {
    en: "Creates the worktree from the latest matching branch on origin instead of your local branch.",
    ar: "يُنشئ شجرة العمل من أحدث فرع مطابق على origin بدلًا من الفرع المحلي.",
  },
  "settings.general.startFromOrigin.ariaLabel": {
    en: "Start new worktrees from origin by default",
    ar: "بدء أشجار العمل الجديدة من origin تلقائيًا",
  },
  "settings.general.addProjectBaseDirectory.title": {
    en: "Add project starts in",
    ar: "مجلد بدء إضافة مشروع",
  },
  "settings.general.addProjectBaseDirectory.description": {
    en: 'Leave empty to use "~/" when the Add Project browser opens.',
    ar: "اتركه فارغًا لاستخدام «~/» عند فتح متصفّح إضافة مشروع.",
  },
  "settings.general.addProjectBaseDirectory.ariaLabel": {
    en: "Add project base directory",
    ar: "المجلد الأساسي لإضافة مشروع",
  },
  "settings.general.archiveConfirmation.title": {
    en: "Archive confirmation",
    ar: "تأكيد الأرشفة",
  },
  "settings.general.archiveConfirmation.description": {
    en: "Require a second click on the inline archive action before a thread is archived.",
    ar: "طلب نقرة ثانية على زر الأرشفة قبل أرشفة المحادثة.",
  },
  "settings.general.archiveConfirmation.ariaLabel": {
    en: "Confirm thread archiving",
    ar: "تأكيد أرشفة المحادثة",
  },
  "settings.general.deleteConfirmation.title": {
    en: "Delete confirmation",
    ar: "تأكيد الحذف",
  },
  "settings.general.deleteConfirmation.description": {
    en: "Ask before deleting a thread and its chat history.",
    ar: "السؤال قبل حذف المحادثة وسجلّ دردشتها.",
  },
  "settings.general.deleteConfirmation.ariaLabel": {
    en: "Confirm thread deletion",
    ar: "تأكيد حذف المحادثة",
  },
  "settings.general.textGenerationModel.title": {
    en: "Text generation model",
    ar: "نموذج توليد النصوص",
  },
  "settings.general.textGenerationModel.description": {
    en: "Default model for generated text like thread titles and source control content. Source control settings can override it with a dedicated source control writer model.",
    ar: "النموذج الافتراضي للنصوص المولّدة مثل عناوين المحادثات ومحتوى إدارة الإصدارات. ويمكن لإعدادات إدارة الإصدارات تجاوزه بنموذج كتابة مخصّص لها.",
  },

  // About section of the General panel
  "settings.general.about.section": {
    en: "About",
    ar: "حول",
  },
  "settings.general.about.version": {
    en: "Version",
    ar: "الإصدار",
  },
  "settings.general.about.currentVersion": {
    en: "Current version of the application.",
    ar: "الإصدار الحالي من التطبيق.",
  },
  "settings.general.about.updateAvailable": {
    en: "Update available.",
    ar: "يوجد تحديث متاح.",
  },
  "settings.general.about.download": {
    en: "Download",
    ar: "تنزيل",
  },
  "settings.general.about.install": {
    en: "Install",
    ar: "تثبيت",
  },
  "settings.general.about.checking": {
    en: "Checking…",
    ar: "جارٍ التحقق…",
  },
  "settings.general.about.downloading": {
    en: "Downloading…",
    ar: "جارٍ التنزيل…",
  },
  "settings.general.about.upToDate": {
    en: "Up to Date",
    ar: "محدَّث",
  },
  "settings.general.about.checkForUpdates": {
    en: "Check for Updates",
    ar: "التحقق من التحديثات",
  },
  "settings.general.about.updateTrack.title": {
    en: "Update track",
    ar: "مسار التحديث",
  },
  "settings.general.about.updateTrack.desktopDescription": {
    en: "Stable follows full releases. Nightly follows the nightly desktop channel and can switch back to stable immediately.",
    ar: "يتبع Stable الإصدارات الكاملة، ويتبع Nightly قناة سطح المكتب الليلية ويمكن الرجوع منه إلى Stable فورًا.",
  },
  "settings.general.about.updateTrack.hostedDescription": {
    en: "Switches the hosted app release channel.",
    ar: "يبدّل قناة إصدار التطبيق المستضاف.",
  },
  "settings.general.about.updateTrack.changeFailed.title": {
    en: "Could not change update track",
    ar: "تعذّر تغيير مسار التحديث",
  },
  "settings.general.about.updateTrack.changeFailed.description": {
    en: "Update track change failed.",
    ar: "فشل تغيير مسار التحديث.",
  },
  "settings.general.about.downloadFailed.title": {
    en: "Could not download update",
    ar: "تعذّر تنزيل التحديث",
  },
  "settings.general.about.downloadFailed.description": {
    en: "Download failed.",
    ar: "فشل التنزيل.",
  },
  "settings.general.about.installFailed.title": {
    en: "Could not install update",
    ar: "تعذّر تثبيت التحديث",
  },
  "settings.general.about.installFailed.description": {
    en: "Install failed.",
    ar: "فشل التثبيت.",
  },
  "settings.general.about.checkFailed.title": {
    en: "Could not check for updates",
    ar: "تعذّر التحقق من التحديثات",
  },
  "settings.general.about.checkFailed.unavailable": {
    en: "Automatic updates are not available in this build.",
    ar: "التحديثات التلقائية غير متاحة في هذه النسخة.",
  },
  "settings.general.about.checkFailed.description": {
    en: "Update check failed.",
    ar: "فشل التحقق من التحديثات.",
  },
  "settings.general.diagnostics.title": {
    en: "Diagnostics",
    ar: "التشخيص",
  },
  "settings.general.diagnostics.view": {
    en: "View diagnostics",
    ar: "عرض التشخيص",
  },

  // Restore-defaults confirmation
  "settings.general.restore.confirmTitle": {
    en: "Restore default settings?",
    ar: "استعادة الإعدادات الافتراضية؟",
  },
  "settings.general.restore.confirmBody": {
    en: "This will reset: {settings}.",
    ar: "سيؤدي هذا إلى إعادة تعيين: {settings}.",
  },
  "settings.general.restore.listSeparator": {
    en: ", ",
    ar: "، ",
  },
  "settings.general.restore.visibleThreads": {
    en: "Visible threads",
    ar: "المحادثات الظاهرة",
  },
  "settings.general.restore.diffWhitespace": {
    en: "Diff whitespace changes",
    ar: "تغييرات المسافات في الفروق",
  },
  "settings.general.restore.newThreadMode": {
    en: "New thread mode",
    ar: "وضع المحادثة الجديدة",
  },
  "settings.general.restore.worktreesStartFromOrigin": {
    en: "New worktrees start from origin",
    ar: "بدء أشجار العمل الجديدة من origin",
  },
  "settings.general.restore.addProjectBaseDirectory": {
    en: "Add project base directory",
    ar: "المجلد الأساسي لإضافة مشروع",
  },

  // ---------------------------------------------------------------------------
  // Beta
  // ---------------------------------------------------------------------------
  "settings.beta.section": {
    en: "Beta features",
    ar: "الميزات التجريبية",
  },
  "settings.beta.sidebarV2.title": {
    en: "Sidebar v2",
    ar: "الشريط الجانبي v2",
  },
  "settings.beta.sidebarV2.description": {
    en: "One flat thread list in creation order. Active work renders as rich cards; settled threads collapse to compact rows. Settling requires an up-to-date server — on older servers threads simply stay active. Switch back any time.",
    ar: "قائمة محادثات واحدة مسطّحة بترتيب الإنشاء. يظهر العمل النشط في بطاقات موسّعة، وتُطوى المحادثات الهادئة في صفوف مضغوطة. تتطلّب التهدئة خادمًا محدَّثًا؛ وعلى الخوادم الأقدم تبقى المحادثات نشطة. يمكنك الرجوع في أي وقت.",
  },
  "settings.beta.sidebarV2.ariaLabel": {
    en: "Enable the sidebar v2 beta",
    ar: "تمكين النسخة التجريبية من الشريط الجانبي v2",
  },
  "settings.beta.autoSettle.title": {
    en: "Auto-settle inactive threads",
    ar: "تهدئة المحادثات غير النشطة تلقائيًا",
  },
  "settings.beta.autoSettle.description": {
    en: "Threads with no activity for this long settle automatically. Threads on merged or closed PRs always settle.",
    ar: "تُهدَّأ المحادثات التي تمضي هذه المدة دون نشاط تلقائيًا. وتُهدَّأ دائمًا محادثات طلبات PR المدموجة أو المغلقة.",
  },
  "settings.beta.autoSettleDays.title": {
    en: "Days of inactivity before auto-settle",
    ar: "أيام عدم النشاط قبل التهدئة التلقائية",
  },
  "settings.beta.autoSettleDays.description": {
    en: "Any new activity un-settles a thread automatically.",
    ar: "أي نشاط جديد يُلغي تهدئة المحادثة تلقائيًا.",
  },

  // ---------------------------------------------------------------------------
  // Archived
  // ---------------------------------------------------------------------------
  "settings.archived.section": {
    en: "Archived threads",
    ar: "المحادثات المؤرشفة",
  },
  "settings.archived.loading": {
    en: "Loading archived threads",
    ar: "جارٍ تحميل المحادثات المؤرشفة",
  },
  "settings.archived.loadFailed": {
    en: "Could not load archived threads",
    ar: "تعذّر تحميل المحادثات المؤرشفة",
  },
  "settings.archived.empty": {
    en: "No archived threads",
    ar: "لا توجد محادثات مؤرشفة",
  },
  "settings.archived.checkingEnvironments": {
    en: "Checking connected environments.",
    ar: "جارٍ فحص البيئات المتصلة.",
  },
  "settings.archived.emptyDescription": {
    en: "Archived threads will appear here.",
    ar: "ستظهر المحادثات المؤرشفة هنا.",
  },
  "settings.archived.threadTimestamps": {
    en: "Archived {archived} · Created {created}",
    ar: "أُرشفت {archived} · أُنشئت {created}",
  },
  "settings.archived.unarchive": {
    en: "Unarchive",
    ar: "إلغاء الأرشفة",
  },
  "settings.archived.delete": {
    en: "Delete",
    ar: "حذف",
  },
  "settings.archived.unarchiveFailed": {
    en: "Failed to unarchive thread",
    ar: "تعذّر إلغاء أرشفة المحادثة",
  },
  "settings.archived.deleteFailed": {
    en: "Failed to delete thread",
    ar: "تعذّر حذف المحادثة",
  },
  "settings.archived.actionFailed": {
    en: "Archived thread action failed",
    ar: "فشل تنفيذ الإجراء على المحادثة المؤرشفة",
  },
  "settings.archived.genericError": {
    en: "An error occurred.",
    ar: "حدث خطأ.",
  },

  // ---------------------------------------------------------------------------
  // Keybindings
  // ---------------------------------------------------------------------------
  "settings.keybindings.section": {
    en: "Keybindings",
    ar: "اختصارات المفاتيح",
  },
  "settings.keybindings.search": {
    en: "Search keybindings",
    ar: "البحث في الاختصارات",
  },
  "settings.keybindings.add": {
    en: "Add keybinding",
    ar: "إضافة اختصار",
  },
  "settings.keybindings.openFile": {
    en: "Open keybindings.json",
    ar: "فتح keybindings.json",
  },
  "settings.keybindings.count.one": {
    en: "{count} binding",
    ar: "{count} اختصار",
  },
  "settings.keybindings.count.other": {
    en: "{count} bindings",
    ar: "{count} اختصارات",
  },
  "settings.keybindings.browserWarning": {
    en: "Some shortcuts may be claimed by the browser before T3 Code sees them. Use the desktop app for better keybinding support.",
    ar: "قد يستحوذ المتصفح على بعض الاختصارات قبل أن يراها T3 Code. استخدم تطبيق سطح المكتب للحصول على دعم أفضل للاختصارات.",
  },
  "settings.keybindings.column.command": {
    en: "Command",
    ar: "الأمر",
  },
  "settings.keybindings.column.keybinding": {
    en: "Keybinding",
    ar: "الاختصار",
  },
  "settings.keybindings.column.when": {
    en: "When",
    ar: "الشرط",
  },
  "settings.keybindings.column.status": {
    en: "Status",
    ar: "الحالة",
  },
  "settings.keybindings.noResults": {
    en: "No keybindings match your search.",
    ar: "لا توجد اختصارات مطابقة لبحثك.",
  },
  "settings.keybindings.editShortcut": {
    en: "Edit shortcut for {command}",
    ar: "تعديل اختصار {command}",
  },
  "settings.keybindings.edit": {
    en: "Edit",
    ar: "تعديل",
  },
  "settings.keybindings.keybindingFor": {
    en: "Keybinding for {command}",
    ar: "اختصار {command}",
  },
  "settings.keybindings.pressShortcut": {
    en: "Press shortcut",
    ar: "اضغط الاختصار",
  },
  "settings.keybindings.unassigned": {
    en: "Unassigned",
    ar: "غير معيّن",
  },
  "settings.keybindings.saving": {
    en: "Saving",
    ar: "جارٍ الحفظ",
  },
  "settings.keybindings.editWhenClause": {
    en: "Edit when clause for {command}",
    ar: "تعديل شرط {command}",
  },
  "settings.keybindings.rowActions": {
    en: "Actions for {command}",
    ar: "إجراءات {command}",
  },
  "settings.keybindings.resetToDefault": {
    en: "Reset to default",
    ar: "إعادة التعيين إلى الافتراضي",
  },
  "settings.keybindings.remove": {
    en: "Remove",
    ar: "إزالة",
  },
  "settings.keybindings.newBinding": {
    en: "new keybinding",
    ar: "اختصار جديد",
  },
  "settings.keybindings.commandPlaceholder": {
    en: "Command",
    ar: "أمر",
  },
  "settings.keybindings.cancelNew": {
    en: "Cancel new keybinding",
    ar: "إلغاء الاختصار الجديد",
  },
  "settings.keybindings.when.always": {
    en: "Always",
    ar: "دائمًا",
  },
  "settings.keybindings.when.title": {
    en: "When",
    ar: "الشرط",
  },
  "settings.keybindings.when.expressionAriaLabel": {
    en: "When expression",
    ar: "تعبير الشرط",
  },
  "settings.keybindings.when.conditionPlaceholder": {
    en: "Condition",
    ar: "شرط",
  },
  "settings.keybindings.when.addCondition": {
    en: "Condition",
    ar: "شرط",
  },
  "settings.keybindings.when.addGroup": {
    en: "Group",
    ar: "مجموعة",
  },
  "settings.keybindings.when.negateCondition": {
    en: "Negate {condition}",
    ar: "نفي {condition}",
  },
  "settings.keybindings.when.negateGroup": {
    en: "Negate group",
    ar: "نفي المجموعة",
  },
  "settings.keybindings.when.removeCondition": {
    en: "Remove condition",
    ar: "إزالة الشرط",
  },
  "settings.keybindings.when.removeNegatedGroup": {
    en: "Remove negated group",
    ar: "إزالة المجموعة المنفيّة",
  },
  "settings.keybindings.when.removeGroup": {
    en: "Remove group",
    ar: "إزالة المجموعة",
  },
  "settings.keybindings.when.fixExpression": {
    en: "Fix the expression above to continue editing visually.",
    ar: "صحّح التعبير أعلاه لمتابعة التحرير المرئي.",
  },
  "settings.keybindings.when.unknown.one": {
    en: "Unknown condition: {conditions}",
    ar: "شرط غير معروف: {conditions}",
  },
  "settings.keybindings.when.unknown.other": {
    en: "Unknown conditions: {conditions}",
    ar: "شروط غير معروفة: {conditions}",
  },
  "settings.keybindings.when.unknown.tooltip": {
    en: "T3 Code does not recognize this condition yet. It can still be saved, but it may not match unless the runtime provides it.",
    ar: "لا يتعرّف T3 Code على هذا الشرط بعد. يمكن حفظه، لكنه قد لا يتحقّق إلا إذا وفّره وقت التشغيل.",
  },
  "settings.keybindings.conflict.one": {
    en: "Conflicts with {commands}.",
    ar: "يتعارض مع {commands}.",
  },
  "settings.keybindings.conflict.other": {
    en: "Conflicts with {commands}.",
    ar: "يتعارض مع {commands}.",
  },
  "settings.keybindings.conflict.truncated": {
    en: "Conflicts with {commands}, and more.",
    ar: "يتعارض مع {commands}، وغيرها.",
  },
  "settings.keybindings.conflict.hint": {
    en: "The most recent matching binding wins when both conditions can apply.",
    ar: "يفوز أحدث اختصار مطابق عندما يكون الشرطان قابلين للتطبيق.",
  },
  "settings.keybindings.listSeparator": {
    en: ", ",
    ar: "، ",
  },
  "settings.keybindings.openFileFailed.title": {
    en: "Unable to open keybindings file",
    ar: "تعذّر فتح ملف الاختصارات",
  },
  "settings.keybindings.openFileFailed.description": {
    en: "The keybindings file was not opened.",
    ar: "لم يُفتح ملف الاختصارات.",
  },
  "settings.keybindings.saveFailed.title": {
    en: "Unable to save keybinding",
    ar: "تعذّر حفظ الاختصار",
  },
  "settings.keybindings.saveFailed.description": {
    en: "The keybinding was not saved.",
    ar: "لم يُحفظ الاختصار.",
  },
  "settings.keybindings.removeFailed.title": {
    en: "Unable to remove keybinding",
    ar: "تعذّر إزالة الاختصار",
  },
  "settings.keybindings.removeFailed.description": {
    en: "The keybinding was not removed.",
    ar: "لم تتم إزالة الاختصار.",
  },
} as const satisfies StringModule;
