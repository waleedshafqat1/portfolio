import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free 30-Minute Analytics Health Check | Waleed Shafqat',
  description: 'A free 30-minute review of your reporting and data setup. Walk away with 2–3 concrete improvements you can action — no obligation, no pitch.',
  keywords: ['free analytics audit', 'data health check', 'BI audit', 'free data consultation', 'analytics review', 'reporting audit', 'free BI assessment', 'data strategy session'],
  alternates: {
    canonical: '/discovery-audit',
  },
};

export default function DiscoveryAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
