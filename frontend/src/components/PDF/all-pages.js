import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "./PDFViewer.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <div className="pdf-document-viewer">
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}