import { useEffect, useState } from "react";
import { MergeWindow, UseMergeLinkProps } from "./types";

declare let window: MergeWindow;

const MERGE_LINK_URL = "https://cdn.merge.dev/initialize.js";
const MERGE_SCRIPT_ID = "merge_script_id";


export const useMergeLink = (config: UseMergeLinkProps): {open: () => void, isReady: boolean} => {
  const [isReady, setIsReady] = useState(false);

  const createMergeLink = () => {
    if (window.MergeLink == undefined) {
      return;
    }

    window.MergeLink.initialize({
      ...config,
      onIFrameReady: () => setIsReady(true),
    });
  };

  useEffect(() => {
    if (!document.getElementById(MERGE_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = MERGE_SCRIPT_ID;
      script.onload = createMergeLink;
      script.src = MERGE_LINK_URL;
      document.head.prepend(script);
    }
  }, []);

  useEffect(() => {
    return () => window.MergeLink.unmount();
  }, []);

  const open = () => {
    window.MergeLink.openLink();
  };

  
  return { open, isReady };
};
