import type { StringModule } from "./types";

export const settingsProviders = {
  // ---------------------------------------------------------------------------
  // Providers panel
  // ---------------------------------------------------------------------------
  "settings.providers.section": {
    en: "Providers",
    ar: "المزوّدون",
  },
  "settings.providers.lastChecked.prefix": {
    en: "Checked",
    ar: "آخر فحص",
  },
  "settings.providers.lastChecked.unavailable": {
    en: "Checked unavailable",
    ar: "زمن الفحص غير متاح",
  },
  "settings.providers.addInstance": {
    en: "Add provider instance",
    ar: "إضافة نسخة مزوّد",
  },
  "settings.providers.refreshStatus": {
    en: "Refresh provider status",
    ar: "تحديث حالة المزوّدين",
  },
  "settings.providers.healthInterval.title": {
    en: "Health check interval",
    ar: "فترة فحص السلامة",
  },
  "settings.providers.healthInterval.policy": {
    en: "This interval is configured here, then the shared Background activity policy decides whether provider probes may run when the timer fires. Custom intervals appear as Advanced in General settings.",
    ar: "تُضبط هذه الفترة هنا، ثم تقرّر سياسة النشاط في الخلفية المشتركة ما إذا كان فحص المزوّدين مسموحًا عند انتهاء المؤقّت. تظهر الفترات المخصّصة باسم «متقدّم» في الإعدادات العامة.",
  },
  "settings.providers.healthInterval.description": {
    en: "Refresh provider availability, versions, auth state, and model metadata in the background. Set this to 0 seconds to rely on manual refreshes.",
    ar: "تحديث توفّر المزوّدين وإصداراتهم وحالة المصادقة وبيانات النماذج في الخلفية. اضبطها على 0 ثانية للاعتماد على التحديث اليدوي فقط.",
  },
  "settings.providers.healthInterval.decrease": {
    en: "Decrease provider health check interval",
    ar: "تقليل فترة فحص سلامة المزوّدين",
  },
  "settings.providers.healthInterval.input": {
    en: "Provider health check interval in seconds",
    ar: "فترة فحص سلامة المزوّدين بالثواني",
  },
  "settings.providers.healthInterval.increase": {
    en: "Increase provider health check interval",
    ar: "زيادة فترة فحص سلامة المزوّدين",
  },
  "settings.providers.healthInterval.seconds": {
    en: "seconds",
    ar: "ثانية",
  },
  "settings.providers.update.failedTitle": {
    en: "Could not update {provider}",
    ar: "تعذّر تحديث {provider}",
  },
  "settings.providers.update.failedDescription": {
    en: "The provider update command could not be started.",
    ar: "تعذّر تشغيل أمر تحديث المزوّد.",
  },

  // ---------------------------------------------------------------------------
  // Add-provider wizard
  // ---------------------------------------------------------------------------
  "settings.providers.wizard.step.driver": {
    en: "Driver",
    ar: "المشغّل",
  },
  "settings.providers.wizard.step.identity": {
    en: "Identity",
    ar: "التعريف",
  },
  "settings.providers.wizard.step.config": {
    en: "Config",
    ar: "الإعداد",
  },
  "settings.providers.wizard.stepAria": {
    en: "{step}, step {number}",
    ar: "{step}، الخطوة {number}",
  },
  "settings.providers.wizard.stepAriaWithSummary": {
    en: "{step}, step {number}, {summary}",
    ar: "{step}، الخطوة {number}، {summary}",
  },
  "settings.providers.add.title": {
    en: "Add provider instance",
    ar: "إضافة نسخة مزوّد",
  },
  "settings.providers.add.description": {
    en: "Configure an additional provider instance — for example, a second Codex install pointed at a different workspace.",
    ar: "إعداد نسخة مزوّد إضافية — مثلًا تثبيت ثانٍ من Codex موجّه إلى مساحة عمل أخرى.",
  },
  "settings.providers.add.driverLabel": {
    en: "Driver",
    ar: "المشغّل",
  },
  "settings.providers.add.comingSoon": {
    en: "Coming Soon",
    ar: "قريبًا",
  },
  "settings.providers.add.labelField": {
    en: "Label",
    ar: "التسمية",
  },
  "settings.providers.add.labelPlaceholder": {
    en: "e.g. Work",
    ar: "مثال: العمل",
  },
  "settings.providers.add.labelHint": {
    en: "Shown in the provider list. Optional.",
    ar: "تظهر في قائمة المزوّدين. اختيارية.",
  },
  "settings.providers.add.instanceIdField": {
    en: "Instance ID",
    ar: "معرّف النسخة",
  },
  "settings.providers.add.instanceIdHint": {
    en: "Routing key used by threads and sessions. Letters, digits, '-', or '_'.",
    ar: "مفتاح التوجيه الذي تستخدمه المحادثات والجلسات. حروف لاتينية أو أرقام أو '-' أو '_'.",
  },
  "settings.providers.add.accentColorAria": {
    en: "Provider instance accent color",
    ar: "لون تمييز نسخة المزوّد",
  },
  "settings.providers.add.useSwatch": {
    en: "Use {color} accent",
    ar: "استخدام لون التمييز {color}",
  },
  "settings.providers.add.clear": {
    en: "Clear",
    ar: "مسح",
  },
  "settings.providers.add.accentHint": {
    en: "Optional marker shown in the picker.",
    ar: "علامة اختيارية تظهر في المُنتقي.",
  },
  "settings.providers.add.noConfig": {
    en: "This driver has no required configuration. You can add the instance now.",
    ar: "لا يحتاج هذا المشغّل إلى أي إعداد. يمكنك إضافة النسخة الآن.",
  },
  "settings.providers.add.next": {
    en: "Next",
    ar: "التالي",
  },
  "settings.providers.add.submit": {
    en: "Add instance",
    ar: "إضافة النسخة",
  },
  "settings.providers.add.previewLabel": {
    en: "{provider} Workspace",
    ar: "مساحة عمل {provider}",
  },
  "settings.providers.add.successTitle": {
    en: "Provider instance added",
    ar: "تمت إضافة نسخة المزوّد",
  },
  "settings.providers.add.successDescription": {
    en: "{provider} instance '{instanceId}' was added.",
    ar: "تمت إضافة نسخة {provider} باسم '{instanceId}'.",
  },
  "settings.providers.add.errorTitle": {
    en: "Could not add provider instance",
    ar: "تعذّرت إضافة نسخة المزوّد",
  },
  "settings.providers.add.errorFallback": {
    en: "Update failed.",
    ar: "فشل التحديث.",
  },
  "settings.providers.instanceId.required": {
    en: "Instance ID is required.",
    ar: "معرّف النسخة مطلوب.",
  },
  "settings.providers.instanceId.tooLong": {
    en: "Instance ID must be 64 characters or fewer.",
    ar: "يجب ألّا يزيد معرّف النسخة على 64 حرفًا.",
  },
  "settings.providers.instanceId.pattern": {
    en: "Instance ID must start with a letter and use only letters, digits, '-', or '_'.",
    ar: "يجب أن يبدأ معرّف النسخة بحرف وأن يقتصر على الحروف اللاتينية والأرقام و'-' و'_'.",
  },
  "settings.providers.instanceId.duplicate": {
    en: "An instance named '{instanceId}' already exists.",
    ar: "توجد نسخة بالاسم '{instanceId}' مسبقًا.",
  },

  // ---------------------------------------------------------------------------
  // Provider instance card
  // ---------------------------------------------------------------------------
  "settings.providers.auth.toggleEmail": {
    en: "Toggle account email visibility",
    ar: "إظهار بريد الحساب أو إخفاؤه",
  },
  "settings.providers.auth.revealEmail": {
    en: "Click to reveal email",
    ar: "انقر لإظهار البريد",
  },
  "settings.providers.auth.hideEmail": {
    en: "Click to hide email",
    ar: "انقر لإخفاء البريد",
  },
  "settings.providers.auth.authenticatedAs": {
    en: "Authenticated as",
    ar: "مُصادَق عليه بالحساب",
  },
  "settings.providers.auth.emailPrefix": {
    en: "Email",
    ar: "البريد",
  },
  "settings.providers.env.title": {
    en: "Environment variables",
    ar: "متغيّرات البيئة",
  },
  "settings.providers.env.add": {
    en: "Add",
    ar: "إضافة",
  },
  "settings.providers.env.empty": {
    en: "Add variables to pass API keys, base URLs, or other per-instance CLI settings.",
    ar: "أضف متغيّرات لتمرير مفاتيح API أو عناوين URL الأساسية أو أي إعدادات CLI خاصة بهذه النسخة.",
  },
  "settings.providers.env.columnVariable": {
    en: "Variable",
    ar: "المتغيّر",
  },
  "settings.providers.env.columnValue": {
    en: "Value",
    ar: "القيمة",
  },
  "settings.providers.env.columnSensitive": {
    en: "Sensitive",
    ar: "حسّاس",
  },
  "settings.providers.env.columnOptions": {
    en: "Options",
    ar: "خيارات",
  },
  "settings.providers.env.nameAria": {
    en: "Environment variable name {index}",
    ar: "اسم متغيّر البيئة {index}",
  },
  "settings.providers.env.valueAria": {
    en: "Environment variable value {index}",
    ar: "قيمة متغيّر البيئة {index}",
  },
  "settings.providers.env.storedSecret": {
    en: "Stored secret - enter a new value to replace",
    ar: "قيمة سرّية مخزّنة — أدخل قيمة جديدة لاستبدالها",
  },
  "settings.providers.env.markSensitive": {
    en: "Mark environment variable {name} as sensitive",
    ar: "تعيين متغيّر البيئة {name} كحسّاس",
  },
  "settings.providers.env.remove": {
    en: "Remove environment variable {name}",
    ar: "إزالة متغيّر البيئة {name}",
  },
  "settings.providers.env.note": {
    en: "Sensitive values are stored separately and are not returned to the app after saving.",
    ar: "تُخزَّن القيم الحسّاسة بمعزل عن غيرها ولا تُعاد إلى التطبيق بعد الحفظ.",
  },
  "settings.providers.copy.successTitle": {
    en: "{provider} update command copied",
    ar: "تم نسخ أمر تحديث {provider}",
  },
  "settings.providers.copy.successDescription": {
    en: "Run it in a terminal when you are ready to update.",
    ar: "شغّله في الطرفية عندما تكون مستعدًا للتحديث.",
  },
  "settings.providers.copy.errorTitle": {
    en: "Could not copy {provider} update command",
    ar: "تعذّر نسخ أمر تحديث {provider}",
  },
  "settings.providers.card.deleteAria": {
    en: "Delete provider instance {instanceId}",
    ar: "حذف نسخة المزوّد {instanceId}",
  },
  "settings.providers.card.deleteTooltip": {
    en: "Delete instance",
    ar: "حذف النسخة",
  },
  "settings.providers.card.updateAvailableAria": {
    en: "Update available — view details",
    ar: "يتوفّر تحديث — اعرض التفاصيل",
  },
  "settings.providers.card.updateAvailable": {
    en: "Update available",
    ar: "يتوفّر تحديث",
  },
  "settings.providers.card.updating": {
    en: "Updating",
    ar: "يجري التحديث",
  },
  "settings.providers.card.updateNow": {
    en: "Update now",
    ar: "التحديث الآن",
  },
  "settings.providers.card.manualUpdate": {
    en: "or, update manually using",
    ar: "أو حدّث يدويًا باستخدام",
  },
  "settings.providers.card.copyCommandAria": {
    en: "Copy update command",
    ar: "نسخ أمر التحديث",
  },
  "settings.providers.card.copyCommandTooltip": {
    en: "Copy command",
    ar: "نسخ الأمر",
  },
  "settings.providers.card.toggleDetails": {
    en: "Toggle {name} details",
    ar: "إظهار تفاصيل {name} أو إخفاؤها",
  },
  "settings.providers.card.enableAria": {
    en: "Enable {name}",
    ar: "تمكين {name}",
  },
  "settings.providers.card.displayName": {
    en: "Display name",
    ar: "الاسم الظاهر",
  },
  "settings.providers.card.displayNamePlaceholder": {
    en: "Instance label",
    ar: "تسمية النسخة",
  },
  "settings.providers.card.displayNameHint": {
    en: "Optional label shown in the provider list.",
    ar: "تسمية اختيارية تظهر في قائمة المزوّدين.",
  },
  "settings.providers.card.accentDescription": {
    en: "Used to distinguish this instance in picker rails and model lists.",
    ar: "يُستخدم لتمييز هذه النسخة في أشرطة المُنتقي وقوائم النماذج.",
  },
  "settings.providers.card.unknownDriver.prefix": {
    en: "This instance uses a driver (",
    ar: "تستخدم هذه النسخة مشغّلًا (",
  },
  "settings.providers.card.unknownDriver.suffix": {
    en: ") that is not shipped with the current build. Configuration values are preserved but cannot be edited from this surface.",
    ar: ") غير مضمَّن في هذه النسخة من التطبيق. تُحفظ قيم الإعدادات لكن لا يمكن تعديلها من هنا.",
  },

  // ---------------------------------------------------------------------------
  // Accent color picker
  // ---------------------------------------------------------------------------
  "settings.providers.accentColor.label": {
    en: "Accent color",
    ar: "لون التمييز",
  },
  "settings.providers.accentColor.customAria": {
    en: "Custom hex accent color",
    ar: "لون تمييز مخصّص بصيغة hex",
  },
  "settings.providers.accentColor.chooseCustom": {
    en: "Choose custom accent color for {name}",
    ar: "اختيار لون تمييز مخصّص لـ {name}",
  },
  "settings.providers.accentColor.clearFor": {
    en: "Clear accent color for {name}",
    ar: "مسح لون التمييز لـ {name}",
  },

  // ---------------------------------------------------------------------------
  // Models section
  // ---------------------------------------------------------------------------
  "settings.providers.models.title": {
    en: "Models",
    ar: "النماذج",
  },
  "settings.providers.models.count.one": {
    en: "{count} model available.",
    ar: "نموذج واحد متاح.",
  },
  "settings.providers.models.count.other": {
    en: "{count} models available.",
    ar: "{count} نماذج متاحة.",
  },
  "settings.providers.models.capability.fastMode": {
    en: "Fast mode",
    ar: "الوضع السريع",
  },
  "settings.providers.models.capability.thinking": {
    en: "Thinking",
    ar: "التفكير",
  },
  "settings.providers.models.capability.reasoning": {
    en: "Reasoning",
    ar: "الاستدلال",
  },
  "settings.providers.models.detailsAria": {
    en: "Details for {model}",
    ar: "تفاصيل {model}",
  },
  "settings.providers.models.hiddenTag": {
    en: "hidden",
    ar: "مخفي",
  },
  "settings.providers.models.customTag": {
    en: "custom",
    ar: "مخصّص",
  },
  "settings.providers.models.addFavoriteAria": {
    en: "Add {model} to favorites",
    ar: "إضافة {model} إلى المفضّلة",
  },
  "settings.providers.models.removeFavoriteAria": {
    en: "Remove {model} from favorites",
    ar: "إزالة {model} من المفضّلة",
  },
  "settings.providers.models.addFavorite": {
    en: "Add to favorites",
    ar: "إضافة إلى المفضّلة",
  },
  "settings.providers.models.removeFavorite": {
    en: "Remove from favorites",
    ar: "إزالة من المفضّلة",
  },
  "settings.providers.models.moveUpAria": {
    en: "Move {model} up",
    ar: "تحريك {model} لأعلى",
  },
  "settings.providers.models.moveDownAria": {
    en: "Move {model} down",
    ar: "تحريك {model} لأسفل",
  },
  "settings.providers.models.moveUp": {
    en: "Move up",
    ar: "تحريك لأعلى",
  },
  "settings.providers.models.moveDown": {
    en: "Move down",
    ar: "تحريك لأسفل",
  },
  "settings.providers.models.showAria": {
    en: "Show {model}",
    ar: "إظهار {model}",
  },
  "settings.providers.models.hideAria": {
    en: "Hide {model}",
    ar: "إخفاء {model}",
  },
  "settings.providers.models.showInPicker": {
    en: "Show in picker",
    ar: "إظهار في المُنتقي",
  },
  "settings.providers.models.hideFromPicker": {
    en: "Hide from picker",
    ar: "إخفاء من المُنتقي",
  },
  "settings.providers.models.removeCustomAria": {
    en: "Remove {model}",
    ar: "إزالة {model}",
  },
  "settings.providers.models.removeCustom": {
    en: "Remove custom model",
    ar: "إزالة النموذج المخصّص",
  },
  "settings.providers.models.add": {
    en: "Add",
    ar: "إضافة",
  },
  "settings.providers.models.error.empty": {
    en: "Enter a model slug.",
    ar: "أدخل معرّف نموذج.",
  },
  "settings.providers.models.error.builtIn": {
    en: "That model is already built in.",
    ar: "هذا النموذج مضمَّن أصلًا.",
  },
  "settings.providers.models.error.tooLong": {
    en: "Model slugs must be {max} characters or less.",
    ar: "يجب ألّا يزيد معرّف النموذج على {max} حرفًا.",
  },
  "settings.providers.models.error.duplicate": {
    en: "That custom model is already saved.",
    ar: "هذا النموذج المخصّص محفوظ مسبقًا.",
  },

  // ---------------------------------------------------------------------------
  // Connections — sections
  // ---------------------------------------------------------------------------
  "settings.connections.section.thisEnvironment": {
    en: "This environment",
    ar: "هذه البيئة",
  },
  "settings.connections.section.remoteEnvironments": {
    en: "Remote environments",
    ar: "البيئات البعيدة",
  },
  "settings.connections.section.authorizedClients": {
    en: "Authorized clients",
    ar: "العملاء المُصرَّح لهم",
  },
  "settings.connections.versionDrift.title": {
    en: "Version drift",
    ar: "تفاوت الإصدارات",
  },
  "settings.connections.versionDrift.description": {
    en: "Client {client}, server {server}. Sync them if RPC calls or reconnects fail.",
    ar: "العميل {client}، الخادم {server}. وحّد بينهما إذا فشلت نداءات RPC أو إعادة الاتصال.",
  },
  "settings.connections.versionDrift.rowLabel": {
    en: "Version drift: client {client}, server {server}.",
    ar: "تفاوت الإصدارات: العميل {client}، الخادم {server}.",
  },
  "settings.connections.thisServer": {
    en: "this server",
    ar: "هذا الخادم",
  },
  "settings.connections.serverLabel": {
    en: "{name} server",
    ar: "خادم {name}",
  },
  "settings.connections.adminAccess.title": {
    en: "Administrative access",
    ar: "الوصول الإداري",
  },
  "settings.connections.adminAccess.description": {
    en: "Pairing links and client-session management require the access:write scope for this backend.",
    ar: "تتطلّب روابط الإقران وإدارة جلسات العملاء نطاق access:write لهذه الخدمة الخلفية.",
  },

  // ---------------------------------------------------------------------------
  // Connections — scopes
  // ---------------------------------------------------------------------------
  "settings.connections.scope.orchestrationRead.title": {
    en: "View environment",
    ar: "عرض البيئة",
  },
  "settings.connections.scope.orchestrationRead.description": {
    en: "Read threads, status, diffs, and configuration.",
    ar: "قراءة المحادثات والحالة والفروق والإعدادات.",
  },
  "settings.connections.scope.orchestrationOperate.title": {
    en: "Operate tasks",
    ar: "تشغيل المهام",
  },
  "settings.connections.scope.orchestrationOperate.description": {
    en: "Start tasks and perform changes in the environment.",
    ar: "بدء المهام وإجراء تغييرات في البيئة.",
  },
  "settings.connections.scope.terminalOperate.title": {
    en: "Use terminals",
    ar: "استخدام الطرفيات",
  },
  "settings.connections.scope.terminalOperate.description": {
    en: "Create terminals and send input to running shells.",
    ar: "إنشاء طرفيات وإرسال مدخلات إلى الأصداف العاملة.",
  },
  "settings.connections.scope.reviewWrite.title": {
    en: "Write reviews",
    ar: "كتابة المراجعات",
  },
  "settings.connections.scope.reviewWrite.description": {
    en: "Create comments while reviewing changes.",
    ar: "إضافة تعليقات أثناء مراجعة التغييرات.",
  },
  "settings.connections.scope.accessRead.title": {
    en: "View access",
    ar: "عرض الوصول",
  },
  "settings.connections.scope.accessRead.description": {
    en: "Inspect pairing links and authorized clients.",
    ar: "معاينة روابط الإقران والعملاء المُصرَّح لهم.",
  },
  "settings.connections.scope.accessWrite.title": {
    en: "Manage access",
    ar: "إدارة الوصول",
  },
  "settings.connections.scope.accessWrite.description": {
    en: "Issue and revoke credentials for other clients.",
    ar: "إصدار بيانات اعتماد للعملاء الآخرين وإلغاؤها.",
  },
  "settings.connections.scope.relayRead.title": {
    en: "View relay",
    ar: "عرض المُرحِّل",
  },
  "settings.connections.scope.relayRead.description": {
    en: "Inspect managed relay connectivity.",
    ar: "معاينة اتصال المُرحِّل المُدار.",
  },
  "settings.connections.scope.relayWrite.title": {
    en: "Manage relay",
    ar: "إدارة المُرحِّل",
  },
  "settings.connections.scope.relayWrite.description": {
    en: "Change managed tunnel connectivity.",
    ar: "تغيير اتصال النفق المُدار.",
  },
  "settings.connections.scope.count.one": {
    en: "{count} scope",
    ar: "نطاق واحد",
  },
  "settings.connections.scope.count.other": {
    en: "{count} scopes",
    ar: "{count} نطاقات",
  },
  "settings.connections.scope.showAria": {
    en: "{label}: show {scopes}",
    ar: "{label}: إظهار {scopes}",
  },
  "settings.connections.scope.granted": {
    en: "Granted scopes",
    ar: "النطاقات الممنوحة",
  },
  "settings.connections.scope.pairingLinkLabel": {
    en: "Pairing link scopes",
    ar: "نطاقات رابط الإقران",
  },
  "settings.connections.scope.clientLabel": {
    en: "Client scopes",
    ar: "نطاقات العميل",
  },

  // ---------------------------------------------------------------------------
  // Connections — pairing links
  // ---------------------------------------------------------------------------
  "settings.connections.pairing.hostedAppLink": {
    en: "Hosted app link",
    ar: "رابط التطبيق المُستضاف",
  },
  "settings.connections.pairing.backendUrlDetail": {
    en: "Backend pairing URL",
    ar: "عنوان إقران الخدمة الخلفية",
  },
  "settings.connections.pairing.copiedHostedTitle": {
    en: "Hosted app link copied",
    ar: "تم نسخ رابط التطبيق المُستضاف",
  },
  "settings.connections.pairing.copiedUrlTitle": {
    en: "Pairing URL copied",
    ar: "تم نسخ عنوان الإقران",
  },
  "settings.connections.pairing.copiedCodeTitle": {
    en: "Pairing code copied",
    ar: "تم نسخ رمز الإقران",
  },
  "settings.connections.pairing.copiedHostedDescription": {
    en: "Open it in the browser on the device you want to connect.",
    ar: "افتحه في المتصفح على الجهاز الذي تريد وصله.",
  },
  "settings.connections.pairing.copiedUrlDescription": {
    en: "Open it in the client you want to pair to this environment.",
    ar: "افتحه في العميل الذي تريد إقرانه بهذه البيئة.",
  },
  "settings.connections.pairing.copiedCodeDescription": {
    en: "Paste it into another client to finish pairing.",
    ar: "الصقه في عميل آخر لإكمال الإقران.",
  },
  "settings.connections.pairing.copyHostedFailed": {
    en: "Could not copy hosted app link",
    ar: "تعذّر نسخ رابط التطبيق المُستضاف",
  },
  "settings.connections.pairing.copyUrlFailed": {
    en: "Could not copy pairing URL",
    ar: "تعذّر نسخ عنوان الإقران",
  },
  "settings.connections.pairing.copyCodeFailed": {
    en: "Could not copy pairing code",
    ar: "تعذّر نسخ رمز الإقران",
  },
  "settings.connections.pairing.clipboardUnavailable": {
    en: "Clipboard copy unavailable",
    ar: "النسخ إلى الحافظة غير متاح",
  },
  "settings.connections.pairing.clipboardUnavailableDescription": {
    en: "Showing the full value instead.",
    ar: "يتم عرض القيمة الكاملة بدلًا من ذلك.",
  },
  "settings.connections.pairing.copyCode": {
    en: "Copy code",
    ar: "نسخ الرمز",
  },
  "settings.connections.pairing.tokenOnly": {
    en: "Token only",
    ar: "الرمز فقط",
  },
  "settings.connections.pairing.urlsGroup": {
    en: "Pairing URLs",
    ar: "عناوين الإقران",
  },
  "settings.connections.pairing.codeGroup": {
    en: "Pairing code",
    ar: "رمز الإقران",
  },
  "settings.connections.pairing.linkCreatedAt": {
    en: "Link created at {time}",
    ar: "أُنشئ الرابط في {time}",
  },
  "settings.connections.pairing.defaultLabel": {
    en: "Pairing link",
    ar: "رابط الإقران",
  },
  "settings.connections.pairing.showQr": {
    en: "Show QR code",
    ar: "إظهار رمز QR",
  },
  "settings.connections.pairing.qrTitle": {
    en: "Pairing link — scan to open on another device",
    ar: "رابط الإقران — امسحه لفتحه على جهاز آخر",
  },
  "settings.connections.pairing.noShareableUrl": {
    en: "Copy the token and pair from another client using this backend's reachable host.",
    ar: "انسخ الرمز وأقرِن من عميل آخر باستخدام مضيف هذه الخدمة الخلفية القابل للوصول.",
  },
  "settings.connections.pairing.copyGroupAria": {
    en: "Copy selected endpoint",
    ar: "نسخ نقطة الوصول المحدّدة",
  },
  "settings.connections.pairing.copyUrlFor": {
    en: "Copy pairing URL for: {endpoint}",
    ar: "نسخ عنوان الإقران لـ: {endpoint}",
  },
  "settings.connections.pairing.chooseEndpoint": {
    en: "Choose endpoint to copy",
    ar: "اختر نقطة الوصول المراد نسخها",
  },
  "settings.connections.pairing.showLink": {
    en: "Show link",
    ar: "إظهار الرابط",
  },
  "settings.connections.pairing.showCode": {
    en: "Show code",
    ar: "إظهار الرمز",
  },
  "settings.connections.pairing.dialog.hostedTitle": {
    en: "Hosted app pairing link",
    ar: "رابط إقران التطبيق المُستضاف",
  },
  "settings.connections.pairing.dialog.hostedDescription": {
    en: "Clipboard copy is unavailable here. Open or manually copy this hosted app link on the device you want to connect.",
    ar: "النسخ إلى الحافظة غير متاح هنا. افتح رابط التطبيق المُستضاف أو انسخه يدويًا على الجهاز الذي تريد وصله.",
  },
  "settings.connections.pairing.dialog.linkDescription": {
    en: "Clipboard copy is unavailable here. Open or manually copy this full pairing URL on the device you want to connect.",
    ar: "النسخ إلى الحافظة غير متاح هنا. افتح عنوان الإقران الكامل أو انسخه يدويًا على الجهاز الذي تريد وصله.",
  },
  "settings.connections.pairing.dialog.codeDescription": {
    en: "Clipboard copy is unavailable here. Manually copy this code into another client.",
    ar: "النسخ إلى الحافظة غير متاح هنا. انسخ هذا الرمز يدويًا إلى عميل آخر.",
  },
  "settings.connections.pairing.revoking": {
    en: "Revoking…",
    ar: "يجري الإلغاء…",
  },
  "settings.connections.pairing.revoke": {
    en: "Revoke",
    ar: "إلغاء الوصول",
  },
  "settings.connections.pairing.defaultEndpointFallback": {
    en: "URL",
    ar: "URL",
  },
  "settings.connections.pairing.revokeFailed": {
    en: "Failed to revoke pairing link.",
    ar: "فشل إلغاء رابط الإقران.",
  },
  "settings.connections.pairing.revokeFailedTitle": {
    en: "Could not revoke pairing link",
    ar: "تعذّر إلغاء رابط الإقران",
  },

  // ---------------------------------------------------------------------------
  // Connections — authorized clients
  // ---------------------------------------------------------------------------
  "settings.connections.clients.connectedFor": {
    en: "Connected for {duration}",
    ar: "متصل منذ {duration}",
  },
  "settings.connections.clients.connected": {
    en: "Connected",
    ar: "متصل",
  },
  "settings.connections.clients.lastConnectedAt": {
    en: "Last connected at {time}",
    ar: "آخر اتصال في {time}",
  },
  "settings.connections.clients.notConnected": {
    en: "Not connected yet.",
    ar: "لم يتصل بعد.",
  },
  "settings.connections.clients.thisDevice": {
    en: "This device",
    ar: "هذا الجهاز",
  },
  "settings.connections.clients.revokeOthers": {
    en: "Revoke others",
    ar: "إلغاء وصول الآخرين",
  },
  "settings.connections.clients.createLink": {
    en: "Create link",
    ar: "إنشاء رابط",
  },
  "settings.connections.clients.createLinkTitle": {
    en: "Create pairing link",
    ar: "إنشاء رابط إقران",
  },
  "settings.connections.clients.createLinkDescription": {
    en: "Generate a one-time link that another device can use to pair with this backend as an authorized client.",
    ar: "أنشئ رابطًا لمرة واحدة يمكن لجهاز آخر استخدامه للإقران بهذه الخدمة الخلفية كعميل مُصرَّح له.",
  },
  "settings.connections.clients.createLinkFailed": {
    en: "Failed to create pairing URL.",
    ar: "فشل إنشاء عنوان الإقران.",
  },
  "settings.connections.clients.createLinkFailedTitle": {
    en: "Could not create pairing URL",
    ar: "تعذّر إنشاء عنوان الإقران",
  },
  "settings.connections.clients.clientLabelField": {
    en: "Client label (optional)",
    ar: "تسمية العميل (اختيارية)",
  },
  "settings.connections.clients.clientLabelPlaceholder": {
    en: "e.g. Living room iPad",
    ar: "مثال: iPad غرفة الجلوس",
  },
  "settings.connections.clients.permissions": {
    en: "Permissions",
    ar: "الصلاحيات",
  },
  "settings.connections.clients.permissionsDescription": {
    en: "Limit what the paired client can do.",
    ar: "حدّد ما يمكن للعميل المُقترن فعله.",
  },
  "settings.connections.clients.readOnly": {
    en: "Read only",
    ar: "قراءة فقط",
  },
  "settings.connections.clients.standard": {
    en: "Standard",
    ar: "قياسي",
  },
  "settings.connections.clients.selectPermission": {
    en: "Select at least one permission.",
    ar: "اختر صلاحية واحدة على الأقل.",
  },
  "settings.connections.clients.accessWriteWarning": {
    en: "This client can create or revoke access for other devices.",
    ar: "يمكن لهذا العميل منح وصول لأجهزة أخرى أو إلغاؤه.",
  },
  "settings.connections.clients.creating": {
    en: "Creating…",
    ar: "يجري الإنشاء…",
  },
  "settings.connections.clients.empty": {
    en: "No pairing links or client sessions.",
    ar: "لا توجد روابط إقران ولا جلسات عملاء.",
  },
  "settings.connections.clients.revokedOne": {
    en: "Revoked 1 other client",
    ar: "تم إلغاء وصول عميل واحد آخر",
  },
  "settings.connections.clients.revokedOther": {
    en: "Revoked {count} clients",
    ar: "تم إلغاء وصول {count} عملاء",
  },
  "settings.connections.clients.revokedDescription": {
    en: "Other paired clients will need a new pairing link before reconnecting.",
    ar: "ستحتاج العملاء المُقترنة الأخرى إلى رابط إقران جديد قبل إعادة الاتصال.",
  },
  "settings.connections.clients.revokeOthersFailed": {
    en: "Failed to revoke other clients.",
    ar: "فشل إلغاء وصول العملاء الآخرين.",
  },
  "settings.connections.clients.revokeOthersFailedTitle": {
    en: "Could not revoke other clients",
    ar: "تعذّر إلغاء وصول العملاء الآخرين",
  },
  "settings.connections.clients.revokeSessionFailed": {
    en: "Failed to revoke client access.",
    ar: "فشل إلغاء وصول العميل.",
  },
  "settings.connections.clients.revokeSessionFailedTitle": {
    en: "Could not revoke client access",
    ar: "تعذّر إلغاء وصول العميل",
  },

  // ---------------------------------------------------------------------------
  // Connections — advertised endpoints
  // ---------------------------------------------------------------------------
  "settings.connections.endpoint.setupRequired": {
    en: "Setup required",
    ar: "يحتاج إلى إعداد",
  },
  "settings.connections.endpoint.default": {
    en: "Default",
    ar: "افتراضي",
  },
  "settings.connections.endpoint.restarting": {
    en: "Restarting…",
    ar: "يجري إعادة التشغيل…",
  },
  "settings.connections.endpoint.setup": {
    en: "Setup",
    ar: "إعداد",
  },
  "settings.connections.endpoint.disable": {
    en: "Disable",
    ar: "تعطيل",
  },
  "settings.connections.endpoint.setDefault": {
    en: "Set as default",
    ar: "تعيين كافتراضي",
  },

  // ---------------------------------------------------------------------------
  // Connections — network access
  // ---------------------------------------------------------------------------
  "settings.connections.network.title": {
    en: "Network access",
    ar: "الوصول عبر الشبكة",
  },
  "settings.connections.network.enableAria": {
    en: "Enable network access",
    ar: "تمكين الوصول عبر الشبكة",
  },
  "settings.connections.network.reachableAt": {
    en: "Reachable at",
    ar: "يمكن الوصول إليه على",
  },
  "settings.connections.network.hide": {
    en: "Hide",
    ar: "إخفاء",
  },
  "settings.connections.network.reachableAtUrl": {
    en: "Reachable at {url}",
    ar: "يمكن الوصول إليه على {url}",
  },
  "settings.connections.network.exposedWithHost": {
    en: "Exposed on all interfaces. Pairing links use {host}.",
    ar: "مكشوف على جميع الواجهات. تستخدم روابط الإقران {host}.",
  },
  "settings.connections.network.exposedAll": {
    en: "Exposed on all interfaces.",
    ar: "مكشوف على جميع الواجهات.",
  },
  "settings.connections.network.localOnly": {
    en: "Limited to this machine.",
    ar: "مقصور على هذا الجهاز.",
  },
  "settings.connections.network.loading": {
    en: "Loading…",
    ar: "جارٍ التحميل…",
  },
  "settings.connections.network.remoteConfigured": {
    en: "This backend is already configured for remote access. Network exposure changes must be made where the server is launched.",
    ar: "هذه الخدمة الخلفية مهيّأة أصلًا للوصول البعيد. يجب تغيير كشف الشبكة من الموضع الذي يُشغَّل فيه الخادم.",
  },
  "settings.connections.network.loopbackOnly": {
    en: "This backend is only reachable on this machine. Restart it with a non-loopback host to enable remote pairing.",
    ar: "لا يمكن الوصول إلى هذه الخدمة الخلفية إلا من هذا الجهاز. أعد تشغيلها بمضيف غير loopback لتمكين الإقران البعيد.",
  },
  "settings.connections.network.disabledTooltip": {
    en: "Network exposure changes restart the backend and must be controlled where the server process is launched.",
    ar: "تغيير كشف الشبكة يُعيد تشغيل الخدمة الخلفية، ويجب التحكّم فيه من الموضع الذي تُشغَّل فيه عملية الخادم.",
  },
  "settings.connections.network.enableTitle": {
    en: "Enable network access?",
    ar: "تمكين الوصول عبر الشبكة؟",
  },
  "settings.connections.network.disableTitle": {
    en: "Disable network access?",
    ar: "تعطيل الوصول عبر الشبكة؟",
  },
  "settings.connections.network.enableDescription": {
    en: "T3 Code will restart to expose this environment over the network.",
    ar: "سيُعاد تشغيل T3 Code لكشف هذه البيئة على الشبكة.",
  },
  "settings.connections.network.disableDescription": {
    en: "T3 Code will restart and limit this environment back to this machine.",
    ar: "سيُعاد تشغيل T3 Code وسيقصر هذه البيئة على هذا الجهاز مرة أخرى.",
  },
  "settings.connections.network.restarting": {
    en: "Restarting…",
    ar: "يجري إعادة التشغيل…",
  },
  "settings.connections.network.restartEnable": {
    en: "Restart and enable",
    ar: "إعادة التشغيل والتمكين",
  },
  "settings.connections.network.restartDisable": {
    en: "Restart and disable",
    ar: "إعادة التشغيل والتعطيل",
  },
  "settings.connections.network.updateFailed": {
    en: "Failed to update network exposure.",
    ar: "فشل تحديث كشف الشبكة.",
  },
  "settings.connections.network.updateFailedTitle": {
    en: "Could not update network access",
    ar: "تعذّر تحديث الوصول عبر الشبكة",
  },

  // ---------------------------------------------------------------------------
  // Connections — Tailscale
  // ---------------------------------------------------------------------------
  "settings.connections.tailscale.setupDescription": {
    en: "Use Tailscale Serve to expose this backend through a MagicDNS HTTPS URL.",
    ar: "استخدم Tailscale Serve لكشف هذه الخدمة الخلفية عبر عنوان HTTPS من MagicDNS.",
  },
  "settings.connections.tailscale.startDescription": {
    en: "Start Tailscale to set up HTTPS access through MagicDNS.",
    ar: "شغّل Tailscale لإعداد وصول HTTPS عبر MagicDNS.",
  },
  "settings.connections.tailscale.enableAria": {
    en: "Enable Tailscale HTTPS",
    ar: "تمكين Tailscale HTTPS",
  },
  "settings.connections.tailscale.disableTitle": {
    en: "Disable Tailscale HTTPS?",
    ar: "تعطيل Tailscale HTTPS؟",
  },
  "settings.connections.tailscale.disableDescription": {
    en: "T3 Code will restart the local backend without Tailscale Serve.",
    ar: "سيُعيد T3 Code تشغيل الخدمة الخلفية المحلية بدون Tailscale Serve.",
  },
  "settings.connections.tailscale.setupTitle": {
    en: "Set up Tailscale HTTPS?",
    ar: "إعداد Tailscale HTTPS؟",
  },
  "settings.connections.tailscale.setupDialogDescription": {
    en: "T3 Code will restart the local backend with Tailscale Serve enabled and ask Tailscale to proxy HTTPS traffic to this backend.",
    ar: "سيُعيد T3 Code تشغيل الخدمة الخلفية المحلية مع تمكين Tailscale Serve، وسيطلب من Tailscale توجيه حركة HTTPS إليها.",
  },
  "settings.connections.tailscale.portLabel": {
    en: "HTTPS port",
    ar: "منفذ HTTPS",
  },
  "settings.connections.tailscale.portInvalid": {
    en: "Enter a port from 1 to 65535.",
    ar: "أدخل منفذًا من 1 إلى 65535.",
  },
  "settings.connections.tailscale.endpointLabel": {
    en: "HTTPS endpoint",
    ar: "نقطة وصول HTTPS",
  },
  "settings.connections.tailscale.pendingEndpoint": {
    en: "Pending MagicDNS endpoint",
    ar: "في انتظار نقطة وصول MagicDNS",
  },
  "settings.connections.tailscale.enable": {
    en: "Enable",
    ar: "تمكين",
  },
  "settings.connections.tailscale.configureFailed": {
    en: "Failed to configure Tailscale HTTPS.",
    ar: "فشل إعداد Tailscale HTTPS.",
  },
  "settings.connections.tailscale.configureFailedTitle": {
    en: "Could not set up Tailscale HTTPS",
    ar: "تعذّر إعداد Tailscale HTTPS",
  },
  "settings.connections.tailscale.disableFailed": {
    en: "Failed to disable Tailscale HTTPS.",
    ar: "فشل تعطيل Tailscale HTTPS.",
  },
  "settings.connections.tailscale.disableFailedTitle": {
    en: "Could not disable Tailscale HTTPS",
    ar: "تعذّر تعطيل Tailscale HTTPS",
  },

  // ---------------------------------------------------------------------------
  // Connections — WSL backend
  // ---------------------------------------------------------------------------
  "settings.connections.wsl.title": {
    en: "WSL backend",
    ar: "خدمة WSL الخلفية",
  },
  "settings.connections.wsl.loadErrorDescription": {
    en: "Couldn't load the WSL backend state.",
    ar: "تعذّر تحميل حالة خدمة WSL الخلفية.",
  },
  "settings.connections.wsl.retrying": {
    en: "Retrying…",
    ar: "يجري إعادة المحاولة…",
  },
  "settings.connections.wsl.retry": {
    en: "Retry",
    ar: "إعادة المحاولة",
  },
  "settings.connections.wsl.unavailableDescription": {
    en: "WSL is no longer available, so the Windows backend is running instead. Switch off the WSL backend to clear this preference.",
    ar: "لم يعد WSL متاحًا، لذا تعمل خدمة Windows الخلفية بدلًا منه. أوقف خدمة WSL الخلفية لمسح هذا التفضيل.",
  },
  "settings.connections.wsl.switchToWindows": {
    en: "Switch to Windows",
    ar: "التبديل إلى Windows",
  },
  "settings.connections.wsl.defaultDistro": {
    en: "Default distro",
    ar: "التوزيعة الافتراضية",
  },
  "settings.connections.wsl.distroDefaultSuffix": {
    en: "(default)",
    ar: "(الافتراضية)",
  },
  "settings.connections.wsl.description": {
    en: "Run a second backend inside a WSL distro alongside the Windows one. Pick a distro to start it; pick Off to stop it. Projects opened against the WSL backend live on the Linux side; Windows projects stay where they are.",
    ar: "شغّل خدمة خلفية ثانية داخل توزيعة WSL جنبًا إلى جنب مع خدمة Windows. اختر توزيعة لتشغيلها، أو «معطّل» لإيقافها. تعيش المشاريع المفتوحة على خدمة WSL في جانب Linux، وتبقى مشاريع Windows في موضعها.",
  },
  "settings.connections.wsl.preflightError": {
    en: "WSL backend couldn't start: {error}",
    ar: "تعذّر تشغيل خدمة WSL الخلفية: {error}",
  },
  "settings.connections.wsl.onlyTitle": {
    en: "WSL only",
    ar: "WSL فقط",
  },
  "settings.connections.wsl.onlyDescription": {
    en: "Stop the Windows backend and run only the WSL backend. Useful if you develop entirely inside WSL and don't want a second backend process. T3 Code restarts when you change this.",
    ar: "أوقف خدمة Windows الخلفية وشغّل خدمة WSL وحدها. مفيد إن كنت تعمل بالكامل داخل WSL ولا تريد عملية خلفية ثانية. يُعاد تشغيل T3 Code عند تغيير هذا الخيار.",
  },
  "settings.connections.wsl.onlyAria": {
    en: "Run WSL only",
    ar: "تشغيل WSL فقط",
  },
  "settings.connections.wsl.confirm.disableWslOnlyTitle": {
    en: "Turn off WSL and switch back to Windows?",
    ar: "إيقاف WSL والعودة إلى Windows؟",
  },
  "settings.connections.wsl.confirm.disableWslOnlyDescription": {
    en: "T3 Code will restart on the Windows backend. Threads and projects opened against WSL stay safe inside the distro and become available again when you re-enable WSL.",
    ar: "سيُعاد تشغيل T3 Code على خدمة Windows الخلفية. تبقى المحادثات والمشاريع المفتوحة على WSL سليمة داخل التوزيعة وتعود للتوفّر عند إعادة تمكين WSL.",
  },
  "settings.connections.wsl.confirm.disableTitle": {
    en: "Disable WSL backend?",
    ar: "تعطيل خدمة WSL الخلفية؟",
  },
  "settings.connections.wsl.confirm.disableDescription": {
    en: "The WSL backend will stop. Threads and projects opened against WSL stay safe inside the distro, but they'll be unavailable in T3 Code until you re-enable WSL.",
    ar: "ستتوقّف خدمة WSL الخلفية. تبقى المحادثات والمشاريع المفتوحة على WSL سليمة داخل التوزيعة، لكنها ستكون غير متاحة في T3 Code حتى تعيد تمكين WSL.",
  },
  "settings.connections.wsl.confirm.distroTitle": {
    en: "Switch WSL distro?",
    ar: "تبديل توزيعة WSL؟",
  },
  "settings.connections.wsl.confirm.distroDescription": {
    en: "T3 Code will restart the WSL backend on the new distro. Sessions still running on the current distro will be interrupted.",
    ar: "سيُعيد T3 Code تشغيل خدمة WSL الخلفية على التوزيعة الجديدة. ستُقطع الجلسات التي لا تزال تعمل على التوزيعة الحالية.",
  },
  "settings.connections.wsl.confirm.enableTitle": {
    en: "Start the WSL backend",
    ar: "تشغيل خدمة WSL الخلفية",
  },
  "settings.connections.wsl.confirm.enableDescription": {
    en: "Run the WSL backend alongside the Windows one, or stop the Windows backend and use only WSL? You can change this later from Settings.",
    ar: "أتريد تشغيل خدمة WSL الخلفية جنبًا إلى جنب مع خدمة Windows، أم إيقاف خدمة Windows واستخدام WSL وحده؟ يمكنك تغيير ذلك لاحقًا من الإعدادات.",
  },
  "settings.connections.wsl.confirm.onlyOnTitle": {
    en: "Run only the WSL backend?",
    ar: "تشغيل خدمة WSL الخلفية وحدها؟",
  },
  "settings.connections.wsl.confirm.onlyOnDescription": {
    en: "T3 Code will restart and start only the WSL backend. Your Windows-side projects won't be accessible until you turn this off again.",
    ar: "سيُعاد تشغيل T3 Code وسيشغّل خدمة WSL الخلفية وحدها. لن تكون مشاريع جانب Windows متاحة حتى تُعطّل هذا الخيار مرة أخرى.",
  },
  "settings.connections.wsl.confirm.onlyOffTitle": {
    en: "Re-enable the Windows backend?",
    ar: "إعادة تمكين خدمة Windows الخلفية؟",
  },
  "settings.connections.wsl.confirm.onlyOffDescription": {
    en: "T3 Code will restart and bring the Windows backend back up alongside WSL.",
    ar: "سيُعاد تشغيل T3 Code وستعود خدمة Windows الخلفية للعمل جنبًا إلى جنب مع WSL.",
  },
  "settings.connections.wsl.applying": {
    en: "Applying…",
    ar: "يجري التطبيق…",
  },
  "settings.connections.wsl.useOnlyWsl": {
    en: "Use only WSL",
    ar: "استخدام WSL فقط",
  },
  "settings.connections.wsl.runBoth": {
    en: "Run both backends",
    ar: "تشغيل الخدمتين الخلفيتين",
  },
  "settings.connections.wsl.disableWsl": {
    en: "Disable WSL",
    ar: "تعطيل WSL",
  },
  "settings.connections.wsl.switchDistro": {
    en: "Switch distro",
    ar: "تبديل التوزيعة",
  },
  "settings.connections.wsl.updateFailed": {
    en: "Failed to update WSL backend.",
    ar: "فشل تحديث خدمة WSL الخلفية.",
  },
  "settings.connections.wsl.updateFailedTitle": {
    en: "Could not change WSL backend",
    ar: "تعذّر تغيير خدمة WSL الخلفية",
  },

  // ---------------------------------------------------------------------------
  // Connections — T3 Connect (relay)
  // ---------------------------------------------------------------------------
  "settings.connections.cloud.enableAria": {
    en: "Enable T3 Connect",
    ar: "تمكين T3 Connect",
  },
  "settings.connections.cloud.signInRequired": {
    en: "Sign in to T3 Connect to manage this environment.",
    ar: "سجّل الدخول إلى T3 Connect لإدارة هذه البيئة.",
  },
  "settings.connections.cloud.noPermission": {
    en: "Your session does not have permission to manage T3 Connect access.",
    ar: "لا تملك جلستك صلاحية إدارة الوصول عبر T3 Connect.",
  },
  "settings.connections.cloud.linkedTitle": {
    en: "T3 Connect linked",
    ar: "تم الربط بـ T3 Connect",
  },
  "settings.connections.cloud.tunnelDisabledTitle": {
    en: "T3 Connect tunnel disabled",
    ar: "تم تعطيل نفق T3 Connect",
  },
  "settings.connections.cloud.unlinkedTitle": {
    en: "T3 Connect unlinked",
    ar: "تم فصل الربط بـ T3 Connect",
  },
  "settings.connections.cloud.linkedDescription": {
    en: "This environment is available through T3 Connect.",
    ar: "هذه البيئة متاحة عبر T3 Connect.",
  },
  "settings.connections.cloud.tunnelDisabledDescription": {
    en: "The managed tunnel was removed. Agent activity publishing stays on.",
    ar: "تم إزالة النفق المُدار. يبقى نشر نشاط الوكيل مُفعّلًا.",
  },
  "settings.connections.cloud.unlinkedDescription": {
    en: "This environment is no longer available through T3 Connect.",
    ar: "لم تعد هذه البيئة متاحة عبر T3 Connect.",
  },
  "settings.connections.cloud.activityEnabledTitle": {
    en: "Agent activity enabled",
    ar: "تم تمكين نشاط الوكيل",
  },
  "settings.connections.cloud.activityDisabledTitle": {
    en: "Agent activity disabled",
    ar: "تم تعطيل نشاط الوكيل",
  },
  "settings.connections.cloud.activityEnabledDescription": {
    en: "This environment publishes agent activity to your mobile clients.",
    ar: "تنشر هذه البيئة نشاط الوكيل إلى عملائك على الأجهزة المحمولة.",
  },
  "settings.connections.cloud.activityDisabledDescription": {
    en: "This environment will stop publishing agent activity.",
    ar: "ستتوقّف هذه البيئة عن نشر نشاط الوكيل.",
  },
  "settings.connections.cloud.descriptionActive": {
    en: "This environment is available to your other devices through T3 Connect.",
    ar: "هذه البيئة متاحة لأجهزتك الأخرى عبر T3 Connect.",
  },
  "settings.connections.cloud.descriptionInactive": {
    en: "Make this environment available to your other devices through T3 Connect.",
    ar: "اجعل هذه البيئة متاحة لأجهزتك الأخرى عبر T3 Connect.",
  },
  "settings.connections.cloud.publishTitle": {
    en: "Publish agent activity",
    ar: "نشر نشاط الوكيل",
  },
  "settings.connections.cloud.publishDescription": {
    en: "Send activity from this environment to your mobile clients for push notifications and Live Activities. Works without a T3 Connect tunnel.",
    ar: "أرسل نشاط هذه البيئة إلى عملائك على الأجهزة المحمولة للإشعارات الفورية و Live Activities. يعمل دون نفق T3 Connect.",
  },
  "settings.connections.cloud.publishAria": {
    en: "Publish agent activity to mobile clients",
    ar: "نشر نشاط الوكيل إلى الأجهزة المحمولة",
  },

  // ---------------------------------------------------------------------------
  // Connections — saved / remote environments
  // ---------------------------------------------------------------------------
  "settings.connections.remote.emptyTitle": {
    en: "No saved remote environments",
    ar: "لا توجد بيئات بعيدة محفوظة",
  },
  "settings.connections.remote.emptyDescriptionCloud": {
    en: "Click “Add environment” to pair another environment, or connect one from T3 Connect.",
    ar: "انقر «إضافة بيئة» لإقران بيئة أخرى، أو اتصل ببيئة من T3 Connect.",
  },
  "settings.connections.remote.emptyDescription": {
    en: "Click “Add environment” to pair another environment.",
    ar: "انقر «إضافة بيئة» لإقران بيئة أخرى.",
  },
  "settings.connections.saved.traceIdCopied": {
    en: "Trace ID copied",
    ar: "تم نسخ معرّف التتبّع",
  },
  "settings.connections.saved.traceIdCopyFailed": {
    en: "Could not copy trace ID",
    ar: "تعذّر نسخ معرّف التتبّع",
  },
  "settings.connections.saved.copyTraceId": {
    en: "Copy trace ID",
    ar: "نسخ معرّف التتبّع",
  },
  "settings.connections.saved.traceIdTarget": {
    en: "trace ID",
    ar: "معرّف التتبّع",
  },
  "settings.connections.saved.sshMeta": {
    en: "SSH {target}",
    ar: "SSH {target}",
  },
  "settings.connections.saved.managedAbove": {
    en: "Managed above",
    ar: "يُدار أعلاه",
  },
  "settings.connections.saved.wslManagedTooltip": {
    en: "The WSL backend is managed by the WSL setting above — turn it on or off there.",
    ar: "تُدار خدمة WSL الخلفية من إعداد WSL أعلاه — فعّلها أو عطّلها من هناك.",
  },
  "settings.connections.saved.removing": {
    en: "Removing…",
    ar: "يجري الإزالة…",
  },
  "settings.connections.saved.remove": {
    en: "Remove",
    ar: "إزالة",
  },
  "settings.connections.saved.disconnecting": {
    en: "Disconnecting…",
    ar: "يجري قطع الاتصال…",
  },
  "settings.connections.saved.disconnect": {
    en: "Disconnect",
    ar: "قطع الاتصال",
  },
  "settings.connections.saved.connecting": {
    en: "Connecting…",
    ar: "يجري الاتصال…",
  },
  "settings.connections.saved.connect": {
    en: "Connect",
    ar: "اتصال",
  },
  "settings.connections.saved.addFailed": {
    en: "Failed to add backend.",
    ar: "فشل إضافة الخدمة الخلفية.",
  },
  "settings.connections.saved.addFailedTitle": {
    en: "Could not add backend",
    ar: "تعذّرت إضافة الخدمة الخلفية",
  },
  "settings.connections.saved.addedTitle": {
    en: "Backend added",
    ar: "تمت إضافة الخدمة الخلفية",
  },
  "settings.connections.saved.addedDescription": {
    en: "The environment is saved and will reconnect on app startup.",
    ar: "تم حفظ البيئة وسيُعاد الاتصال بها عند تشغيل التطبيق.",
  },
  "settings.connections.saved.connectFailed": {
    en: "Failed to connect backend.",
    ar: "فشل الاتصال بالخدمة الخلفية.",
  },
  "settings.connections.saved.connectFailedTitle": {
    en: "Could not connect backend",
    ar: "تعذّر الاتصال بالخدمة الخلفية",
  },
  "settings.connections.saved.removeFailed": {
    en: "Failed to remove backend.",
    ar: "فشل إزالة الخدمة الخلفية.",
  },
  "settings.connections.saved.removeFailedTitle": {
    en: "Could not remove backend",
    ar: "تعذّرت إزالة الخدمة الخلفية",
  },

  // ---------------------------------------------------------------------------
  // Connections — add environment dialog
  // ---------------------------------------------------------------------------
  "settings.connections.add.dialogTitle": {
    en: "Add Environment",
    ar: "إضافة بيئة",
  },
  "settings.connections.add.dialogDescription": {
    en: "Pair another environment to this client.",
    ar: "أقرِن بيئة أخرى بهذا العميل.",
  },
  "settings.connections.add.addEnvironment": {
    en: "Add environment",
    ar: "إضافة بيئة",
  },
  "settings.connections.add.adding": {
    en: "Adding…",
    ar: "يجري الإضافة…",
  },
  "settings.connections.add.remoteTitle": {
    en: "Remote link",
    ar: "ربط بعيد",
  },
  "settings.connections.add.remoteDescription": {
    en: "Enter a backend host and pairing code.",
    ar: "أدخل مضيف الخدمة الخلفية ورمز الإقران.",
  },
  "settings.connections.add.sshDescription": {
    en: "Use local SSH config, agent, and tunnels for the backend.",
    ar: "استخدم إعدادات SSH المحلية ووكيلها وأنفاقها للوصول إلى الخدمة الخلفية.",
  },
  "settings.connections.add.hostLabel": {
    en: "Host",
    ar: "المضيف",
  },
  "settings.connections.add.pairingCodeLabel": {
    en: "Pairing code",
    ar: "رمز الإقران",
  },
  "settings.connections.add.pasteHint": {
    en: "Paste a full pairing URL here to fill both fields automatically.",
    ar: "الصق عنوان إقران كاملًا هنا لتُملأ الحقلان تلقائيًا.",
  },
  "settings.connections.add.sshHostLabel": {
    en: "SSH host or alias",
    ar: "مضيف SSH أو اسمه المستعار",
  },
  "settings.connections.add.sshHostPlaceholder": {
    en: "Search hosts or type devbox",
    ar: "ابحث في المضيفين أو اكتب devbox",
  },
  "settings.connections.add.usernameLabel": {
    en: "Username",
    ar: "اسم المستخدم",
  },
  "settings.connections.add.portLabel": {
    en: "Port",
    ar: "المنفذ",
  },
  "settings.connections.add.suggestedHosts": {
    en: "Suggested hosts",
    ar: "مضيفون مقترحون",
  },
  "settings.connections.add.suggestedHostsSource": {
    en: "From SSH config and known hosts",
    ar: "من إعدادات SSH والمضيفين المعروفين",
  },
  "settings.connections.add.refresh": {
    en: "Refresh",
    ar: "تحديث",
  },
  "settings.connections.add.noNewHosts": {
    en: "No new SSH hosts were discovered.",
    ar: "لم يُكتشف أي مضيف SSH جديد.",
  },

  // ---------------------------------------------------------------------------
  // Connections — SSH
  // ---------------------------------------------------------------------------
  "settings.connections.ssh.hostRequired": {
    en: "SSH host or alias is required.",
    ar: "مضيف SSH أو اسمه المستعار مطلوب.",
  },
  "settings.connections.ssh.portRange": {
    en: "SSH port must be between 1 and 65535.",
    ar: "يجب أن يكون منفذ SSH بين 1 و 65535.",
  },
  "settings.connections.ssh.connectFailed": {
    en: "Failed to connect SSH host.",
    ar: "فشل الاتصال بمضيف SSH.",
  },
  "settings.connections.ssh.enterHost": {
    en: "Enter a backend host.",
    ar: "أدخل مضيف الخدمة الخلفية.",
  },
  "settings.connections.ssh.enterCode": {
    en: "Enter a pairing code.",
    ar: "أدخل رمز الإقران.",
  },
  "settings.connections.ssh.connectedTitle": {
    en: "Environment connected",
    ar: "تم الاتصال بالبيئة",
  },
  "settings.connections.ssh.reconnectedTitle": {
    en: "Environment reconnected",
    ar: "تم إعادة الاتصال بالبيئة",
  },
  "settings.connections.ssh.connectedDescription": {
    en: "{name} is ready over an SSH-managed tunnel.",
    ar: "{name} جاهزة عبر نفق مُدار بـ SSH.",
  },

  // ---------------------------------------------------------------------------
  // Source control
  // ---------------------------------------------------------------------------
  "settings.sourceControl.section.serverEnvironment": {
    en: "Server environment",
    ar: "بيئة الخادم",
  },
  "settings.sourceControl.section.versionControl": {
    en: "Version Control",
    ar: "إدارة الإصدارات",
  },
  "settings.sourceControl.section.providers": {
    en: "Source Control Providers",
    ar: "مزوّدو إدارة الإصدارات",
  },
  "settings.sourceControl.policyTooltipAria": {
    en: "Background policy details",
    ar: "تفاصيل سياسة الخلفية",
  },
  "settings.sourceControl.auth.authenticated": {
    en: "Authenticated",
    ar: "مُصادَق عليه",
  },
  "settings.sourceControl.auth.notAuthenticated": {
    en: "Not authenticated",
    ar: "غير مُصادَق عليه",
  },
  "settings.sourceControl.auth.unknown": {
    en: "Status unknown",
    ar: "الحالة غير معروفة",
  },
  "settings.sourceControl.account.toggle": {
    en: "Toggle source control account visibility",
    ar: "إظهار حساب إدارة الإصدارات أو إخفاؤه",
  },
  "settings.sourceControl.account.reveal": {
    en: "Click to reveal account",
    ar: "انقر لإظهار الحساب",
  },
  "settings.sourceControl.account.hide": {
    en: "Click to hide account",
    ar: "انقر لإخفاء الحساب",
  },
  "settings.sourceControl.summary.comingSoon": {
    en: "Support for {label} is coming soon.",
    ar: "دعم {label} قريبًا.",
  },
  "settings.sourceControl.summary.notAvailable": {
    en: "Not available on this server: {hint}",
    ar: "غير متاح على هذا الخادم: {hint}",
  },
  "settings.sourceControl.summary.as": {
    en: "as",
    ar: "بالحساب",
  },
  "settings.sourceControl.summary.availableHint": {
    en: "Available. {hint}",
    ar: "متاح. {hint}",
  },
  "settings.sourceControl.summary.unauthenticated.prefix": {
    en: "{label} is not authenticated on this server. Sign in or configure credentials using the",
    ar: "{label} غير مُصادَق عليه على هذا الخادم. سجّل الدخول أو اضبط بيانات الاعتماد باستخدام أداة",
  },
  "settings.sourceControl.summary.unauthenticated.suffix": {
    en: "tool on the server host to enable change request features.",
    ar: "على مضيف الخادم لتمكين ميزات طلبات التغيير.",
  },
  "settings.sourceControl.summary.couldNotVerify": {
    en: "Could not verify {label}. {hint}",
    ar: "تعذّر التحقّق من {label}. {hint}",
  },
  "settings.sourceControl.summary.available": {
    en: "Available",
    ar: "متاح",
  },
  "settings.sourceControl.comingSoonBadge": {
    en: "Coming Soon",
    ar: "قريبًا",
  },
  "settings.sourceControl.toggleDetails": {
    en: "Toggle {label} details",
    ar: "إظهار تفاصيل {label} أو إخفاؤها",
  },
  "settings.sourceControl.availabilityAria": {
    en: "{label} availability",
    ar: "توفّر {label}",
  },
  "settings.sourceControl.fetchInterval.title": {
    en: "Fetch interval",
    ar: "فترة Fetch",
  },
  "settings.sourceControl.fetchInterval.policy": {
    en: "This interval is configured for Git only. The shared Background activity policy still decides whether Git refreshes may run when the timer fires. Custom intervals appear as Advanced in General settings.",
    ar: "تُضبط هذه الفترة لـ Git فقط. تبقى سياسة النشاط في الخلفية المشتركة هي التي تقرّر ما إذا كان تحديث Git مسموحًا عند انتهاء المؤقّت. تظهر الفترات المخصّصة باسم «متقدّم» في الإعدادات العامة.",
  },
  "settings.sourceControl.fetchInterval.description": {
    en: "Refresh remote branch status in the background. Set this to 0 seconds if Git credentials or security keys should only be prompted by explicit Git actions.",
    ar: "تحديث حالة الفروع البعيدة في الخلفية. اضبطها على 0 ثانية إذا أردت ألّا يُطلب إدخال بيانات اعتماد Git أو مفاتيح الأمان إلا عند تنفيذ أوامر Git صريحة.",
  },
  "settings.sourceControl.fetchInterval.decrease": {
    en: "Decrease fetch interval",
    ar: "تقليل فترة Fetch",
  },
  "settings.sourceControl.fetchInterval.input": {
    en: "Automatic Git fetch interval in seconds",
    ar: "فترة Fetch التلقائي في Git بالثواني",
  },
  "settings.sourceControl.fetchInterval.increase": {
    en: "Increase fetch interval",
    ar: "زيادة فترة Fetch",
  },
  "settings.sourceControl.fetchInterval.seconds": {
    en: "seconds",
    ar: "ثانية",
  },
  "settings.sourceControl.empty.errorTitle": {
    en: "Could not scan the server environment",
    ar: "تعذّر فحص بيئة الخادم",
  },
  "settings.sourceControl.empty.title": {
    en: "Nothing detected yet",
    ar: "لم يُكتشف شيء بعد",
  },
  "settings.sourceControl.empty.description": {
    en: "Install Git on the server, add optional hosting integrations or credentials your workspace needs, then rescan.",
    ar: "ثبّت Git على الخادم، وأضف تكاملات الاستضافة أو بيانات الاعتماد التي تحتاجها مساحة عملك، ثم أعد الفحص.",
  },
  "settings.sourceControl.empty.scan": {
    en: "Scan",
    ar: "فحص",
  },
  "settings.sourceControl.rescanAria": {
    en: "Rescan server environment",
    ar: "إعادة فحص بيئة الخادم",
  },
  "settings.sourceControl.rescanTooltip": {
    en: "Rescan Git and hosting integrations",
    ar: "إعادة فحص Git وتكاملات الاستضافة",
  },
} as const satisfies StringModule;
