'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  LineChart,
  LayoutDashboard,
  ShieldCheck,
  Workflow,
  Activity,
  Bot,
  Brain,
  Globe,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@/lib/data';

const serviceSlugMap: Record<string, string> = {
  'BI Dashboards & Reporting': 'bi-dashboards',
  'Analytics Migration & Automation': 'analytics-migration',
  'Marketing & User Journey Analytics': 'marketing-analytics',
  'Forecasting & Predictive Modeling': 'predictive-modeling',
  'AI Chatbots & Assistants': 'ai-chatbots',
  'Web Development': 'web-development',
  'Risk & Credit Scoring Models': 'predictive-modeling',
  'Custom ML Solutions': 'predictive-modeling',
};

const iconMap: Record<string, LucideIcon> = {
  LineChart,
  LayoutDashboard,
  ShieldCheck,
  Workflow,
  Activity,
  Bot,
  Brain,
  Globe,
};

export function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-page">
        <div className="max-w-2xl mb-16">
          <span className="section-label">Services</span>
          <h2 className="mt-6 heading-display">
            What I can{' '}
            <span className="italic text-gradient">build for you</span>
          </h2>
          <p className="mt-6 text-ink-600 dark:text-ink-400 leading-relaxed">
            From BI dashboards and AI chatbots to predictive models and
            full websites — each service is grounded in real client work,
            enterprise and independent alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const slug = serviceSlugMap[service.title];
            const Component = slug ? Link : 'div';
            const componentProps = slug ? { href: `/services/${slug}` } : {};
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08 }}
                asChild
              >
                <Component
                  {...componentProps}
                  className="group relative card-base p-6 md:p-8 hover:border-accent-500 transition-all duration-300 overflow-hidden"
                >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="inline-flex h-12 w-12 rounded-xl bg-accent-500/10 items-center justify-center mb-6 group-hover:bg-accent-500/20 transition-colors">
                    {Icon && <Icon className="h-6 w-6 text-accent-500" />}
                  </div>

                  <h3 className="font-display text-2xl text-ink-900 dark:text-ink-50 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-ink-600 dark:text-ink-400 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-accent-500/50 to-transparent" />
                  <div className="absolute top-0 right-0 h-px w-full bg-gradient-to-l from-accent-500/50 to-transparent" />
                </div>
                </Component>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
