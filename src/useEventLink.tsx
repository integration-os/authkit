import { useEffect } from "react";
import { DestinationEventLinkProps, EventLinkProps } from "./types";
import { createWindow } from "./window/link";

export const useEventLink = (props: EventLinkProps) => {
  const linkWindow = createWindow({ ...props });

   useEffect(() => {
    const handleMessage = (event: any) => {
      const iFrameWindow = document.getElementById(`event-link`) as HTMLIFrameElement;
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
    };

    window.addEventListener("message", handleMessage);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []); // The empty dependency array ensures that the effect runs only once
  const open = () => {
    linkWindow.openLink();
  };

  const close = () => {
    linkWindow.closeLink();
  };

  return { open, close };
};
