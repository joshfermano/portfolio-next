import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Stack',
  description: 'Discover the technologies I work with including React, TypeScript, Next.js, Node.js, Python, AI/ML frameworks, and modern development tools.',
  keywords: 'Josh Khovick Fermano tech stack, React, TypeScript, Next.js, Node.js, Python, AI, machine learning, web development technologies',
  alternates: {
    canonical: 'https://www.joshfermano.me/tech-stack',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Tech Stack | Josh Khovick Fermano',
    description: 'Discover the technologies I work with including React, TypeScript, Next.js, Node.js, Python, and AI/ML frameworks.',
    url: 'https://www.joshfermano.me/tech-stack',
    siteName: 'Josh Khovick Fermano Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Stack | Josh Khovick Fermano',
    description: 'Discover the technologies I work with including React, TypeScript, Next.js, Node.js, Python, and AI/ML frameworks.',
  },
};

export default function TechStackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}