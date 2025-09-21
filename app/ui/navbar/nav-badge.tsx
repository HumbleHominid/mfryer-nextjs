"use client";

import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";

export default function NavBadge() {
  const [hasHovered, setHasHovered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  let resetHoveredTimeout: NodeJS.Timeout;

  function handleHover() {
    setHasHovered(true);
    setIsHovered(true);

    if (resetHoveredTimeout) clearTimeout(resetHoveredTimeout);
    resetHoveredTimeout = setTimeout(() => setHasHovered(false), 69 * 1000);
  }

  return (
    <div className="relative">
      <Image
        src="/michael.png"
        alt="Michel logo"
        width={48}
        height={48}
        className={clsx("rounded-full drop-shadow-lg", {
          "hover:cursor-pointer": !hasHovered,
        })}
        onMouseEnter={handleHover}
        onMouseLeave={() => setIsHovered(() => false)}
      />
      <div
        className={clsx(
          "absolute left-0 top-0 -z-10 h-12 w-12 transform rounded-full bg-blue-300 duration-2000 ease-in-out",
          {
            "translate-x-2": isHovered || hasHovered,
            "translate-y-1": hasHovered && !isHovered,
            "translate-y-2": isHovered,
          },
        )}
      />
    </div>
  );
}
