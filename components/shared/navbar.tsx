'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      // Trigger when a section occupies the middle band of the viewport
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass shadow-sm shadow-ink-950/5'
          : 'bg-transparent'
      )}
    >
      <nav className="container-page flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl tracking-tight text-ink-900 dark:text-ink-50 hover:text-accent-500 transition-colors"
        >
          Waleed<span className="text-accent-500">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm transition-colors relative group',
                  isActive
                    ? 'text-accent-500 dark:text-accent-400'
                    : 'text-ink-600 dark:text-ink-300 hover:text-accent-500 dark:hover:text-accent-400'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute inset-x-4 bottom-1 h-px bg-accent-500 origin-left transition-transform',
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-ink-200 dark:border-ink-800 hover:border-accent-500 hover:text-accent-500 transition-all"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden h-10 w-10 rounded-full border border-ink-200 dark:border-ink-800 flex items-center justify-center hover:border-accent-500 transition-colors"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass border-t border-ink-200/50 dark:border-ink-800/50"
        >
          <div className="container-page py-6 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'py-3 text-lg transition-colors',
                    isActive
                      ? 'text-accent-500 font-medium'
                      : 'text-ink-700 dark:text-ink-200 hover:text-accent-500'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="/resume.pdf"
              download
              className="mt-4 btn-secondary justify-center"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
