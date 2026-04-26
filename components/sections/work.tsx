'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Lock, Globe } from 'lucide-react';
import { caseStudies } from '@/lib/data';

export function Work() {
  const featured = caseStudies.filter((c) => c.featured);

  return (
    <section id="work" className="section-padding relative">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="section-label">Selected Work</span>
            <h2 className="mt-6 heading-display">
              Case studies from{' '}
              <span className="italic text-gradient">the trenches</span>
            </h2>
            <p className="mt-6 text-ink-600 dark:text-ink-400 leading-relaxed">
              Most of my work is under NDA, so what follows are anonymized
              narratives focused on the{' '}
              <span className="text-ink-900 dark:text-ink-100 font-medium">
                problem → approach → outcome
              </span>{' '}
              — the shape of the work and what it delivered.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-ink-500 shrink-0">
            <Lock className="h-3.5 w-3.5" />
            NDA-respected
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link
                href={study.url || `/work/${study.slug}`}
                target={study.url ? '_blank' : undefined}
                rel={study.url ? 'noopener noreferrer' : undefined}
                className="block card-base p-8 h-full hover:border-accent-500 transition-all duration-300 relative overflow-hidden"
              >
                {/* Shimmer corner */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl group-hover:bg-accent-500/20 transition-colors" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-accent-500/10 text-accent-500">
                        {study.industry}
                      </span>
                      <span className="text-xs font-mono text-ink-500">
                        · {study.duration}
                      </span>
                      {study.url && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono rounded-md bg-green-500/10 text-green-600 dark:text-green-400">
                          <Globe className="h-3 w-3" />
                          Live
                        </span>
                      )}
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-ink-400 group-hover:text-accent-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl text-ink-900 dark:text-ink-50 mb-3 group-hover:text-accent-500 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-ink-500 text-sm mb-4 font-mono">
                    {study.client}
                  </p>

                  <p className="text-ink-600 dark:text-ink-400 text-sm leading-relaxed mb-6">
                    {study.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-ink-200 dark:border-ink-800">
                    {study.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono text-ink-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
