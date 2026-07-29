import type { StringModule } from "./types";

export const sidebar = {
  // Shared failure copy: the same sentence closes a dozen sidebar toasts.
  "sidebar.error.generic": {
    en: "An error occurred.",
    ar: "حدث خطأ.",
  },
  "sidebar.error.unexpected": {
    en: "An unexpected error occurred.",
    ar: "حدث خطأ غير متوقع.",
  },

  // Header
  "sidebar.search": {
    en: "Search",
    ar: "بحث",
  },
  "sidebar.searchAriaLabel": {
    en: "Search threads and commands",
    ar: "البحث في المحادثات والأوامر",
  },
  "sidebar.projects": {
    en: "Projects",
    ar: "المشاريع",
  },
  "sidebar.addProject": {
    en: "Add project",
    ar: "إضافة مشروع",
  },
  "sidebar.newProject": {
    en: "New project",
    ar: "مشروع جديد",
  },
  "sidebar.newThread": {
    en: "New thread",
    ar: "محادثة جديدة",
  },
  "sidebar.newThread.withShortcut": {
    en: "New thread ({shortcut})",
    ar: "محادثة جديدة ({shortcut})",
  },
  "sidebar.newThread.inProject": {
    en: "Create new thread in {project}",
    ar: "إنشاء محادثة جديدة في {project}",
  },
  "sidebar.newThread.onBranch": {
    en: "New thread on {branch}",
    ar: "محادثة جديدة على {branch}",
  },
  "sidebar.allProjects": {
    en: "All projects",
    ar: "جميع المشاريع",
  },
  "sidebar.filterByProject": {
    en: "Filter threads by project",
    ar: "تصفية المحادثات حسب المشروع",
  },
  "sidebar.projectActions": {
    en: "Project actions for {project}",
    ar: "إجراءات المشروع {project}",
  },
  "sidebar.goToThreads": {
    en: "Go to threads",
    ar: "الانتقال إلى المحادثات",
  },
  "sidebar.settings": {
    en: "Settings",
    ar: "الإعدادات",
  },
  "sidebar.toggle": {
    en: "Toggle main sidebar",
    ar: "تبديل الشريط الجانبي الرئيسي",
  },
  "sidebar.toggle.withShortcut": {
    en: "Toggle main sidebar ({shortcut})",
    ar: "تبديل الشريط الجانبي الرئيسي ({shortcut})",
  },

  // Lists and empty states
  "sidebar.noThreads": {
    en: "No threads yet",
    ar: "لا محادثات بعد",
  },
  "sidebar.noThreadsInProject": {
    en: "No threads in {project} yet",
    ar: "لا محادثات في {project} بعد",
  },
  "sidebar.noProjects": {
    en: "No projects yet",
    ar: "لا مشاريع بعد",
  },
  "sidebar.showMore": {
    en: "Show more",
    ar: "عرض المزيد",
  },
  "sidebar.showLess": {
    en: "Show less",
    ar: "عرض أقل",
  },
  "sidebar.showMoreCount": {
    en: "Show {count} more",
    ar: "عرض {count} إضافية",
  },
  "sidebar.groupedProjectCount": {
    en: "{count} projects",
    ar: "{count} مشاريع",
  },

  // Sort / options menu
  "sidebar.options": {
    en: "Sidebar options",
    ar: "خيارات الشريط الجانبي",
  },
  "sidebar.sortProjects": {
    en: "Sort projects",
    ar: "ترتيب المشاريع",
  },
  "sidebar.sortThreads": {
    en: "Sort threads",
    ar: "ترتيب المحادثات",
  },
  "sidebar.sort.lastUserMessage": {
    en: "Last user message",
    ar: "آخر رسالة للمستخدم",
  },
  "sidebar.sort.createdAt": {
    en: "Created at",
    ar: "تاريخ الإنشاء",
  },
  "sidebar.sort.manual": {
    en: "Manual",
    ar: "يدوي",
  },
  "sidebar.visibleThreads": {
    en: "Visible threads",
    ar: "المحادثات الظاهرة",
  },
  "sidebar.visibleThreadCount": {
    en: "Visible thread count",
    ar: "عدد المحادثات الظاهرة",
  },
  "sidebar.visibleThreadCount.decrease": {
    en: "Decrease visible thread count",
    ar: "تقليل عدد المحادثات الظاهرة",
  },
  "sidebar.visibleThreadCount.increase": {
    en: "Increase visible thread count",
    ar: "زيادة عدد المحادثات الظاهرة",
  },

  // Project grouping
  "sidebar.grouping.repository": {
    en: "Group by repository",
    ar: "تجميع حسب المستودع",
  },
  "sidebar.grouping.repositoryPath": {
    en: "Group by repository path",
    ar: "تجميع حسب مسار المستودع",
  },
  "sidebar.grouping.separate": {
    en: "Keep separate",
    ar: "إبقاؤها منفصلة",
  },
  "sidebar.grouping.repository.description": {
    en: "Projects from the same repository share one sidebar row.",
    ar: "المشاريع من المستودع نفسه تتشارك صفًا واحدًا في الشريط الجانبي.",
  },
  "sidebar.grouping.repositoryPath.description": {
    en: "Projects group only when both the repository and repo-relative path match.",
    ar: "لا تُجمَّع المشاريع إلا عند تطابق المستودع والمسار داخله معًا.",
  },
  "sidebar.grouping.separate.description": {
    en: "Every project path gets its own sidebar row.",
    ar: "لكل مسار مشروع صفّه الخاص في الشريط الجانبي.",
  },
  "sidebar.grouping.title": {
    en: "Project grouping",
    ar: "تجميع المشاريع",
  },
  "sidebar.grouping.describeTarget": {
    en: "Choose how {path} should be grouped in the sidebar.",
    ar: "اختر طريقة تجميع {path} في الشريط الجانبي.",
  },
  "sidebar.grouping.describeGeneric": {
    en: "Choose how this project should be grouped in the sidebar.",
    ar: "اختر طريقة تجميع هذا المشروع في الشريط الجانبي.",
  },
  "sidebar.grouping.rule": {
    en: "Grouping rule",
    ar: "قاعدة التجميع",
  },
  "sidebar.grouping.ruleAriaLabel": {
    en: "Project grouping rule",
    ar: "قاعدة تجميع المشروع",
  },
  "sidebar.grouping.ruleForEnvironment": {
    en: "Grouping rule for {environment}",
    ar: "قاعدة التجميع في {environment}",
  },
  "sidebar.grouping.useGlobalDefault": {
    en: "Use global default",
    ar: "استخدام الافتراضي العام",
  },
  "sidebar.grouping.useGlobalDefaultWith": {
    en: "Use global default ({mode})",
    ar: "استخدام الافتراضي العام ({mode})",
  },
  "sidebar.grouping.defaultWith": {
    en: "Default ({mode})",
    ar: "الافتراضي ({mode})",
  },

  // Thread rows
  "sidebar.thread.titleAriaLabel": {
    en: "Thread title",
    ar: "عنوان المحادثة",
  },
  "sidebar.archive": {
    en: "Archive",
    ar: "أرشفة",
  },
  "sidebar.archiveThread": {
    en: "Archive {title}",
    ar: "أرشفة {title}",
  },
  "sidebar.confirmArchiveThread": {
    en: "Confirm archive {title}",
    ar: "تأكيد أرشفة {title}",
  },
  "sidebar.confirm": {
    en: "Confirm",
    ar: "تأكيد",
  },
  "sidebar.openLocalhost": {
    en: "Open localhost:{port}",
    ar: "فتح localhost:{port}",
  },
  "sidebar.environment.local": {
    en: "Local",
    ar: "محلي",
  },
  "sidebar.environment.remote": {
    en: "Remote",
    ar: "بعيد",
  },
  "sidebar.project.localSandbox": {
    en: "Local sandbox project",
    ar: "مشروع في بيئة محلية معزولة",
  },
  "sidebar.project.remote": {
    en: "Remote project",
    ar: "مشروع بعيد",
  },
  "sidebar.project.localSandboxLabels": {
    en: "Local sandbox: {labels}",
    ar: "بيئة محلية معزولة: {labels}",
  },
  "sidebar.project.remoteLabels": {
    en: "Remote environment: {labels}",
    ar: "بيئة بعيدة: {labels}",
  },

  // Thread status (sidebar v2 rows)
  "sidebar.status.working": {
    en: "Working",
    ar: "قيد العمل",
  },
  "sidebar.status.approval": {
    en: "Approval",
    ar: "موافقة",
  },
  "sidebar.status.input": {
    en: "Input",
    ar: "إدخال",
  },
  "sidebar.status.failed": {
    en: "Failed",
    ar: "فشلت",
  },
  "sidebar.status.woke": {
    en: "Woke",
    ar: "استيقظت",
  },
  "sidebar.status.done": {
    en: "Done",
    ar: "تمّت",
  },
  "sidebar.wokeFromSnooze": {
    en: "Woke from snooze",
    ar: "استيقظت من التأجيل",
  },

  // Settle / snooze lifecycle
  "sidebar.settle": {
    en: "Settle",
    ar: "إنهاء",
  },
  "sidebar.settleThread": {
    en: "Settle thread",
    ar: "إنهاء المحادثة",
  },
  "sidebar.unsettleThread": {
    en: "Un-settle thread",
    ar: "إلغاء إنهاء المحادثة",
  },
  "sidebar.snooze": {
    en: "Snooze",
    ar: "تأجيل",
  },
  "sidebar.snoozeThread": {
    en: "Snooze thread",
    ar: "تأجيل المحادثة",
  },
  "sidebar.wakeThread": {
    en: "Wake thread",
    ar: "إيقاظ المحادثة",
  },
  "sidebar.wakeThreadNow": {
    en: "Wake thread now",
    ar: "إيقاظ المحادثة الآن",
  },
  "sidebar.snoozedUntil": {
    en: "Snoozed until {when}",
    ar: "مؤجّلة حتى {when}",
  },
  "sidebar.undo": {
    en: "Undo",
    ar: "تراجع",
  },
  "sidebar.shelf.snoozed": {
    en: "Snoozed",
    ar: "المؤجّلة",
  },
  "sidebar.shelf.snoozedCount": {
    en: "Snoozed ({count})",
    ar: "المؤجّلة ({count})",
  },
  "sidebar.shelf.settled": {
    en: "Settled",
    ar: "المنتهية",
  },
  "sidebar.shelf.settledCount": {
    en: "Settled ({count})",
    ar: "المنتهية ({count})",
  },

  // Row tooltip
  "sidebar.tooltip.branchMismatch": {
    en: "You're currently checked out on another branch.",
    ar: "أنت الآن على فرع آخر.",
  },
  "sidebar.tooltip.error": {
    en: "Error occurred",
    ar: "حدث خطأ",
  },

  // Context menus
  "sidebar.menu.rename": {
    en: "Rename",
    ar: "إعادة تسمية",
  },
  "sidebar.menu.renameThread": {
    en: "Rename thread",
    ar: "إعادة تسمية المحادثة",
  },
  "sidebar.menu.groupInto": {
    en: "Group into...",
    ar: "تجميع في…",
  },
  "sidebar.menu.copyPath": {
    en: "Copy Path",
    ar: "نسخ المسار",
  },
  "sidebar.menu.copyThreadId": {
    en: "Copy Thread ID",
    ar: "نسخ معرّف المحادثة",
  },
  "sidebar.menu.remove": {
    en: "Remove",
    ar: "إزالة",
  },
  "sidebar.menu.delete": {
    en: "Delete",
    ar: "حذف",
  },
  "sidebar.menu.markUnread": {
    en: "Mark unread",
    ar: "تعليم كغير مقروءة",
  },
  "sidebar.menu.settleCount": {
    en: "Settle ({count})",
    ar: "إنهاء ({count})",
  },
  "sidebar.menu.snoozeCount": {
    en: "Snooze ({count})",
    ar: "تأجيل ({count})",
  },
  "sidebar.menu.markUnreadCount": {
    en: "Mark unread ({count})",
    ar: "تعليم كغير مقروءة ({count})",
  },
  "sidebar.menu.deleteCount": {
    en: "Delete ({count})",
    ar: "حذف ({count})",
  },

  // Confirmation dialogs
  "sidebar.confirm.archiveThreads.one": {
    en: "Archive {count} thread?",
    ar: "أرشفة {count} محادثة؟",
  },
  "sidebar.confirm.archiveThreads.other": {
    en: "Archive {count} threads?",
    ar: "أرشفة {count} محادثات؟",
  },
  "sidebar.confirm.deleteThreads.one": {
    en: "Delete {count} thread?",
    ar: "حذف {count} محادثة؟",
  },
  "sidebar.confirm.deleteThreads.other": {
    en: "Delete {count} threads?",
    ar: "حذف {count} محادثات؟",
  },
  "sidebar.confirm.deleteThread": {
    en: 'Delete thread "{title}"?',
    ar: "حذف المحادثة «{title}»؟",
  },
  "sidebar.confirm.clearHistory.this": {
    en: "This permanently clears conversation history for this thread.",
    ar: "يؤدي هذا إلى مسح سجل هذه المحادثة نهائيًا.",
  },
  "sidebar.confirm.clearHistory.these": {
    en: "This permanently clears conversation history for these threads.",
    ar: "يؤدي هذا إلى مسح سجل هذه المحادثات نهائيًا.",
  },
  "sidebar.confirm.clearHistory.those": {
    en: "This permanently clears conversation history for those threads.",
    ar: "يؤدي هذا إلى مسح سجل تلك المحادثات نهائيًا.",
  },
  "sidebar.confirm.removeProject": {
    en: 'Remove project "{title}"?',
    ar: "إزالة المشروع «{title}»؟",
  },
  "sidebar.confirm.removeProjectWithThreads.one": {
    en: 'Remove project "{title}" and delete its {count} thread?',
    ar: "إزالة المشروع «{title}» وحذف {count} محادثة فيه؟",
  },
  "sidebar.confirm.removeProjectWithThreads.other": {
    en: 'Remove project "{title}" and delete its {count} threads?',
    ar: "إزالة المشروع «{title}» وحذف {count} محادثات فيه؟",
  },
  "sidebar.confirm.path": {
    en: "Path: {path}",
    ar: "المسار: {path}",
  },
  "sidebar.confirm.environment": {
    en: "Environment: {environment}",
    ar: "البيئة: {environment}",
  },
  "sidebar.confirm.onlyProjectEntry": {
    en: "This removes only this project entry.",
    ar: "يؤدي هذا إلى إزالة مدخل المشروع هذا فقط.",
  },
  "sidebar.confirm.onlyProjectEntries": {
    en: "This removes only the project entries, not the files on disk.",
    ar: "يؤدي هذا إلى إزالة مدخلات المشروع فقط، دون الملفات على القرص.",
  },
  "sidebar.confirm.groupedEntriesUnaffected": {
    en: "Other entries in this grouped project are unaffected.",
    ar: "لا تتأثر المدخلات الأخرى في هذا المشروع المجمّع.",
  },
  "sidebar.confirm.groupedEntryCount": {
    en: "This removes {count} grouped project entries.",
    ar: "يؤدي هذا إلى إزالة {count} مدخلات مشروع مجمّعة.",
  },
  "sidebar.confirm.cannotUndo": {
    en: "This action cannot be undone.",
    ar: "لا يمكن التراجع عن هذا الإجراء.",
  },

  // Toasts
  "sidebar.toast.threadIdCopied": {
    en: "Thread ID copied",
    ar: "تم نسخ معرّف المحادثة",
  },
  "sidebar.toast.threadIdCopyFailed": {
    en: "Failed to copy thread ID",
    ar: "تعذّر نسخ معرّف المحادثة",
  },
  "sidebar.toast.pathCopied": {
    en: "Path copied",
    ar: "تم نسخ المسار",
  },
  "sidebar.toast.pathCopyFailed": {
    en: "Failed to copy path",
    ar: "تعذّر نسخ المسار",
  },
  "sidebar.toast.projectNotEmpty": {
    en: "Project is not empty",
    ar: "المشروع غير فارغ",
  },
  "sidebar.toast.projectNotEmptyDescription": {
    en: "Delete all threads in this project before removing it.",
    ar: "احذف جميع المحادثات في هذا المشروع قبل إزالته.",
  },
  "sidebar.toast.deleteAnyway": {
    en: "Delete anyway",
    ar: "الحذف على أي حال",
  },
  "sidebar.toast.removeProjectFailed": {
    en: 'Failed to remove "{title}"',
    ar: "تعذّرت إزالة «{title}»",
  },
  "sidebar.toast.removeProjectUnknownError": {
    en: "Unknown error removing project.",
    ar: "خطأ غير معروف أثناء إزالة المشروع.",
  },
  "sidebar.toast.threadArchivedNavigationFailed": {
    en: "Thread archived, but navigation failed",
    ar: "تمت أرشفة المحادثة، لكن التنقّل فشل",
  },
  "sidebar.toast.archiveThreadsFailed": {
    en: "Failed to archive threads",
    ar: "تعذّرت أرشفة المحادثات",
  },
  "sidebar.toast.archiveThreadFailed": {
    en: "Failed to archive thread",
    ar: "تعذّرت أرشفة المحادثة",
  },
  "sidebar.toast.deleteThreadsFailed": {
    en: "Failed to delete threads",
    ar: "تعذّر حذف المحادثات",
  },
  "sidebar.toast.deleteThreadFailed": {
    en: "Failed to delete thread",
    ar: "تعذّر حذف المحادثة",
  },
  "sidebar.toast.createThreadFailed": {
    en: "Could not create thread",
    ar: "تعذّر إنشاء المحادثة",
  },
  "sidebar.toast.chooseEnvironmentFailed": {
    en: "Could not choose environment",
    ar: "تعذّر اختيار البيئة",
  },
  "sidebar.toast.threadTitleEmpty": {
    en: "Thread title cannot be empty",
    ar: "لا يمكن أن يكون عنوان المحادثة فارغًا",
  },
  "sidebar.toast.renameThreadFailed": {
    en: "Failed to rename thread",
    ar: "تعذّرت إعادة تسمية المحادثة",
  },
  "sidebar.toast.projectTitleEmpty": {
    en: "Project title cannot be empty",
    ar: "لا يمكن أن يكون عنوان المشروع فارغًا",
  },
  "sidebar.toast.renameProjectFailed": {
    en: "Failed to rename project",
    ar: "تعذّرت إعادة تسمية المشروع",
  },
  "sidebar.toast.pathUnavailable": {
    en: "Path unavailable",
    ar: "المسار غير متاح",
  },
  "sidebar.toast.pathUnavailableDescription": {
    en: "This thread does not have a workspace path to copy.",
    ar: "لا يوجد لهذه المحادثة مسار مساحة عمل لنسخه.",
  },
  "sidebar.toast.previewOpenFailed": {
    en: "Unable to open preview",
    ar: "تعذّر فتح المعاينة",
  },
  "sidebar.toast.previewOpenFailedDescription": {
    en: "The preview could not be opened.",
    ar: "لم يتم فتح المعاينة.",
  },
  "sidebar.toast.threadActionFailed": {
    en: "Thread action failed",
    ar: "فشل تنفيذ إجراء المحادثة",
  },
  "sidebar.toast.settleThreadFailed": {
    en: "Failed to settle thread",
    ar: "تعذّر إنهاء المحادثة",
  },
  "sidebar.toast.unsettleThreadFailed": {
    en: "Failed to un-settle thread",
    ar: "تعذّر إلغاء إنهاء المحادثة",
  },
  "sidebar.toast.wakeThreadFailed": {
    en: "Failed to wake thread",
    ar: "تعذّر إيقاظ المحادثة",
  },
  "sidebar.toast.snoozeThreadFailed": {
    en: "Failed to snooze thread",
    ar: "تعذّر تأجيل المحادثة",
  },
  "sidebar.toast.updateDownloaded": {
    en: "Update downloaded",
    ar: "تم تنزيل التحديث",
  },
  "sidebar.toast.updateDownloadedDescription": {
    en: "Restart the app from the update button to install it.",
    ar: "أعد تشغيل التطبيق من زر التحديث لتثبيته.",
  },
  "sidebar.toast.updateDownloadFailed": {
    en: "Could not download update",
    ar: "تعذّر تنزيل التحديث",
  },
  "sidebar.toast.updateDownloadStartFailed": {
    en: "Could not start update download",
    ar: "تعذّر بدء تنزيل التحديث",
  },
  "sidebar.toast.updateInstallFailed": {
    en: "Could not install update",
    ar: "تعذّر تثبيت التحديث",
  },

  // Update pills
  "sidebar.update.available": {
    en: "Update available",
    ar: "يتوفّر تحديث",
  },
  "sidebar.update.restart": {
    en: "Restart to update",
    ar: "أعد التشغيل للتحديث",
  },
  "sidebar.update.downloading": {
    en: "Downloading",
    ar: "جارٍ التنزيل",
  },
  "sidebar.update.dismiss": {
    en: "Dismiss update",
    ar: "تجاهل التحديث",
  },
  "sidebar.update.dismissUntilLaunch": {
    en: "Dismiss until next launch",
    ar: "التجاهل حتى التشغيل التالي",
  },
  "sidebar.update.whatsChanged": {
    en: "What's changed",
    ar: "ما الجديد",
  },
  "sidebar.update.changesIn": {
    en: "Changes in {version}",
    ar: "تغييرات {version}",
  },
  "sidebar.update.intelBuildTitle": {
    en: "Intel build on Apple Silicon",
    ar: "نسخة Intel على Apple Silicon",
  },
  "sidebar.update.downloadArm": {
    en: "Download ARM build",
    ar: "تنزيل نسخة ARM",
  },
  "sidebar.update.installArm": {
    en: "Install ARM build",
    ar: "تثبيت نسخة ARM",
  },
  "sidebar.providerUpdate.dismiss": {
    en: "Dismiss provider update notice",
    ar: "تجاهل إشعار تحديث المزوّد",
  },
  "sidebar.providerUpdate.dismissUntilChange": {
    en: "Dismiss until provider status changes",
    ar: "التجاهل حتى تتغيّر حالة المزوّد",
  },

  // Desktop-local secondary backends
  "sidebar.local.connecting": {
    en: "Connecting {labels}",
    ar: "جارٍ الاتصال بـ {labels}",
  },
  "sidebar.local.connectFailed": {
    en: "Couldn't connect {labels}",
    ar: "تعذّر الاتصال بـ {labels}",
  },
  "sidebar.local.noResponse": {
    en: "The backend didn't respond.",
    ar: "لم تستجب الخدمة الخلفية.",
  },

  // Rename-project dialog
  "sidebar.renameProject.title": {
    en: "Rename project",
    ar: "إعادة تسمية المشروع",
  },
  "sidebar.renameProject.describeTarget": {
    en: "Update the title for {path}.",
    ar: "تحديث عنوان {path}.",
  },
  "sidebar.renameProject.describeGeneric": {
    en: "Update the project title.",
    ar: "تحديث عنوان المشروع.",
  },
  "sidebar.projectTitle": {
    en: "Project title",
    ar: "عنوان المشروع",
  },

  // Project settings dialog (sidebar v2)
  "sidebar.projectSettings.title": {
    en: "Project settings",
    ar: "إعدادات المشروع",
  },
  "sidebar.projectSettings.description": {
    en: "Manage project names, grouping rules, and environments.",
    ar: "إدارة أسماء المشاريع وقواعد التجميع والبيئات.",
  },
  "sidebar.projectSettings.copyPath": {
    en: "Copy project path",
    ar: "نسخ مسار المشروع",
  },
  "sidebar.projectSettings.currentEnvironment": {
    en: "Current environment",
    ar: "البيئة الحالية",
  },
  "sidebar.projectSettings.currentEnvironmentInline": {
    en: "current environment",
    ar: "البيئة الحالية",
  },
  "sidebar.projectSettings.projectName": {
    en: "Project name",
    ar: "اسم المشروع",
  },
  "sidebar.projectSettings.projectNameIn": {
    en: "Project name in {environment}",
    ar: "اسم المشروع في {environment}",
  },
  "sidebar.projectSettings.removeProject": {
    en: "Remove project",
    ar: "إزالة المشروع",
  },
  "sidebar.projectSettings.removeEverywhere": {
    en: "Remove this project everywhere",
    ar: "إزالة هذا المشروع من كل مكان",
  },
  "sidebar.projectSettings.removeEverywhereDescription": {
    en: "Deletes all grouped entries and their conversation history.",
    ar: "يحذف جميع المدخلات المجمّعة وسجل محادثاتها.",
  },
  "sidebar.projectSettings.removeAllEntries": {
    en: "Remove all entries",
    ar: "إزالة جميع المدخلات",
  },
} as const satisfies StringModule;
