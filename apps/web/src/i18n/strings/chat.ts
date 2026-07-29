import type { StringModule } from "./types";

export const chat = {
  "chat.scrollToEnd": {
    en: "Scroll to end",
    ar: "الانتقال إلى النهاية",
  },

  // ----------------------------------------------------------------------
  // Composer: prompt editor
  // ----------------------------------------------------------------------
  "chat.composer.placeholder": {
    en: "Ask anything, @tag files/folders, $use skills, or / for commands",
    ar: "اسأل عن أي شيء، أو @ للملفات والمجلدات، أو $ للمهارات، أو / للأوامر",
  },
  "chat.composer.placeholder.short": {
    en: "Ask anything...",
    ar: "اسأل عن أي شيء…",
  },
  "chat.composer.placeholder.approval": {
    en: "Resolve this approval request to continue",
    ar: "عالِج طلب الموافقة هذا للمتابعة",
  },
  "chat.composer.placeholder.customAnswer": {
    en: "Type your own answer, or leave this blank to use the selected option",
    ar: "اكتب إجابتك، أو اترك الحقل فارغًا لاستخدام الخيار المحدد",
  },
  "chat.composer.placeholder.planFeedback": {
    en: "Add feedback to refine the plan, or leave this blank to implement it",
    ar: "أضف ملاحظات لتحسين الخطة، أو اترك الحقل فارغًا لتنفيذها",
  },
  "chat.composer.placeholder.projectRequired": {
    en: "Choose a project above to start a thread",
    ar: "اختر مشروعًا أعلاه لبدء محادثة",
  },
  "chat.composer.placeholder.noProvider": {
    en: "Enable a provider in Settings to send a message",
    ar: "فعّل مزوّدًا من الإعدادات لإرسال رسالة",
  },
  "chat.composer.placeholder.disconnected": {
    en: "Ask for follow-up changes or attach images",
    ar: "اطلب تغييرات إضافية أو أرفق صورًا",
  },
  "chat.composer.noProviderShort": {
    en: "Enable a provider in Settings",
    ar: "فعّل مزوّدًا من الإعدادات",
  },
  "chat.composer.noProviderAvailable": {
    en: "No provider available",
    ar: "لا يوجد مزوّد متاح",
  },
  "chat.composer.expand": {
    en: "Expand composer",
    ar: "توسيع مربع الكتابة",
  },
  "chat.composer.writeCustomAnswer": {
    en: "Write custom answer",
    ar: "اكتب إجابة مخصصة",
  },
  "chat.composer.sendMessage": {
    en: "Send message",
    ar: "إرسال الرسالة",
  },
  "chat.composer.preparingWorktree": {
    en: "Preparing worktree...",
    ar: "جارٍ تهيئة شجرة العمل…",
  },

  // ----------------------------------------------------------------------
  // Composer: access (runtime) mode
  // ----------------------------------------------------------------------
  "chat.composer.runtimeMode.label": {
    en: "Runtime mode",
    ar: "وضع التشغيل",
  },
  "chat.composer.runtimeMode.supervised": {
    en: "Supervised",
    ar: "مراقَب",
  },
  "chat.composer.runtimeMode.supervised.description": {
    en: "Ask before commands and file changes.",
    ar: "السؤال قبل تنفيذ الأوامر وتغيير الملفات.",
  },
  "chat.composer.runtimeMode.autoAcceptEdits": {
    en: "Auto-accept edits",
    ar: "قبول التعديلات تلقائيًا",
  },
  "chat.composer.runtimeMode.autoAcceptEdits.description": {
    en: "Auto-approve edits, ask before other actions.",
    ar: "الموافقة على التعديلات تلقائيًا، والسؤال قبل الإجراءات الأخرى.",
  },
  "chat.composer.runtimeMode.auto": {
    en: "Auto",
    ar: "تلقائي",
  },
  "chat.composer.runtimeMode.auto.description": {
    en: "An AI reviewer approves routine actions; risky ones still ask.",
    ar: "مراجع آلي يوافق على الإجراءات المعتادة، والمحفوفة بالمخاطر تبقى بحاجة إلى موافقتك.",
  },
  "chat.composer.runtimeMode.fullAccess": {
    en: "Full access",
    ar: "وصول كامل",
  },
  "chat.composer.runtimeMode.fullAccess.description": {
    en: "Allow commands and edits without prompts.",
    ar: "السماح بالأوامر والتعديلات دون سؤال.",
  },

  // ----------------------------------------------------------------------
  // Composer: plan / build mode + plan sidebar
  // ----------------------------------------------------------------------
  "chat.composer.mode.plan": {
    en: "Plan",
    ar: "تخطيط",
  },
  "chat.composer.mode.build": {
    en: "Build",
    ar: "بناء",
  },
  "chat.composer.mode.chat": {
    en: "Chat",
    ar: "محادثة",
  },
  "chat.composer.mode.section": {
    en: "Mode",
    ar: "الوضع",
  },
  "chat.composer.access.section": {
    en: "Access",
    ar: "الصلاحيات",
  },
  "chat.composer.mode.planTooltip": {
    en: "Plan mode — click to return to normal build mode",
    ar: "وضع التخطيط — انقر للعودة إلى وضع البناء المعتاد",
  },
  "chat.composer.mode.defaultTooltip": {
    en: "Default mode — click to enter plan mode",
    ar: "الوضع الافتراضي — انقر للانتقال إلى وضع التخطيط",
  },
  "chat.composer.moreControls": {
    en: "More composer controls",
    ar: "المزيد من عناصر التحكم",
  },
  "chat.composer.planSidebar.hide": {
    en: "Hide {label} sidebar",
    ar: "إخفاء شريط {label}",
  },
  "chat.composer.planSidebar.show": {
    en: "Show {label} sidebar",
    ar: "إظهار شريط {label}",
  },
  "chat.planSidebar.plan": {
    en: "Plan",
    ar: "الخطة",
  },
  "chat.planSidebar.tasks": {
    en: "Tasks",
    ar: "المهام",
  },

  // ----------------------------------------------------------------------
  // Composer: trigger menu
  // ----------------------------------------------------------------------
  "chat.composer.slash.model.description": {
    en: "Switch response model for this thread",
    ar: "تغيير نموذج الردّ لهذه المحادثة",
  },
  "chat.composer.slash.plan.description": {
    en: "Switch this thread into plan mode",
    ar: "تحويل هذه المحادثة إلى وضع التخطيط",
  },
  "chat.composer.slash.default.description": {
    en: "Switch this thread back to normal build mode",
    ar: "إرجاع هذه المحادثة إلى وضع البناء المعتاد",
  },
  "chat.composer.slash.providerCommand": {
    en: "Run provider command",
    ar: "تشغيل أمر المزوّد",
  },
  "chat.composer.skill.providerSkill": {
    en: "Run provider skill",
    ar: "تشغيل مهارة المزوّد",
  },
  "chat.composer.skill.scope": {
    en: "{scope} skill",
    ar: "مهارة {scope}",
  },
  "chat.composer.menu.noSkills": {
    en: "No skills found. Try / to browse provider commands.",
    ar: "لا توجد مهارات. استخدم / لاستعراض أوامر المزوّد.",
  },
  "chat.composer.menu.noPaths": {
    en: "No matching files or folders.",
    ar: "لا توجد ملفات أو مجلدات مطابقة.",
  },
  "chat.composer.menu.noCommands": {
    en: "No matching command.",
    ar: "لا يوجد أمر مطابق.",
  },

  // ----------------------------------------------------------------------
  // Composer: image attachments
  // ----------------------------------------------------------------------
  "chat.composer.images.afterPlanQuestions": {
    en: "Attach images after answering plan questions.",
    ar: "أرفق الصور بعد الإجابة على أسئلة الخطة.",
  },
  "chat.composer.images.unsupportedType": {
    en: "Unsupported file type for '{name}'. Please attach image files only.",
    ar: "نوع الملف '{name}' غير مدعوم. أرفق ملفات صور فقط.",
  },
  "chat.composer.images.tooLarge": {
    en: "'{name}' exceeds the {limit} attachment limit.",
    ar: "'{name}' يتجاوز حد المرفقات {limit}.",
  },
  "chat.composer.images.maxCount": {
    en: "You can attach up to {limit} images per message.",
    ar: "يمكنك إرفاق {limit} صور كحد أقصى في كل رسالة.",
  },
  "chat.composer.images.preview": {
    en: "Preview {name}",
    ar: "معاينة {name}",
  },
  "chat.composer.images.remove": {
    en: "Remove {name}",
    ar: "إزالة {name}",
  },
  "chat.composer.images.notPersisted.label": {
    en: "Draft attachment may not persist",
    ar: "قد لا يُحفظ مرفق المسودة",
  },
  "chat.composer.images.notPersisted.tooltip": {
    en: "Draft attachment could not be saved locally and may be lost on navigation.",
    ar: "لم يُحفظ مرفق المسودة محليًا وقد يُفقد عند الانتقال.",
  },
  "chat.composer.mentionDrag.rejected.title": {
    en: "Unable to add to chat",
    ar: "تعذّرت الإضافة إلى المحادثة",
  },
  "chat.composer.mentionDrag.rejected.description": {
    en: "The composer is busy; try again once it is ready.",
    ar: "مربع الكتابة مشغول؛ أعد المحاولة عندما يصبح جاهزًا.",
  },

  // ----------------------------------------------------------------------
  // Composer: prompt stash
  // ----------------------------------------------------------------------
  "chat.stash.badge.label": {
    en: "Stash",
    ar: "المخزن",
  },
  "chat.stash.badge.aria": {
    en: "Stashed prompts: {count}. Open stash.",
    ar: "النصوص المخزّنة: {count}. افتح المخزن.",
  },
  "chat.stash.restoreNotDurable.title": {
    en: "Restored prompt may reappear in the stash",
    ar: "قد يظهر النص المستعاد في المخزن مرة أخرى",
  },
  "chat.stash.restoreNotDurable.description": {
    en: "Browser storage rejected the update, so this entry could still be there after a reload.",
    ar: "رفض تخزين المتصفح التحديث، لذا قد يبقى هذا العنصر موجودًا بعد إعادة التحميل.",
  },
  "chat.stash.missingImages.title": {
    en: "Some images were not restored",
    ar: "لم تُستعد بعض الصور",
  },
  "chat.stash.missingImages.tooLarge": {
    en: "{names} exceeded the stash size limit when this prompt was saved.",
    ar: "{names} تجاوزت حد حجم المخزن عند حفظ هذا النص.",
  },
  "chat.stash.missingImages.unreadable": {
    en: "{names} could not be read when this prompt was saved.",
    ar: "لم تتم قراءة {names} عند حفظ هذا النص.",
  },
  "chat.stash.missingImages.limit": {
    en: "{names} could not be restored: the composer is at its {limit}-image limit.",
    ar: "لم يمكن استعادة {names}: وصل مربع الكتابة إلى حده الأقصى ({limit} صور).",
  },
  "chat.stash.deleteNotDurable.title": {
    en: "Stash entry may come back",
    ar: "قد يعود عنصر المخزن",
  },
  "chat.stash.deleteNotDurable.description": {
    en: "Browser storage rejected the delete, so this prompt could reappear after a reload.",
    ar: "رفض تخزين المتصفح الحذف، لذا قد يظهر هذا النص مرة أخرى بعد إعادة التحميل.",
  },
  "chat.stash.writeFailed.title": {
    en: "Could not stash this prompt",
    ar: "تعذّر تخزين هذا النص",
  },
  "chat.stash.writeFailed.description": {
    en: "Browser storage rejected the write, so the composer was left as-is. Free up site data and try again.",
    ar: "رفض تخزين المتصفح الكتابة، فتُرك مربع الكتابة كما هو. أفرغ بيانات الموقع ثم أعد المحاولة.",
  },
  "chat.stash.memoryOnly.title": {
    en: "Stashed prompt will not survive a reload",
    ar: "لن يبقى النص المخزّن بعد إعادة التحميل",
  },
  "chat.stash.memoryOnly.description": {
    en: "Browser storage is unavailable, so this stash is kept in memory only for this session.",
    ar: "تخزين المتصفح غير متاح، لذا يُحفظ هذا المخزن في الذاكرة لهذه الجلسة فقط.",
  },
  "chat.stash.evicted.title": {
    en: "Oldest stashed prompt discarded",
    ar: "حُذف أقدم نص مخزّن",
  },
  "chat.stash.evicted.description": {
    en: "The stash holds {limit} prompts; the oldest was removed to make room.",
    ar: "يتسع المخزن لـ {limit} نصوص، فأُزيل الأقدم لإتاحة مساحة.",
  },
  "chat.stash.imagesNotSaved.title": {
    en: "Stashed images were not saved",
    ar: "لم تُحفظ الصور المخزّنة",
  },
  "chat.stash.imagesNotSaved.description": {
    en: "The prompt was stashed, but browser storage rejected its images. They will be missing if you reload.",
    ar: "تم تخزين النص، لكن تخزين المتصفح رفض صوره. ستكون مفقودة إذا أعدت التحميل.",
  },
  "chat.stash.imagesNotAttached.title": {
    en: "Stashed images did not attach",
    ar: "لم تُرفق الصور المخزّنة",
  },
  "chat.stash.imagesNotAttached.description.one": {
    en: "That prompt was restored or deleted before {count} image finished saving. Re-attach it if you still need it.",
    ar: "استُعيد ذلك النص أو حُذف قبل انتهاء حفظ {count} صورة. أعد إرفاقها إن كنت لا تزال بحاجة إليها.",
  },
  "chat.stash.imagesNotAttached.description.other": {
    en: "That prompt was restored or deleted before {count} images finished saving. Re-attach them if you still need them.",
    ar: "استُعيد ذلك النص أو حُذف قبل انتهاء حفظ {count} صور. أعد إرفاقها إن كنت لا تزال بحاجة إليها.",
  },

  // ----------------------------------------------------------------------
  // Draft hero headline
  // ----------------------------------------------------------------------
  "chat.draft.headline.build": {
    en: "What should we build in {project}?",
    ar: "ما الذي نبنيه في {project}؟",
  },
  "chat.draft.headline.chooseProject": {
    en: "{project} to start",
    ar: "{project} للبدء",
  },
  "chat.draft.headline.addProject": {
    en: "Add a project to start",
    ar: "أضف مشروعًا للبدء",
  },
  "chat.draft.changeProject": {
    en: "Change project",
    ar: "تغيير المشروع",
  },
  "chat.draft.chooseProject": {
    en: "Choose a project",
    ar: "اختر مشروعًا",
  },
  "chat.draft.addProject": {
    en: "Add a project",
    ar: "أضف مشروعًا",
  },
  "chat.draft.newProject": {
    en: "New project",
    ar: "مشروع جديد",
  },

  // ----------------------------------------------------------------------
  // Chat header
  // ----------------------------------------------------------------------
  "chat.header.newThreadInProject": {
    en: "New thread in {project}",
    ar: "محادثة جديدة في {project}",
  },
} as const satisfies StringModule;
