import { useEffect, useState } from "react";
import useScript from "react-script-hook";
import {UseMergeLinkProps } from "./types";


const useMergeLink = (
  config: UseMergeLinkProps): {open, isReady, error} => {
  const [loading, error] = useScript({ src: "https://cdn.merge.dev/initialize.js", checkForExisting: true });
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


export default useMergeLink;