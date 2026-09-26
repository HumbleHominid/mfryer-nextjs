import Link from "next/link";
import clsx from "clsx";

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
  return (
    <div
      style={{ transitionDelay: `${200 * (index + 1)}ms` }}
      className={clsx(
        "flex items-center gap-4 py-2 transition-all duration-1000 ease-in-out has-[a:hover]:gap-6",
        isNavExpanded
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0",
      )}
    >
      {/* Route Name */}
      <Link
        href={data.href}
        onClick={routeClickCallback}
        className="overflow-visible"
      >
        <span className="text-3xl font-extrabold text-purple-950 filter transition-colors hover:text-white hover:drop-shadow-md md:text-5xl">
          {data.routeName}
        </span>
      </Link>
      {/* Dash */}
      <div className="translate h-0.5 w-4 translate-y-1 self-center bg-slate-500 md:w-8" />
      {/* Extra Text */}
      <span className="-translate-y-0.5 text-xl font-extralight leading-none text-purple-600 sm:translate-y-0 md:text-3xl">
        {data.text}
        {/* Neato big period */}
        <span className="text-4xl font-light leading-none text-black">.</span>
      </span>
    </div>
  );
}
