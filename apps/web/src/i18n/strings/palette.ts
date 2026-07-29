import type { StringModule } from "./types";

/**
 * The command palette, the modal dialogs layered over the workspace (pairing,
 * onboarding, installers, SSH prompts), the toasts they raise, and the
 * no-thread empty state.
 */
export const palette = {
  // ── Shared words ────────────────────────────────────────────────────────────
  "palette.add": {
    en: "Add",
    ar: "إضافة",
  },
  "palette.back": {
    en: "Back",
    ar: "رجوع",
  },
  "palette.cancel": {
    en: "Cancel",
    ar: "إلغاء",
  },
  "palette.close": {
    en: "Close",
    ar: "إغلاق",
  },
  "palette.continue": {
    en: "Continue",
    ar: "متابعة",
  },
  "palette.copied": {
    en: "Copied!",
    ar: "تم النسخ!",
  },
  "palette.dismiss": {
    en: "Dismiss",
    ar: "تجاهل",
  },
  "palette.done": {
    en: "Done",
    ar: "تم",
  },
  "palette.error.generic": {
    en: "An error occurred.",
    ar: "حدث خطأ.",
  },
  "palette.error.unexpected": {
    en: "An unexpected error occurred.",
    ar: "حدث خطأ غير متوقّع.",
  },
  "palette.navigate": {
    en: "Navigate",
    ar: "التنقّل",
  },
  "palette.select": {
    en: "Select",
    ar: "اختيار",
  },
  "palette.settingsButton": {
    en: "Settings",
    ar: "الإعدادات",
  },
  "palette.tryAgain": {
    en: "Try again",
    ar: "إعادة المحاولة",
  },
  "palette.update": {
    en: "Update",
    ar: "تحديث",
  },

  // ── Command palette shell ───────────────────────────────────────────────────
  "palette.label": {
    en: "Command palette",
    ar: "لوحة الأوامر",
  },
  "palette.placeholder.root": {
    en: "Search commands, projects, and threads...",
    ar: "ابحث في الأوامر والمشاريع والمحادثات…",
  },
  "palette.placeholder.rootBrowse": {
    en: "Enter project path (e.g. ~/projects/my-app)",
    ar: "أدخل مسار المشروع (مثال: ~/projects/my-app)",
  },
  "palette.placeholder.submenu": {
    en: "Search...",
    ar: "ابحث…",
  },
  "palette.placeholder.submenuBrowse": {
    en: "Enter path (e.g. ~/projects/my-app)",
    ar: "أدخل المسار (مثال: ~/projects/my-app)",
  },
  "palette.group.actions": {
    en: "Actions",
    ar: "الإجراءات",
  },
  "palette.group.recentThreads": {
    en: "Recent Threads",
    ar: "المحادثات الأخيرة",
  },
  "palette.group.projects": {
    en: "Projects",
    ar: "المشاريع",
  },
  "palette.group.threads": {
    en: "Threads",
    ar: "المحادثات",
  },
  "palette.group.directories": {
    en: "Directories",
    ar: "المجلدات",
  },
  "palette.group.environments": {
    en: "Environments",
    ar: "البيئات",
  },
  "palette.group.sources": {
    en: "Sources",
    ar: "المصادر",
  },
  "palette.group.cloneDestination": {
    en: "Select where to clone",
    ar: "اختر مكان Clone",
  },
  "palette.empty.actions": {
    en: "No matching actions.",
    ar: "لا توجد إجراءات مطابقة.",
  },
  "palette.empty.everything": {
    en: "No matching commands, projects, or threads.",
    ar: "لا توجد أوامر أو مشاريع أو محادثات مطابقة.",
  },
  "palette.openInFileManager": {
    en: "Open in {app}",
    ar: "فتح في {app}",
  },

  // ── Root actions ────────────────────────────────────────────────────────────
  "palette.action.newThreadIn": {
    en: "New thread in",
    ar: "محادثة جديدة في",
  },
  "palette.action.newThreadIn.search": {
    en: "new thread, chat, create, draft",
    ar: "محادثة جديدة، محادثة، إنشاء، مسودة",
  },
  "palette.action.newThreadInPicker": {
    en: "New thread in...",
    ar: "محادثة جديدة في…",
  },
  "palette.action.newThreadInPicker.search": {
    en: "new thread, project, pick, choose, select",
    ar: "محادثة جديدة، مشروع، اختيار، تحديد",
  },
  "palette.action.addProject": {
    en: "Add project",
    ar: "إضافة مشروع",
  },
  "palette.action.addProject.search": {
    en: "add project, folder, directory, browse, clone, remote, repository, repo, git",
    ar: "إضافة مشروع، مجلد، تصفّح، استنساخ، بعيد، مستودع",
  },
  "palette.action.openWslFolder": {
    en: "Open WSL folder",
    ar: "فتح مجلد WSL",
  },
  "palette.action.openWslFolder.search": {
    en: "add project, open, wsl, linux, folder, directory",
    ar: "إضافة مشروع، فتح، مجلد",
  },
  "palette.action.openSettings": {
    en: "Open settings",
    ar: "فتح الإعدادات",
  },
  "palette.action.openSettings.search": {
    en: "settings, preferences, configuration, keybindings",
    ar: "الإعدادات، التفضيلات، التهيئة، اختصارات المفاتيح",
  },

  // ── Add project: environment and source pickers ──────────────────────────────
  "palette.addProject.thisDevice": {
    en: "This device",
    ar: "هذا الجهاز",
  },
  "palette.addProject.localFolder": {
    en: "Local folder",
    ar: "مجلد محلي",
  },
  "palette.addProject.localFolder.description": {
    en: "Browse a folder on disk",
    ar: "تصفّح مجلدًا على القرص",
  },
  "palette.addProject.localFolder.search": {
    en: "local, folder, directory, browse",
    ar: "محلي، مجلد، تصفّح",
  },
  "palette.addProject.source.search": {
    en: "clone, remote, repository, repo, git",
    ar: "استنساخ، بعيد، مستودع",
  },
  "palette.addProject.repositoryTitle": {
    en: "{label} repository",
    ar: "مستودع {label}",
  },
  "palette.addProject.cloneUrl.description": {
    en: "Clone from a remote URL",
    ar: "Clone من رابط بعيد",
  },
  "palette.addProject.cloneRepository.description": {
    en: "Clone {label} {hint}",
    ar: "Clone من {label} ({hint})",
  },
  "palette.addProject.setupRequired": {
    en: "Setup Required",
    ar: "يلزم الإعداد",
  },
  "palette.addProject.setupRequired.search": {
    en: "setup required",
    ar: "يلزم الإعداد",
  },
  "palette.addProject.configureProviderHint": {
    en: "Open Settings -> Source Control to configure this provider.",
    ar: "افتح الإعدادات ثم إدارة الإصدارات لتهيئة هذا المزوّد.",
  },
  "palette.addProject.providerStatusUnavailable": {
    en: "Provider status unavailable. Open Settings -> Source Control and rescan.",
    ar: "حالة المزوّد غير متاحة. افتح الإعدادات ثم إدارة الإصدارات وأعد الفحص.",
  },
  "palette.addProject.providerUnauthenticated": {
    en: "{provider} is not authenticated. Open Settings -> Source Control for setup guidance.",
    ar: "{provider} غير موثّق. افتح الإعدادات ثم إدارة الإصدارات للحصول على إرشادات الإعداد.",
  },

  // ── Add project: clone flow ─────────────────────────────────────────────────
  "palette.addProject.urlPlaceholder": {
    en: "Enter Git clone URL",
    ar: "أدخل رابط Git clone",
  },
  "palette.addProject.repositoryPlaceholder": {
    en: "Enter {label} repository ({hint})",
    ar: "أدخل مستودع {label} ({hint})",
  },
  "palette.addProject.repositoryHeading": {
    en: "Repository",
    ar: "المستودع",
  },
  "palette.addProject.lookup": {
    en: "Lookup",
    ar: "بحث",
  },
  "palette.addProject.working": {
    en: "Working",
    ar: "جارٍ العمل",
  },
  "palette.addProject.cloning": {
    en: "Cloning",
    ar: "جارٍ Clone",
  },
  "palette.addProject.createAndClone": {
    en: "Create & Clone",
    ar: "إنشاء و Clone",
  },
  "palette.addProject.createAndAdd": {
    en: "Create & Add",
    ar: "إنشاء وإضافة",
  },
  "palette.addProject.hint.url": {
    en: "Enter a Git clone URL and press Enter to continue.",
    ar: "أدخل رابط Git clone ثم اضغط Enter للمتابعة.",
  },
  "palette.addProject.hint.repository": {
    en: "Enter a repository path and press Enter to look it up.",
    ar: "أدخل مسار المستودع ثم اضغط Enter للبحث عنه.",
  },
  "palette.addProject.hint.destination": {
    en: "Choose a destination path and press Enter to clone.",
    ar: "اختر مسار الوجهة ثم اضغط Enter لتنفيذ Clone.",
  },
  "palette.addProject.hint.createFolder": {
    en: "Press Enter to create this folder and add it as a project.",
    ar: "اضغط Enter لإنشاء هذا المجلد وإضافته كمشروع.",
  },

  // ── Add project: failures ───────────────────────────────────────────────────
  "palette.addProject.relativePathNeedsProject": {
    en: "Relative paths require an active project.",
    ar: "المسارات النسبية تتطلّب مشروعًا نشطًا.",
  },
  "palette.addProject.windowsPathsOnly": {
    en: "Windows-style paths are only supported on Windows.",
    ar: "المسارات بنمط Windows مدعومة على Windows فقط.",
  },
  "palette.addProject.noEnvironment.title": {
    en: "Unable to browse projects",
    ar: "تعذّر تصفّح المشاريع",
  },
  "palette.addProject.noEnvironment.description": {
    en: "No environment is available.",
    ar: "لا توجد بيئة متاحة.",
  },
  "palette.addProject.failed": {
    en: "Failed to add project",
    ar: "تعذّر إضافة المشروع",
  },
  "palette.addProject.openFailed": {
    en: "Failed to open project",
    ar: "تعذّر فتح المشروع",
  },
  "palette.addProject.cloneFailed": {
    en: "Clone failed",
    ar: "فشل Clone",
  },
  "palette.addProject.lookupFailed": {
    en: "Repository lookup failed",
    ar: "فشل البحث عن المستودع",
  },
  "palette.addProject.wslFailed.title": {
    en: "Could not add WSL project",
    ar: "تعذّر إضافة مشروع WSL",
  },
  "palette.addProject.wslFailed.description": {
    en: "Start the matching WSL backend, then choose the folder again.",
    ar: "شغّل خدمة WSL الخلفية المطابقة، ثم اختر المجلد مرة أخرى.",
  },
  "palette.runFailed.title": {
    en: "Unable to run command",
    ar: "تعذّر تنفيذ الأمر",
  },

  // ── No active thread ────────────────────────────────────────────────────────
  "palette.noThread.header": {
    en: "No active thread",
    ar: "لا توجد محادثة نشطة",
  },
  "palette.noThread.title": {
    en: "Pick a thread to continue",
    ar: "اختر محادثة للمتابعة",
  },
  "palette.noThread.description": {
    en: "Select an existing thread or create a new one to get started.",
    ar: "اختر محادثة موجودة أو أنشئ محادثة جديدة للبدء.",
  },

  // ── Plan sidebar ────────────────────────────────────────────────────────────
  "palette.plan.label": {
    en: "Plan",
    ar: "الخطة",
  },
  "palette.plan.actions": {
    en: "Plan actions",
    ar: "إجراءات الخطة",
  },
  "palette.plan.copy": {
    en: "Copy to clipboard",
    ar: "نسخ إلى الحافظة",
  },
  "palette.plan.download": {
    en: "Download as markdown",
    ar: "تنزيل بصيغة markdown",
  },
  "palette.plan.saveToWorkspace": {
    en: "Save to workspace",
    ar: "حفظ في مساحة العمل",
  },
  "palette.plan.saved": {
    en: "Plan saved",
    ar: "تم حفظ الخطة",
  },
  "palette.plan.saveFailed": {
    en: "Could not save plan",
    ar: "تعذّر حفظ الخطة",
  },
  "palette.plan.steps": {
    en: "Steps",
    ar: "الخطوات",
  },
  "palette.plan.full": {
    en: "Full Plan",
    ar: "الخطة الكاملة",
  },
  "palette.plan.empty.title": {
    en: "No active plan yet.",
    ar: "لا توجد خطة نشطة بعد.",
  },
  "palette.plan.empty.description": {
    en: "Plans will appear here when generated.",
    ar: "ستظهر الخطط هنا عند إنشائها.",
  },

  // ── T3 Connect environment list ─────────────────────────────────────────────
  "palette.connect.environmentAdded.title": {
    en: "Environment added",
    ar: "تمت إضافة البيئة",
  },
  "palette.connect.environmentAdded.description": {
    en: "Connecting to {label} through T3 Connect.",
    ar: "جارٍ الاتصال بـ {label} عبر T3 Connect.",
  },
  "palette.connect.connectFailed.title": {
    en: "Could not connect environment",
    ar: "تعذّر الاتصال بالبيئة",
  },
  "palette.connect.connectFailed.description": {
    en: "Could not connect the T3 Connect environment.",
    ar: "تعذّر الاتصال ببيئة T3 Connect.",
  },
  "palette.connect.copyTraceId": {
    en: "Copy trace ID",
    ar: "نسخ معرّف التتبّع",
  },
  "palette.connect.offline": {
    en: "You appear to be offline.",
    ar: "يبدو أنك غير متصل بالإنترنت.",
  },
  "palette.connect.discoveryFailed": {
    en: "Could not load T3 Connect environments",
    ar: "تعذّر تحميل بيئات T3 Connect",
  },
  "palette.connect.availableRelayOnline": {
    en: "Available · Relay online",
    ar: "متاحة · الوسيط متصل",
  },
  "palette.connect.availableRelayOffline": {
    en: "Available · Relay offline",
    ar: "متاحة · الوسيط غير متصل",
  },
  "palette.connect.availableRelayChecking": {
    en: "Available · Checking relay status…",
    ar: "متاحة · جارٍ التحقّق من حالة الوسيط…",
  },
  "palette.connect.availableRelayUnknown": {
    en: "Available · Relay status unavailable",
    ar: "متاحة · حالة الوسيط غير متوفّرة",
  },
  "palette.connect.relayOnline": {
    en: "Relay online",
    ar: "الوسيط متصل",
  },
  "palette.connect.relayOffline": {
    en: "Relay offline",
    ar: "الوسيط غير متصل",
  },
  "palette.connect.relayChecking": {
    en: "Checking relay status",
    ar: "جارٍ التحقّق من حالة الوسيط",
  },
  "palette.connect.relayUnknown": {
    en: "Relay status unavailable",
    ar: "حالة الوسيط غير متوفّرة",
  },
  "palette.connect.connecting": {
    en: "Connecting…",
    ar: "جارٍ الاتصال…",
  },
  "palette.connect.connect": {
    en: "Connect",
    ar: "اتصال",
  },

  // ── T3 Connect onboarding dialog ────────────────────────────────────────────
  "palette.onboarding.title": {
    en: "Set up T3 Connect",
    ar: "إعداد T3 Connect",
  },
  "palette.onboarding.description": {
    en: "Mesh your devices together — publish this environment and connect the rest, all in one place.",
    ar: "اربط أجهزتك معًا — انشر هذه البيئة وأوصل الباقي، من مكان واحد.",
  },
  "palette.onboarding.step": {
    en: "Step {number}",
    ar: "الخطوة {number}",
  },
  "palette.onboarding.step.publish": {
    en: "Publish",
    ar: "النشر",
  },
  "palette.onboarding.step.devices": {
    en: "Connect devices",
    ar: "توصيل الأجهزة",
  },
  "palette.onboarding.publishEnvironment.title": {
    en: "Publish this environment",
    ar: "نشر هذه البيئة",
  },
  "palette.onboarding.publishEnvironment.description": {
    en: "Make this environment available to your other devices through T3 Connect.",
    ar: "اجعل هذه البيئة متاحة لأجهزتك الأخرى عبر T3 Connect.",
  },
  "palette.onboarding.publishActivity.title": {
    en: "Publish agent activity",
    ar: "نشر نشاط الوكيل",
  },
  "palette.onboarding.publishActivity.description": {
    en: "Send activity from this environment to your mobile clients for push notifications and Live Activities.",
    ar: "أرسل نشاط هذه البيئة إلى تطبيقات الجوال لديك للإشعارات الفورية و Live Activities.",
  },
  "palette.onboarding.enabled.title": {
    en: "T3 Connect enabled",
    ar: "تم تمكين T3 Connect",
  },
  "palette.onboarding.enabled.published": {
    en: "This environment is available to your other devices through T3 Connect.",
    ar: "هذه البيئة متاحة لأجهزتك الأخرى عبر T3 Connect.",
  },
  "palette.onboarding.enabled.activityOnly": {
    en: "This environment publishes agent activity to your mobile clients.",
    ar: "تنشر هذه البيئة نشاط الوكيل إلى تطبيقات الجوال لديك.",
  },
  "palette.onboarding.dontShowAgain": {
    en: "Don't show this again",
    ar: "لا تُظهر هذا مرة أخرى",
  },
  "palette.onboarding.notNow": {
    en: "Not now",
    ar: "ليس الآن",
  },
  "palette.onboarding.enabling": {
    en: "Enabling…",
    ar: "جارٍ التمكين…",
  },
  "palette.onboarding.noDevices": {
    en: "No other environments are published to your account yet. Publish one from another device and it will show up here.",
    ar: "لا توجد بيئات أخرى منشورة في حسابك بعد. انشر بيئة من جهاز آخر وستظهر هنا.",
  },

  // ── Relay client install dialog ─────────────────────────────────────────────
  "palette.relayInstall.confirm.title": {
    en: "Install relay client?",
    ar: "تثبيت عميل الوسيط؟",
  },
  "palette.relayInstall.confirm.description": {
    en: "T3 Code needs the relay client to make this environment available through T3 Connect.",
    ar: "يحتاج T3 Code إلى عميل الوسيط لإتاحة هذه البيئة عبر T3 Connect.",
  },
  "palette.relayInstall.installing.title": {
    en: "Installing relay client",
    ar: "جارٍ تثبيت عميل الوسيط",
  },
  "palette.relayInstall.installing.description": {
    en: "T3 Code is preparing this environment for secure access through T3 Connect.",
    ar: "يجهّز T3 Code هذه البيئة للوصول الآمن عبر T3 Connect.",
  },
  "palette.relayInstall.progressLabel": {
    en: "Relay client installation progress",
    ar: "تقدّم تثبيت عميل الوسيط",
  },
  "palette.relayInstall.progressCount": {
    en: "{current} of {total}",
    ar: "{current} من {total}",
  },
  "palette.relayInstall.keepOpen": {
    en: "Keep T3 Code open while the relay client is installed.",
    ar: "أبقِ T3 Code مفتوحًا أثناء تثبيت عميل الوسيط.",
  },
  "palette.relayInstall.managedTitle": {
    en: "Managed relay client",
    ar: "عميل وسيط مُدار",
  },
  "palette.relayInstall.managedDescription": {
    en: "T3 Code will download and install version {version} locally.",
    ar: "سيقوم T3 Code بتنزيل الإصدار {version} وتثبيته محليًا.",
  },
  "palette.relayInstall.downloadAndInstall": {
    en: "Download and install",
    ar: "تنزيل وتثبيت",
  },
  "palette.relayInstall.stage.checking": {
    en: "Checking current installation",
    ar: "التحقّق من التثبيت الحالي",
  },
  "palette.relayInstall.stage.waitingForLock": {
    en: "Waiting for installer",
    ar: "في انتظار المُثبِّت",
  },
  "palette.relayInstall.stage.downloading": {
    en: "Downloading relay client",
    ar: "تنزيل عميل الوسيط",
  },
  "palette.relayInstall.stage.verifying": {
    en: "Verifying download",
    ar: "التحقّق من التنزيل",
  },
  "palette.relayInstall.stage.installing": {
    en: "Installing relay client",
    ar: "تثبيت عميل الوسيط",
  },
  "palette.relayInstall.stage.validating": {
    en: "Validating executable",
    ar: "التحقّق من الملف التنفيذي",
  },
  "palette.relayInstall.stage.activating": {
    en: "Activating installation",
    ar: "تنشيط التثبيت",
  },

  // ── SSH password prompt ─────────────────────────────────────────────────────
  "palette.ssh.title": {
    en: "SSH Password Required",
    ar: "مطلوب كلمة مرور SSH",
  },
  "palette.ssh.description.target": {
    en: "T3 needs your SSH password to connect to",
    ar: "يحتاج T3 إلى كلمة مرور SSH للاتصال بـ",
  },
  "palette.ssh.description.note": {
    en: "The password is passed to the local SSH process for this connection attempt and is not saved by T3 Code.",
    ar: "تُمرَّر كلمة المرور إلى عملية SSH المحلية لمحاولة الاتصال هذه ولا يحفظها T3 Code.",
  },
  "palette.ssh.expired": {
    en: "Expired",
    ar: "منتهي الصلاحية",
  },
  "palette.ssh.expiredMessage": {
    en: "This SSH password prompt expired. Try connecting again.",
    ar: "انتهت صلاحية طلب كلمة مرور SSH. حاول الاتصال مرة أخرى.",
  },
  "palette.ssh.promptFailed": {
    en: "SSH password prompt failed.",
    ar: "فشل طلب كلمة مرور SSH.",
  },
  "palette.ssh.useKeysHint": {
    en: "Use SSH keys to avoid repeated password prompts on new SSH sessions.",
    ar: "استخدم مفاتيح SSH لتجنّب تكرار طلب كلمة المرور في جلسات SSH الجديدة.",
  },

  // ── Pairing surfaces ────────────────────────────────────────────────────────
  "palette.pairing.pending.title": {
    en: "Pairing with this environment",
    ar: "جارٍ الإقران مع هذه البيئة",
  },
  "palette.pairing.pending.description": {
    en: "Validating the pairing link and preparing your session.",
    ar: "جارٍ التحقّق من رابط الإقران وتحضير جلستك.",
  },
  "palette.pairing.title": {
    en: "Pair with this environment",
    ar: "الإقران مع هذه البيئة",
  },
  "palette.pairing.tokenLabel": {
    en: "Pairing token",
    ar: "رمز الإقران",
  },
  "palette.pairing.tokenPlaceholder": {
    en: "Paste a one-time token or pairing secret",
    ar: "الصق رمزًا لمرة واحدة أو سرّ الإقران",
  },
  "palette.pairing.submitting": {
    en: "Pairing...",
    ar: "جارٍ الإقران…",
  },
  "palette.pairing.reloadApp": {
    en: "Reload app",
    ar: "إعادة تحميل التطبيق",
  },
  "palette.pairing.gate.desktop": {
    en: "This environment expects a trusted pairing credential before the app can connect.",
    ar: "تتوقّع هذه البيئة بيانات إقران موثوقة قبل أن يتمكّن التطبيق من الاتصال.",
  },
  "palette.pairing.gate.token": {
    en: "Enter a pairing token to start a session with this environment.",
    ar: "أدخل رمز إقران لبدء جلسة مع هذه البيئة.",
  },
  "palette.pairing.methods.both": {
    en: "Desktop-managed pairing and one-time pairing tokens are both accepted for this environment.",
    ar: "تقبل هذه البيئة الإقران المُدار من تطبيق سطح المكتب ورموز الإقران لمرة واحدة على حدٍّ سواء.",
  },
  "palette.pairing.methods.desktop": {
    en: "This environment is desktop-managed. Open it from the desktop app or paste a bootstrap credential if one was issued explicitly.",
    ar: "هذه البيئة مُدارة من تطبيق سطح المكتب. افتحها من التطبيق أو الصق بيانات تهيئة إن صُدرت لك صراحةً.",
  },
  "palette.pairing.methods.token": {
    en: "This environment accepts one-time pairing tokens. Pairing links can open this page directly, or you can paste the token here.",
    ar: "تقبل هذه البيئة رموز الإقران لمرة واحدة. يمكن لروابط الإقران فتح هذه الصفحة مباشرة، أو يمكنك لصق الرمز هنا.",
  },
  "palette.pairing.authFailed": {
    en: "Authentication failed.",
    ar: "فشل التحقّق من الهوية.",
  },
  "palette.pairing.hosted.connecting": {
    en: "Connecting to this backend.",
    ar: "جارٍ الاتصال بهذه الخدمة الخلفية.",
  },
  "palette.pairing.hosted.linkIncomplete": {
    en: "This pairing link is missing its backend host or token.",
    ar: "رابط الإقران هذا يفتقد مضيف الخدمة الخلفية أو الرمز.",
  },
  "palette.pairing.hosted.tokenUsed": {
    en: "This one-time pairing token was already submitted. Request a new pairing link.",
    ar: "تم استخدام رمز الإقران هذا مسبقًا. اطلب رابط إقران جديدًا.",
  },
  "palette.pairing.hosted.saved": {
    en: "{label} is saved in this browser.",
    ar: "تم حفظ {label} في هذا المتصفح.",
  },
  "palette.pairing.hosted.environmentFallback": {
    en: "The environment",
    ar: "البيئة",
  },
  "palette.pairing.hosted.retryHint": {
    en: "{message} If the backend accepted this one-time token, request a new pairing link before retrying.",
    ar: "{message} إذا كانت الخدمة الخلفية قد قبلت هذا الرمز لمرة واحدة، فاطلب رابط إقران جديدًا قبل إعادة المحاولة.",
  },
  "palette.pairing.hosted.paired": {
    en: "Backend paired",
    ar: "تم إقران الخدمة الخلفية",
  },
  "palette.pairing.hosted.failed": {
    en: "Pairing failed",
    ar: "فشل الإقران",
  },
  "palette.pairing.hosted.inProgress": {
    en: "Pairing backend",
    ar: "جارٍ إقران الخدمة الخلفية",
  },
  "palette.pairing.hosted.hostLabel": {
    en: "Host:",
    ar: "المضيف:",
  },
  "palette.pairing.hosted.troubleshoot": {
    en: "Verify the backend is reachable from this browser, supports CORS for hosted clients, and is served over HTTPS when opening this page from HTTPS.",
    ar: "تحقّق من أن الخدمة الخلفية قابلة للوصول من هذا المتصفح، وتدعم CORS للعملاء المستضافين، وتُقدَّم عبر HTTPS عند فتح هذه الصفحة من HTTPS.",
  },
  "palette.pairing.hosted.openApp": {
    en: "Open app",
    ar: "فتح التطبيق",
  },

  // ── CLI connect surfaces ────────────────────────────────────────────────────
  "palette.connectCli.invalid.eyebrow": {
    en: "Authorization request",
    ar: "طلب التخويل",
  },
  "palette.connectCli.invalid.title": {
    en: "This connect link is incomplete",
    ar: "رابط الاتصال هذا غير مكتمل",
  },
  "palette.connectCli.invalid.description": {
    en: "The link is missing its authorization request. Re-run `t3 connect` in your terminal and open the freshly printed URL.",
    ar: "الرابط يفتقد طلب التخويل. أعد تشغيل `t3 connect` في الطرفية وافتح الرابط المطبوع حديثًا.",
  },
  "palette.connectCli.step1.eyebrow": {
    en: "Step 1 of 2 · Browser authorization",
    ar: "الخطوة 1 من 2 · تخويل المتصفح",
  },
  "palette.connectCli.step1.title": {
    en: "Connecting your terminal",
    ar: "جارٍ توصيل الطرفية",
  },
  "palette.connectCli.step1.redirecting": {
    en: "Redirecting to authorize T3 Connect for your CLI…",
    ar: "جارٍ إعادة التوجيه لتخويل T3 Connect لأداة CLI…",
  },
  "palette.connectCli.step1.signInPrompt": {
    en: "Sign in to continue authorizing T3 Connect for your CLI.",
    ar: "سجّل الدخول لمتابعة تخويل T3 Connect لأداة CLI.",
  },
  "palette.connectCli.signIn": {
    en: "Sign in",
    ar: "تسجيل الدخول",
  },
  "palette.connectCli.step2.eyebrow": {
    en: "Step 2 of 2 · Terminal handoff",
    ar: "الخطوة 2 من 2 · التسليم إلى الطرفية",
  },
  "palette.connectCli.incomplete.title": {
    en: "Authorization did not complete",
    ar: "لم يكتمل التخويل",
  },
  "palette.connectCli.incomplete.description": {
    en: "No authorization code was returned. Re-run `t3 connect` in your terminal and try again.",
    ar: "لم يُرجَع أي رمز تخويل. أعد تشغيل `t3 connect` في الطرفية وحاول مرة أخرى.",
  },
  "palette.connectCli.mismatch.title": {
    en: "This code belongs to a different request",
    ar: "هذا الرمز يتبع طلبًا آخر",
  },
  "palette.connectCli.mismatch.description": {
    en: "This authorization response does not match a connect request started in this browser. Re-run `t3 connect` in your terminal and open the freshly printed URL in this browser.",
    ar: "استجابة التخويل هذه لا تطابق أي طلب اتصال بدأ في هذا المتصفح. أعد تشغيل `t3 connect` في الطرفية وافتح الرابط المطبوع حديثًا في هذا المتصفح.",
  },
  "palette.connectCli.ready.title": {
    en: "Almost connected",
    ar: "على وشك الاتصال",
  },
  "palette.connectCli.ready.descriptionWithAccount": {
    en: "Enter this code in your waiting terminal to connect it as {account}.",
    ar: "أدخل هذا الرمز في الطرفية المنتظرة لتوصيلها بحساب {account}.",
  },
  "palette.connectCli.ready.description": {
    en: "Enter this code in your waiting terminal to finish connecting.",
    ar: "أدخل هذا الرمز في الطرفية المنتظرة لإكمال الاتصال.",
  },
  "palette.connectCli.codeLabel": {
    en: "One-time authorization code",
    ar: "رمز تخويل لمرة واحدة",
  },
  "palette.connectCli.expiresShortly": {
    en: "expires shortly",
    ar: "تنتهي صلاحيته قريبًا",
  },
  "palette.connectCli.copyCode": {
    en: "Copy authorization code",
    ar: "نسخ رمز التخويل",
  },
  "palette.connectCli.warning": {
    en: "Only enter this code in a terminal session you started yourself. Anyone holding it can link their machine to your T3 Connect account while it is valid.",
    ar: "لا تُدخل هذا الرمز إلا في جلسة طرفية بدأتها بنفسك. أي شخص يحصل عليه يمكنه ربط جهازه بحسابك في T3 Connect طوال صلاحيته.",
  },

  // ── Slow request toast ──────────────────────────────────────────────────────
  "palette.slowRequests.title": {
    en: "Some requests are slow",
    ar: "بعض الطلبات بطيئة",
  },
  "palette.slowRequests.description.one": {
    en: "{count} request waiting longer than {seconds}s.",
    ar: "{count} طلب ينتظر أكثر من {seconds} ثانية.",
  },
  "palette.slowRequests.description.other": {
    en: "{count} requests waiting longer than {seconds}s.",
    ar: "{count} طلبات تنتظر أكثر من {seconds} ثانية.",
  },
  "palette.slowRequests.hide": {
    en: "Hide requests",
    ar: "إخفاء الطلبات",
  },
  "palette.slowRequests.show": {
    en: "Show requests",
    ar: "عرض الطلبات",
  },
  "palette.slowRequests.startedAt": {
    en: "Started {time}",
    ar: "بدأ {time}",
  },
} as const satisfies StringModule;
