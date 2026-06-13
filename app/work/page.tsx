'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { caseStudies, projectOrgs } from '@/lib/data';

export default function WorkPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const industries = Array.from(new Set(caseStudies.map((c) => c.industry)));

  const filteredStudies = selectedIndustry
    ? caseStudies.filter((c) => c.industry === selectedIndustry)
    : caseStudies;

  return (
    <div className="pt-32 pb-20">
      <div className="container-page">
        <h1 className="heading-display mb-4">Work</h1>
        <p className="text-xl text-ink-600 dark:text-ink-400 leading-relaxed mb-12">
          Selected case studies from enterprise clients via Lynx Analytics and independent work via Upwork. Real projects, real outcomes.
        </p>

        {/* Filter */}
        <div className="mb-12 pb-8 border-b border-ink-200 dark:border-ink-800">
          <div className="text-xs font-mono uppercase tracking-widest text-ink-500 mb-4">
            Filter by industry
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedIndustry(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedIndustry === null
                  ? 'bg-accent-500 text-white'
                  : 'border border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-300 hover:border-accent-500'
              }`}
            >
              All
            </button>
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedIndustry === industry
                    ? 'bg-accent-500 text-white'
                    : 'border border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-300 hover:border-accent-500'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="card-base p-6 group hover:border-accent-500 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-mono rounded-md bg-accent-500/10 text-accent-500 whitespace-nowrap">
                  {study.industry}
                </span>
                <ArrowRight className="h-4 w-4 text-accent-500 group-hover:translate-x-1 transition-transform shrink-0 mt-0.5" />
              </div>

              <h3 className="font-display text-lg text-ink-900 dark:text-ink-50 group-hover:text-accent-500 transition-colors mb-3">
                {study.title}
              </h3>

              <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed mb-4">
                {study.summary}
              </p>

              <div className="flex items-center gap-2 text-xs text-ink-500">
                <span className="font-medium">{study.client}</span>
                <span>·</span>
                <span>{study.duration}</span>
              </div>
            </Link>
          ))}
        </div>

        {filteredStudies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-ink-600 dark:text-ink-400">
              No case studies in this industry. Try a different filter.
            </p>
          </div>
        )}

        {/* Client Logos */}
        {selectedIndustry === null && (
          <div className="mt-20 pt-12 border-t border-ink-200 dark:border-ink-800">
            <div className="text-center mb-12">
              <div className="text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">
                Clients
              </div>
              <h2 className="font-display text-2xl text-ink-900 dark:text-ink-50">
                Who I&apos;ve worked with
              </h2>
              <p className="text-ink-600 dark:text-ink-400 mt-2 max-w-xl mx-auto">
                Enterprise clients via Lynx Analytics. Independent clients via Upwork. All work delivered to exacting standards.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projectOrgs.map((org) => (
                <div
                  key={org.name}
                  className="flex flex-col items-center text-center p-6 rounded-lg border border-ink-200 dark:border-ink-800"
                >
                  {org.logo && (
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="h-12 mb-4 object-contain"
                    />
                  )}
                  <div className="font-medium text-ink-900 dark:text-ink-50">{org.name}</div>
                  <div className="text-xs text-ink-500 mt-1">{org.industry}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
