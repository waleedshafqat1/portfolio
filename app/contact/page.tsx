'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, MessageCircle, Calendar, ArrowRight, Clock, Globe, CheckCircle } from 'lucide-react';
import { site } from '@/lib/data';
import type { Metadata } from 'next';

const contactVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-transparent via-accent-500/5 to-transparent">
      <div className="pt-32 pb-20">
        <div className="container-page max-w-5xl">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-8 bg-gradient-to-r from-accent-500 to-accent-400" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-500 font-medium">
                Let's Talk
              </span>
              <div className="h-1 w-8 bg-gradient-to-l from-accent-500 to-accent-400" />
            </div>
            <h1 className="heading-display mb-6 bg-gradient-to-r from-ink-900 to-ink-700 dark:from-ink-50 dark:to-ink-300 bg-clip-text text-transparent">
              Ready to Transform Your Data?
            </h1>
            <p className="text-xl text-ink-600 dark:text-ink-400 leading-relaxed max-w-2xl mx-auto">
              Whether you need a BI dashboard, analytics migration, predictive model, or AI chatbot—let's talk about how I can help solve your business problem.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            variants={contactVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-6 mb-20"
          >
            {/* Book a Call */}
            <motion.div variants={itemVariants} whileHover={{ y: -4 }}>
              <Link href="/book">
                <div className="group relative overflow-hidden rounded-2xl border border-ink-200 dark:border-ink-800 hover:border-accent-500/50 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-accent-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative p-8 flex flex-col h-full">
                    <div className="h-14 w-14 rounded-xl bg-accent-500/10 flex items-center justify-center mb-6 group-hover:bg-accent-500/20 transition-colors text-accent-500">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl text-ink-900 dark:text-ink-50 mb-3 group-hover:text-accent-500 transition-colors">
                      Book a Call
                    </h3>
                    <p className="text-ink-600 dark:text-ink-400 mb-6 flex-grow">
                      Schedule a 20-minute intro call. No sales pitch—just an honest conversation about your challenge.
                    </p>
                    <div className="flex items-center gap-2 text-accent-500 font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Schedule Now</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-500 to-transparent w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} whileHover={{ y: -4 }}>
              <a href={`mailto:${site.contact.email}`}>
                <div className="group relative overflow-hidden rounded-2xl border border-ink-200 dark:border-ink-800 hover:border-accent-500/50 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-accent-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative p-8 flex flex-col h-full">
                    <div className="h-14 w-14 rounded-xl bg-accent-500/10 flex items-center justify-center mb-6 group-hover:bg-accent-500/20 transition-colors text-accent-500">
                      <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl text-ink-900 dark:text-ink-50 mb-3 group-hover:text-accent-500 transition-colors">
                      Send Email
                    </h3>
                    <p className="text-ink-600 dark:text-ink-400 mb-6 flex-grow">
                      Detailed message with project context? I'll get back to you within 24 hours.
                    </p>
                    <div className="flex items-center gap-2 text-accent-500 font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Send Message</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-500 to-transparent w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </a>
            </motion.div>

            {/* WhatsApp */}
            <motion.div variants={itemVariants} whileHover={{ y: -4 }}>
              <a
                href="https://wa.me/61451466432?text=Hi%20Waleed%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="group relative overflow-hidden rounded-2xl border border-ink-200 dark:border-ink-800 hover:border-accent-500/50 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-accent-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative p-8 flex flex-col h-full">
                    <div className="h-14 w-14 rounded-xl bg-accent-500/10 flex items-center justify-center mb-6 group-hover:bg-accent-500/20 transition-colors text-accent-500">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl text-ink-900 dark:text-ink-50 mb-3 group-hover:text-accent-500 transition-colors">
                      WhatsApp
                    </h3>
                    <p className="text-ink-600 dark:text-ink-400 mb-6 flex-grow">
                      Quick urgent inquiry? Hit me up on WhatsApp for a faster response.
                    </p>
                    <div className="flex items-center gap-2 text-accent-500 font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Send Message</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-500 to-transparent w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Info + Details Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-ink-200 dark:border-ink-800 p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent" />

              <div className="relative">
                <h2 className="font-display text-2xl text-ink-900 dark:text-ink-50 mb-8">Contact Info</h2>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">Email</p>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="text-lg font-medium text-accent-500 hover:text-accent-600 transition-colors"
                    >
                      {site.contact.email}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">Phone</p>
                    <p className="text-lg font-medium text-ink-900 dark:text-ink-50">{site.contact.phone}</p>
                  </div>

                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">Location</p>
                    <p className="text-lg font-medium text-ink-900 dark:text-ink-50">{site.contact.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Response Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="relative overflow-hidden rounded-2xl border border-ink-200 dark:border-ink-800 p-8 bg-gradient-to-br from-white/50 via-white/30 to-transparent dark:from-ink-900/50 dark:via-ink-900/30 dark:to-transparent">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent" />

                <div className="relative flex gap-4">
                  <Clock className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-ink-900 dark:text-ink-50 mb-1">Quick Turnaround</p>
                    <p className="text-sm text-ink-600 dark:text-ink-400">Usually reply within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-ink-200 dark:border-ink-800 p-8 bg-gradient-to-br from-white/50 via-white/30 to-transparent dark:from-ink-900/50 dark:via-ink-900/30 dark:to-transparent">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent" />

                <div className="relative flex gap-4">
                  <Globe className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-ink-900 dark:text-ink-50 mb-1">Global Coverage</p>
                    <p className="text-sm text-ink-600 dark:text-ink-400">APAC, EU, and US timezone friendly</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-ink-200 dark:border-ink-800 p-8 bg-gradient-to-br from-white/50 via-white/30 to-transparent dark:from-ink-900/50 dark:via-ink-900/30 dark:to-transparent">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent" />

                <div className="relative flex gap-4">
                  <CheckCircle className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-ink-900 dark:text-ink-50 mb-1">No BS Conversations</p>
                    <p className="text-sm text-ink-600 dark:text-ink-400">Straight talk about what's possible</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center border border-accent-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 via-transparent to-accent-600/20" />

            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl text-ink-900 dark:text-ink-50 mb-4">
                Not sure where to start?
              </h2>
              <p className="text-lg text-ink-600 dark:text-ink-400 mb-8 max-w-2xl mx-auto">
                Let's begin with a free discovery audit. I'll assess your situation and propose exactly what you need—no fluff.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/discovery-audit" className="btn-primary">
                  Schedule Free Audit
                </Link>
                <Link href="/work" className="btn-secondary">
                  Explore Case Studies
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
