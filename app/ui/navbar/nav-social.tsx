import Link from "next/link";

export default function NavSocial({
	href,
	children,
} : {
	href: string;
	children: React.ReactNode;
}) {
	// Link to a social item. lifts self and applies a drop shadow when hovered
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="hover:filter hover:drop-shadow-md"
		>
			<div className="transition-position hover:-translate-x-1 hover:-translate-y-1 duration-300 ease-in-out w-10 h-auto" >
				{children}
			</div>
		</Link>
	);
}