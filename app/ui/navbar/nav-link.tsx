import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";

export type NavLinkData = {
  href: string;
  routeName: string;
  text: string;
};

export default function NavLink({
  data,
  index,
  isNavExpanded,
  routeClickCallback,
}: {
  data: NavLinkData;
  index: number;
  isNavExpanded: boolean;
  routeClickCallback: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ transitionDelay: `${200 * (index + 1)}ms` }}
      className={clsx(
        "flex items-baseline gap-4 transition-all duration-1000 ease-in-out",
        isNavExpanded
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0",
        isHovered ? "gap-6" : "gap-4",
      )}
    >
      {/* Route Name */}
      <Link
        href={data.href}
        onClick={() => routeClickCallback()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="text-3xl font-extrabold text-purple-950 filter transition-colors hover:text-white hover:drop-shadow-md md:text-5xl">
          {data.routeName}
        </span>
      </Link>
      {/* Dash */}
      <div className="translate h-0.5 w-4 translate-y-1 self-center bg-slate-500 md:w-8" />
      {/* Extra Text */}
      <span className="text-xl font-extralight text-purple-600 md:self-end md:text-3xl">
        {data.text}
        {/* Neato big period */}
        <span className="text-4xl font-light text-black">.</span>
      </span>
    </div>
  );
}
