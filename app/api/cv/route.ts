import { CV_PDF } from "@/app/lib/ref-links";

export const revalidate = 86400;

export async function GET() {
  const res = await fetch(CV_PDF, { next: { revalidate: 86400 } });
  if (!res.ok) {
    return new Response("Failed to fetch CV", { status: 502 });
  }
  const pdf = await res.arrayBuffer();
  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="cv.pdf"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}
