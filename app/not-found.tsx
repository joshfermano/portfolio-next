'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, AlertCircle } from 'lucide-react';
import CustomButton from './components/ui/CustomButton';

export default function NotFound() {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-8"
        >
          {/* 404 Number */}
          <motion.div 
            initial={{ scale: prefersReducedMotion ? 1 : 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-[8rem] md:text-[12rem] font-bold text-primary/20 leading-none select-none">
              404
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <AlertCircle className="h-16 w-16 md:h-20 md:w-20 text-primary" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0.1 : 0.4, duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground">
              Page Not Found
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
              Sorry, the page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0.2 : 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/">
              <CustomButton variant="primary" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Go Home
              </CustomButton>
            </Link>
            
            <Link href="/projects">
              <CustomButton variant="secondary" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                View Projects
              </CustomButton>
            </Link>
          </motion.div>

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0.3 : 0.8, duration: 0.5 }}
          >
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Go back to previous page
            </button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: prefersReducedMotion ? 0.4 : 1, duration: 0.8 }}
            className="pt-8"
          >
            <div className="flex justify-center space-x-2 opacity-30">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}