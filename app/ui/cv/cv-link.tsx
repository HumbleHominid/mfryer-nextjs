"use client";

import { useState } from "react";
import Link from "next/link";
import CvModal from "@/app/ui/cv/cv-modal";
import { useClientMediaQuery } from "@/app/lib/hooks/use-client-media-query";

export default function CvLink() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useClientMediaQuery("(max-width: 640px)");

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
        onClick={() => setIsModalOpen(true)}
        aria-label="View CV"
      >
        CV
      </button>
      <CvModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
