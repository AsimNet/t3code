import { useState } from "react";

import { Button } from "~/components/ui/button";
import { useT } from "~/i18n";

interface Props {
  url: string;
  /** Chromium net error code, e.g. -105. */
  code: number;
  /** Stringified Chromium error, e.g. "ERR_NAME_NOT_RESOLVED". */
  description: string;
  onReload: () => void;
}

/** Theme-aware tailwind port of Chromium's "This site can't be reached" page. */
export function PreviewUnreachable({ url, code, description, onReload }: Props) {
  const t = useT();
  const [showDetails, setShowDetails] = useState(false);
  const host = safeHost(url) ?? url;
  const friendlyByDescription: Readonly<Record<string, string>> = {
    ERR_NAME_NOT_RESOLVED: t("panel.preview.netError.dnsNotFound"),
    ERR_NAME_RESOLUTION_FAILED: t("panel.preview.netError.dnsNotFound"),
    ERR_CONNECTION_REFUSED: t("panel.preview.netError.connectionRefused"),
    ERR_CONNECTION_RESET: t("panel.preview.netError.connectionReset"),
    ERR_CONNECTION_CLOSED: t("panel.preview.netError.connectionClosed"),
    ERR_CONNECTION_TIMED_OUT: t("panel.preview.netError.connectionTimedOut"),
    ERR_INTERNET_DISCONNECTED: t("panel.preview.netError.internetDisconnected"),
    ERR_TIMED_OUT: t("panel.preview.netError.connectionTimedOut"),
    ERR_CERT_AUTHORITY_INVALID: t("panel.preview.netError.certAuthorityInvalid"),
    ERR_CERT_COMMON_NAME_INVALID: t("panel.preview.netError.certNameInvalid"),
    ERR_CERT_DATE_INVALID: t("panel.preview.netError.certDateInvalid"),
    ERR_TOO_MANY_REDIRECTS: t("panel.preview.netError.tooManyRedirects"),
  };
  const friendly =
    friendlyByDescription[description] ??
    (description.length > 0 ? description : t("panel.preview.netError.generic"));
  const errorLabel = description.length > 0 ? description : `ERR_${Math.abs(code) || "FAILED"}`;

  return (
    <div className="relative flex h-full min-h-0 w-full overflow-y-auto bg-background">
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-8 py-12 sm:py-16">
        <ErrorIcon className="mb-6 size-12 text-muted-foreground/70" />
        <h1 className="mb-3 text-2xl font-semibold leading-tight text-foreground">
          {t("panel.preview.unreachable.title")}
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">{host}</span>: {friendly}.
        </p>

        {showDetails ? (
          <div className="mt-6 rounded-lg border border-border bg-muted/40 p-4 text-sm">
            <p className="mb-2 font-medium text-foreground">{t("panel.preview.unreachable.try")}</p>
            <ul className="list-disc space-y-1 ps-5 text-muted-foreground">
              <li>{t("panel.preview.unreachable.checkConnection")}</li>
              <li>{t("panel.preview.unreachable.checkDevServer")}</li>
              <li>{t("panel.preview.unreachable.checkProxy")}</li>
            </ul>
          </div>
        ) : null}

        <div className="mt-8 text-xs uppercase tracking-wide text-muted-foreground/70">
          {errorLabel}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-8">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setShowDetails((value) => !value)}
          >
            {showDetails
              ? t("panel.preview.unreachable.hideDetails")
              : t("panel.preview.unreachable.details")}
          </Button>
          <div className="flex-1" />
          <Button type="button" size="sm" onClick={onReload}>
            {t("panel.preview.unreachable.reload")}
          </Button>
        </div>
      </div>
    </div>
  );
}

function ErrorIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={className}
    >
      <path d="M16 12 L48 12 L48 52 L16 52 Z" />
      <path d="M22 22 L42 22 M22 30 L36 30 M22 38 L40 38" strokeLinecap="round" />
      <path d="M52 8 L12 56" strokeLinecap="round" />
    </svg>
  );
}

function safeHost(url: string): string | null {
  try {
    return new URL(url).host;
  } catch {
    return null;
  }
}
