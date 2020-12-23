export interface MergeLink {
  initialize: (config: {
    linkToken: string;
    onSuccess: (linkTokenID: string) => void;
    onIFrameReady: () => void;
  }) => void;
  unmount: () => void;
  openLink: () => void;
}

export interface MergeLink {
  initialize: (config: {
    linkToken: string;
    onSuccess: (publicTokenID: string) => void;
    onIFrameReady: () => void;
  }) => void;
  unmount: () => void;
  openLink: () => void;
}

export interface MergeWindow extends Window {
  MergeLink: MergeLink;
}

export type UseMergeLinkProps = {
  linkToken: string;
  onSuccess: (publicTokenID: string) => void;
};
