import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { insights, caseStudies } from '@/lib/data';
import { BreadcrumbSchema, CreativeWorkSchema } from '@/components/json-ld';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = insights.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Article Not Found' };
  return {
    title: article.title,
    description: article.metaDescription,
  };
}

export default function InsightPage({ params }: Props) {
  const article = insights.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const relatedCaseStudies = article.relatedCaseStudies
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter(Boolean);

  const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.waleedshafqat.com' },
    { name: 'Insights', url: 'https://www.waleedshafqat.com/insights' },
    { name: article.title, url: `https://www.waleedshafqat.com/insights/${article.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <CreativeWorkSchema
        title={article.title}
        description={article.metaDescription}
        datePublished={article.publishedAt}
        url={`https://www.waleedshafqat.com/insights/${article.slug}`}
      />
      <article className="pt-32 pb-24">
        <div className="container-page max-w-3xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-accent-500 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to insights
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-ink-500">
              <time>{date}</time>
              <span>·</span>
              <span>{article.readTime} min read</span>
            </div>

            <h1 className="heading-display mb-6">{article.title}</h1>

            <p className="text-xl text-ink-600 dark:text-ink-400 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-md bg-accent-500/10 text-accent-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
            <p className="text-ink-600 dark:text-ink-400 leading-relaxed">
              Full article content would be rendered here from MDX or a content management system.
              This is a placeholder showing the article structure and metadata.
            </p>
          </div>

          {/* Related Work */}
          {relatedCaseStudies.length > 0 && (
            <section className="mt-16 pt-12 border-t border-ink-200 dark:border-ink-800">
              <h2 className="font-display text-2xl text-ink-900 dark:text-ink-50 mb-6">
                Related Work
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedCaseStudies.map((study) => (
                  <Link
                    key={study?.slug}
                    href={`/work/${study?.slug}`}
                    className="card-base p-6 hover:border-accent-500 transition-colors"
                  >
                    <h3 className="font-display text-lg text-ink-900 dark:text-ink-50 mb-2">
                      {study?.title}
                    </h3>
                    <p className="text-sm text-ink-600 dark:text-ink-400">
                      {study?.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="mt-20 p-10 rounded-2xl bg-ink-50 dark:bg-ink-900 border border-ink-200 dark:border-ink-800 text-center">
            <h3 className="font-display text-3xl text-ink-900 dark:text-ink-50 mb-3">
              Ready to transform your analytics?
            </h3>
            <p className="text-ink-600 dark:text-ink-400 mb-6 max-w-xl mx-auto">
              These patterns are drawn from real client work. Let's discuss how they apply to your situation.
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
