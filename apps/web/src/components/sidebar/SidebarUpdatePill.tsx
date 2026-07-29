import { DownloadIcon, RotateCwIcon, TriangleAlertIcon, XIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { isElectron } from "../../env";
import { useT } from "~/i18n";
import { useDesktopUpdateState } from "../../state/desktopUpdate";
import { stackedThreadToast, toastManager } from "../ui/toast";
import {
  getArm64IntelBuildWarningDescription,
  getDesktopUpdateActionError,
  getDesktopUpdateButtonTooltip,
  getDesktopUpdateInstallConfirmationMessage,
  isDesktopUpdateButtonDisabled,
  resolveDesktopUpdateButtonAction,
  shouldShowArm64IntelBuildWarning,
  shouldShowDesktopUpdateButton,
  shouldToastDesktopUpdateActionResult,
} from "../desktopUpdate.logic";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Separator } from "../ui/separator";
import { Tooltip, TooltipPopup, TooltipTrigger } from "../ui/tooltip";

function SidebarUpdateReleaseNotesTooltip({
  state,
  tooltip,
}: {
  readonly state: NonNullable<ReturnType<typeof useDesktopUpdateState>>;
  readonly tooltip: string;
}) {
  const t = useT();
  if (state.channel !== "nightly" || state.releaseNotes.length === 0) {
    return <>{tooltip}</>;
  }

  return (
    <div className="w-120 max-w-[calc(100vw-2rem)] text-start">
      <div className="px-1">
        <div className="text-sm leading-5 font-medium">{tooltip}</div>
      </div>
      <div className="pointer-events-auto max-h-[min(28rem,calc(100vh-6rem))] overflow-y-auto px-1 pt-4 pb-1">
        {state.releaseNotes.map((releaseNote, index) => (
          <div key={releaseNote.version}>
            {index > 0 && <Separator className="my-3 bg-border/60" />}
            <section>
              <h3 className="text-muted-foreground text-xs leading-4 font-semibold">
                {index === 0
                  ? t("sidebar.update.whatsChanged")
                  : t("sidebar.update.changesIn", { version: releaseNote.version })}
              </h3>
              <ul className="mt-2 space-y-1.5 ps-4 text-xs leading-5 text-popover-foreground/90">
                {releaseNote.items.map((item, itemIndex) => (
                  <li className="list-disc break-words" key={`${releaseNote.version}-${itemIndex}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SidebarUpdatePill() {
  const t = useT();
  const state = useDesktopUpdateState();
  const [dismissed, setDismissed] = useState(false);

  const visible = isElectron && shouldShowDesktopUpdateButton(state) && !dismissed;
  const tooltip = state ? getDesktopUpdateButtonTooltip(state) : t("sidebar.update.available");
  const disabled = isDesktopUpdateButtonDisabled(state);
  const action = state ? resolveDesktopUpdateButtonAction(state) : "none";

  const showArm64Warning = isElectron && shouldShowArm64IntelBuildWarning(state);
  const arm64Description =
    state && showArm64Warning ? getArm64IntelBuildWarningDescription(state) : null;

  const handleAction = useCallback(() => {
    const bridge = window.desktopBridge;
    if (!bridge || !state) return;
    if (disabled || action === "none") return;

    if (action === "download") {
      void bridge
        .downloadUpdate()
        .then((result) => {
          if (result.completed) {
            toastManager.add({
              type: "success",
              title: t("sidebar.toast.updateDownloaded"),
              description: t("sidebar.toast.updateDownloadedDescription"),
            });
          }
          if (!shouldToastDesktopUpdateActionResult(result)) return;
          const actionError = getDesktopUpdateActionError(result);
          if (!actionError) return;
          toastManager.add(
            stackedThreadToast({
              type: "error",
              title: t("sidebar.toast.updateDownloadFailed"),
              description: actionError,
            }),
          );
        })
        .catch((error) => {
          toastManager.add(
            stackedThreadToast({
              type: "error",
              title: t("sidebar.toast.updateDownloadStartFailed"),
              description: error instanceof Error ? error.message : t("sidebar.error.unexpected"),
            }),
          );
        });
      return;
    }

    if (action === "install") {
      const confirmed = window.confirm(
        getDesktopUpdateInstallConfirmationMessage(state, navigator.platform),
      );
      if (!confirmed) return;
      void bridge
        .installUpdate()
        .then((result) => {
          if (!shouldToastDesktopUpdateActionResult(result)) return;
          const actionError = getDesktopUpdateActionError(result);
          if (!actionError) return;
          toastManager.add(
            stackedThreadToast({
              type: "error",
              title: t("sidebar.toast.updateInstallFailed"),
              description: actionError,
            }),
          );
        })
        .catch((error) => {
          toastManager.add(
            stackedThreadToast({
              type: "error",
              title: t("sidebar.toast.updateInstallFailed"),
              description: error instanceof Error ? error.message : t("sidebar.error.unexpected"),
            }),
          );
        });
    }
  }, [action, disabled, state, t]);

  if (!visible && !showArm64Warning) return null;

  return (
    <div className="flex flex-col gap-1">
      {showArm64Warning && arm64Description && (
        <Alert variant="warning" className="rounded-2xl border-warning/40 bg-warning/8 text-xs">
          <TriangleAlertIcon />
          <AlertTitle>{t("sidebar.update.intelBuildTitle")}</AlertTitle>
          <AlertDescription>{arm64Description}</AlertDescription>
        </Alert>
      )}
      {visible && (
        <div
          className={`group/update relative flex h-7 w-full items-center rounded-lg bg-primary/15 text-xs font-medium text-primary ${
            disabled ? " cursor-not-allowed opacity-60" : ""
          }`}
        >
          <div className="pointer-events-none absolute inset-0 rounded-lg transition-colors group-has-[button.update-main:hover]/update:bg-primary/22" />
          <Tooltip>
            <TooltipTrigger
              render={
                <button
                  type="button"
                  aria-label={tooltip}
                  aria-disabled={disabled || undefined}
                  disabled={disabled}
                  className="update-main relative flex h-full flex-1 items-center gap-2 px-2 enabled:cursor-pointer"
                  onClick={handleAction}
                >
                  {action === "install" ? (
                    <>
                      <RotateCwIcon className="size-3.5" />
                      <span>{t("sidebar.update.restart")}</span>
                    </>
                  ) : state?.status === "downloading" ? (
                    <>
                      <DownloadIcon className="size-3.5" />
                      <span>
                        {t("sidebar.update.downloading")}
                        {typeof state.downloadPercent === "number"
                          ? ` (${Math.floor(state.downloadPercent)}%)`
                          : "…"}
                      </span>
                    </>
                  ) : (
                    <>
                      <DownloadIcon className="size-3.5" />
                      <span>{t("sidebar.update.available")}</span>
                    </>
                  )}
                </button>
              }
            />
            <TooltipPopup
              align="start"
              className={
                state?.channel === "nightly" && state.releaseNotes.length > 0
                  ? "max-w-none text-balance"
                  : undefined
              }
              side="top"
            >
              {state ? (
                <SidebarUpdateReleaseNotesTooltip state={state} tooltip={tooltip} />
              ) : (
                tooltip
              )}
            </TooltipPopup>
          </Tooltip>
          {action === "download" && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <button
                    type="button"
                    aria-label={t("sidebar.update.dismiss")}
                    className="me-1 inline-flex size-5 items-center justify-center rounded-md text-primary/60 transition-colors hover:text-primary"
                    onClick={() => setDismissed(true)}
                  >
                    <XIcon className="size-3.5" />
                  </button>
                }
              />
              <TooltipPopup side="top">{t("sidebar.update.dismissUntilLaunch")}</TooltipPopup>
            </Tooltip>
          )}
        </div>
      )}
    </div>
  );
}
