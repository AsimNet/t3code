import { MessageCircle, Trash2 } from "lucide-react";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { useT } from "~/i18n";

interface LocalCommentAnnotationProps {
  kind: "draft" | "comment";
  rangeLabel: string;
  text: string;
  onCancel: () => void;
  onComment: (text: string) => void;
  onDelete: () => void;
}

export function LocalCommentAnnotation({
  kind,
  rangeLabel,
  text: savedText,
  onCancel,
  onComment,
  onDelete,
}: LocalCommentAnnotationProps) {
  const t = useT();
  const [text, setText] = useState("");

  if (kind === "comment") {
    return (
      <div
        data-file-comment-annotation
        className="mx-3 my-2 rounded-xl border border-border/70 bg-background p-3 shadow-sm"
        contentEditable={false}
        onPointerDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          <MessageCircle className="size-4 text-muted-foreground" />
          <span className="text-xs font-medium">{t("panel.comment.local")}</span>
          <span className="ms-auto text-2xs text-muted-foreground">{rangeLabel}</span>
          <Button
            variant="ghost"
            size="icon-xs"
            aria-label={t("panel.comment.delete")}
            onClick={onDelete}
          >
            <Trash2 className="size-3.5" />
          </Button>
        </div>
        <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-foreground">
          {savedText}
        </p>
      </div>
    );
  }

  return (
    <div
      data-file-comment-annotation
      className="mx-3 my-2 rounded-xl border border-border/70 bg-background p-3 shadow-lg"
      contentEditable={false}
      onPointerDown={(event) => event.stopPropagation()}
    >
      <div className="flex items-center gap-2">
        <MessageCircle className="size-4 text-muted-foreground" />
        <span className="text-sm font-medium">{t("panel.comment.local")}</span>
      </div>
      <div className="mt-1 text-xs text-muted-foreground">
        {t("panel.comment.onLines", { range: rangeLabel })}
      </div>
      <Textarea
        autoFocus
        className="mt-3"
        size="sm"
        value={text}
        placeholder={t("panel.comment.placeholder")}
        aria-label={t("panel.comment.onLines", { range: rangeLabel })}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            onCancel();
          }
          if ((event.metaKey || event.ctrlKey) && event.key === "Enter" && text.trim()) {
            event.preventDefault();
            onComment(text.trim());
          }
        }}
      />
      <div className="mt-3 flex justify-end gap-2">
        <Button variant="ghost" size="sm" onClick={onCancel}>
          {t("panel.comment.cancel")}
        </Button>
        <Button size="sm" disabled={!text.trim()} onClick={() => onComment(text.trim())}>
          {t("panel.comment.submit")}
        </Button>
      </div>
    </div>
  );
}
