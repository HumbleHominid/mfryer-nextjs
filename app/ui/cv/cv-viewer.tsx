"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { XMarkIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { CV_PDF } from "@/app/lib/ref-links";

const CvPdfRenderer = dynamic(() => import("@/app/ui/cv/cv-pdf-renderer"), {
  ssr: false,
  loading: () => (
    <div className="w-full flex-1 animate-pulse rounded bg-gray-100" />
  ),
});

export default function CvViewer({
  onClose,
  scrollClassName = "flex-1 overflow-y-auto",
}: {
  onClose?: () => void;
  scrollClassName?: string;
}) {
  const [hasScrolled, setHasScrolled] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-lg font-semibold">Michael Fryer &mdash; CV</span>
        <div className="flex items-center gap-3">
          <a
            href={CV_PDF}
            download="Michael_Fryer_CV.pdf"
            className="rounded p-1.5 hover:cursor-pointer hover:bg-gray-100"
            aria-label="Download CV"
          >
            <ArrowDownTrayIcon className="w-5" />
          </a>
          {onClose ? (
            <button
              onClick={onClose}
              className="rounded p-1.5 hover:cursor-pointer hover:bg-gray-100"
              aria-label="Close CV modal"
            >
              <XMarkIcon className="w-5" />
            </button>
          ) : null}
        </div>
      </div>
      <div
        className={scrollClassName}
        onScroll={(e) => setHasScrolled(e.currentTarget.scrollTop > 0)}
        style={
          hasScrolled
            ? {
                maskImage:
                  "linear-gradient(to bottom, transparent 0, black 1em)",
              }
            : undefined
        }
      >
        <CvPdfRenderer />
      </div>
    </>
  );
}
