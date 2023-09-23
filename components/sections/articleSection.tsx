import React, { useState } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Image from "next/image";
import placeholder from "public/media/placeholder.png";
const ViewPDF = dynamic(() => import("../ViewPDF"), {
  ssr: false,
});

export default function ArticleSection(props: {
  name: string;
  pdfLocation: string;
}) {
  const [show, setShow] = useState(false);
  const { width, height } = useWindowDimensions();

  return (
    <div className="flex flex-col text-xl sm:text-2xl md:text-2xl lg:text-3xl">
      <button
        // className="material-bubble"
        className="flex items-center space-x-4 text-left transition duration-300 ease-in-out 
        hover:bg-slate-800 hover:shadow-lg active:translate-y-1
        active:shadow-none active:duration-100 dark:hover:shadow-black/30"
        onClick={() => setShow(true)}
      >
        <Image
          className="float-left h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36"
          alt="placeholder"
          src={placeholder}
        ></Image>
        <span>{props.name}</span>
      </button>
      {show &&
        createPortal(
          <div className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-50">
            {width !== undefined && width < 768 && (
              <button
                className="absolute top-4 right-4 z-[51]"
                onClick={() => setShow(false)}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-14 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
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
