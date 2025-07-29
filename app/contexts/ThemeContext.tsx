'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ThemeContextProps {
  children: ReactNode;
}

export default function ThemeContext({ children }: ThemeContextProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      themes={['light', 'dark', 'system']}
      storageKey="portfolio-theme">
      {children}
    </ThemeProvider>
  );
}
