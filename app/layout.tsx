import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Outfit } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import ThemeContext from './contexts/ThemeContext';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.joshfermano.me'),
  title: {
    default: 'Josh Khovick Fermano | Full Stack Developer Specializing in AI',
    template: '%s | Josh Khovick Fermano',
  },
  description:
    'Portfolio of Josh Khovick Fermano, a Full Stack Developer Specializing in AI, Computer Science Student, and Freelance Software Engineer.',
  keywords:
    'Josh Khovick Fermano, web development, full stack, AI development, React, TypeScript, Express.js, portfolio, software engineer, computer science student',
  authors: [{ name: 'Josh Khovick Fermano' }],
  creator: 'Josh Khovick Fermano',
  publisher: 'Josh Khovick Fermano',
  alternates: {
    canonical: 'https://www.joshfermano.me',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Josh Khovick Fermano | Full Stack Developer Specializing in AI',
    description:
      'Portfolio of Josh Khovick Fermano, a Full Stack Developer Specializing in AI, Computer Science Student, and Freelance Software Engineer.',
    url: 'https://www.joshfermano.me',
    siteName: 'Josh Khovick Fermano Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'Josh Khovick Fermano - Full Stack Developer Specializing in AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josh Khovick Fermano | Full Stack Developer Specializing in AI',
    description:
      'Portfolio of Josh Khovick Fermano, a Full Stack Developer Specializing in AI, Computer Science Student, and Freelance Software Engineer.',
    images: ['/icon.png'],
    creator: '@joshfermano', // Replace with your actual Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${outfit.variable} antialiased`}>
        <ThemeContext>
          <div className="min-h-screen bg-background text-foreground">
            {children}
            <Analytics />
          </div>
        </ThemeContext>
      </body>
    </html>
  );
}
