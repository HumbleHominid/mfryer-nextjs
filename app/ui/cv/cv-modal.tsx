"use client";

import { useEffect, useRef, useState } from "react";
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
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

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

  useEffect(() => {
    if (isOpen) {
      previouslyFocused.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = "hidden";
      const raf = requestAnimationFrame(() => panelRef.current?.focus());
      return () => {
        cancelAnimationFrame(raf);
        document.body.style.overflow = "";
      };
    } else {
      previouslyFocused.current?.focus();
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return createPortal(
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity duration-200",
        isAnimating ? "opacity-100" : "opacity-0",
      )}
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        className={clsx(
          "bg-background flex h-[90vh] w-[90vw] flex-col overflow-hidden rounded-lg shadow-2xl transition-all duration-200 focus:outline-none",
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
