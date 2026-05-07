import { XMarkIcon } from "@heroicons/react/24/outline";
import { CV_EMBED } from "@/app/lib/ref-links";

export default function CvViewer({
  onClose,
  iframeClassName = "w-full flex-1 border-0",
}: {
  onClose?: () => void;
  iframeClassName?: string;
}) {
  return (
    <>
      <div className="flex items-center justify-between border-b px-4 py-3">
        <span className="text-lg font-semibold">Michael Fryer &mdash; CV</span>
        <div className="flex items-center gap-3">
          {onClose ? (
            <button
              onClick={onClose}
              className="rounded p-1.5 hover:cursor-pointer hover:bg-gray-100"
              aria-label="Close CV modal"
            >
              <XMarkIcon className="w-5" />
            </button>
          ) : null}
        </div>
      </div>
      <iframe
        src={CV_EMBED}
        className={iframeClassName}
        title="Michael Fryer CV"
      />
    </>
  );
}
