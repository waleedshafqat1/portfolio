import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Book a Call | Waleed Shafqat',
  description: 'Need a BI dashboard, forecast, AI chatbot or website? Book a 20-minute call or send a message. I typically reply within 24 hours.',
  keywords: ['hire data scientist', 'book analytics consultant', 'contact data consultant', 'hire Power BI consultant', 'hire freelance data scientist', 'analytics consultation'],
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
