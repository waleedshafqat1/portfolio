'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
import Link from 'next/link';
import { heroTaglines, getYearsOfExperience } from '@/lib/data';

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const years = getYearsOfExperience();

  // Typewriter effect
  useEffect(() => {
    const current = heroTaglines[taglineIndex];
    const speed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
        } else {
          setIsDeleting(false);
          setTaglineIndex((i) => (i + 1) % heroTaglines.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, taglineIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background: grid + gradient orbs */}
      <div className="absolute inset-0 bg-grid mask-radial opacity-60" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-accent-500/20 blur-3xl animate-glow-pulse" />
      <div
        className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-glow/20 blur-3xl animate-glow-pulse"
        style={{ animationDelay: '1.5s' }}
      />

      <div className="container-page relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left: Text content */}
        <div className="lg:col-span-7 order-2 lg:order-1">

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 font-mono text-sm text-accent-500 uppercase tracking-[0.2em]"
          >
            Hello, I&apos;m Waleed
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-ink-900 dark:text-ink-50"
          >
            <span className="italic text-gradient">Analytics</span>{' '}
            <span className="italic">Consultant</span>
            <br />
            &amp; Data Scientist
          </motion.h1>

          {/* Typewriter tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-ink-600 dark:text-ink-400 max-w-xl leading-relaxed min-h-[3.5rem]"
          >
            <span className="text-ink-500">Specializing in </span>
            <span className="text-ink-900 dark:text-ink-100 font-medium">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-accent-500 ml-0.5 animate-pulse align-middle" />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-base text-ink-600 dark:text-ink-400 max-w-xl leading-relaxed"
          >
            {years}+ years delivering BI dashboards, analytics insights and
            ML models for enterprise clients including Levi&apos;s, AstraZeneca and Toyota.
            Top Rated on Upwork with 100% client satisfaction.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="#work" className="btn-primary group">
              View My Work
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#contact" className="btn-secondary">
              <Calendar className="h-4 w-4" />
              Let&apos;s Talk
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 pt-8 border-t border-ink-200 dark:border-ink-800 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-500"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-accent-500" />
              <span>Top Rated on Upwork</span>
            </div>
            <div>100% Job Success</div>
            <div>Enterprise Clients</div>
            <div>MSc · RMIT Australia</div>
          </motion.div>
        </div>

        {/* Right: Visual / avatar */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-square w-44 sm:w-56 md:w-64 lg:w-full lg:max-w-md mx-auto"
          >
            {/* Animated blob background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-500 via-glow to-accent-400 animate-blob opacity-90" />
            <div className="absolute inset-2 bg-ink-950 animate-blob rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/images/waleed.png"
                alt="Waleed Shafqat"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badges — desktop only */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="hidden lg:block absolute -top-4 -right-4 glass px-4 py-2 rounded-full shadow-lg"
            >
              <span className="font-mono text-xs">📊 Power BI · Tableau</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="hidden lg:block absolute -bottom-2 -left-2 glass px-4 py-2 rounded-full shadow-lg"
            >
              <span className="font-mono text-xs">🏆 Top Rated · Upwork</span>
            </motion.div>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
              className="hidden lg:block absolute top-1/2 -right-8 glass px-4 py-2 rounded-full shadow-lg"
            >
              <span className="font-mono text-xs">🌐 Next.js · React</span>
            </motion.div>
            <motion.div
              animate={{ x: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 3 }}
              className="hidden lg:block absolute top-1/4 -left-10 glass px-4 py-2 rounded-full shadow-lg"
            >
              <span className="font-mono text-xs">🐍 Python · R · BigQuery</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-500">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-accent-500 to-transparent" />
      </motion.div>
    </section>
  );
}
