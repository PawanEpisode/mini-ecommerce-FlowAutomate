import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Mini Ecommerce',
    template: '%s | Mini Ecommerce',
  },
  description:
    'Modern e-commerce application built with Next.js and Tailwind CSS',
  keywords: ['ecommerce', 'nextjs', 'tailwindcss', 'typescript'],
  authors: [{ name: 'Mini Ecommerce Team' }],
  creator: 'Mini Ecommerce',
  metadataBase: new URL('https://mini-ecommerce.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mini-ecommerce.vercel.app',
    title: 'Mini Ecommerce',
    description:
      'Modern e-commerce application built with Next.js and Tailwind CSS',
    siteName: 'Mini Ecommerce',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mini Ecommerce',
    description:
      'Modern e-commerce application built with Next.js and Tailwind CSS',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
