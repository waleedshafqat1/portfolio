import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Waleed Shafqat — Senior Data Scientist',
  description: 'From a CS student in Lahore to enterprise dashboards on three continents. RMIT MSc, Azure-certified, 7+ years across retail, pharma and finance analytics.',
  keywords: ['senior data scientist', 'data analytics consultant', 'RMIT data analytics', 'Azure Data Scientist Associate', 'Lahore data scientist', 'machine learning engineer', 'analytics expert', 'data science background'],
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
