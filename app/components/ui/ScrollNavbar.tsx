'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Moon, Sun, Monitor } from 'lucide-react';
import { personalInfo } from '../../constants/personal';

const ScrollNavbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getThemeIcon = () => {
    if (!mounted) return <Monitor className="h-4 w-4" />;
    
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible 
        ? 'translate-y-0 bg-background/95 backdrop-blur-md border-b border-border shadow-sm' 
        : '-translate-y-full'
    }`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo/Profile Section */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/profile-icon.png"
                alt={`${personalInfo.name} Profile Picture`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="font-semibold text-sm text-foreground hidden sm:block">
              {personalInfo.name}
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/tech-stack" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Tech Stack
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {getThemeIcon()}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ScrollNavbar;