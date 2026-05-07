import Link from "next/link";

export default function FooterLink({
  children,
  href,
  className,
  target = "_blank",
}: {
  children: React.ReactNode;
  href: string;
  className: string;
  target?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </Link>
  );
}
