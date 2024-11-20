import Image from "next/image"

export default function NavBadge() {
	return (
		<div className="relative">
			<Image
				src="/michael.png"
				alt="Michel logo"
				width={48}
				height={48}
				className="rounded-full drop-shadow-lg"
			/>
			<div className="w-12 h-12 bg-blue-500 rounded-full absolute top-0 left-0 -z-10 transform translate-x-3 translate-y-2"></div>
		</div>
	);
}