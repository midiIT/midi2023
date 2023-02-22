import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

export default function ViewPDF() {
  const [file, setFile] = useState("../media/test.pdf");
  const [numPages, setNumPages] = useState(null);
  // console.log('test');
  function onDocumentLoadSuccess({ numPages: nextNumPages }: any) {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      <header>
        <h1>React-pdf</h1>
      </header>
      <div>
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </div>
  );
}

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
