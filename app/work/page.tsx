'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter, Briefcase } from 'lucide-react';
import { caseStudies, projectOrgs } from '@/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function WorkPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const industries = Array.from(new Set(caseStudies.map((c) => c.industry)));

  const filteredStudies = selectedIndustry
    ? caseStudies.filter((c) => c.industry === selectedIndustry)
    : caseStudies;

  return (
    <div className="min-h-screen bg-gradient-to-b from-transparent via-accent-500/5 to-transparent">
      {/* Hero Section */}
      <div className="pt-32 pb-16">
        <div className="container-page max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-accent-500 to-accent-400" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-500 font-medium">
                Selected Cases
              </span>
            </div>
            <h1 className="heading-display mb-6 bg-gradient-to-r from-ink-900 to-ink-700 dark:from-ink-50 dark:to-ink-300 bg-clip-text text-transparent">
              Real Projects. Real Outcomes.
            </h1>
            <p className="text-xl text-ink-600 dark:text-ink-400 leading-relaxed max-w-2xl mb-8">
              Enterprise analytics migrations, BI dashboards built for executive teams, predictive models in production, and AI systems solving real business problems. All anonymized to respect NDAs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container-page max-w-5xl mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Filter className="h-4 w-4 text-accent-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-600 dark:text-ink-400 font-medium">
              Explore by industry
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedIndustry(null)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedIndustry === null
                  ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/30'
                  : 'border border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-300 hover:border-accent-500/50'
              }`}
            >
              All
            </button>
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/30'
                    : 'border border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-300 hover:border-accent-500/50'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          <AnimatePresence mode="wait">
            {filteredStudies.map((study, idx) => (
              <motion.div
                key={study.slug}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <Link href={`/work/${study.slug}`}>
                  <div className="group relative overflow-hidden h-full rounded-2xl border border-ink-200 dark:border-ink-800 hover:border-accent-500/50 transition-colors duration-300">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-accent-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="relative p-8 h-full flex flex-col">
                      <div className="flex items-start justify-between gap-3 mb-6">
                        <span className="px-3 py-1.5 text-xs font-mono rounded-lg bg-accent-500/10 text-accent-500 whitespace-nowrap border border-accent-500/20">
                          {study.industry}
                        </span>
                        <span className="text-xs font-mono text-ink-500">{study.duration}</span>
                      </div>

                      <h3 className="font-display text-xl text-ink-900 dark:text-ink-50 group-hover:text-accent-500 transition-colors mb-3 line-clamp-2">
                        {study.title}
                      </h3>

                      <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed mb-6 flex-grow">
                        {study.summary}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-ink-500">{study.client}</span>
                        <ArrowRight className="h-4 w-4 text-accent-500 group-hover:translate-x-1 transition-transform" />
                      </div>

                      {/* Accent line */}
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-500 to-transparent w-0 group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredStudies.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 rounded-2xl border border-dashed border-ink-200 dark:border-ink-800"
          >
            <Briefcase className="h-8 w-8 text-ink-400 mx-auto mb-3" />
            <p className="text-ink-600 dark:text-ink-400">
              No case studies in this industry. Try a different filter.
            </p>
          </motion.div>
        )}
      </div>

      {/* Client Logos Section */}
      {selectedIndustry === null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 pt-16 border-t border-ink-200 dark:border-ink-800"
        >
          <div className="container-page max-w-5xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-1 w-8 bg-gradient-to-r from-accent-500 to-accent-400" />
                <span className="font-mono text-xs uppercase tracking-widest text-accent-500 font-medium">
                  Trusted By
                </span>
                <div className="h-1 w-8 bg-gradient-to-l from-accent-500 to-accent-400" />
              </div>
              <h2 className="font-display text-3xl text-ink-900 dark:text-ink-50 mb-3">
                Enterprise & Startup Partners
              </h2>
              <p className="text-ink-600 dark:text-ink-400 max-w-2xl mx-auto">
                Delivered solutions for leading companies across retail, pharma, automotive, and finance sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {projectOrgs.map((org, idx) => (
                <motion.div
                  key={org.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative p-6 rounded-2xl border border-ink-200 dark:border-ink-800 hover:border-accent-500/50 transition-all duration-300 bg-gradient-to-br from-white/50 via-transparent to-transparent dark:from-ink-900/50 dark:via-transparent dark:to-transparent"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative flex flex-col items-center text-center h-full justify-center">
                    {org.logo && (
                      <img
                        src={org.logo}
                        alt={org.name}
                        className="h-10 mb-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                    <div className="font-medium text-sm text-ink-900 dark:text-ink-50">{org.name}</div>
                    <div className="text-xs text-ink-500 mt-2">{org.industry}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
