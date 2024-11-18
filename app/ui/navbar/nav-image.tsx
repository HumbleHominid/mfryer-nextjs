import Image from "next/image";

export default function NavImage({
	src,
	alt,
} : {
	src: string;
	alt: string;
}) {
	return (
		<Image
			aria-hidden
			src={src}
			alt={alt}
			width={24}
			height={24}
		/>
	);
}