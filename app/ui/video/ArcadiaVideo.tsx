import VideoSkeleton from "@/app/ui/video/VideoSkeleton";
import { Suspense } from "react";

export default function ArcadiaVideo({
	width,
	height,
}: {
	width: number;
	height: number;
}) {
	const aspectRatio = 9/16*100;
	return (
		<div
			// Adding style here instead of in css as it's localized to this component anyways
			style={{paddingBottom: `${aspectRatio}%`}}
			className="relative h-0 shadow-lg"
		>
			<Suspense fallback={
				<VideoSkeleton
					imgSrc="/arcadia_thumbnail.png"
					alt="Arcadia Thumbnail"
					width={width}
					height={height}
				/>
			}>
				<iframe
					width={width}
					height={height}
					src="https://www.youtube.com/embed/46N37f4qUBo"
					allowFullScreen
					className="absolute top-0 left-0 w-full h-full"
				/>
			</Suspense>
		</div>
	);
}