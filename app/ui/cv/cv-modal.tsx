"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import CvViewer from "@/app/ui/cv/cv-viewer";
import { useEscapeKey } from "@/app/lib/hooks/use-escape-key";

export default function CvModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  // Derived, so closing starts the exit transition in the same render.
  const isAnimating = isOpen && hasEntered;

  useEffect(() => {
    if (isOpen) {
      // Mount hidden one frame before animating in, so the transition has a
      // painted opacity-0 state to start from.
      let animateRaf = 0;
      const mountRaf = requestAnimationFrame(() => {
        setIsVisible(true);
        animateRaf = requestAnimationFrame(() => setHasEntered(true));
      });
      return () => {
        cancelAnimationFrame(mountRaf);
        cancelAnimationFrame(animateRaf);
      };
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setHasEntered(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEscapeKey(onClose, isOpen);

  if (!isVisible) return null;

  return createPortal(
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity duration-500",
        isAnimating ? "opacity-100" : "opacity-0",
      )}
      onClick={onClose}
    >
      <div
        className={clsx(
          "bg-background flex h-[90vh] w-[90vw] flex-col overflow-hidden rounded-lg shadow-2xl transition-all duration-200",
          isAnimating ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <CvViewer onClose={onClose} />
      </div>
    </div>,
    document.body,
  );
}
