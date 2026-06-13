import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Lock, Clock, Briefcase, Layers, ExternalLink } from 'lucide-react';
import { caseStudies } from '@/lib/data';
import { BreadcrumbSchema, CreativeWorkSchema } from '@/components/json-ld';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) return { title: 'Case Study Not Found' };
  return {
    title: study.title,
    description: study.summary,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) notFound();

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.waleedshafqat.com' },
    { name: 'Work', url: 'https://www.waleedshafqat.com/work' },
    { name: study.title, url: `https://www.waleedshafqat.com/work/${study.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <CreativeWorkSchema
        title={study.title}
        description={study.summary}
        url={`https://www.waleedshafqat.com/work/${study.slug}`}
      />
      <article className="pt-32 pb-24">
      <div className="container-page max-w-4xl">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-accent-500 transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all work
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3 py-1 text-xs font-mono rounded-md bg-accent-500/10 text-accent-500">
            {study.industry}
          </span>
          {study.url ? (
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-500 hover:underline"
            >
              <ExternalLink className="h-3 w-3" />
              Visit live site
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-500">
              <Lock className="h-3 w-3" />
              NDA-safe case study
            </span>
          )}
        </div>

        <h1 className="heading-display mb-6">{study.title}</h1>

        <p className="text-xl text-ink-600 dark:text-ink-400 leading-relaxed mb-10">
          {study.summary}
        </p>

        {/* Meta strip */}
        <div className="grid grid-cols-3 gap-6 py-8 border-y border-ink-200 dark:border-ink-800 mb-12">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">
              <Briefcase className="h-3 w-3" />
              Client
            </div>
            <div className="font-medium text-ink-900 dark:text-ink-100">
              {study.client}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">
              <Clock className="h-3 w-3" />
              Duration
            </div>
            <div className="font-medium text-ink-900 dark:text-ink-100">
              {study.duration}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">
              <Layers className="h-3 w-3" />
              Stack
            </div>
            <div className="flex flex-wrap gap-1">
              {study.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-ink-700 dark:text-ink-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div className="space-y-12">
          <section>
            <h2 className="font-display text-3xl text-ink-900 dark:text-ink-50 mb-4">
              <span className="text-accent-500">01. </span>The Problem
            </h2>
            <p className="text-ink-600 dark:text-ink-400 leading-relaxed text-lg">
              {study.problem}
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-ink-900 dark:text-ink-50 mb-4">
              <span className="text-accent-500">02. </span>The Approach
            </h2>
            <p className="text-ink-600 dark:text-ink-400 leading-relaxed text-lg">
              {study.approach}
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-ink-900 dark:text-ink-50 mb-4">
              <span className="text-accent-500">03. </span>The Outcome
            </h2>
            <p className="text-ink-600 dark:text-ink-400 leading-relaxed text-lg">
              {study.outcome}
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-20 p-10 rounded-2xl bg-ink-50 dark:bg-ink-900 border border-ink-200 dark:border-ink-800 text-center">
          <h3 className="font-display text-3xl text-ink-900 dark:text-ink-50 mb-3">
            Have a similar challenge?
          </h3>
          <p className="text-ink-600 dark:text-ink-400 mb-6 max-w-xl mx-auto">
            I bring the same rigor and outcome-focus to every engagement —
            from enterprise clients to focused startup work.
          </p>
          <Link href="/book" className="btn-primary">
            Book a call
          </Link>
        </div>
      </div>
    </article>
    </>
  );
}
