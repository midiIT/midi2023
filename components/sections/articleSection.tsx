import React, { useState } from "react";
import { Modal } from "react-overlays";
import dynamic from "next/dynamic";
const ViewPDF = dynamic(() => import("../ViewPDF"), {
  ssr: false,
});

export default function ArticleSection(props: {
  name: string;
  pdfLocation: string;
}) {
  const [show, setShow] = useState(false);
  const renderBackdrop = (props: any) => <div {...props} className="backdrop" />;
  var handleClose = () => setShow(false);
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
      <Modal className="modal"
      show={show}
      onHide={handleClose}
      renderBackdrop={renderBackdrop}>
        <div>
          <ViewPDF pdfLocation={props.pdfLocation}/>
        </div>
      </Modal>
    </div>
    
  );
}

// onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => viewPDF()
