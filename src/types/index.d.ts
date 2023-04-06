export interface SourceEventLink {
    openLink: ({
      group,
      integrationTypes,
    }: {
      group: string;
      integrationTypes?: string[];
    }) => void;
    initialize: () => void;
  }
  
  declare global {
    interface Window {
      EventLink: EventLink;
    }
  }
  

  export interface DestinationEventLink {
    openLink: ({
      group,
      integrationTypes,
    }: {
      group: string;
      integrationTypes?: string[];
    }) => void;
    initialize: () => void;
  }
  
  declare global {
    interface Window {
      SourceEventLink: SourceEventLink;
      DestinationEventLink: DestinationEventLink;
    }
  }
  