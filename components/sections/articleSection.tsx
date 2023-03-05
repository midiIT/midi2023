import React, { useState } from "react";
import { createPortal } from "react-dom";
// import { Modal } from "react-overlays";
import dynamic from "next/dynamic";
const ViewPDF = dynamic(() => import("../ViewPDF"), {
  ssr: false,
});

export default function ArticleSection(props: {
  name: string;
  pdfLocation: string;
}) {
  const [show, setShow] = useState(false);
  // const renderBackdrop = (props: any) => <div {...props} className="opacity-50" />;
  // var handleClose = () => setShow(false);

  return (
    <div className="flex flex-col text-xl sm:text-2xl md:text-2xl lg:text-3xl">
      <button
        className="flex items-center space-x-4 text-left"
        onClick={() => setShow(true)}
      >
        <img
          className="float-left h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36"
          src="/media/placeholder.png"
          alt="placeholder"
        />
        <span>{props.name}</span>
      </button>
      {show &&
        createPortal(
          <div className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-50">
            {/* <button onClick={() => setShow(false)}>Close</button> */}
            <div onClick={() => setShow(false)}>
              <ViewPDF pdfLocation={props.pdfLocation} />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
// onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => viewPDF()
