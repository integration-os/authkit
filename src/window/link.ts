import { EventLinkWindowProps } from "../types";

export class EventLinkWindow {
  private linkTokenEndpoint: string;
  private linkHeaders?: object;
  private baseUrl?: string;
  private onClose?: () => void;
  private title?: string;

  constructor(props: EventLinkWindowProps) {
    this.linkTokenEndpoint = props.token.url;
    this.linkHeaders = props.token.headers;
    this.baseUrl = props.baseUrl;
    this.onClose = props.onClose;
    this.title = props.title;
  }

  private _getBaseUrl() {
    if (this.baseUrl) {
      return this.baseUrl;
    }
    return "https://link.event.dev";
  }

  public openLink() {
    const container = document.createElement("iframe");
    document.body.appendChild(container);
    container.style.height = "100%";
    container.style.width = "100%";
    container.style.position = "fixed";
    container.style.display = "block";
    container.style.backgroundColor = "transparent";
    container.style.inset = "0px";
    container.style.borderWidth = "0px";
    container.id = `event-link`;
    container.src = this._getBaseUrl();
    container.style.overflow = "hidden auto";

    container.onload = () => {
      // Now that the iframe is fully loaded, you can send the message
      container.contentWindow?.postMessage(
        {
          linkTokenEndpoint: this.linkTokenEndpoint,
          linkHeaders: this.linkHeaders,
          title: this.title,
        },
        this._getBaseUrl()
      );
    };
  }

  public closeLink() {
    const iFrameWindow = document.getElementById(
      `event-link`
    ) as HTMLIFrameElement;
    if (iFrameWindow) {
      iFrameWindow.remove();
    }
    this.onClose?.();
  }
}

export const createWindow = (props: EventLinkWindowProps) => {
  return new EventLinkWindow(props);
};
