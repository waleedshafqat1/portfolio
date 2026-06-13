import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Check, HelpCircle } from 'lucide-react';
import { servicePages, caseStudies } from '@/lib/data';
import { BreadcrumbSchema, CreativeWorkSchema } from '@/components/json-ld';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicePages.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.title,
    description: service.metaDescription,
  };
}

export default function ServicePage({ params }: Props) {
  const service = servicePages.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const relatedCaseStudies = caseStudies.filter((c) =>
    service.relatedCaseStudies.includes(c.slug)
  );

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.waleedshafqat.com' },
    { name: 'Services', url: 'https://www.waleedshafqat.com/services' },
    { name: service.headline, url: `https://www.waleedshafqat.com/services/${service.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <CreativeWorkSchema
        title={service.title}
        description={service.metaDescription}
        url={`https://www.waleedshafqat.com/services/${service.slug}`}
      />
      <article className="pt-32 pb-24">
        <div className="container-page max-w-4xl">
          <div className="mb-8">
            <Link
              href="/#services"
              className="text-sm text-ink-500 hover:text-accent-500 transition-colors mb-6 inline-block"
            >
              ← Back to services
            </Link>
            <h1 className="heading-display mb-6">{service.headline}</h1>
            <p className="text-xl text-ink-600 dark:text-ink-400 leading-relaxed">
              {service.intro}
            </p>
          </div>

          {/* The Problem */}
          <section className="mt-16 mb-16">
            <h2 className="font-display text-3xl text-ink-900 dark:text-ink-50 mb-4">
              <span className="text-accent-500">The Problem</span>
            </h2>
            <p className="text-lg text-ink-600 dark:text-ink-400 leading-relaxed">
              {service.problem}
            </p>
          </section>

          {/* What You Get */}
          <section className="mt-16 mb-16">
            <h2 className="font-display text-3xl text-ink-900 dark:text-ink-50 mb-6">
              <span className="text-accent-500">What You Get</span>
            </h2>
            <div className="space-y-4">
              {service.whatYouGet.map((item) => (
                <div key={item} className="flex gap-4">
                  <Check className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                  <p className="text-ink-700 dark:text-ink-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Case Studies */}
          {relatedCaseStudies.length > 0 && (
            <section className="mt-16 mb-16 py-12 border-t border-ink-200 dark:border-ink-800">
              <h2 className="font-display text-3xl text-ink-900 dark:text-ink-50 mb-8">
                <span className="text-accent-500">Relevant Work</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedCaseStudies.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="card-base p-6 hover:border-accent-500 transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-lg text-ink-900 dark:text-ink-50 group-hover:text-accent-500 transition-colors">
                        {study.title}
                      </h3>
                      <ArrowRight className="h-4 w-4 text-accent-500 group-hover:translate-x-1 transition-transform shrink-0" />
                    </div>
                    <p className="text-sm text-ink-600 dark:text-ink-400 mb-3">
                      {study.summary}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-ink-500">
                      <span className="px-2 py-1 rounded bg-accent-500/10 text-accent-500">
                        {study.industry}
                      </span>
                      <span>{study.duration}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="mt-16 mb-16 py-12 border-t border-ink-200 dark:border-ink-800">
            <h2 className="font-display text-3xl text-ink-900 dark:text-ink-50 mb-8">
              <span className="text-accent-500">Questions</span>
            </h2>
            <div className="space-y-6">
              {service.faq.map((item, i) => (
                <details
                  key={i}
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
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-20 p-10 rounded-2xl bg-ink-50 dark:bg-ink-900 border border-ink-200 dark:border-ink-800 text-center">
            <h3 className="font-display text-3xl text-ink-900 dark:text-ink-50 mb-3">
              Ready to get started?
            </h3>
            <p className="text-ink-600 dark:text-ink-400 mb-6 max-w-xl mx-auto">
              Let's talk about how this service fits your needs. Book a call or send a message.
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
