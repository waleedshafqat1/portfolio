import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights on Analytics, BI & Data Science | Waleed Shafqat',
  description: 'Practical write-ups on BI migrations, attribution, forecasting and AI — first-hand lessons from enterprise and independent data work.',
  keywords: ['data analytics blog', 'BI insights', 'data science articles', 'analytics tutorials', 'Power BI tips', 'BigQuery guides', 'forecasting how-to', 'attribution modeling guide'],
  alternates: {
    canonical: '/insights',
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
