'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Book a Call',
  description: 'Schedule a 20-minute intro call with Waleed to discuss your analytics and data science needs.',
};

export default function BookPage() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://cal.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="pt-24 pb-20">
      <div className="container-page max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-accent-500 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading-display mb-4">Book a Call</h1>
          <p className="text-lg text-ink-600 dark:text-ink-400 mb-8">
            Schedule a 20-minute intro call. We'll talk about your analytics challenges, current setup, and how I can help.
          </p>

          {/* Cal.com Embed */}
          <div className="card-base p-8 mb-8">
            <div
              className="cal-embed"
              data-calLink="waleedshafqat/intro-call"
              data-style="light"
            />
          </div>

          <div className="space-y-3 text-sm text-ink-600 dark:text-ink-400">
            <p>
              <strong>Can't find a time that works?</strong> Reach out on{' '}
              <a
                href="https://wa.me/61451466432?text=Hi%20Waleed,%20I%20wanted%20to%20ask%20about..."
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-500 hover:text-accent-600 transition-colors"
              >
                WhatsApp
              </a>
              {' '}or{' '}
              <a
                href="mailto:waleedshafqat1@gmail.com"
                className="text-accent-500 hover:text-accent-600 transition-colors"
              >
                email
              </a>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
