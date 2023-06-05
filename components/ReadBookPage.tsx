import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface ReadBookPageProps {
  pdfUrl: string;
}

const ReadBookPage: React.FC<ReadBookPageProps> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center mt-12">
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        className="w-full max-w-md border rounded-lg overflow-hidden shadow-lg"
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p className="my-2">
        Page {pageNumber} of {numPages !== null ? numPages : '--'}
      </p>
      <div className="flex justify-between max-w-md w-full">
        <button
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            pageNumber <= 1 ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          Previous
        </button>
        <button
          disabled={pageNumber >= (numPages ?? 1)}
          onClick={() => setPageNumber(pageNumber + 1)}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            pageNumber >= (numPages ?? 1) ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ReadBookPage;
