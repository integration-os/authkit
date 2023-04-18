export class LinkWindow {
  private group: string;
  private integrationTypes?: string[];
  private linkTokenEndpoint: string;
  private linkHeaders?: object;
  private baseUrl?: string;
  private environment?: string;
  private connectionType: string;

  constructor(
    group: string,
    linkTokenEndpoint: string,
    connectionType: string,
    integrationTypes?: string[],
    linkHeaders?: object,
    baseUrl?: string,
    environment?: string
  ) {
    this.group = group;
    this.integrationTypes = integrationTypes;
    this.linkTokenEndpoint = linkTokenEndpoint;
    this.linkHeaders = linkHeaders;
    this.baseUrl = baseUrl;
    this.environment = environment;
    this.connectionType = connectionType;
  }

  private _getBaseUrl() {
    if (this.baseUrl) {
      return this.baseUrl;
    }
    if (this.environment === "production") {
      return "https://app.event-link.dev";
    }
    return "https://sandbox.event-link.dev";
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
      },
      this._getBaseUrl()
    );
  }

  public closeLink() {
    const iFrameWindow = document.getElementById(
      `${this.connectionType}-event-link-iframe`
    ) as HTMLIFrameElement;
    iFrameWindow.style.display = "none";
  }
}

export const createWindow = ({
  group,
  integrationTypes,
  linkTokenEndpoint,
  connectionType,
  linkHeaders,
  baseUrl,
  environment,
}: {
  group: string;
  integrationTypes?: string[];
  linkTokenEndpoint: string;
  connectionType: string;
  linkHeaders?: object;
  baseUrl?: string;
  environment?: string;
}) => {
  return new LinkWindow(
    group,
    linkTokenEndpoint,
    connectionType,
    integrationTypes,
    linkHeaders,
    baseUrl,
    environment
  );
};
