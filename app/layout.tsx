import type { Metadata } from "next";
import "@/app/globals.css";
import { inter } from "@/app/ui/fonts";
import Footer from "@/app/ui/footer/footer";
import Navbar from "@/app/ui/navbar/navbar";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    template: "%s | M. Fryer",
    default: "M. Fryer",
  },
  description: "The official Michael Fryer website. Created by Michael Fryer.",
  keywords: ["michael", "fryer", "portfolio", "mfryer", "personal"],
  authors: [{ name: "Michael Fryer", url: "https://github.com/HumbleHominid" }],
  creator: "Michael Fryer",
  publisher: "Michael Fryer",
  applicationName: "Michael Fryer Portfolio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Fryer",
    description: "Portfolio website for Michael Fryer.",
    images: ["/twitter.png"],
  },
  openGraph: {
    title: "Michael Fryer",
    description: "Portfolio website for Michael Fryer.",
    siteName: "Michael Fryer Portfolio",
    url: "/",
    images: [
      {
        url: "/twitter.png",
        secureUrl: "/twitter.png",
        type: "image/png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navHeight = "h-20";

  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-900 antialiased`}>
        {/* Vercel Analytics */}
        <Analytics />
        <div className="relative grid min-h-lvh grid-rows-layout justify-items-stretch">
          {/* Navbar */}
          <div className="sticky top-0 z-50 w-full">
            {/* Fader thing for mobile */}
            <div className="absolute left-0 right-0 top-0 flex flex-col lg:hidden">
              {/* Full nav-height color */}
              <div className={`w-100 ${navHeight} bg-background`} />
              {/* Gradient for nice fadeout */}
              <div className="h-4 bg-gradient-to-b from-background" />
            </div>
            {/* Actual Navbar */}
            <div className={`${navHeight}`}>
              <Navbar />
            </div>
          </div>
          {/* Content */}
          <div className="z-10 overflow-hidden">
            <div className="m-auto w-11/12 p-4 lg:w-2/3">{children}</div>
          </div>
          {/* Footer */}
          <div className="z-10 row-start-4 my-4">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
