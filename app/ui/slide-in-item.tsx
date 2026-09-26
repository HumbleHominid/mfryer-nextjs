"use client";

import { useRef, useState, useEffect } from "react";
import clsx from "clsx";

export default function SlideInItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, doShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          doShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -5% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(`${className} transition-all duration-300 ease-in-out`, {
        "translate-y-0 opacity-100": show,
        "translate-y-32 opacity-0": !show,
      })}
    >
      {children}
    </div>
  );
}
