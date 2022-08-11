export type AdditionalSuccessfulLinkInfo = {
  isTokenForOtherPreexistingLinkedAccount?: boolean;
};

export interface MergeLink {
  initialize: (config: InitializeProps) => void;
  update: (config: {
    linkToken: string;
    onSuccess: (
      publicToken: string,
      additionalInfo?: AdditionalSuccessfulLinkInfo
    ) => void;
  }) => void;
  openLink: (config: UseMergeLinkProps) => void;
}

export interface TenantConfig {
  apiBaseURL?: string;
}
export interface UseMergeLinkProps {
  linkToken: string;
  tenantConfig?: TenantConfig;
  onSuccess: (
    publicToken: string,
    additionalInfo?: AdditionalSuccessfulLinkInfo
  ) => void;
  onExit?: () => void;
  /**
   * Make Link call `onSuccess` immediately after an account has been successfully linked instead of after the user closes the Link modal.
   * Defaults to `true` as of v2.0.0. The default is `false` in prior versions.
   */
  shouldSendTokenOnSuccessfulLink?: boolean | undefined;
}

export interface InitializeProps extends UseMergeLinkProps {
  onReady: () => void;
}

export type UseMergeLinkResponse = {
  open: () => void;
  isReady: boolean;
  error: ErrorEvent | null;
};

declare global {
  interface Window {
    MergeLink: MergeLink;
  }
}
