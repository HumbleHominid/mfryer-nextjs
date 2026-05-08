"use client";

import Link from "next/link";
import CvModal from "@/app/ui/cv/cv-modal";
import { useCvModal } from "@/app/lib/hooks/use-cv-modal";

export default function CvLink() {
  const { isOpen, open, close, isMobile } = useCvModal();

  if (isMobile) {
    return (
      <Link className="hover:underline hover:underline-offset-4" href="/cv">
        CV
      </Link>
    );
  }

  return (
    <>
      <button
        className="hover:cursor-pointer hover:underline hover:underline-offset-4"
        onClick={open}
        aria-label="View CV"
      >
        CV
      </button>
      <CvModal isOpen={isOpen} onClose={close} />
    </>
  );
}
