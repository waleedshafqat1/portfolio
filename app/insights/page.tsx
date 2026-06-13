import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { insights } from '@/lib/data';

export default function InsightsPage() {
  const sortedInsights = [...insights].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="pt-32 pb-20">
      <div className="container-page max-w-3xl">
        <h1 className="heading-display mb-4">Insights</h1>
        <p className="text-xl text-ink-600 dark:text-ink-400 leading-relaxed mb-16">
          Articles on analytics, data science, and building data products. First-person, real experience.
        </p>

        <div className="space-y-8">
          {sortedInsights.map((article) => {
            const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            return (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="block group"
              >
                <article className="card-base p-8 hover:border-accent-500 transition-colors">
                  <div className="flex items-start justify-between gap-6 mb-3">
                    <div>
                      <time className="text-xs font-mono uppercase tracking-widest text-ink-500">
                        {date} · {article.readTime} min read
                      </time>
                    </div>
                    <ArrowRight className="h-4 w-4 text-accent-500 group-hover:translate-x-1 transition-transform shrink-0 mt-1" />
                  </div>

                  <h2 className="font-display text-2xl text-ink-900 dark:text-ink-50 group-hover:text-accent-500 transition-colors mb-3">
                    {article.title}
                  </h2>

                  <p className="text-ink-600 dark:text-ink-400 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
