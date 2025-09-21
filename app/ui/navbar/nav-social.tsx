import Link from "next/link";

export default function NavSocial({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  // Link to a social item. lifts self and applies a drop shadow when hovered
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:drop-shadow-md hover:filter"
    >
      <div className="transition-position h-auto w-10 duration-300 ease-in-out hover:-translate-x-1 hover:-translate-y-1">
        {children}
      </div>
    </Link>
  );
}
