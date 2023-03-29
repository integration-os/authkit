import { ReactElement, useState } from "react";
import { createPortal } from "react-dom";

const CustomIframe = ({
  children,
  title,
  id,
}: {
  children: ReactElement;
  title: string;
  id: string;
}) => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null);

  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe
      width="100%"
      height="100%"
      style={{
        position: "fixed",
        backgroundColor: "rgb(8 8 8 / 75%)",
        inset: "0px",
        borderWidth: "0px",
        display: "none",
      }}
      id={id}
      title={title}
      ref={setContentRef}
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};

export default CustomIframe;
