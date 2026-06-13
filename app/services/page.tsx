import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { servicePages } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics & Data Science Services | Waleed Shafqat',
  description: 'BI dashboards, analytics migration, forecasting, AI chatbots, marketing analytics and web development — services delivered for enterprise and independent clients.',
  keywords: ['data analytics services', 'data science consulting services', 'BI consulting services', 'analytics consulting', 'freelance analytics services', 'data consultant for hire'],
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-page max-w-4xl">
        <h1 className="heading-display mb-4">Services</h1>
        <p className="text-xl text-ink-600 dark:text-ink-400 leading-relaxed mb-16">
          Everything here is work I've shipped for real clients, not a service menu I padded out. Some was enterprise work through Lynx. Some I delivered solo on Upwork. Pick what fits your problem.
        </p>

        <div className="grid gap-6">
          {servicePages.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="card-base p-8 hover:border-accent-500 transition-colors group"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h2 className="font-display text-2xl text-ink-900 dark:text-ink-50 group-hover:text-accent-500 transition-colors mb-3">
                    {service.headline}
                  </h2>
                  <p className="text-ink-600 dark:text-ink-400 leading-relaxed">
                    {service.intro}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-accent-500 group-hover:translate-x-1 transition-transform shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
