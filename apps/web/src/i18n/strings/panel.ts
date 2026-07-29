import type { StringModule } from "./types";

export const panel = {
  "panel.error.generic": {
    en: "An error occurred.",
    ar: "حدث خطأ.",
  },

  // Diff panel — scope picker
  "panel.diff.scopeAria": {
    en: "Diff scope: {scope}",
    ar: "نطاق الفروق: {scope}",
  },
  "panel.diff.scope.workingTree": {
    en: "Working tree",
    ar: "شجرة العمل",
  },
  "panel.diff.scope.branchChanges": {
    en: "Branch changes",
    ar: "تغييرات الفرع",
  },
  "panel.diff.scope.latestTurn": {
    en: "Latest turn",
    ar: "أحدث جولة",
  },
  "panel.diff.scope.turn": {
    en: "Turn {count}",
    ar: "الجولة {count}",
  },
  "panel.diff.scope.turnSubmenu": {
    en: "Turn",
    ar: "جولة",
  },

  // Diff panel — base ref comparison
  "panel.diff.comparingAria": {
    en: "Comparing {head} against {base}",
    ar: "مقارنة {head} مع {base}",
  },
  "panel.diff.baseRef.changeAria": {
    en: "Change comparison target. Currently {base}",
    ar: "تغيير هدف المقارنة. الهدف الحالي {base}",
  },
  "panel.diff.baseRef.searchPlaceholder": {
    en: "Search refs…",
    ar: "ابحث في refs…",
  },
  "panel.diff.baseRef.branchColumn": {
    en: "Branch",
    ar: "الفرع",
  },
  "panel.diff.baseRef.remoteColumn": {
    en: "Remote",
    ar: "بعيد",
  },
  "panel.diff.baseRef.empty": {
    en: "No matching refs.",
    ar: "لا توجد refs مطابقة.",
  },
  "panel.diff.baseRef.automatic": {
    en: "Automatic",
    ar: "تلقائي",
  },
  "panel.diff.baseRef.useRemoteAria": {
    en: "Use remote version of {ref}",
    ar: "استخدام النسخة البعيدة من {ref}",
  },
  "panel.diff.baseRef.remoteOnly": {
    en: "Remote only",
    ar: "بعيد فقط",
  },

  // Diff panel — view controls
  "panel.diff.expandAllFiles": {
    en: "Expand all files",
    ar: "توسيع جميع الملفات",
  },
  "panel.diff.collapseAllFiles": {
    en: "Collapse all files",
    ar: "طيّ جميع الملفات",
  },
  "panel.diff.view.stacked": {
    en: "Stacked diff view",
    ar: "عرض الفروق المتراكم",
  },
  "panel.diff.view.split": {
    en: "Split diff view",
    ar: "عرض الفروق المنقسم",
  },
  "panel.diff.wrap.enableAria": {
    en: "Enable diff line wrapping",
    ar: "تمكين التفاف أسطر الفروق",
  },
  "panel.diff.wrap.disableAria": {
    en: "Disable diff line wrapping",
    ar: "تعطيل التفاف أسطر الفروق",
  },
  "panel.diff.wrap.enable": {
    en: "Enable line wrapping",
    ar: "تمكين التفاف النص",
  },
  "panel.diff.wrap.disable": {
    en: "Disable line wrapping",
    ar: "تعطيل التفاف النص",
  },
  "panel.diff.whitespace.show": {
    en: "Show whitespace changes",
    ar: "إظهار تغييرات المسافات",
  },
  "panel.diff.whitespace.hide": {
    en: "Hide whitespace changes",
    ar: "إخفاء تغييرات المسافات",
  },

  // Diff panel — states
  "panel.diff.empty.selectThread": {
    en: "Select a thread to inspect turn diffs.",
    ar: "اختر محادثة لعرض فروق الجولات.",
  },
  "panel.diff.empty.notGitRepo": {
    en: "Turn diffs are unavailable because this project is not a git repository.",
    ar: "فروق الجولات غير متاحة لأن هذا المشروع ليس مستودع git.",
  },
  "panel.diff.empty.noTurns": {
    en: "No completed turns yet.",
    ar: "لا توجد جولات مكتملة بعد.",
  },
  "panel.diff.truncated": {
    en: "This diff was truncated because it exceeded the preview limit. The changes shown are incomplete.",
    ar: "تم اقتطاع هذه الفروق لتجاوزها حد المعاينة، والتغييرات المعروضة غير كاملة.",
  },
  "panel.diff.loading.checkpoint": {
    en: "Loading checkpoint diff…",
    ar: "جارٍ تحميل فروق نقطة الحفظ…",
  },
  "panel.diff.loading.workingTree": {
    en: "Loading working tree diff…",
    ar: "جارٍ تحميل فروق شجرة العمل…",
  },
  "panel.diff.loading.branch": {
    en: "Loading branch diff…",
    ar: "جارٍ تحميل فروق الفرع…",
  },
  "panel.diff.noNetChanges": {
    en: "No net changes in this selection.",
    ar: "لا توجد تغييرات صافية في هذا التحديد.",
  },
  "panel.diff.noPatch": {
    en: "No patch available for this selection.",
    ar: "لا يوجد patch متاح لهذا التحديد.",
  },

  // Diff panel — per-file collapse
  "panel.diff.file.expandAria": {
    en: "Expand {path}",
    ar: "توسيع {path}",
  },
  "panel.diff.file.collapseAria": {
    en: "Collapse {path}",
    ar: "طيّ {path}",
  },
  "panel.diff.file.expand": {
    en: "Expand diff",
    ar: "توسيع الفروق",
  },
  "panel.diff.file.collapse": {
    en: "Collapse diff",
    ar: "طيّ الفروق",
  },

  // Right panel tabs — surfaces
  "panel.surface.browser": {
    en: "Browser",
    ar: "المتصفح",
  },
  "panel.surface.browser.description": {
    en: "Open a local app or URL.",
    ar: "افتح تطبيقًا محليًا أو رابطًا.",
  },
  "panel.surface.terminal": {
    en: "Terminal",
    ar: "الطرفية",
  },
  "panel.surface.terminal.description": {
    en: "Start a shell in this workspace.",
    ar: "ابدأ جلسة shell في مساحة العمل هذه.",
  },
  "panel.surface.files": {
    en: "Files",
    ar: "الملفات",
  },
  "panel.surface.files.description": {
    en: "Browse and read workspace files.",
    ar: "استعرض ملفات مساحة العمل واقرأها.",
  },
  "panel.surface.diff": {
    en: "Diff",
    ar: "الفروق",
  },
  "panel.surface.diff.description": {
    en: "Review changes in this thread.",
    ar: "راجع التغييرات في هذه المحادثة.",
  },
  "panel.surface.plan": {
    en: "Plan",
    ar: "الخطة",
  },
  "panel.surface.unavailable.browser": {
    en: "Browser previews are only available in the T3 Code desktop app.",
    ar: "معاينات المتصفح متاحة فقط في تطبيق T3 Code لسطح المكتب.",
  },
  "panel.surface.unavailable.files": {
    en: "Files are only available when a project is open.",
    ar: "الملفات متاحة فقط عند فتح مشروع.",
  },
  "panel.surface.unavailable.diff": {
    en: "Diff is only available for server threads in Git repositories.",
    ar: "الفروق متاحة فقط لمحادثات الخادم داخل مستودعات Git.",
  },

  // Right panel tabs — chrome
  "panel.tabs.emptyTitle": {
    en: "Open a surface",
    ar: "افتح لوحة",
  },
  "panel.tabs.emptyDescription": {
    en: "Choose what to show in the right panel.",
    ar: "اختر ما تريد عرضه في اللوحة الجانبية.",
  },
  "panel.tabs.add": {
    en: "Add panel surface",
    ar: "إضافة لوحة",
  },
  "panel.tabs.closeAria": {
    en: "Close {title}",
    ar: "إغلاق {title}",
  },
  "panel.tabs.copyPath": {
    en: "Copy path",
    ar: "نسخ المسار",
  },
  "panel.tabs.close": {
    en: "Close",
    ar: "إغلاق",
  },
  "panel.tabs.closeOthers": {
    en: "Close others",
    ar: "إغلاق التبويبات الأخرى",
  },
  "panel.tabs.closeToRight": {
    en: "Close to the right",
    ar: "إغلاق التبويبات التالية",
  },
  "panel.tabs.closeAll": {
    en: "Close all",
    ar: "إغلاق الكل",
  },

  // Terminal drawer
  "panel.terminal.label": {
    en: "Terminal",
    ar: "طرفية",
  },
  "panel.terminal.addToChat": {
    en: "Add to chat",
    ar: "إضافة إلى المحادثة",
  },
  "panel.terminal.copy": {
    en: "Copy",
    ar: "نسخ",
  },
  "panel.terminal.copyFailed": {
    en: "Unable to copy terminal selection",
    ar: "تعذّر نسخ تحديد الطرفية",
  },
  "panel.terminal.moveCursorFailed": {
    en: "Failed to move cursor",
    ar: "تعذّر تحريك المؤشر",
  },
  "panel.terminal.deleteInputFailed": {
    en: "Failed to delete terminal input",
    ar: "تعذّر حذف مُدخل الطرفية",
  },
  "panel.terminal.clearFailed": {
    en: "Failed to clear terminal",
    ar: "تعذّر مسح الطرفية",
  },
  "panel.terminal.linksUnavailable": {
    en: "Opening links is unavailable in this browser.",
    ar: "فتح الروابط غير متاح في هذا المتصفح.",
  },
  "panel.terminal.openLinkFailed": {
    en: "Unable to open link",
    ar: "تعذّر فتح الرابط",
  },
  "panel.terminal.openPathFailed": {
    en: "Unable to open path",
    ar: "تعذّر فتح المسار",
  },
  "panel.terminal.writeFailed": {
    en: "Terminal write failed",
    ar: "تعذّرت الكتابة إلى الطرفية",
  },
  "panel.terminal.closed": {
    en: "Terminal closed",
    ar: "أُغلقت الطرفية",
  },
  "panel.terminal.processExited": {
    en: "Process exited",
    ar: "انتهت العملية",
  },
  "panel.terminal.splitHorizontal": {
    en: "Split Terminal Horizontally",
    ar: "تقسيم الطرفية أفقيًا",
  },
  "panel.terminal.splitHorizontal.withShortcut": {
    en: "Split Terminal Horizontally ({shortcut})",
    ar: "تقسيم الطرفية أفقيًا ({shortcut})",
  },
  "panel.terminal.splitHorizontal.limit": {
    en: "Split Terminal Horizontally (max {max} per group)",
    ar: "تقسيم الطرفية أفقيًا (الحد الأقصى {max} لكل مجموعة)",
  },
  "panel.terminal.splitVertical": {
    en: "Split Terminal Vertically",
    ar: "تقسيم الطرفية رأسيًا",
  },
  "panel.terminal.splitVertical.withShortcut": {
    en: "Split Terminal Vertically ({shortcut})",
    ar: "تقسيم الطرفية رأسيًا ({shortcut})",
  },
  "panel.terminal.splitVertical.limit": {
    en: "Split Terminal Vertically (max {max} per group)",
    ar: "تقسيم الطرفية رأسيًا (الحد الأقصى {max} لكل مجموعة)",
  },
  "panel.terminal.new": {
    en: "New Terminal",
    ar: "طرفية جديدة",
  },
  "panel.terminal.new.withShortcut": {
    en: "New Terminal ({shortcut})",
    ar: "طرفية جديدة ({shortcut})",
  },
  "panel.terminal.close": {
    en: "Close Terminal",
    ar: "إغلاق الطرفية",
  },
  "panel.terminal.close.withShortcut": {
    en: "Close Terminal ({shortcut})",
    ar: "إغلاق الطرفية ({shortcut})",
  },
  "panel.terminal.closeNamed": {
    en: "Close {label}",
    ar: "إغلاق {label}",
  },
  "panel.terminal.closeNamed.withShortcut": {
    en: "Close {label} ({shortcut})",
    ar: "إغلاق {label} ({shortcut})",
  },
  "panel.terminal.empty": {
    en: "No terminal sessions for this thread yet.",
    ar: "لا توجد جلسات طرفية لهذه المحادثة بعد.",
  },
  "panel.terminal.group": {
    en: "Group {number}",
    ar: "المجموعة {number}",
  },

  // File browser
  "panel.files.refreshAria": {
    en: "Refresh workspace files",
    ar: "تحديث ملفات مساحة العمل",
  },
  "panel.files.refreshing": {
    en: "Refreshing…",
    ar: "جارٍ التحديث…",
  },
  "panel.files.refresh": {
    en: "Refresh files",
    ar: "تحديث الملفات",
  },
  "panel.files.searchPlaceholder": {
    en: "Search files",
    ar: "بحث في الملفات",
  },
  "panel.files.searchAria": {
    en: "Search {project} files",
    ar: "بحث في ملفات {project}",
  },
  "panel.files.treeAria": {
    en: "{project} files",
    ar: "ملفات {project}",
  },
  "panel.files.copyMention": {
    en: "Copy mention",
    ar: "نسخ الإشارة",
  },
  "panel.files.addToChat": {
    en: "Add to chat",
    ar: "إضافة إلى المحادثة",
  },
  "panel.files.mentionCopied": {
    en: "Mention copied",
    ar: "تم نسخ الإشارة",
  },
  "panel.files.mentionCopyFailed": {
    en: "Failed to copy mention",
    ar: "تعذّر نسخ الإشارة",
  },
  "panel.files.addToChatFailed": {
    en: "Unable to add to chat",
    ar: "تعذّرت الإضافة إلى المحادثة",
  },
  "panel.files.addToChatNoComposer": {
    en: "Open a chat for this project and try again.",
    ar: "افتح محادثة لهذا المشروع وحاول مرة أخرى.",
  },
  "panel.files.addToChatNotReady": {
    en: "The chat isn't ready to accept input right now.",
    ar: "المحادثة غير جاهزة لتلقّي المُدخلات الآن.",
  },

  // File preview
  "panel.file.imageError": {
    en: "Unable to load workspace image.",
    ar: "تعذّر تحميل صورة مساحة العمل.",
  },
  "panel.file.openInBrowserFailed": {
    en: "Unable to open file in browser",
    ar: "تعذّر فتح الملف في المتصفح",
  },
  "panel.file.markdownSource": {
    en: "Show markdown source",
    ar: "إظهار مصدر Markdown",
  },
  "panel.file.markdownRendered": {
    en: "Show rendered markdown",
    ar: "إظهار Markdown المُنسّق",
  },
  "panel.file.openInPreviewBrowser": {
    en: "Open file in preview browser",
    ar: "فتح الملف في متصفح المعاينة",
  },
  "panel.file.hideExplorer": {
    en: "Hide file explorer",
    ar: "إخفاء مستعرض الملفات",
  },
  "panel.file.showExplorer": {
    en: "Show file explorer",
    ar: "إظهار مستعرض الملفات",
  },
  "panel.file.truncated": {
    en: "Preview limited to the first 1 MB of a {bytes} byte file.",
    ar: "المعاينة محدودة بأول 1 MB من ملف حجمه {bytes} بايت.",
  },

  // Inline review comments
  "panel.comment.local": {
    en: "Local comment",
    ar: "تعليق محلي",
  },
  "panel.comment.delete": {
    en: "Delete comment",
    ar: "حذف التعليق",
  },
  "panel.comment.onLines": {
    en: "Comment on lines {range}",
    ar: "تعليق على الأسطر {range}",
  },
  "panel.comment.placeholder": {
    en: "Request change",
    ar: "اطلب تغييرًا",
  },
  "panel.comment.cancel": {
    en: "Cancel",
    ar: "إلغاء",
  },
  "panel.comment.submit": {
    en: "Comment",
    ar: "تعليق",
  },

  // Preview chrome row
  "panel.preview.navigationGroup": {
    en: "Navigation",
    ar: "التنقّل",
  },
  "panel.preview.back": {
    en: "Back",
    ar: "رجوع",
  },
  "panel.preview.forward": {
    en: "Forward",
    ar: "تقدّم",
  },
  "panel.preview.stop": {
    en: "Stop",
    ar: "إيقاف",
  },
  "panel.preview.refresh": {
    en: "Refresh",
    ar: "تحديث",
  },
  "panel.preview.loading": {
    en: "Loading…",
    ar: "جارٍ التحميل…",
  },
  "panel.preview.urlPlaceholder": {
    en: "Search or enter URL",
    ar: "ابحث أو أدخل رابطًا",
  },
  "panel.preview.openInSystemBrowser": {
    en: "Open in system browser",
    ar: "الفتح في متصفح النظام",
  },
  "panel.preview.annotate": {
    en: "Annotate preview",
    ar: "إضافة تعليق توضيحي على المعاينة",
  },
  "panel.preview.annotateHint": {
    en: "Annotate elements, regions, and drawings",
    ar: "علّق على العناصر والمناطق والرسوم",
  },
  "panel.preview.annotateCancel": {
    en: "Cancel annotation",
    ar: "إلغاء التعليق التوضيحي",
  },
  "panel.preview.annotateCancelHint": {
    en: "Cancel annotation (Esc)",
    ar: "إلغاء التعليق التوضيحي (Esc)",
  },
  "panel.preview.captureScreenshot": {
    en: "Capture screenshot",
    ar: "التقاط لقطة شاشة",
  },
  "panel.preview.captureHint": {
    en: "Screenshot · Shift-click to record",
    ar: "لقطة شاشة · Shift+نقر للتسجيل",
  },
  "panel.preview.stopRecording": {
    en: "Stop recording",
    ar: "إيقاف التسجيل",
  },
  "panel.preview.floatOverChat": {
    en: "Float preview over chat",
    ar: "إظهار المعاينة عائمة فوق المحادثة",
  },
  "panel.preview.closeFloating": {
    en: "Close floating preview",
    ar: "إغلاق المعاينة العائمة",
  },
  "panel.preview.pickUnavailable": {
    en: "Page didn't load — pick unavailable until the page renders",
    ar: "لم تُحمَّل الصفحة — التحديد غير متاح حتى تُعرض الصفحة",
  },
  "panel.preview.controller.agent": {
    en: "Agent controlling browser",
    ar: "الوكيل يتحكم في المتصفح",
  },
  "panel.preview.controller.human": {
    en: "Human control",
    ar: "تحكّم بشري",
  },
  "panel.preview.unsupported": {
    en: "Preview is only available in the T3 Code desktop app.",
    ar: "المعاينة متاحة فقط في تطبيق T3 Code لسطح المكتب.",
  },

  // Preview more menu
  "panel.preview.menuAria": {
    en: "Preview menu",
    ar: "قائمة المعاينة",
  },
  "panel.preview.menuTooltip": {
    en: "More",
    ar: "المزيد",
  },
  "panel.preview.hardReload": {
    en: "Hard reload",
    ar: "إعادة تحميل كاملة",
  },
  "panel.preview.openDevTools": {
    en: "Open DevTools",
    ar: "فتح DevTools",
  },
  "panel.preview.separateWindow.open": {
    en: "Open separate preview window",
    ar: "فتح نافذة معاينة منفصلة",
  },
  "panel.preview.separateWindow.close": {
    en: "Close separate preview window",
    ar: "إغلاق نافذة المعاينة المنفصلة",
  },
  "panel.preview.deviceToolbar.show": {
    en: "Show device toolbar",
    ar: "إظهار شريط الأجهزة",
  },
  "panel.preview.deviceToolbar.hide": {
    en: "Hide device toolbar",
    ar: "إخفاء شريط الأجهزة",
  },
  "panel.preview.appearance": {
    en: "Appearance",
    ar: "المظهر",
  },
  "panel.preview.colorScheme.system": {
    en: "System",
    ar: "النظام",
  },
  "panel.preview.colorScheme.light": {
    en: "Light",
    ar: "فاتح",
  },
  "panel.preview.colorScheme.dark": {
    en: "Dark",
    ar: "داكن",
  },
  "panel.preview.zoom": {
    en: "Zoom",
    ar: "التكبير",
  },
  "panel.preview.zoomIn": {
    en: "Zoom in",
    ar: "تكبير",
  },
  "panel.preview.zoomOut": {
    en: "Zoom out",
    ar: "تصغير",
  },
  "panel.preview.zoomReset": {
    en: "Reset zoom",
    ar: "إعادة تعيين التكبير",
  },
  "panel.preview.clearCookies": {
    en: "Clear cookies",
    ar: "محو الكوكيز",
  },
  "panel.preview.clearCache": {
    en: "Clear cache",
    ar: "محو الذاكرة المؤقتة",
  },

  // Preview empty state
  "panel.preview.empty.title": {
    en: "No preview yet",
    ar: "لا توجد معاينة بعد",
  },
  "panel.preview.empty.description": {
    en: "Type a URL above, or run a dev script. Listening localhost ports will show up here automatically.",
    ar: "اكتب رابطًا في الأعلى، أو شغّل سكربت تطوير. ستظهر منافذ localhost المستمعة هنا تلقائيًا.",
  },
  "panel.preview.localServers": {
    en: "Local servers",
    ar: "الخوادم المحلية",
  },
  "panel.preview.localServers.hint": {
    en: "Select a listening port to open it in this browser tab.",
    ar: "اختر منفذًا مستمعًا لفتحه في تبويب المتصفح هذا.",
  },
  "panel.preview.server.listening": {
    en: "Listening",
    ar: "يستمع",
  },
  "panel.preview.server.configured": {
    en: "Configured",
    ar: "مُهيّأ",
  },
  "panel.preview.server.recentlySeen": {
    en: "Recently seen",
    ar: "ظهر مؤخرًا",
  },
  "panel.preview.server.notListening": {
    en: "Not currently listening",
    ar: "لا يستمع حاليًا",
  },

  // Preview unreachable page
  "panel.preview.unreachable.title": {
    en: "This site can’t be reached",
    ar: "لا يمكن الوصول إلى هذا الموقع",
  },
  "panel.preview.unreachable.try": {
    en: "Try:",
    ar: "جرّب:",
  },
  "panel.preview.unreachable.checkConnection": {
    en: "Checking your connection",
    ar: "التحقق من اتصالك",
  },
  "panel.preview.unreachable.checkDevServer": {
    en: "Confirming the dev server is running",
    ar: "التأكد من أن خادم التطوير يعمل",
  },
  "panel.preview.unreachable.checkProxy": {
    en: "Checking the proxy and the firewall",
    ar: "التحقق من الوكيل وجدار الحماية",
  },
  "panel.preview.unreachable.details": {
    en: "Details",
    ar: "التفاصيل",
  },
  "panel.preview.unreachable.hideDetails": {
    en: "Hide details",
    ar: "إخفاء التفاصيل",
  },
  "panel.preview.unreachable.reload": {
    en: "Reload",
    ar: "إعادة التحميل",
  },
  "panel.preview.netError.generic": {
    en: "Network error",
    ar: "خطأ في الشبكة",
  },
  "panel.preview.netError.dnsNotFound": {
    en: "DNS address could not be found",
    ar: "لم يتم العثور على عنوان DNS",
  },
  "panel.preview.netError.connectionRefused": {
    en: "Connection refused",
    ar: "تم رفض الاتصال",
  },
  "panel.preview.netError.connectionReset": {
    en: "Connection was reset",
    ar: "تمت إعادة تعيين الاتصال",
  },
  "panel.preview.netError.connectionClosed": {
    en: "Connection was closed",
    ar: "تم إغلاق الاتصال",
  },
  "panel.preview.netError.connectionTimedOut": {
    en: "Connection timed out",
    ar: "انتهت مهلة الاتصال",
  },
  "panel.preview.netError.internetDisconnected": {
    en: "No internet connection",
    ar: "لا يوجد اتصال بالإنترنت",
  },
  "panel.preview.netError.certAuthorityInvalid": {
    en: "Certificate authority is not trusted",
    ar: "جهة إصدار الشهادة غير موثوقة",
  },
  "panel.preview.netError.certNameInvalid": {
    en: "Certificate hostname mismatch",
    ar: "عدم تطابق اسم المستضيف في الشهادة",
  },
  "panel.preview.netError.certDateInvalid": {
    en: "Certificate is expired or not yet valid",
    ar: "الشهادة منتهية أو غير صالحة بعد",
  },
  "panel.preview.netError.tooManyRedirects": {
    en: "Too many redirects",
    ar: "عدد كبير جدًا من عمليات إعادة التوجيه",
  },

  // Preview toasts
  "panel.preview.toast.resizeFailed": {
    en: "Unable to resize browser viewport",
    ar: "تعذّر تغيير حجم نافذة عرض المتصفح",
  },
  "panel.preview.toast.pipFailed": {
    en: "Unable to update popped-out preview",
    ar: "تعذّر تحديث المعاينة المنبثقة",
  },
  "panel.preview.toast.clipboardUnavailable": {
    en: "Clipboard API unavailable.",
    ar: "واجهة الحافظة غير متاحة.",
  },
  "panel.preview.toast.copied": {
    en: "Copied!",
    ar: "تم النسخ!",
  },
  "panel.preview.toast.copyPath": {
    en: "Copy path",
    ar: "نسخ المسار",
  },
  "panel.preview.toast.copyImage": {
    en: "Copy image",
    ar: "نسخ الصورة",
  },
  "panel.preview.toast.recordingSaved": {
    en: "Recording saved",
    ar: "تم حفظ التسجيل",
  },
  "panel.preview.toast.copyRecordingPathFailed": {
    en: "Unable to copy recording path",
    ar: "تعذّر نسخ مسار التسجيل",
  },
  "panel.preview.toast.startRecordingFailed": {
    en: "Unable to start recording",
    ar: "تعذّر بدء التسجيل",
  },
  "panel.preview.toast.stopRecordingFailed": {
    en: "Unable to stop recording",
    ar: "تعذّر إيقاف التسجيل",
  },
  "panel.preview.toast.screenshotSaved": {
    en: "Screenshot saved",
    ar: "تم حفظ لقطة الشاشة",
  },
  "panel.preview.toast.copyScreenshotPathFailed": {
    en: "Unable to copy screenshot path",
    ar: "تعذّر نسخ مسار لقطة الشاشة",
  },
  "panel.preview.toast.copyScreenshotFailed": {
    en: "Unable to copy screenshot",
    ar: "تعذّر نسخ لقطة الشاشة",
  },
  "panel.preview.toast.captureScreenshotFailed": {
    en: "Unable to capture screenshot",
    ar: "تعذّر التقاط لقطة الشاشة",
  },

  // Floating mini player
  "panel.miniPlayer.aria": {
    en: "Floating browser preview",
    ar: "معاينة المتصفح العائمة",
  },
  "panel.miniPlayer.openInPanelAria": {
    en: "Open preview in right panel",
    ar: "فتح المعاينة في اللوحة الجانبية",
  },
  "panel.miniPlayer.openInPanelTitle": {
    en: "Open in right panel",
    ar: "فتح في اللوحة الجانبية",
  },
  "panel.miniPlayer.popOutAria": {
    en: "Pop preview into separate window",
    ar: "نقل المعاينة إلى نافذة منفصلة",
  },
  "panel.miniPlayer.popOutTitle": {
    en: "Pop into separate window",
    ar: "نقل إلى نافذة منفصلة",
  },
  "panel.miniPlayer.popInAria": {
    en: "Close popped-out preview",
    ar: "إغلاق المعاينة المنبثقة",
  },
  "panel.miniPlayer.popInTitle": {
    en: "Close separate window",
    ar: "إغلاق النافذة المنفصلة",
  },
  "panel.miniPlayer.reconnecting": {
    en: "Reconnecting preview…",
    ar: "جارٍ إعادة الاتصال بالمعاينة…",
  },
  "panel.miniPlayer.resize": {
    en: "Resize floating preview",
    ar: "تغيير حجم المعاينة العائمة",
  },
} as const satisfies StringModule;
