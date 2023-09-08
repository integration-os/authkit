import { EventLinkWindowProps } from "../types";

export class EventLinkWindow {
  private linkTokenEndpoint: string;
  private linkHeaders?: object;
  private baseUrl?: string;
  private environment?: string;
  private onClose?: () => void;
  private title?: string;

  constructor(props: EventLinkWindowProps) {
    this.linkTokenEndpoint = props.linkTokenEndpoint;
    this.linkHeaders = props.linkHeaders;
    this.baseUrl = props.baseUrl;
    this.environment = props.environment;
    this.onClose = props.onClose;
    this.title = props.title;
  }

  private _getBaseUrl() {
    if (this.baseUrl) {
      return this.baseUrl;
    }
    if (this.environment === "production") {
      return "https://link.event.dev";
    }
    return "https://sandbox-link.event.dev";
  }

  public initialize() {
    const container = document.createElement("iframe");
    document.body.appendChild(container);
    container.style.height = "100%";
    container.style.width = "100%";
    container.style.position = "fixed";
    container.style.display = "none";
    container.style.backgroundColor = "transparent";
    container.style.inset = "0px";
    container.style.borderWidth = "0px";
    container.id = `event-link`;
    container.src = this._getBaseUrl();
    container.style.overflow = "hidden auto";
  }

  public openLink() {
    const iFrameWindow = document.getElementById(
      `event-link`
    ) as HTMLIFrameElement;
    iFrameWindow.style.display = "block";

    iFrameWindow?.contentWindow?.postMessage(
      {
        linkTokenEndpoint: this.linkTokenEndpoint,
        linkHeaders: this.linkHeaders,
        title: this.title,
      },
      this._getBaseUrl()
    );
  }

  public closeLink() {
    const iFrameWindow = document.getElementById(
      `event-link`
    ) as HTMLIFrameElement;
    iFrameWindow.style.display = "none";
    this.onClose?.();
  }
}

export const createWindow = (props: EventLinkWindowProps) => {
  return new EventLinkWindow(props);
};
