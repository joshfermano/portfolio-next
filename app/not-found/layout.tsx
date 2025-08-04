import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found (404)',
  description:
    "The page you are looking for could not be found. Browse Josh Khovick Fermano's portfolio, projects, and tech stack instead.",
  keywords:
    'Josh Khovick Fermano, 404, page not found, portfolio, projects, tech stack',
  alternates: {
    canonical: 'https://www.joshfermano.me/not-found',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Page Not Found | Josh Khovick Fermano',
    description:
      "The page you are looking for could not be found. Browse Josh Khovick Fermano's portfolio instead.",
    url: 'https://www.joshfermano.me/not-found',
    siteName: 'Josh Khovick Fermano Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Not Found | Josh Khovick Fermano',
    description:
      "The page you are looking for could not be found. Browse Josh Khovick Fermano's portfolio instead.",
  },
};

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
