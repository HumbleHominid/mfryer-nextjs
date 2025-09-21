import Image from "next/image";

export default function MFLogo() {
  return (
    <div className="just flex content-center gap-4">
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
