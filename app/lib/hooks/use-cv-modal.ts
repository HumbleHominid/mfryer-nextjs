"use client";

import { useState } from "react";
import { useClientMediaQuery } from "@/app/lib/hooks/use-client-media-query";

export function useCvModal(onOpenChange?: (isOpen: boolean) => void) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useClientMediaQuery("(max-width: 640px)");

  function open() {
    setIsOpen(true);
    onOpenChange?.(true);
  }

  function close() {
    setIsOpen(false);
    onOpenChange?.(false);
  }

  return { isOpen, open, close, isMobile };
}
