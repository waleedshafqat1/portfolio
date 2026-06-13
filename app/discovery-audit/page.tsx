'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Free 30-Minute Discovery Audit',
  description: 'Get a free data & analytics health check. Review your current setup and walk away with 2–3 concrete improvements.',
};

export default function DiscoveryAuditPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cal.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const benefits = [
    'Assessment of your current reporting and data setup',
    '2–3 concrete, actionable improvements you can implement immediately',
    'Honest feedback on whether a deeper engagement makes sense for your business',
    'No pitch, no obligation — just expertise',
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container-page max-w-3xl">
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
          <h1 className="heading-display mb-4">Free 30-Minute Discovery Audit</h1>

          <p className="text-xl text-ink-600 dark:text-ink-400 mb-2">
            Data &amp; Analytics Health Check
          </p>

          <p className="text-lg text-ink-600 dark:text-ink-400 mb-10">
            If your reporting feels fragmented, your dashboards are painful to maintain, or you're not sure what to invest in next — this call is for you.
          </p>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-ink-700 dark:text-ink-300">{benefit}</p>
              </motion.div>
            ))}
          </div>

          {/* Intro text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-8 p-6 rounded-xl bg-accent-500/10 border border-accent-500/20"
          >
            <p className="text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              <strong>How this works:</strong> We'll spend 30 minutes together reviewing your current data setup. I'll ask about your reporting workflow, where you're spending the most time, and what frustrates you most. Then I'll give you 2–3 specific, implementable improvements that you can own (or that we can build together). No deck, no hard sell — just your situation, your needs, and my honest take.
            </p>
          </motion.div>

          {/* Cal.com Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="card-base p-8 mb-8"
          >
            <div
              className="cal-embed"
              data-calLink="waleedshafqat/discovery-audit"
              data-style="light"
            />
          </motion.div>

          <div className="space-y-3 text-sm text-ink-600 dark:text-ink-400">
            <p>
              <strong>Prefer a different channel?</strong> Reach out on{' '}
              <a
                href="https://wa.me/61451466432?text=Hi%20Waleed,%20I%20interested%20in%20the%20discovery%20audit..."
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
