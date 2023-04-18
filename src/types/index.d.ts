export interface SourceEventLink {
  openLink: ({
    group,
    integrationTypes,
    linkTokenEndpoint,
    linkHeaders,
  }: SourceEventLinkProps) => void;
  initialize: (
    {
      baseUrl,
      environment,
    }: {
      baseUrl?: string;
      environment?: "sandbox" | "production";
    }
  ) => void;
}

export interface DestinationEventLink {
  openLink: ({
    group,
    integrationTypes,
    linkTokenEndpoint,
    linkHeaders,
  }: DestinationEventLinkProps) => void;
  initialize: () => void;
}


export type SourceIntegrationTypes =
  | "stripe"
  | "shopify"
  | "adyen"
  | "alchemy"
  | "checkout.com"
  | "circleci"
  | "datadog"
  | "ftp"
  | "github_repos"
  | "gitlab"
  | "pagerduty"
  | "paypal"
  | "shipstation"
  | "square"
  | "webflow"
  | "woocommerce";

export type DestinationIntegrationTypes =
  | "stripe"
  | "bigquery"
  | "elasticsearch"
  | "firestore"
  | "mongodb"
  | "postgresql"
  | "webhook";

export interface SourceEventLinkProps {
  group: string;
  integrationTypes?: SourceIntegrationTypes[];
  linkTokenEndpoint: string;
  linkHeaders?: Record<string, unknown>;
  environment?: "sandbox" | "production";
  baseUrl?: string;
}

export interface DestinationEventLinkProps {
  group: string;
  integrationTypes?: DestinationIntegrationTypes[];
  linkTokenEndpoint: string;
  linkHeaders?: Record<string, unknown>;
  environment?: "sandbox" | "production";
  baseUrl?: string;
}
