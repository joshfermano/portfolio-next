'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Moon, Sun, Monitor } from 'lucide-react';
import { personalInfo } from '../../constants/personal';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
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
    if (!mounted) return <Monitor className="h-5 w-5" />;
    
    switch (theme) {
      case 'light':
        return <Sun className="h-5 w-5" />;
      case 'dark':
        return <Moon className="h-5 w-5" />;
      default:
        return <Monitor className="h-5 w-5" />;
    }
  };

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'h-14' : 'h-16'
        }`}>
          {/* Logo/Profile Section */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className={`relative rounded-full overflow-hidden border-2 border-border transition-all duration-300 ${
              scrolled ? 'w-8 h-8' : 'w-10 h-10'
            }`}>
              <Image
                src="/profile-icon.png"
                alt={`${personalInfo.name} Profile Picture`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className={`hidden sm:block transition-all duration-300 ${scrolled ? 'opacity-0 w-0' : 'opacity-100'}`}>
              <h1 className="font-bold text-lg text-foreground">{personalInfo.name}</h1>
              <p className="text-sm text-muted-foreground -mt-1">{personalInfo.title}</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
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
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {getThemeIcon()}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-2">
          <div className="flex justify-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Projects
            </Link>
            <Link 
              href="/tech-stack" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Tech Stack
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
