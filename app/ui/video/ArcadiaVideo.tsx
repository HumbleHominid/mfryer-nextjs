import VideoComponent from "@/app/ui/video/VideoComponent";
import VideoSkeleton from "@/app/ui/video/VideoSkeleton";
import { Suspense } from "react";

export default function ArcadiaVideo({
	width,
	height,
	className = "",
}: {
	width: number;
	height: number;
	className?: string;
}) {
	return (
		<div
			style={{ width: width, height: height }}
			className={className}
		>
			<Suspense fallback={
				<VideoSkeleton
					imgSrc="/arcadia_thumbnail.png"
					alt="Arcadia Thumbnail"
					width={width}
					height={height}
				/>
			}>
				<VideoComponent
					vidSrc="https://www.youtube.com/embed/46N37f4qUBo"
					width={width}
					height={height}
				/>
			</Suspense>
		</div>
	);
}