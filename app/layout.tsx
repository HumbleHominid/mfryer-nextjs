import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/app/ui/fonts';
import Footer from '@/app/ui/footer';
import Navbar from '@/app/ui/navbar';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title:{
    template: '%s | M. Fryer',
    default: 'M. Fryer',
  },
  description: 'The Official Michael Fryer website. Created by Michael Fryer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="grid grid-rows-layout min-h-lvh justify-items-stretch">
          <Navbar/>
          <div className="p-4 w-11/12 sm:w-4/5 md:w-3/5 justify-self-center">
            {children}
            <Analytics/>
          </div>
          <div className="row-start-4 my-4">
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
