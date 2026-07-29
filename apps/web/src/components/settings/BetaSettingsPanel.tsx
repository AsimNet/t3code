import { useEffect, useState } from "react";

import {
  useClientSettings,
  useSidebarV2Enabled,
  useUpdateClientSettings,
} from "../../hooks/useSettings";
import { useT } from "../../i18n";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { SettingsPageContainer, SettingsRow, SettingsSection } from "./settingsLayout";

const AUTO_SETTLE_MIN_DAYS = 1;
const AUTO_SETTLE_MAX_DAYS = 90;
const AUTO_SETTLE_DEFAULT_DAYS = 3;

function AutoSettleDaysInput({
  value,
  onCommit,
}: {
  value: number;
  onCommit: (days: number) => void;
}) {
  const t = useT();
  // Local draft so the field can be emptied mid-edit; the setting only moves
  // on valid input and snaps back to the persisted value on blur.
  const [draft, setDraft] = useState(String(value));
  useEffect(() => {
    setDraft(String(value));
  }, [value]);

  return (
    <Input
      type="number"
      min={AUTO_SETTLE_MIN_DAYS}
      max={AUTO_SETTLE_MAX_DAYS}
      className="w-full sm:w-24"
      value={draft}
      onChange={(event) => {
        setDraft(event.target.value);
        // Number(), not parseInt: "3.5" must be rejected (not truncated to a
        // committed 3 while the field shows 3.5) — commit only when the
        // persisted value matches the displayed one.
        const parsed = Number(event.target.value);
        if (
          Number.isInteger(parsed) &&
          parsed >= AUTO_SETTLE_MIN_DAYS &&
          parsed <= AUTO_SETTLE_MAX_DAYS
        ) {
          onCommit(parsed);
        }
      }}
      onBlur={() => setDraft(String(value))}
      aria-label={t("settings.beta.autoSettleDays.title")}
    />
  );
}

export function BetaSettingsPanel() {
  const t = useT();
  const sidebarV2Enabled = useSidebarV2Enabled();
  const sidebarAutoSettleAfterDays = useClientSettings(
    (settings) => settings.sidebarAutoSettleAfterDays,
  );
  const updateSettings = useUpdateClientSettings();

  return (
    <SettingsPageContainer>
      <SettingsSection title={t("settings.beta.section")}>
        <SettingsRow
          title={t("settings.beta.sidebarV2.title")}
          description={t("settings.beta.sidebarV2.description")}
          control={
            <Switch
              checked={sidebarV2Enabled}
              // Touching the switch pins the choice, so a nightly build that
              // defaults v2 on does not flip it back after the user opts out.
              onCheckedChange={(checked) =>
                updateSettings({
                  sidebarV2Enabled: Boolean(checked),
                  sidebarV2ConfiguredByUser: true,
                })
              }
              aria-label={t("settings.beta.sidebarV2.ariaLabel")}
            />
          }
        />
        {sidebarV2Enabled ? (
          <>
            <SettingsRow
              title={t("settings.beta.autoSettle.title")}
              description={t("settings.beta.autoSettle.description")}
              control={
                <Switch
                  checked={sidebarAutoSettleAfterDays !== null}
                  onCheckedChange={(checked) =>
                    updateSettings({
                      sidebarAutoSettleAfterDays: checked ? AUTO_SETTLE_DEFAULT_DAYS : null,
                    })
                  }
                  aria-label={t("settings.beta.autoSettle.title")}
                />
              }
            />
            {sidebarAutoSettleAfterDays !== null ? (
              <SettingsRow
                title={t("settings.beta.autoSettleDays.title")}
                description={t("settings.beta.autoSettleDays.description")}
                control={
                  <AutoSettleDaysInput
                    value={sidebarAutoSettleAfterDays}
                    onCommit={(days) => updateSettings({ sidebarAutoSettleAfterDays: days })}
                  />
                }
              />
            ) : null}
          </>
        ) : null}
      </SettingsSection>
    </SettingsPageContainer>
  );
}
