import { useEffect } from "react";
import { DestinationEventLinkProps } from "./types";
import { createWindow } from "./window";

export const useDestinationEventLink = (props: DestinationEventLinkProps) => {
  const linkWindow = createWindow({ ...props, connectionType: "target" });

  useEffect(() => {
    if (linkWindow) {
      linkWindow.initialize();
    }
  }, [linkWindow]);

  window.addEventListener("message", (event) => {
    const iFrameWindow = document.getElementById(
      `target-event-link-iframe`
    ) as HTMLIFrameElement;
    if (iFrameWindow?.style?.display === "block") {
      switch (event.data?.messageType) {
        case "EXIT_EVENT_LINK":
          linkWindow.closeLink();
          break;
        case "LINK_SUCCESS":
          props.onSuccess?.(event.data?.message);
          break;
        case "LINK_ERROR":
          props.onError?.(event.data?.message);
          break;
      }
    }
  });

  const open = () => {
    linkWindow.openLink();
  };

  const close = () => {
    linkWindow.closeLink();
  };

  return { open, close };
};
