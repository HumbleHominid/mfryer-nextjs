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
  const ref = useRef(null);
  const [show, doShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const topPos = (el: HTMLElement) => el.getBoundingClientRect().top;
      const divPos = ref.current ? topPos(ref.current) : 0;

      if (divPos < 0.95 * window.innerHeight) doShow(true);
    };

    onScroll();

    window.addEventListener("scroll", () => onScroll());
    window.removeEventListener("scroll", () => onScroll());
  });

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
