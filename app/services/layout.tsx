import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics & Data Science Services | Waleed Shafqat',
  description: 'BI dashboards, analytics migrations, predictive modeling, and data engineering. All delivered on real client data, not theory.',
  keywords: ['analytics services', 'data science consulting', 'BI dashboard development', 'analytics migration', 'data engineering', 'predictive modeling'],
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
