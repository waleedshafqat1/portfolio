'use client';

import { motion } from 'framer-motion';
import { homepageFAQ } from '@/lib/data';
import { HelpCircle } from 'lucide-react';

export function FAQ() {
  return (
    <section className="section-padding relative">
      <div className="container-page max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="section-label">FAQ</span>
          <h2 className="mt-6 heading-display">
            Questions{' '}
            <span className="italic text-gradient">you might have</span>
          </h2>
          <p className="mt-6 text-ink-600 dark:text-ink-400 leading-relaxed">
            Real questions from prospects. Honest answers.
          </p>
        </motion.div>

        <div className="space-y-4">
          {homepageFAQ.map((item, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-lg border border-ink-200 dark:border-ink-800 p-6 hover:border-accent-500/50 transition-colors"
            >
              <summary className="flex cursor-pointer items-center gap-4 font-display text-lg text-ink-900 dark:text-ink-50">
                <HelpCircle className="h-5 w-5 text-accent-500 shrink-0" />
                {item.question}
                <span className="ml-auto h-4 w-4 transition-transform group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <p className="mt-4 ml-9 text-ink-600 dark:text-ink-400 leading-relaxed">
                {item.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
