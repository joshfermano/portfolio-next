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
  metadataBase: new URL('https://joshfermano.me'),
  title: 'Josh Khovick Fermano | Full Stack Developer',
  description:
    'Portfolio of Josh Fermano, a Full Stack Developer specializing in React, Next.js, TypeScript, Express.js and more.',
  keywords:
    'Josh Khovick Fermano, web development, full stack, React, TypeScript, Express.js',
  authors: [{ name: 'Josh Khovick Fermano' }],
  creator: 'Josh Khovick Fermano',
  icons: {
    icon: '/profile-icon.png',
    shortcut: '/profile-icon.png',
    apple: '/profile-icon.png',
  },
  openGraph: {
    title: 'Josh Khovick Fermano | Full Stack Developer',
    description:
      'Portfolio of Josh Fermano, a Full Stack Developer specializing in React, Next.js, TypeScript, Express.js and more.',
    url: 'https://joshfermano.me',
    siteName: 'Josh Fermano Portfolio',
    type: 'website',
    images: ['/profile-icon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josh Khovick Fermano | Full Stack Developer',
    description:
      'Portfolio of Josh Fermano, a Full Stack Developer specializing in React, Next.js, TypeScript, Express.js and more.',
    images: ['/profile-icon.png'],
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
