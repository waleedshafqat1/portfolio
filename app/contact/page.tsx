'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { site } from '@/lib/data';
import type { Metadata } from 'next';

// Note: metadata export won't work in client component, but Next.js will use layout metadata
// Create a layout.tsx file for this route with the metadata

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-page max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="heading-display mb-6">Get In Touch</h1>
          <p className="text-xl text-ink-600 dark:text-ink-400 leading-relaxed">
            Need a BI dashboard, analytics migration, forecast model or website? Let's talk. I typically reply within 24 hours.
          </p>
        </motion.div>

        {/* Contact Options Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Book a Call */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="card-base p-8 hover:border-accent-500 transition-colors group"
          >
            <div className="h-10 w-10 rounded-lg bg-accent-500/10 flex items-center justify-center mb-4 group-hover:bg-accent-500/20 transition-colors">
              <Calendar className="h-5 w-5 text-accent-500" />
            </div>
            <h3 className="font-display text-lg text-ink-900 dark:text-ink-50 mb-2">Book a Call</h3>
            <p className="text-sm text-ink-600 dark:text-ink-400 mb-6">
              Schedule a 20-minute intro call to discuss your project.
            </p>
            <Link href="/book" className="inline-flex items-center gap-2 text-sm font-medium text-accent-500 hover:text-accent-600 group-hover:translate-x-1 transition-transform">
              Schedule <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-base p-8 hover:border-accent-500 transition-colors group"
          >
            <div className="h-10 w-10 rounded-lg bg-accent-500/10 flex items-center justify-center mb-4 group-hover:bg-accent-500/20 transition-colors">
              <Mail className="h-5 w-5 text-accent-500" />
            </div>
            <h3 className="font-display text-lg text-ink-900 dark:text-ink-50 mb-2">Email</h3>
            <p className="text-sm text-ink-600 dark:text-ink-400 mb-6">
              Send me a message with your project details.
            </p>
            <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2 text-sm font-medium text-accent-500 hover:text-accent-600 group-hover:translate-x-1 transition-transform">
              Send Email <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card-base p-8 hover:border-accent-500 transition-colors group"
          >
            <div className="h-10 w-10 rounded-lg bg-accent-500/10 flex items-center justify-center mb-4 group-hover:bg-accent-500/20 transition-colors">
              <MessageCircle className="h-5 w-5 text-accent-500" />
            </div>
            <h3 className="font-display text-lg text-ink-900 dark:text-ink-50 mb-2">WhatsApp</h3>
            <p className="text-sm text-ink-600 dark:text-ink-400 mb-6">
              Quick chat via WhatsApp for urgent inquiries.
            </p>
            <a
              href="https://wa.me/61451466432?text=Hi%20Waleed%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-500 hover:text-accent-600 group-hover:translate-x-1 transition-transform"
            >
              Message <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-base p-8 bg-accent-500/5 border-accent-500/20"
        >
          <h2 className="font-display text-lg text-ink-900 dark:text-ink-50 mb-4">Quick Info</h2>
          <div className="space-y-2 text-sm text-ink-600 dark:text-ink-400">
            <p><strong>Email:</strong> <a href={`mailto:${site.contact.email}`} className="text-accent-500 hover:text-accent-600">{site.contact.email}</a></p>
            <p><strong>Phone:</strong> {site.contact.phone}</p>
            <p><strong>Location:</strong> {site.contact.location}</p>
            <p className="pt-2 text-xs text-ink-500">I work across APAC, EU, and US timezones. Reply time: usually within 24 hours.</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-ink-600 dark:text-ink-400 mb-6">Or explore my work first:</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/discovery-audit" className="btn-primary">
              Free Discovery Audit
            </Link>
            <Link href="/work" className="btn-secondary">
              Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
