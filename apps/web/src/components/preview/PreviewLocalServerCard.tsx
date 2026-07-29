import { useT } from "~/i18n";

import { BrowserMockup } from "./BrowserMockup";
import type { PreviewableServer } from "./useDiscoveredLocalServers";

interface Props {
  server: PreviewableServer;
  onOpen: () => void;
}

export function PreviewLocalServerCard({ server, onOpen }: Props) {
  const t = useT();
  const subtitle = server.processName ?? t(describeServer(server));
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex w-full items-center gap-3 px-3 py-3 text-start hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
    >
      <BrowserMockup className="size-7 shrink-0" />
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-sm font-medium text-foreground">{subtitle}</span>
        <span className="truncate text-xs text-muted-foreground">
          {server.host}:{server.port}
        </span>
      </div>
      {server.listening ? <PulsingDot /> : <DimDot />}
    </button>
  );
}

function describeServer(
  server: PreviewableServer,
):
  | "panel.preview.server.listening"
  | "panel.preview.server.configured"
  | "panel.preview.server.recentlySeen" {
  if (server.listening) return "panel.preview.server.listening";
  if (server.source === "configured") return "panel.preview.server.configured";
  return "panel.preview.server.recentlySeen";
}

function PulsingDot() {
  const t = useT();
  return (
    <span
      aria-label={t("panel.preview.server.listening")}
      className="relative inline-flex size-2 shrink-0"
    >
      <span className="absolute inset-0 animate-status-ping rounded-full bg-success opacity-60" />
      <span className="relative inline-flex size-2 rounded-full bg-success" />
    </span>
  );
}

function DimDot() {
  const t = useT();
  return (
    <span
      aria-label={t("panel.preview.server.notListening")}
      className="size-2 shrink-0 rounded-full bg-muted-foreground/40"
    />
  );
}
