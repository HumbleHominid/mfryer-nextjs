"use client";

import Image from "next/image";
import clsx from "clsx";
import { useHoverEffect } from "@/app/lib/hooks/use-hover-effect";

export default function NavBadge() {
  const { hasHovered, isHovered, onMouseEnter, onMouseLeave } = useHoverEffect(
    69 * 1000,
  );

  return (
    <div className="relative">
      <Image
        src="/michael.png"
        alt="Michael logo"
        width={48}
        height={48}
        className={clsx("rounded-full drop-shadow-lg", {
          "hover:cursor-pointer": !hasHovered,
        })}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
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
