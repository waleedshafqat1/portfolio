'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-ink-200 dark:border-ink-800" />
    );
  }

  const current = resolvedTheme ?? theme;
  const next = current === 'dark' ? 'light' : 'dark';

  return (
    <button
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      className="relative h-10 w-10 rounded-full border border-ink-200 dark:border-ink-800 bg-white/50 dark:bg-ink-900/50 backdrop-blur flex items-center justify-center overflow-hidden hover:border-accent-500 transition-colors"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          {current === 'dark' ? (
            <Moon className="h-4 w-4 text-accent-400" />
          ) : (
            <Sun className="h-4 w-4 text-accent-500" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
