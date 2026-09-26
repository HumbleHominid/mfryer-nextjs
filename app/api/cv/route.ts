import { CV_PDF } from "@/app/lib/ref-links";

export const revalidate = 86400;

export async function GET(request: Request) {
  let res: Response;
  try {
    res = await fetch(CV_PDF, { next: { revalidate: 86400 } });
  } catch {
    return new Response("Failed to fetch CV", { status: 502 });
  }
  if (!res.ok) {
    return new Response("Failed to fetch CV", { status: 502 });
  }
  const pdf = await res.arrayBuffer();
  const isDownload = new URL(request.url).searchParams.has("download");
  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": isDownload
        ? 'attachment; filename="Michael_Fryer_CV.pdf"'
        : 'inline; filename="cv.pdf"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}
