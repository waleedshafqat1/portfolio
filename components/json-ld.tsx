import { site } from '@/lib/data';

export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Waleed Shafqat',
    url: site.url,
    image: `${site.url}/images/waleed.png`,
    jobTitle: 'Senior Data Scientist & Analytics Consultant',
    description:
      'Senior analytics and data science consultant with 7+ years delivering BI dashboards, analytics migrations and predictive models for enterprise clients.',
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'RMIT University',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'National University of Computer & Emerging Sciences (FAST)',
      },
    ],
    knowsAbout: [
      'Power BI',
      'BigQuery',
      'Python',
      'Tableau',
      'Looker Studio',
      'Machine Learning',
      'Data Engineering',
      'Marketing Analytics',
      'Forecasting',
      'Credit Risk Modeling',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Microsoft Certified: Azure Data Scientist Associate',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'SAS Advanced Analytics Certification',
      },
    ],
    sameAs: [
      site.social.linkedin,
      site.social.upwork,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProfessionalServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Waleed Shafqat — Analytics & Data Science Consulting',
    url: site.url,
    image: `${site.url}/og-image.png`,
    priceRange: '$$',
    areaServed: ['Australia', 'Singapore', 'United States', 'United Kingdom', 'Worldwide'],
    serviceType: [
      'BI Dashboards',
      'Analytics Migration',
      'Predictive Modeling',
      'AI Chatbots',
      'Marketing Analytics',
      'Web Development',
    ],
    founder: {
      '@type': 'Person',
      name: 'Waleed Shafqat',
    },
    knowsAbout: ['Power BI', 'BigQuery', 'Looker Studio', 'Python', 'Machine Learning'],
    sameAs: [
      site.social.linkedin,
      site.social.upwork,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CreativeWorkSchema({
  title,
  description,
  datePublished,
  url,
}: {
  title: string;
  description: string;
  datePublished?: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: 'Waleed Shafqat',
      url: site.url,
    },
    datePublished: datePublished || new Date().toISOString(),
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
