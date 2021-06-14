export interface MergeLink {
  initialize: (config: InitializeProps) => void;
  update: (config: {
    linkToken: string;
    onSuccess: (publicTokenID: string) => void;
  }) => void;
  openLink: (config: UseMergeLinkProps) => void;
}
export interface UseMergeLinkProps {
  linkToken: string;
  demoCategories: Array<string>;
  onExit: () => void;
  onLoad: () => void;
  onSuccess: (publicTokenID: string) => void;
}

export interface InitializeProps extends UseMergeLinkProps {
  onReady: () => void;
}

export type UseMergeLinkResponse = {
  open: (config: UseMergeLinkProps) => void;
  isReady: boolean;
  error: ErrorEvent | null;
}

declare global {
  interface Window {
    MergeLink: MergeLink;
  }
}
