import Link from "next/link";

export default function NavSocial({
	href,
	children,
} : {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="transition-all hover:-translate-x-1 hover:-translate-y-1 duration-300 ease-in-out hover:filter hover:drop-shadow-md"
		>
			<div className="w-10 h-auto" >
				{children}
			</div>
		</Link>
	);
}