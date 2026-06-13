import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies & Selected Work | Waleed Shafqat',
  description: 'Anonymized case studies across retail, pharma, automotive and finance — the problem, the approach and what the work delivered. NDA respected throughout.',
  keywords: ['data science case studies', 'analytics portfolio', 'BI project examples', 'data science portfolio', 'analytics case studies', 'machine learning projects', 'dashboard examples', 'consulting case studies'],
  alternates: {
    canonical: '/work',
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
