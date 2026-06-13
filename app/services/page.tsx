'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Code, MessageSquare, BarChart3, Sparkles } from 'lucide-react';
import { servicePages } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  'bi-dashboards': <BarChart3 className="h-8 w-8" />,
  'analytics-migration': <TrendingUp className="h-8 w-8" />,
  'predictive-modeling': <Sparkles className="h-8 w-8" />,
  'ai-chatbots': <MessageSquare className="h-8 w-8" />,
  'web-development': <Code className="h-8 w-8" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-transparent via-accent-500/5 to-transparent">
      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="container-page max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-accent-500 to-accent-400" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-500 font-medium">
                What I Deliver
              </span>
            </div>
            <h1 className="heading-display mb-6 bg-gradient-to-r from-ink-900 to-ink-700 dark:from-ink-50 dark:to-ink-300 bg-clip-text text-transparent">
              Data Solutions Built for Real Problems
            </h1>
            <p className="text-xl text-ink-600 dark:text-ink-400 leading-relaxed max-w-2xl mb-8">
              Everything here is work I've shipped for real clients. No bloat. No theoretical solutions. Power BI dashboards that drive decisions, analytics migrations that modernize infrastructure, models that score risk in production, and AI systems that actually understand your data.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-ink-600 dark:text-ink-400">
                <Zap className="h-4 w-4 text-accent-500" />
                <span>Enterprise & Startup</span>
              </div>
              <div className="flex items-center gap-2 text-ink-600 dark:text-ink-400">
                <TrendingUp className="h-4 w-4 text-accent-500" />
                <span>7+ Years Delivered</span>
              </div>
              <div className="flex items-center gap-2 text-ink-600 dark:text-ink-400">
                <Sparkles className="h-4 w-4 text-accent-500" />
                <span>Full-Stack Solutions</span>
              </div>
            </div>
          </motion.div>

          {/* Service Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-6 mb-20"
          >
            {servicePages.map((service, idx) => (
              <motion.div
                key={service.slug}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden"
              >
                <Link href={`/services/${service.slug}`}>
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-accent-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Animated border */}
                  <div className="absolute inset-0 border border-ink-200 dark:border-ink-800 rounded-2xl group-hover:border-accent-500/50 transition-colors duration-300" />

                  {/* Card content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="inline-flex h-14 w-14 rounded-xl bg-accent-500/10 items-center justify-center mb-6 group-hover:bg-accent-500/20 transition-colors duration-300 text-accent-500">
                      {iconMap[service.slug]}
                    </div>

                    {/* Text content */}
                    <h3 className="font-display text-xl text-ink-900 dark:text-ink-50 mb-3 group-hover:text-accent-500 transition-colors duration-300">
                      {service.headline}
                    </h3>
                    <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed mb-6 flex-grow">
                      {service.intro}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-accent-500 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Accent line */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-500 to-transparent w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20 py-12 border-t border-b border-ink-200 dark:border-ink-800"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-display text-4xl text-accent-500 mb-2">7+</div>
                <p className="text-ink-600 dark:text-ink-400">Years of data experience across three continents</p>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl text-accent-500 mb-2">50+</div>
                <p className="text-ink-600 dark:text-ink-400">Enterprise and startup projects delivered</p>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl text-accent-500 mb-2">100%</div>
                <p className="text-ink-600 dark:text-ink-400">Client satisfaction on freelance platforms</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 via-transparent to-accent-600/20" />
            <div className="absolute inset-0 border border-accent-500/30" />

            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl text-ink-900 dark:text-ink-50 mb-4">
                Ready to transform your data?
              </h2>
              <p className="text-lg text-ink-600 dark:text-ink-400 mb-8 max-w-2xl mx-auto">
                Let's talk about your challenge. I offer a free discovery audit to understand your situation and propose the right solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/discovery-audit" className="btn-primary">
                  Start Free Audit
                </Link>
                <Link href="/book" className="btn-secondary">
                  Book a Call
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
