import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { render } from "react-dom";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

export default function ViewPDF(props: { pdfLocation: string }) {
  const [file, setFile] = useState(props.pdfLocation);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const size = useWindowSize();

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="fixed top-0 bottom-0 z-10 flex w-screen flex-col items-center overflow-y-scroll pt-[5%] pb-[5%]">
      <Document
        className="flex flex-col items-center"
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
        error={
            <div className="flex justify-center items-center h-screen">
              <svg
                className="m-auto h-32 w-32 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>}
        loading={
          <div className="flex justify-center items-center h-screen">
            <svg
              className="h-32 w-32 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        }
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/* <Page pageNumber={1} scale={size.height*0.001}/> add scaling math height={size.height*0.52} width={size.width*0.5} */}
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              width={size.width > 768 ? size.width * 0.75 : size.width * 0.9}
              // scale={1}
              renderAnnotationLayer={true}
              renderTextLayer={true}
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ))}
        </div>
      </Document>
      <div></div>
    </div>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}