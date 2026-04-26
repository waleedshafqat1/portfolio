'use client';

import { motion } from 'framer-motion';
import { Briefcase, Star } from 'lucide-react';
import { experience, getYearsOfExperience } from '@/lib/data';

export function Experience() {
  const years = getYearsOfExperience();
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-page">
        <div className="max-w-2xl mb-16">
          <span className="section-label">Experience</span>
          <h2 className="mt-6 heading-display">
            {years}+ years of{' '}
            <span className="italic text-gradient">shipping</span> work that
            matters
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-ink-200 dark:bg-ink-800" />

            <div className="space-y-12">
              {experience.map((job, i) => (
                <motion.div
                  key={`${job.company}-${job.period}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-0 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-500 ring-4 ring-white dark:ring-ink-950" />

                  {/* Period (left on desktop) */}
                  <div className="md:w-1/2 pl-8 md:pl-0 md:pr-8 md:text-right">
                    {i % 2 === 0 && (
                      <div className="hidden md:block">
                        <div className="font-mono text-xs uppercase tracking-widest text-accent-500">
                          {job.period}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`md:w-1/2 pl-8 ${
                      i % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'
                    }`}
                  >
                    <div className="md:hidden font-mono text-xs uppercase tracking-widest text-accent-500 mb-2">
                      {job.period}
                    </div>
                    <div className="card-base p-6 hover:border-accent-500 transition-colors text-left">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="h-4 w-4 text-accent-500 shrink-0" />
                        <h3 className="font-display text-xl text-ink-900 dark:text-ink-50">
                          {job.role}
                        </h3>
                      </div>
                      <div className="text-ink-600 dark:text-ink-300 font-medium mb-1">
                        {job.company}
                      </div>
                      <div className="text-xs text-ink-500 mb-4">
                        {job.location}
                      </div>

                      {'highlight' in job && job.highlight && (
                        <div className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 text-xs font-medium">
                          <Star className="h-3 w-3 fill-current" />
                          {job.highlight}
                        </div>
                      )}

                      <ul className="space-y-2 text-sm text-ink-600 dark:text-ink-400">
                        {job.bullets.map((bullet, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="text-accent-500 shrink-0">›</span>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
