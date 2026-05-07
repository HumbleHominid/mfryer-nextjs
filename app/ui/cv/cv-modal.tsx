"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import CvViewer from "@/app/ui/cv/cv-viewer";

export default function CvModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setIsAnimating(true)),
      );
      return () => cancelAnimationFrame(raf);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted || !isVisible) return null;

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
