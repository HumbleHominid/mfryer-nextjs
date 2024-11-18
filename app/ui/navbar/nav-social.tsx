import Link from "next/link";

export default function NavSocial({
	children,
	href,
} : {
		children: React.ReactNode;
		href: string;
}) {
	return (
		<Link
			href={href}
			target="_blank"
			className="self-center"
		>
			{children}
		</Link>
	);
}