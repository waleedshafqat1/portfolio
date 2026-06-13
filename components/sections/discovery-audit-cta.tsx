'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

export function DiscoveryAuditCTA() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-glow/10" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent-500/5 blur-3xl" />

          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-accent-500" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-500">
                Free Offer
              </span>
            </div>

            <h2 className="heading-display mb-4">
              Free 30-Minute Data &amp; Analytics Health Check
            </h2>

            <p className="text-lg text-ink-600 dark:text-ink-400 mb-6">
              No obligation, no pitch. Just a conversation about your current data setup and 2–3 concrete improvements you can implement right away.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/discovery-audit"
                className="btn-primary group"
              >
                Learn More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/61451466432?text=Hi%20Waleed,%20I%20interested%20in%20the%20discovery%20audit..."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
