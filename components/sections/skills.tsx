'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillGroups, getYearsOfExperience } from '@/lib/data';

export function Skills() {
  const [active, setActive] = useState<string>(skillGroups[0].key);
  const years = getYearsOfExperience();
  const activeGroup = skillGroups.find((g) => g.key === active)!;

  return (
    <section
      id="skills"
      className="section-padding relative bg-ink-50/50 dark:bg-ink-950/50 border-y border-ink-200 dark:border-ink-800"
    >
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="section-label">Skills</span>
            <h2 className="mt-6 heading-display">
              Tools I work with{' '}
              <span className="italic text-gradient">daily</span>
            </h2>
            <p className="mt-6 text-ink-600 dark:text-ink-400 leading-relaxed">
              {years}+ years of production work across the full data stack — from
              Power BI and Looker Studio dashboards through BigQuery and SQL
              to Python ML pipelines.
            </p>

            {/* Tabs */}
            <div className="mt-10 flex flex-wrap gap-2">
              {skillGroups.map((group) => (
                <button
                  key={group.key}
                  onClick={() => setActive(group.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    active === group.key
                      ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/30'
                      : 'bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 hover:border-accent-500'
                  }`}
                >
                  {group.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="card-base p-5 md:p-8"
              >
                <div className="space-y-6">
                  {activeGroup.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="font-medium text-ink-900 dark:text-ink-100">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-ink-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-ink-200 dark:bg-ink-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: i * 0.06, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-accent-500 to-glow"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
