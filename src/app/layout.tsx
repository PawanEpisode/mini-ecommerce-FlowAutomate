import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ThemeProvider } from '../components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'One Piece Kart',
    template: '%s | One Piece Kart',
  },
  description:
    'Modern e-commerce application built with Next.js and Tailwind CSS',
  keywords: [
    'ecommerce',
    'nextjs',
    'tailwindcss',
    'typescript',
    'one piece',
    'luffy',
    'zoro',
    'sanji',
    'usopp',
    'chopper',
    'robin',
    'franky',
  ],
  authors: [{ name: 'One Piece Kart Team' }],
  creator: 'One Piece Kart',
  metadataBase: new URL('https://onepiecekart.vercel.app'),
  icons: {
    icon: '/cart.svg',
    shortcut: '/cart.svg',
    apple: '/cart.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onepiecekart.vercel.app',
    title: 'One Piece Kart',
    description:
      'Modern e-commerce application built with Next.js and Tailwind CSS',
    siteName: 'One Piece Kart',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Piece Kart',
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
