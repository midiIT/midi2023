import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { render } from "react-dom";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

export default function ViewPDF(props: { pdfLocation: string}) {
  const [file, setFile] = useState(props.pdfLocation);
  const [numPages, setNumPages] = useState(null);
  // console.log('test');
  function onDocumentLoadSuccess({ numPages: nextNumPages }: any) {
    setNumPages(nextNumPages);
  }
  const size = useWindowSize();
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   console.log(width, height)

  return (
      <div className="flex flex-col items-center w-screen z-10">
        <Document className="flex flex-col items-center"
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
            <Page pageNumber={1} scale={0.9} /> {/* add scaling mathheight={size.height*0.52} width={size.width*0.5} */}
          {/* {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))} */}
        </Document>
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