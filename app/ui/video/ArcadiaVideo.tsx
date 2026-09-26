"use client";

import VideoSkeleton from "@/app/ui/video/VideoSkeleton";
import { useState } from "react";

export default function ArcadiaVideo({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const aspectRatio = (9 / 16) * 100;
  return (
    <div
      // Adding style here instead of in css as it's localized to this component anyways
      style={{ paddingBottom: `${aspectRatio}%` }}
      className="relative h-0 shadow-lg"
    >
      {!isLoaded && (
        <div className="absolute left-0 top-0 h-full w-full">
          <VideoSkeleton
            imgSrc="/arcadia_thumbnail.png"
            alt="Arcadia Thumbnail"
            width={width}
            height={height}
          />
        </div>
      )}
      <iframe
        width={width}
        height={height}
        src="https://www.youtube.com/embed/46N37f4qUBo"
        title="Arcadia SMP video"
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
        className="absolute left-0 top-0 h-full w-full"
      />
    </div>
  );
}
