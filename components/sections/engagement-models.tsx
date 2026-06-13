'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Calendar, TrendingUp } from 'lucide-react';

const models = [
  {
    icon: Zap,
    title: 'Project-Based',
    description: 'Build it once, own it long-term.',
    details: [
      'Fixed price with clear scope',
      'BI dashboards, forecasting models, websites',
      'Typical: 4 weeks – 6 months',
      'Payment: milestone-based',
    ],
    relatedCaseStudies: [
      'Enterprise Reporting Migration — Multi-Region Retailer',
      'Bot Traffic Scoring Model for E-Commerce Reporting',
      'Full-Stack IT Engagement for JWE Group',
    ],
    cta: 'Let\'s discuss your project',
  },
  {
    icon: Calendar,
    title: 'Retainer',
    description: 'Ongoing support and optimization.',
    details: [
      'Monthly or hourly retainer',
      'Dashboard updates, ad-hoc analysis, new reports',
      'No surprises: we agree on hours/scope upfront',
      'Great for teams that need consistent analytics support',
    ],
    relatedCaseStudies: [
      'Market Tracking and Analytics Platform — Pharma',
      'Multi-Channel Attribution Reporting — Web and App',
    ],
    cta: 'Let\'s talk about support',
  },
  {
    icon: TrendingUp,
    title: 'Hybrid',
    description: 'Project + retainer combined.',
    details: [
      'Build something large, then support it',
      'Example: $50k project + $3k/month retainer',
      'You get the new capability, I keep it running',
      'Most enterprises choose this for migrations',
    ],
    relatedCaseStudies: ['Project Mercury — Reporting Migration (Levis)'],
    cta: 'Design a custom package',
  },
];

export function EngagementModels() {
  return (
    <section className="section-padding relative">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="section-label">How We Work</span>
          <h2 className="mt-6 heading-display">
            Engagement{' '}
            <span className="italic text-gradient">models that fit</span>
          </h2>
          <p className="mt-6 text-ink-600 dark:text-ink-400 leading-relaxed">
            No surprise invoices. No vague estimates. You know the scope and the cost upfront. Pick the structure that fits your needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {models.map((model, i) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-base p-8 relative hover:border-accent-500 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-accent-500/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-accent-500" />
                  </div>
                  <h3 className="font-display text-xl text-ink-900 dark:text-ink-50">
                    {model.title}
                  </h3>
                </div>

                <p className="text-ink-600 dark:text-ink-400 mb-6">
                  {model.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {model.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm text-ink-700 dark:text-ink-300 flex gap-3"
                    >
                      <span className="text-accent-500 mt-1">·</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                {model.relatedCaseStudies.length > 0 && (
                  <div className="mb-8 pt-6 border-t border-ink-200 dark:border-ink-800">
                    <div className="text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">
                      Real example
                    </div>
                    {model.relatedCaseStudies.map((study) => (
                      <div key={study} className="text-sm text-accent-600 dark:text-accent-400 leading-relaxed">
                        {study}
                      </div>
                    ))}
                  </div>
                )}

                <Link href="/book" className="btn-primary w-full justify-center">
                  {model.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-accent-500/5 border border-accent-500/20 text-center"
        >
          <h3 className="font-display text-xl text-ink-900 dark:text-ink-50 mb-3">
            No fancy pricing tiers. No mystery.
          </h3>
          <p className="text-ink-600 dark:text-ink-400 max-w-2xl mx-auto">
            Project scope determines cost. Retainers scale with hours. Your budget and needs determine the package. We discuss this openly on the discovery call, not after you sign.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
