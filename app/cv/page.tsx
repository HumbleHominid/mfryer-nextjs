import CvViewer from "@/app/ui/cv/cv-viewer";

export default function CvPage() {
  return (
    <div className="flex flex-col overflow-hidden rounded">
      <CvViewer iframeClassName="h-[80vh] w-full border-0" />
    </div>
  );
}
