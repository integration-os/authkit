import { ConnectionRecord, EventLinkProps, EventProps } from "./types";
import { createWindow } from "./window";

// Module-level listener reference — ensures only one listener exists at a time,
// regardless of how many times useEventLink is called (e.g., across framework
// reactivity cycles or re-renders)
let activeListener: ((event: MessageEvent) => void) | null = null;

export const useEventLink = (props: EventLinkProps) => {
  const linkWindow = createWindow({ ...props });

  const close = () => {
    if (typeof window !== "undefined" && activeListener) {
      window.removeEventListener("message", activeListener);
      activeListener = null;
    }

    linkWindow.closeLink();
  };

  const open = () => {
    // Always clean up any existing listener before adding a new one.
    // Because activeListener is module-level, this works across closures/re-renders —
    // unlike the old closure-local messageHandler which was null in each new closure.
    if (typeof window !== "undefined" && activeListener) {
      window.removeEventListener("message", activeListener);
      activeListener = null;
    }

    const handleMessage = (event: MessageEvent) => {
      if (typeof window === "undefined") return;

      const iFrameWindow = document.getElementById("event-link") as HTMLIFrameElement;
      if (!iFrameWindow || iFrameWindow.style.display !== "block") return;

      const eventData = (event as unknown as EventProps).data;
      if (!eventData?.messageType) return;

      switch (eventData.messageType) {
        case "EXIT_EVENT_LINK":
          props.onClose?.();
          setTimeout(() => {
            close();
          }, 200);
          break;
        case "LINK_SUCCESS":
          props.onSuccess?.(eventData.message as ConnectionRecord);
          break;
        case "LINK_ERROR":
          props.onError?.(eventData.message as string);
          break;
      }
    };

    activeListener = handleMessage;

    if (typeof window !== "undefined") {
      window.addEventListener("message", handleMessage);
    }

    linkWindow.openLink();
  };

  return { open, close };
};
