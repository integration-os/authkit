import { useEffect, useState } from 'react';
import useScript from './useScriptHook';
import { UseMergeLinkProps, UseMergeLinkResponse } from './types';

export const useMergeLink = (config: UseMergeLinkProps): UseMergeLinkResponse => {
  const [loading, error] = useScript({
    src: 'https://cdn.merge.dev/initialize.js',
    checkForExisting: true,
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!loading && !error) {
      window.MergeLink.initialize({
        ...config,
        onReady: () => setIsReady(true),
      });
    }
  }, [loading, error, config]);

  const open = () => {
    window.MergeLink.openLink();
  };

  return { open, isReady, error };
};
