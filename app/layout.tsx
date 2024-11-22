import type { Metadata } from 'next';
import '@/app/globals.css';
import { inter } from '@/app/ui/fonts';
import Footer from '@/app/ui/footer/footer';
import Navbar from '@/app/ui/navbar/navbar';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title:{
    template: '%s | M. Fryer',
    default: 'M. Fryer',
  },
  description: 'The official Michael Fryer website. Created by Michael Fryer.',
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
        <div className="relative grid grid-rows-layout min-h-lvh justify-items-stretch">
          {/* Navbar */}
          <div className="z-50 w-full sticky top-0">
            {/* Fader thing for mobile */}
            <div className="absolute lg:hidden flex flex-col top-0 right-0 left-0">
              {/* Full nav-height color */}
              <div className={`w-100 ${navHeight} bg-background`} />
              {/* Gradient for nice fadeout */}
              <div className="h-4 bg-gradient-to-b from-background" />
            </div>
            {/* Actual Navbar */}
            <div className={`${navHeight}`}>
              <Navbar/>
            </div>
          </div>
          {/* Content */}
          <div className="z-10 overflow-hidden">
            <div className=" p-4 w-11/12 lg:w-2/3 m-auto">
              {children}
            </div>
          </div>
          {/* Footer */}
          <div className="z-10 row-start-4 my-4">
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
