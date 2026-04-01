"use client";

import { useState, useRef, useEffect } from "react";

export function useHoverEffect(resetDelay?: number) {
  const [hasHovered, setHasHovered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function onMouseEnter() {
    setHasHovered(true);
    setIsHovered(true);
    if (resetDelay !== undefined) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setHasHovered(false), resetDelay);
    }
  }

  function onMouseLeave() {
    setIsHovered(false);
  }

  return { hasHovered, isHovered, onMouseEnter, onMouseLeave };
}
