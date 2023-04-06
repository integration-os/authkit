import { useEffect } from "react";

window.DestinationEventLink = {
  initialize: () => {
    const container = document.createElement("iframe");

    document.body.appendChild(container);
    container.style.height = "100%";
    container.style.width = "100%";
    container.style.position = "fixed";
    container.style.display = "none";
    container.style.backgroundColor = "transparent";
    container.style.inset = "0px";
    container.style.borderWidth = "0px";
    container.id = "event-link-destination-iframe";
    container.src = "http://localhost:3001";
    container.style.overflow = "hidden auto";
  },
  openLink: ({
    group,
    integrationTypes,
  }: {
    group: string;
    integrationTypes?: string[];
  }) => {
    const iFrameWindow = document.getElementById(
      "event-link-destination-iframe"
    ) as HTMLIFrameElement;
    iFrameWindow.style.display = "block";

    iFrameWindow?.contentWindow?.postMessage(
      { group, integrationTypes, connectionType: "destination" },
      "http://localhost:3001"
    );
  },
};

export const useDestinationEventLink = ({
  integrationTypes,
  group,
}: {
  integrationTypes?: string[];
  group: string;
}) => {
  useEffect(() => {
    if (window.DestinationEventLink) {
      window.DestinationEventLink.initialize();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.data === "close") {
        const iFrameWindow = document.getElementById(
          "event-link-destination-iframe"
        ) as HTMLIFrameElement;
        iFrameWindow.style.display = "none";
      }
    });
  }, []);

  const open = () => {
    if (window.DestinationEventLink) {
      window.DestinationEventLink.openLink({ group, integrationTypes });
    }
  };

  return { open };
};
