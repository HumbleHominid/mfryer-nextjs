import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title:{
    template: '%s | M. Fryer Website',
    default: 'M. Fryer Website',
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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
