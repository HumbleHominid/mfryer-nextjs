export default function VideoComponent({
  vidSrc,
  width,
  height,
}: {
  vidSrc: string;
  width: number;
  height: number;
}) {
  return (
    <iframe
      width={width}
      height={height}
      src={vidSrc}
      allowFullScreen
      className="overflow-hidden"
    />
  );
}
