import { DirectionProvider } from "@base-ui/react/direction-provider";
import { RouterProvider } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { applyDocumentAppearance } from "./appearance";
import { ElectronBrowserHost } from "./browser/ElectronBrowserHost";
import { PreviewAutomationHosts } from "./components/preview/PreviewAutomationHosts";
import { useClientSettings } from "./hooks/useSettings";
import { syncBrowserChromeTheme } from "./hooks/useTheme";
import { useDirection } from "./i18n";
import { AppAtomRegistryProvider } from "./rpc/atomRegistry";
import type { AppRouter } from "./router";

/**
 * Applies the appearance settings the stylesheet reads off `<html>` and feeds
 * the locale's reading direction to Base UI, which is what makes its popups,
 * menus, and sliders mirror (the `dir` attribute alone only covers plain
 * layout).
 *
 * This lives at the true root rather than in the authenticated shell so the
 * pairing, sign-in, and connect screens get the same tone, text scale, and
 * direction — on desktop those screens have no other way to learn about them,
 * because the boot script in index.html can only read browser localStorage.
 *
 * Kept as its own component so `AppRoot` stays free of hooks and can be
 * inspected as a plain call.
 */
export function AppAppearanceProvider({ children }: { readonly children: ReactNode }) {
  const fontScale = useClientSettings((settings) => settings.fontScale);
  const language = useClientSettings((settings) => settings.language);
  const lightTone = useClientSettings((settings) => settings.lightTone);
  const reduceMotion = useClientSettings((settings) => settings.reduceMotion);

  useEffect(() => {
    applyDocumentAppearance({ fontScale, language, lightTone, reduceMotion });
    // The tone decides which color the window chrome and the mobile status bar
    // should match, and only the computed style knows the resolved value.
    syncBrowserChromeTheme();
  }, [fontScale, language, lightTone, reduceMotion]);

  return <DirectionProvider direction={useDirection()}>{children}</DirectionProvider>;
}

/**
 * Owns renderer-wide providers. The Electron browser host intentionally sits
 * outside the router so its webviews survive route transitions, but it must
 * share the same atom registry as routed UI.
 */
export function AppRoot({ router }: { readonly router: AppRouter }) {
  return (
    <AppAtomRegistryProvider>
      <AppAppearanceProvider>
        <RouterProvider router={router} />
        <PreviewAutomationHosts />
        <ElectronBrowserHost />
      </AppAppearanceProvider>
    </AppAtomRegistryProvider>
  );
}
