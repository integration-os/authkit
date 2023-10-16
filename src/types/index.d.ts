export interface SourceEventLink {
  openLink: ({
    group,
    integrationTypes,
    linkTokenEndpoint,
    linkHeaders,
  }: SourceEventLinkProps) => void;
  initialize: ({
    baseUrl,
    environment,
  }: {
    baseUrl?: string;
    environment?: "sandbox" | "production";
  }) => void;
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
  | "shopify"
  | "webhook";

export interface SourceEventLinkProps {
  group: string;
  integrationTypes?: SourceIntegrationTypes[];
  linkTokenEndpoint: string;
  linkHeaders?: Record<string, unknown>;
  environment?: "sandbox" | "production";
  baseUrl?: string;
  title?: string;
  onSuccess?: (source?: LinkIntegrationResponse) => void;
  onError?: (error: string) => void;
  onClose?: () => void;
}

export interface DestinationEventLinkProps {
  group: string;
  integrationTypes?: DestinationIntegrationTypes[];
  linkTokenEndpoint: string;
  linkHeaders?: Record<string, unknown>;
  environment?: "sandbox" | "production";
  baseUrl?: string;
  title?: string;
  onSuccess?: (destination?: LinkIntegrationResponse) => void;
  onError?: (error: string) => void;
  onClose?: () => void;
}

export interface EventLinkProps {
  environment?: "sandbox" | "production";
  baseUrl?: string;
  title?: string;
  onClose?: () => void;
  onSuccess?: (connection: ConnectionRecord) => void;
  onError?: (error: string) => void;
  token: {
    url: string;
    headers?: Record<string, unknown>;
  }
}

export interface WindowProps {
  group: string;
  linkTokenEndpoint: string;
  connectionType: "source" | "target";
  linkHeaders?: Record<string, unknown>;
  baseUrl?: string;
  environment?: "sandbox" | "production";
  title?: string;
  onClose?: () => void;
  integrationTypes?: string[];
}

export interface EventLinkWindowProps {
  // linkTokenEndpoint: string;
  // linkHeaders?: Record<string, unknown>;
  baseUrl?: string;
  environment?: "sandbox" | "production";
  title?: string;
  onClose?: () => void;
  token: {
    url: string;
    headers?: Record<string, unknown>;
  }
}

export interface LinkIntegrationResponse {
  _id: string;
  label: string;
  group: string;
  type: string;
  connectionType: string;
  createdAt: number;
  updatedAt?: number;
  expiresAt?: number;
  createdDate: string;
  token: string;
  integration: {
    id: string;
    image: string;
    key: string;
  };
}

export interface ConnectionRecord {
  _id: string;
  platformVersion: string;
  connectionDefinitionId: string;
  name: string;
  key: string;
  group: string;
  environment: string;
  platform: string;
  secretsServiceId: string;
  eventAccessId: string;
  accessKey: string;
  settings: {
    parseWebhookBody: boolean;
    showSecret: boolean;
    allowCustomEvents: boolean;
    oauth: boolean;
  };
  throughput: {
    key: string;
    limit: number;
  };
  ownership: {
    buildableId: string;
    clientId: string;
    organizationId: string;
    projectId: string;
    userId: string;
  };
  createdAt: number;
  updatedAt: number;
  updated: boolean;
  version: string;
  lastModifiedBy: string;
  deleted: boolean;
  changeLog: Record<string, any>; // You can replace 'any' with a more specific type if needed
  tags: string[];
  active: boolean;
  deprecated: boolean;
}


type XeroScopes =
  | "offline_access"
  | "accounting.transactions"
  | "accounting.settings"
  | "accounting.contacts"
  | "accounting.attachments"
  | "payroll.employees"
  | "payroll.payruns"
  | "payroll.payslips"
  | "payroll.settings"
  | "payroll.timesheets"
  | "files"
  | "assets"
  | "projects";


type SageScopes = "full_access" | "full_access_with_payroll";

export type OauthDestinations = "xero";
export type OauthScopes<T> = T extends "xero"
  ? XeroScopes
  : T extends "sage"
  ? SageScopes
  : [];

interface OauthDestinationProps<T extends OauthDestinations> {
  scopes: [OauthScopes<T>, ...OauthScopes<T>[]];
  type: T;
  state?: string;
  redirectUri: string;
  clientId: string;
}

export interface CreateOauthDestinationProps {
  code: string;
  group?: string;
  label?: string;
  endpoint: string;
  headers?: Record<string, any>;
  type?: OauthDestinations;
}