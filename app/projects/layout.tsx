import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web applications, AI/ML projects, and mobile apps built with modern technologies like React, Next.js, TypeScript, and more.',
  keywords: 'Josh Fermano projects, web development projects, React projects, AI projects, portfolio, full stack projects',
  alternates: {
    canonical: 'https://joshfermano.me/projects',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Projects | Josh Khovick Fermano',
    description: 'Explore my portfolio of web applications, AI/ML projects, and mobile apps built with modern technologies.',
    url: 'https://joshfermano.me/projects',
    siteName: 'Josh Fermano Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Josh Khovick Fermano',
    description: 'Explore my portfolio of web applications, AI/ML projects, and mobile apps built with modern technologies.',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}