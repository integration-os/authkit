import { useCallback, useEffect, useState } from 'react';
import useScript from './useScriptHook';
import { UseMergeLinkProps, UseMergeLinkResponse } from './types';

export const useMergeLink = (config: UseMergeLinkProps): UseMergeLinkResponse => {
  const [loading, error] = useScript({
    src: 'https://cdn.merge.dev/initialize.js',
    checkForExisting: true,
  });
  const [isReady, setIsReady] = useState(false);
  const isServer = (typeof window === 'undefined');
  const isReadyForInitialization = !isServer && !!window.MergeLink && !loading && !error;

  useEffect(() => {
    if (isReadyForInitialization && window.MergeLink) {
      window.MergeLink.initialize({
        ...config,
        onReady: () => setIsReady(true),
      });
    }
  }, [isReadyForInitialization, config]);

  const open = useCallback(() => {
    if (window.MergeLink) {
      window.MergeLink.openLink(config);
    }
  }, [config]);

  return { open, isReady, error };
};
