import { useEffect } from "react";
import ReactDOM from "react-dom";
import CustomIframe from "./components/CustomIframe";
import { EventLinkComponent } from "./components/EventLink";

window.EventLink = {
  initialize: ({
    group,
    integrations,
  }: {
    group: string;
    integrations: string[];
  }) => {
    const container = document.createElement("div");
    
    container.id = "event-link-container";
    document.body.appendChild(container);
    ReactDOM.render(
      <CustomIframe id="event-link-iframe" title="Event Link">
        <EventLinkComponent group={group} integrations={integrations} />
      </CustomIframe>,
      container
    );
  },
  openLink: () => {
    const iframe = document.getElementById(
      "event-link-iframe"
    ) as HTMLIFrameElement;
    iframe.style.display = "block";
  },
};

export const useEventLink = ({
  integrations,
  group,
}: {
  integrations: string[];
  group: string;
}) => {
  useEffect(() => {
    console.log("useEffect");
    if (window.EventLink) {
      window.EventLink.initialize({ group, integrations });
    }
  }, [group, integrations]);

  const open = () => {
    if (window.EventLink) {
      window.EventLink.openLink();
    }
  };

  return { open };
};
