import { WindowProps } from "../types";

export class LinkWindow {
  private group: string;
  private integrationTypes?: string[];
  private linkTokenEndpoint: string;
  private linkHeaders?: object;
  private baseUrl?: string;
  private environment?: string;
  private connectionType: string;
  private onClose?: () => void;
  private title?: string;

  constructor(props: WindowProps) {
    this.group = props.group;
    this.integrationTypes = props.integrationTypes;
    this.linkTokenEndpoint = props.linkTokenEndpoint;
    this.linkHeaders = props.linkHeaders;
    this.baseUrl = props.baseUrl;
    this.environment = props.environment;
    this.connectionType = props.connectionType;
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
    container.id = `${this.connectionType}-event-link-iframe`;
    container.src = this._getBaseUrl();
    container.style.overflow = "hidden auto";
  }

  public openLink() {
    const iFrameWindow = document.getElementById(
      `${this.connectionType}-event-link-iframe`
    ) as HTMLIFrameElement;
    iFrameWindow.style.display = "block";

    iFrameWindow?.contentWindow?.postMessage(
      {
        group: this.group,
        integrationTypes: this.integrationTypes,
        linkTokenEndpoint: this.linkTokenEndpoint,
        linkHeaders: this.linkHeaders,
        connectionType: this.connectionType,
        title: this.title,
      },
      this._getBaseUrl()
    );
  }

  public closeLink() {
    const iFrameWindow = document.getElementById(
      `${this.connectionType}-event-link-iframe`
    ) as HTMLIFrameElement;
    iFrameWindow.style.display = "none";
    this.onClose?.();
  }
}

export const createWindow = (props: WindowProps) => {
  return new LinkWindow(props);
};
