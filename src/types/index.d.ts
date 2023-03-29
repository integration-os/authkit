export interface EventLink {
  openLink: () => void;
  initialize: ({
    group,
    integrations,
  }: {
    group: string;
    integrations: string[];
  }) => void;
}

declare global {
  interface Window {
    EventLink: EventLink;
  }
}
