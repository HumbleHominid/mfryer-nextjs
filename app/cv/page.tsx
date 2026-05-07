import CvViewer from "@/app/ui/cv/cv-viewer";

export default function CvPage() {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg">
      <CvViewer scrollClassName="h-[80vh] overflow-y-auto" showTitle={false} />
    </div>
  );
}
