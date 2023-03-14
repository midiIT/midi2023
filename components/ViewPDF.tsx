import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/TextLayer.css';
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
  // console.log('test');

  //   function onDocumentLoadSuccess({ numPages: nextNumPages }: any) {
  //     setNumPages(nextNumPages);
  //   }
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

  // return (
  //   <div className="flex flex-col items-center w-screen z-10 mt-[5%] overflow-scroll">
  //     <Document
  //       file={props.pdfLocation}
  //       onLoadSuccess={onDocumentLoadSuccess}
  //     >
  //       <div onClick={e => {e.stopPropagation();}}>
  //       <Page pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false}/>
  //       </div>
  //     </Document>
  //     <div onClick={e => {e.stopPropagation();}}>
  //       <p className="text-white">
  //         Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
  //       </p>
  //       <button
  //         className="text-white"
  //         type="button"
  //         disabled={pageNumber <= 1}
  //         onClick={previousPage}
  //       >
  //         Previous
  //       </button>
  //       <button
  //         className="text-white"
  //         type="button"
  //         disabled={pageNumber >= numPages}
  //         onClick={nextPage}
  //       >
  //         Next
  //       </button>
  //     </div>
  //   </div>
  // );

  return (
    <div className="fixed top-0 bottom-0 z-10 pt-[5%] pb-[5%] flex w-screen flex-col items-center overflow-y-scroll">
      <Document
        className="flex flex-col items-center"
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/* <Page pageNumber={1} scale={size.height*0.001}/> add scaling math height={size.height*0.52} width={size.width*0.5} */}
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              scale={size.width * 0.001}
              renderAnnotationLayer={false}
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
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
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
// #ResumeContainer {
//     margin:auto;
//     width: 65%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }

// import React, { useState } from "react";
// import Loader from "./Loader";
// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const ViewPDF = () => {
//     const [numPages, setNumPages] = useState(null);
//     const [pageNumber, setPageNumber] = useState(1);
//     const [isLoading, setIsLoading] = useState(true);

//     function onDocumentLoadSuccess({ numPages }: any) {
//         setNumPages(numPages);
//         setIsLoading(false);
//     }

//     return(
//         <div>
//             <Loader isLoading={isLoading} />
//             <section
//                 id="pdf-section"
//                 className="flex flex-col justify-center items-center">
//                 <Document
//                     file="/media/placeholder.pdf"
//                     onLoadSuccess={onDocumentLoadSuccess}>
//                     <Page pageNumber={pageNumber} />
//                 </Document>
//             </section>
//         </div>
//     );
// };

// export default ViewPDF;
