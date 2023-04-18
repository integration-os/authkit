import { useEffect } from "react";
import { SourceEventLinkProps } from "./types";
import { createWindow } from "./window";

export const useSourceEventLink = ({
  integrationTypes,
  group,
  linkTokenEndpoint,
  linkHeaders,
  baseUrl,
  environment,
}: SourceEventLinkProps) => {
  const linkWindow = createWindow({
    baseUrl,
    environment,
    integrationTypes,
    group,
    linkTokenEndpoint,
    linkHeaders,
    connectionType: "source",
  });

  useEffect(() => {
    if (linkWindow) {
      linkWindow.initialize();
    }
  }, [linkWindow]);

  window.addEventListener("message", (event) => {
    if (event.data === "EXIT_EVENT_LINK") {
      linkWindow.closeLink();
    }
  });

  const open = () => {
    linkWindow.openLink();
  };

  return { open };
};
