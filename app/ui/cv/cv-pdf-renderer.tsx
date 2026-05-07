"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { CV_EMBED } from "@/app/lib/ref-links";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function CvPdfRenderer() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [bgColor, setBgColor] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBgColor(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--background")
        .trim(),
    );
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <Document
        file={CV_EMBED}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={
          <div className="h-64 w-full animate-pulse rounded bg-gray-100" />
        }
        error={<div className="p-4 text-red-500">Failed to load CV.</div>}
      >
        {numPages &&
          Array.from({ length: numPages }, (_, i) => (
            <Page
              key={i + 1}
              pageNumber={i + 1}
              width={containerWidth || undefined}
              canvasBackground={bgColor || undefined}
              renderTextLayer
              renderAnnotationLayer
            />
          ))}
      </Document>
    </div>
  );
}
