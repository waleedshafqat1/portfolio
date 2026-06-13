import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies from enterprise consulting and Upwork. Real client work, real outcomes.',
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
