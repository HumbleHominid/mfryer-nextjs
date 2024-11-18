import Image from "next/image";

export default function VideoSkeleton({
	imgSrc,
	alt,
	width,
	height,
}: {
	imgSrc: string;
	alt: string;
	width: number;
	height: number;
}) {
	return (
		<Image
			src={imgSrc}
			alt={alt}
			width={width}
			height={height}
		/>
	);
}