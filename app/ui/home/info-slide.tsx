import Image from "next/image";
import SlideInItem from "@/app/ui/slide-in-item";

const SIDE_CLASSES = {
  left: "float-left mr-4",
  right: "float-right ml-4",
} as const;

export default function InfoSlide({
  src,
  alt,
  width,
  height,
  side,
  imageClassName = "",
  children,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  side: "left" | "right";
  imageClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <SlideInItem className="mb-8 p-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        className={`${SIDE_CLASSES[side]} ${imageClassName}`}
      />
      {children}
    </SlideInItem>
  );
}
