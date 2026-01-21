'use client'

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PDFViewer({
  src,
  title,
  cdate,
  duration,
  objectives,
  desc,
}: {
  src: string,
  title: string, 
  cdate:string, 
  duration:string, 
  objectives:string[],
  desc: string 
}) {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    const handlePageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;

        if (x < width / 2) {
        setPageNumber((prev) => Math.max(prev - 1, 1));
        } else {
        if (numPages && pageNumber < numPages) {
            setPageNumber((prev) => prev + 1);
        }
        }
    };

  return (
    <div
      className="
        flex
        flex-col
        justify-center
        items-center
        w-full
        my-10
        gap-4
        text-center
      "
    >
      <div
        className="
          flex
          flex-col
          justify-center
          items-center
          w-full
        "
      >
        <h1
          className="
            text-3xl
            mb-3
            font-bold
            text-transparent
            bg-linear-to-r from-[#eeff00] via-[#559900] to-[#eeff00]
            bg-clip-text
            transition-all duration-100
            bg-animated-gradient
          "
        >{title}</h1>
        <span
          className="
            text-xl
            mb-3
          "
        >Completion Date: {cdate} Duration: {duration}</span>
        <div
          className="
            text-md
            mb-3
            w-150
          "
        >
          <h2
            className="
              text-red-400
              font-bold
            "
          >
            OBJECTIVES
          </h2>
          {objectives.map((value, index) => (
            <p
              key={index}
            >
              {index+1}. {value}
            </p>
          ))}
        </div>

        <h2
          className="
            text-green-400
            font-bold
          "
        >
          DESCRIPTION
        </h2>

        <p
          className="
            text-md
            mb-3
            w-150
          "
        >
          {desc}
        </p>
      </div>

      <div 
        onClick={handlePageClick} 
        className="
          relative
          cursor-pointer
          shadow-lg
          hover:shadow-xl
          transition-shadow
        "
        style={{ touchAction: 'none' }}
      >
        <Document
          file={src}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page 
            pageNumber={pageNumber} 
            renderTextLayer={false}
            scale={0.5}
            renderAnnotationLayer={false} 
          />
        </Document>

        <span>
          Page {pageNumber} of {numPages || "..."}
        </span>
      </div>
    </div>
  );
}