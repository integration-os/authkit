export interface MergeLink {
  initialize: (config: InitializeProps) => void;
  update: (config: {
    linkToken: string;
    onSuccess: (publicTokenID: string) => void;
  }) => void;
  openLink: (config: UseMergeLinkProps) => void;
}

export interface TenantConfig {
  apiBaseURL?: string
}
export interface UseMergeLinkProps {
  linkToken: string;
  tenantConfig?: TenantConfig
  onExit?: () => void;
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
