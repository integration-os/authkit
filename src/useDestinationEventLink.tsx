import { useEffect } from "react";
import { DestinationEventLinkProps } from "./types";
import { createWindow } from "./window";

export const useDestinationEventLink = ({
  integrationTypes,
  group,
  linkTokenEndpoint,
  linkHeaders,
  baseUrl,
  environment,
}: DestinationEventLinkProps) => {
  const linkWindow = createWindow({
    baseUrl,
    environment,
    integrationTypes,
    group,
    linkTokenEndpoint,
    linkHeaders,
    connectionType: "target",
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
