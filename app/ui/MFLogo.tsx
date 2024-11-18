import Image from "next/image";

export default function MFLogo() {
	return (
		<div className="flex gap-4 just content-center">
			<Image
				src="/michael.png"
				alt="Michel logo"
				width={48}
				height={48}
				className="rounded-md shadow-md"
			/>
		</div>
	);
}