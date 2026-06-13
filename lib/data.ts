/**
 * SITE DATA — Edit this file to update all content across the site.
 * Structured so non-developers can update copy without touching components.
 */

export interface ServicePage {
  slug: string;
  title: string;
  metaDescription: string;
  headline: string;
  intro: string;
  problem: string;
  whatYouGet: string[];
  relatedCaseStudies: string[];
  faq: { question: string; answer: string }[];
}

export const site = {
  name: 'Waleed Shafqat',
  title: 'Waleed Shafqat — Senior Analytics & Data Science Consultant',
  description:
    'Senior Analytics & Data Science Consultant with 6+ years delivering BI dashboards, analytics solutions and predictive models for Levis, AstraZeneca and Toyota. Top Rated on Upwork with 100% client satisfaction.',
  url: 'https://www.waleedshafqat.com',
  keywords: [
    'Data Scientist',
    'Data Analyst',
    'Analytics Consultant',
    'Power BI',
    'Python',
    'Machine Learning',
    'BigQuery',
    'Tableau',
    'Looker Studio',
    'Freelance Data Scientist',
    'Lahore',
    'Remote',
  ],
  careerStartYear: 2019, // Used for auto-calculated experience years
  availability: {
    isAvailable: true,
    status: 'Available for select projects',
  },
  contact: {
    email: 'waleedshafqat1@gmail.com',
    phone: '+61 451 466 432',
    location: 'Lahore, Pakistan · Remote',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/waleedshafqat1/',
    upwork: 'https://www.upwork.com/freelancers/~011464dcb5c9f683c7',
    github: '', // Add if you have one
    calendly: '', // Add your booking URL later
  },
} as const;

// ============================================================
// HERO — Rotating taglines
// ============================================================
export const heroTaglines = [
  'architecting dashboards executives actually use',
  'pulling signals from noise in enterprise data',
  'delivering BI insights that drive real decisions',
  'building forecasting models that move revenue',
  'shipping data systems that scale',
];

// ============================================================
// IMPACT METRICS — Animated counters
// ============================================================
export const impactMetrics = [
  { value: 6,   suffix: '+', label: 'Years Experience',    dynamic: 'experience', static: null },
  { value: 50,  suffix: '+', label: 'Projects Delivered',  dynamic: null,         static: null },
  { value: null, suffix: '', label: 'Upwork Status',        dynamic: null,         static: 'Top Rated' },
  { value: 100, suffix: '%', label: 'Client Satisfaction', dynamic: null,         static: null },
  { value: 4,   suffix: '+', label: 'Industries Served',   dynamic: null,         static: null },
];

// ============================================================
// SERVICES — What clients can buy
// ============================================================
export const services = [
  {
    icon: 'LayoutDashboard',
    title: 'BI Dashboards & Reporting',
    description:
      'Dashboards executives actually open. I use Power BI, Tableau or Looker Studio depending on your stack.',
    tags: ['Power BI', 'Tableau', 'Looker Studio'],
  },
  {
    icon: 'Workflow',
    title: 'Analytics Migration & Automation',
    description:
      'Migrate reporting, ETL and CDP off legacy platforms. Land on BigQuery, Azure or Snowflake and own it.',
    tags: ['BigQuery', 'Azure', 'Power Automate'],
  },
  {
    icon: 'Activity',
    title: 'Marketing & User Journey Analytics',
    description:
      'GA4 setup, funnel analysis and attribution. Connect spend to outcomes. Find where your revenue comes from.',
    tags: ['GA4', 'GTM', 'Funnel Metrics'],
  },
  {
    icon: 'Bot',
    title: 'AI Chatbots & Assistants',
    description:
      'RAG chatbots grounded in your data. No hallucinations. I build integration with Slack, email, APIs.',
    tags: ['OpenAI', 'LangChain', 'RAG', 'Python'],
  },
  {
    icon: 'LineChart',
    title: 'Forecasting & Predictive Modeling',
    description:
      'Revenue forecasts and demand models that run weekly. Captures your data patterns instead of guesses.',
    tags: ['Python', 'ARIMA', 'Prophet', 'XGBoost'],
  },
  {
    icon: 'ShieldCheck',
    title: 'Risk & Credit Scoring Models',
    description:
      'Credit risk and fraud scoring for banks and lenders. Validation-first. Production-ready.',
    tags: ['Scikit-learn', 'Feature Engineering', 'A/B Testing'],
  },
  {
    icon: 'Brain',
    title: 'Custom ML Solutions',
    description:
      'Customer segmentation, recommendation engines, churn prediction. Tailored to your data.',
    tags: ['k-means', 'Clustering', 'NLP'],
  },
  {
    icon: 'Globe',
    title: 'Web Development',
    description:
      'Next.js and React sites and apps. Built for speed and data. Dashboards, landing pages, tools.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
] as const;

// ============================================================
// SKILLS — Grouped by category for tabbed display
// ============================================================
export const skillGroups = [
  {
    key: 'bi-viz',
    label: 'BI & Analytics',
    skills: [
      { name: 'Power BI', level: 100 },
      { name: 'Tableau', level: 95 },
      { name: 'Looker Studio', level: 95 },
      { name: 'Excel / VBA', level: 90 },
      { name: 'Dashboard Design', level: 98 },
    ],
  },
  {
    key: 'data-science',
    label: 'Data Science',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'R', level: 80 },
      { name: 'Machine Learning', level: 90 },
      { name: 'Time Series Analysis', level: 88 },
      { name: 'Statistical Modeling', level: 85 },
      { name: 'Deep Learning', level: 80 },
    ],
  },
  {
    key: 'data-eng',
    label: 'Data Engineering',
    skills: [
      { name: 'SQL', level: 95 },
      { name: 'BigQuery', level: 95 },
      { name: 'ETL Pipelines', level: 85 },
      { name: 'Database Management', level: 82 },
      { name: 'Data Modeling', level: 85 },
    ],
  },
  {
    key: 'marketing',
    label: 'Marketing Analytics',
    skills: [
      { name: 'Google Analytics', level: 90 },
      { name: 'Google Tag Manager', level: 85 },
      { name: 'Funnel Analysis', level: 88 },
      { name: 'A/B Testing', level: 85 },
    ],
  },
  {
    key: 'cloud-auto',
    label: 'Cloud & Automation',
    skills: [
      { name: 'Azure', level: 85 },
      { name: 'Power Apps', level: 95 },
      { name: 'Power Automate', level: 95 },
      { name: 'Linux', level: 75 },
    ],
  },
  {
    key: 'web-dev',
    label: 'Web Development',
    skills: [
      { name: 'Next.js', level: 92 },
      { name: 'React', level: 91 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 93 },
      { name: 'HTML / CSS', level: 94 },
      { name: 'JavaScript', level: 91 },
      { name: 'Git / GitHub', level: 92 },
    ],
  },
] as const;

// ============================================================
// EXPERIENCE / TIMELINE
// ============================================================
export const experience = [
  {
    role: 'Senior Data Scientist',
    company: 'Lynx Analytics',
    location: 'Singapore (Remote)',
    period: 'Mar 2024 – Present',
    highlight: 'Promoted from Data Scientist',
    bullets: [
      'Lead analytics for Levis and AstraZeneca — retail forecasting, CVM migration, healthcare BI.',
      'Spearheaded Levis CVM Analytics migration, optimizing data workflows across China, US, Europe.',
      'Built a hybrid bot traffic scoring model to protect KPI accuracy in business performance reporting, identifying sophisticated bots that evaded third-party detection.',
      'Delivered Last Touch Channel attribution reporting across web and app traffic for multiple regions, giving stakeholders clear channel-level performance insight.',
      'Built Patient Model Wizard integrating Power Apps, Power Automate and Python for AstraZeneca.',
      'Mentor junior team members in dashboard development and ML best practices.',
    ],
  },
  {
    role: 'Data Scientist',
    company: 'Lynx Analytics',
    location: 'Singapore (Remote)',
    period: 'May 2021 – Mar 2024',
    bullets: [
      'Developed Python models for assortment optimization, revenue forecasting and pricing for Levis China.',
      'Designed and maintained dashboards for Levis China, US and Europe e-commerce reporting.',
      'Built Funnel Metrics and Out-of-Stock Analysis reports for Levis US.',
      'Engineered market comparison and performance tracking dashboards for AstraZeneca.',
    ],
  },
  {
    role: 'Freelance Data Scientist',
    company: 'Upwork',
    location: 'Remote',
    period: 'Nov 2019 – May 2021',
    highlight: 'Top Rated · 100% Client Satisfaction',
    bullets: [
      'Achieved Top Rated freelancer status on Upwork with 100% client satisfaction.',
      'Power BI reports for Toyota (Australia & Ireland) assessing auto loan risks.',
      'Credit scoring model for a microfinance bank (direct engagement) reducing default risk.',
      'Looker Studio dashboards for Estliving analyzing user journeys via Google Analytics.',
    ],
  },
  {
    role: 'Advanced Analytics Intern',
    company: 'Coles',
    location: 'Melbourne, Australia',
    period: 'Aug 2019 – Nov 2019',
    bullets: [
      'Built customer segmentation models using k-means and hierarchical clustering.',
      'Developed real-time BI models from transaction data.',
      'SQL-based data extraction and reporting for category insights.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'i2c Inc.',
    location: 'Lahore, Pakistan',
    period: 'Jul 2016 – Jul 2017',
    bullets: [
      'Resolved software performance issues using SQL and Linux.',
      'Root-cause analysis driving measurable system improvements.',
    ],
  },
] as const;

// ============================================================
// CASE STUDIES — NDA-safe project narratives
// ============================================================
export const caseStudies = [
  {
    slug: 'project-mercury-levis',
    title: 'Project Mercury — Reporting Migration at Levis',
    client: "Levis (via Lynx Analytics)",
    industry: 'Retail',
    duration: '2 years',
    stack: ['BigQuery', 'Looker Studio', 'Segment', 'ETL Pipelines', 'SQL'],
    summary:
      'Led a two-year enterprise-wide initiative to migrate all analytical reporting at Levis from third-party tools to a fully owned, in-house reporting stack — covering the US, EU and Canada.',
    problem:
      'Levis analytics were fragmented across multiple third-party platforms, creating vendor dependency, inconsistent metrics and limited flexibility for the regional teams who relied on them daily.',
    approach:
      'Audited all existing third-party reports across regions, then rebuilt the full stack on Google-native tooling — leveraging already-available Segment data as the source, piping it into BigQuery via ETL pipelines and delivering reporting through Looker Studio. Established metric governance to ensure consistency across the US, EU and Canada and worked directly with regional stakeholders to drive adoption and minimise disruption.',
    outcome:
      'Full reporting stack transitioned in-house across the US, EU and Canada. Data ownership moved entirely off third-party platforms, unlocking deeper and more flexible analysis than was previously possible. Delivered hundreds of thousands of dollars in savings by eliminating recurring third-party tool costs.',
    url: '',
    featured: true,
  },
  {
    slug: 'levis-bot-scoring-model',
    title: 'Bot Traffic Scoring Model for Business Performance Reporting',
    client: "Levis (via Lynx Analytics)",
    industry: 'Retail',
    duration: '3 months',
    stack: ['Python', 'BigQuery', 'SQL', 'Statistical Modeling'],
    summary:
      "Built a hybrid bot traffic scoring model to protect KPI accuracy in Levis business performance reporting — catching sophisticated bots that evaded existing third-party filtering.",
    problem:
      "Key business KPIs were being distorted by bot traffic, including highly sophisticated bots that mimicked human behavior closely enough to slip through established third-party filtering solutions. This made it difficult to trust the numbers driving strategic decisions.",
    approach:
      'Conducted in-depth analysis of traffic data to identify behavioral patterns associated with bot activity. Built a two-layer scoring model: the first layer flagged potential bot visits based on known behavioral signatures; the second applied a human-likeness filter to distinguish genuine human sessions from bots that had adopted realistic browsing patterns. Each session was assigned a composite score, and visits crossing the threshold were excluded from reporting.',
    outcome:
      'Delivered significantly cleaner KPI data for business performance reporting, reducing bot-driven distortion in executive metrics and restoring confidence in the numbers used for strategic decisions.',
    url: '',
    featured: true,
  },
  {
    slug: 'levis-last-touch-channel',
    title: 'Last Touch Channel Attribution Reporting Across Web and App',
    client: "Levis (via Lynx Analytics)",
    industry: 'Retail',
    duration: '1+ year',
    stack: ['BigQuery', 'Looker Studio', 'SQL', 'Google Analytics'],
    summary:
      "Built a unified Last Touch Channel attribution reporting framework covering all web and app traffic across multiple regions for Levis, giving stakeholders clear visibility into channel performance.",
    problem:
      'There was no single, consistent view of where web and app traffic was originating or how different marketing channels were performing across regions — limiting the ability of business stakeholders to make confident, data-driven decisions.',
    approach:
      'Designed and built a Last Touch Channel attribution reporting framework that consolidated traffic data across all web and app properties and multiple regions. Defined a consistent attribution methodology and structured the reporting to surface channel-level performance in a format accessible to non-technical business stakeholders.',
    outcome:
      'Gave regional and global teams a reliable, unified source of truth for channel performance. The reporting was adopted directly by stakeholders across the business to inform key decisions around marketing investment, traffic strategy and channel prioritization.',
    url: '',
    featured: true,
  },
  {
    slug: 'pharma-market-dashboards',
    title: 'Market Tracking for a Top-10 Pharma Company',
    client: 'AstraZeneca (via Lynx Analytics)',
    industry: 'Pharmaceutical',
    duration: '3 months',
    stack: ['Power BI', 'Python', 'Power Apps', 'Power Automate'],
    summary:
      'Market comparison and performance tracking dashboards, plus a Patient Model Wizard app streamlining healthcare analytics.',
    problem:
      'Regional teams needed unified, timely visibility into brand performance across markets — and analysts needed a faster way to run patient-flow models.',
    approach:
      'Engineered performance dashboards in Power BI plus a Power Apps frontend that triggered Python model runs via Power Automate, returning results back to the user.',
    outcome:
      'Cut model turnaround from days to minutes for repeat analyses. Became the standard tool for the team.',
    url: '',
    featured: true,
  },
  {
    slug: 'astrazeneca-patient-model-tracker',
    title: 'Patient Model Submission & Forecasting Tracker for AstraZeneca',
    client: 'AstraZeneca (via Lynx Analytics)',
    industry: 'Pharmaceutical',
    duration: '4 months',
    stack: ['Power Apps', 'Power Automate', 'Power BI'],
    summary:
      'Built an end-to-end Power Platform solution enabling AstraZeneca teams across different regions to submit patient models, with automated consolidation and a Power BI tracking report used for forecasting.',
    problem:
      'Different AstraZeneca teams were submitting patient models through disconnected, manual processes — making it impossible to consolidate submissions, track progress or use the data for reliable forecasting.',
    approach:
      'Designed a Power App that gave each team a consistent, structured interface for submitting their patient models. Power Automate workflows captured each submission and consolidated the data into a central source. Built a Power BI report on top to track all submissions in one place and surface the trends needed for forecasting.',
    outcome:
      'Replaced fragmented manual processes with a single, governed submission workflow. The Power BI report became the go-to tool for tracking patient model submissions and informing forecasting decisions across teams.',
    url: '',
    featured: true,
  },
  {
    slug: 'global-apparel-forecasting',
    title: 'Assortment Optimization for a Global Apparel Retailer',
    client: "Levis (via Lynx Analytics)",
    industry: 'Retail',
    duration: '8 months',
    stack: ['Python', 'BigQuery', 'Power BI', 'Time Series'],
    summary:
      'Built Python-based assortment optimization and revenue forecasting models for a global retailer\'s China operations, paired with executive dashboards.',
    problem:
      'Client needed to forecast demand across thousands of SKUs and optimize store-level assortment — existing methods relied on spreadsheets and gut-feel.',
    approach:
      'Designed a hybrid ML pipeline combining time-series forecasting with assortment optimization heuristics. Built a Power BI layer so regional managers could explore forecasts interactively.',
    outcome:
      'Reduced forecasting error significantly versus baseline; decisions moved from monthly cycles to weekly. Adopted by multiple regional teams.',
    url: '',
    featured: true,
  },
  {
    slug: 'coles-baby-customer-segmentation',
    title: 'Customer Segmentation for Coles Baby Category',
    client: 'Coles',
    industry: 'Retail',
    duration: '3 months',
    stack: ['Python', 'SQL', 'k-means Clustering', 'Pandas'],
    summary:
      'Built a customer segmentation model for all consumers who purchased baby-related products at Coles, enabling more targeted and effective sales strategies across the category.',
    problem:
      'Coles had a large, diverse base of baby-category shoppers but no structured way to distinguish between them — making it difficult to tailor promotions, ranging decisions and loyalty initiatives to the right customers.',
    approach:
      'Extracted and cleaned transaction data for baby-category purchases, engineered behavioural features including purchase frequency, basket size and product affinity, then applied clustering techniques to identify distinct customer segments with meaningful commercial differences.',
    outcome:
      'Delivered a clear segmentation of baby-category consumers that gave the merchandising and marketing teams a foundation for more focused, segment-specific sales strategies — moving away from one-size-fits-all promotions.',
    url: '',
    featured: true,
  },
  {
    slug: 'solv-workplace-injury-reporting',
    title: 'Workplace Injury Reporting Suite for Solv Australia',
    client: 'Solv Australia (via Upwork)',
    industry: 'Workplace Safety',
    duration: '1.5 years',
    stack: ['Power BI', 'SQL'],
    summary:
      'Designed and delivered hundreds of reports and dashboards covering workplace injury data for Solv Australia — a platform helping businesses manage safety compliance.',
    problem:
      'Solv needed a comprehensive reporting layer to give clients clear visibility into workplace injury trends, incident patterns and compliance metrics across their workforce.',
    approach:
      'Built a scalable suite of Power BI reports and dashboards covering injury frequency, severity, location breakdowns and trend analysis. Designed for non-technical end users, with consistent layout and drill-through capability across all reports.',
    outcome:
      'Delivered hundreds of reports and dashboards now used across the Solv platform, giving clients actionable insight into workplace safety performance.',
    url: '',
    featured: true,
  },
  {
    slug: 'estliving-digital-analytics',
    title: 'Digital Analytics for EST Living',
    client: 'EST Living (via Upwork)',
    industry: 'Real Estate Media',
    duration: '1 year',
    stack: ['Looker Studio', 'Google Analytics', 'Google Tag Manager'],
    summary:
      'Built a suite of Looker Studio dashboards and Google Analytics reports tracking website performance across EST Living\'s portfolio of luxury real estate brands and their products.',
    problem:
      'EST Living needed clear visibility into how each brand and product performed digitally — traffic sources, user behaviour and content engagement — across a multi-brand site structure.',
    approach:
      'Configured Google Analytics and Tag Manager to capture brand- and product-level events accurately, then built Looker Studio dashboards surfacing the key performance metrics for each brand — tailored for marketing and editorial stakeholders.',
    outcome:
      'Gave the EST Living team reliable, brand-level insight into user journeys and content performance, enabling data-driven editorial and marketing decisions.',
    url: '',
    featured: true,
  },
  {
    slug: 'auto-loan-risk',
    title: 'Auto Loan Risk Dashboards for Toyota',
    client: 'Toyota Financial (via Upwork)',
    industry: 'Automotive Finance',
    duration: '2 months',
    stack: ['Power BI', 'SQL'],
    summary:
      'Designed Power BI reports for Toyota operations in Australia and Ireland to assess auto loan portfolio risks.',
    problem:
      'Regional risk teams needed portfolio-level visibility with consistent metrics across geographies.',
    approach:
      'Standardized risk KPIs, built drill-through reports and automated data refresh pipelines.',
    outcome:
      'Adopted for monthly risk reviews across both regions.',
    url: '',
    featured: false,
  },
  {
    slug: 'positive-minds-gippsland',
    title: 'Website for a Mental Health Counselling Practice',
    client: 'Positive Minds Gippsland',
    industry: 'Healthcare',
    duration: '1 month',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    summary:
      'Designed and developed a professional website for a counselling and teaching practice serving the Gippsland region of Australia.',
    problem:
      'The organisation needed a welcoming, accessible web presence to connect people in Gippsland with counselling services — with no existing digital footprint.',
    approach:
      'Built a clean, mobile-responsive site with service pages, team profiles and an enquiry form. Prioritised readability and a calm visual tone appropriate for a mental health context.',
    outcome:
      'Live at positivemindsgippsland.com — serving clients across Warragul and the wider Gippsland region with clear pathways to book counselling sessions.',
    url: 'https://positivemindsgippsland.com',
    featured: true,
  },
  {
    slug: 'jwe-group-it-engagement',
    title: 'Full-Stack IT Engagement for JWE Group',
    client: 'JWE Group (Direct)',
    industry: 'IT Consulting',
    duration: '2 months',
    stack: ['Next.js', 'TypeScript', 'Microsoft 365', 'Vercel', 'Security Hardening'],
    summary:
      'Delivered a complete IT engagement for an Australian electrical contractor — covering full website development from scratch, Microsoft 365 email infrastructure migration, domain ownership transfer, and enterprise security hardening.',
    problem:
      'JWE Group — an Australian electrical contractor specialising in power, mining, renewables, and telecommunications — needed a complete IT overhaul. They had no professional website, a fragmented email setup across multiple Hostinger mailboxes, no domain ownership, and a failing enterprise security audit required by a major client.',
    approach:
      'Built the company website entirely from scratch using Next.js 14, TypeScript, and Tailwind CSS — 48 fully responsive pages including service pages, project case studies, and team profiles, deployed to Vercel. Migrated all email accounts to Microsoft 365, including manual migration of alias accounts with full archive preservation. Transferred domain ownership from a former IT contractor and resolved all DNS conflicts. Implemented enterprise-grade security hardening including a comprehensive Content Security Policy, HSTS, security headers, and self-hosted fonts.',
    outcome:
      'A live production website scoring 98/100 on performance, A-grade security, and 95+/100 on accessibility. A fully operational Microsoft 365 environment with zero data loss and reduced licensing costs. Full domain ownership returned to the client. Security audit requirements met for the enterprise client relationship.',
    url: '',
    featured: true,
  },
  {
    slug: 'microfinance-credit-scoring',
    title: 'Credit Scoring for a Microfinance Bank',
    client: 'Microfinance Bank (Direct)',
    industry: 'Finance',
    duration: '3 months',
    stack: ['Python', 'Scikit-learn', 'Pandas'],
    summary:
      'Built a robust credit scoring model reducing default risk for a microfinance lender serving underbanked populations.',
    problem:
      'Lender was relying on manual underwriting and facing rising default rates — limited credit history data for most applicants.',
    approach:
      'Engineered alternative-data features, trained and compared multiple classifiers and delivered a model with calibrated probability outputs plus explanation artifacts.',
    outcome:
      'Measurable reduction in default risk on validation set; client deployed into their origination workflow.',
    url: '',
    featured: true,
  },
] as const;

// ============================================================
// EMPLOYERS — Companies Waleed has been directly employed by
// ============================================================
export const employers = [
  {
    name: 'Lynx Analytics',
    role: 'Senior Data Scientist',
    period: '2021 – Present',
    logo: '/logos/lynx-analytics.png',
  },
  {
    name: 'i2c Inc.',
    role: 'Software Engineer',
    period: '2016 – 2017',
    logo: '/logos/i2c.png',
  },
  {
    name: 'Coles',
    role: 'Advanced Analytics Intern',
    period: '2019',
    logo: '/logos/coles.png',
  },
] as const;

// ============================================================
// PROJECTS — Organisations behind the work (enterprise via employer + direct Upwork)
// ============================================================
export const projectOrgs = [
  { name: "Levis",                  industry: 'Retail',            logo: '/logos/levis.png' },
  { name: 'AstraZeneca',             industry: 'Pharmaceutical',    logo: '/logos/astrazeneca.png' },
  { name: 'Toyota',                  industry: 'Automotive',        logo: '/logos/toyota.png' },
  { name: 'Positive Minds Gippsland', industry: 'Healthcare',       logo: '/logos/positive-minds.png' },
  { name: 'JWE Group',               industry: 'IT Consulting',     logo: '/logos/jwe-logo-full.png' },
  { name: 'Estliving',               industry: 'Real Estate',       logo: '/logos/estliving.png' },
  { name: 'Solv',                    industry: 'Workplace Safety',  logo: '/logos/solv.png' },
  { name: 'Hacking Happy',           industry: 'Business Services', logo: null },
] as const;

// ============================================================
// EDUCATION
// ============================================================
export const education = [
  {
    degree: 'Master of Science in Data Analytics',
    institution: 'RMIT University',
    location: 'Melbourne, Australia',
    period: '2017 – 2019',
    highlight: 'Dean\'s List — Semester 2, 2017',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'National University of Computer & Emerging Sciences (FAST)',
    location: 'Lahore, Pakistan',
    period: '2012 – 2016',
  },
] as const;

export const certifications = [
  {
    name: 'Microsoft Certified: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    color: 'sky',
  },
  {
    name: 'SAS Advanced Analytics Certification',
    issuer: 'SAS Institute',
    color: 'blue',
  },
] as const;

export const publications = [
  {
    title:
      'Performance Comparison of Feature Selection and Extraction Methods with Random Instance Selection',
    venue: 'Research Publication',
    year: '2019',
    url: '', // Add DOI or link if available
  },
] as const;

// ============================================================
// TESTIMONIALS — Replace with real Upwork/LinkedIn quotes
// ============================================================
export const testimonials = [
  {
    quote:
      'Extraordinary talent and a super friendly, helpful contractor to work with. Highly recommended for reporting and BI projects from simple to very complex. Great experience working with Waleed.',
    author: 'Client',
    role: 'Project Lead',
    company: 'EST Living',
    rating: 5,
    source: 'Upwork',
  },
  {
    quote:
      'Excellent communication and most importantly Waleed has deep skills in enterprise reporting and produced fantastic results for us. Developed a range of sophisticated dashboard and reporting solutions in Google Analytics and Looker Studio. Great to work with. Highly recommended.',
    author: 'Client',
    role: 'Operations Manager',
    company: 'EST Living',
    rating: 5,
    source: 'Upwork',
  },
  {
    quote:
      'Waleed was great to work with. He has very good experience building reports in Power BI, communicated well and I\'m sure we\'ll work with him again in future.',
    author: 'Client',
    role: 'Manager',
    company: 'Solv Australia',
    rating: 5,
    source: 'Upwork',
  },
  {
    quote:
      'Absolute pleasure to work with Waleed. Took our brief and recommended a number of options based on his own research. Really great to work with — I would certainly recommend working with Waleed without hesitation.',
    author: 'Client',
    role: 'Director',
    company: 'Hacking Happy',
    rating: 5,
    source: 'Upwork',
  },
  {
    quote:
      'We hired Waleed to build the website for our counselling business, which proved to be one of the best business decisions we\'ve made. He was receptive to our ideas, turning them into something far superior than we thought possible. His suggestions on Data Analysis and Digital Marketing Analytics were areas we had no knowledge of — but seeing the results, we understand just how important they are to increasing our reach and turnover. Highly recommend Waleed as an extremely approachable and innovative professional.',
    author: 'Paul Fry & Gail Baker',
    role: 'Directors',
    company: 'Positive Minds Gippsland',
    rating: 5,
    source: 'Direct',
  },
] as const;

// ============================================================
// SERVICE PAGES — Dedicated, indexable service detail pages
// ============================================================
export const servicePages: ServicePage[] = [
  {
    slug: 'bi-dashboards',
    title: 'BI Dashboards & Reporting Consultant',
    metaDescription: 'Power BI, Tableau, and Looker Studio dashboards for enterprise teams. Dashboards executives actually open.',
    headline: 'BI Dashboards & Reporting',
    intro:
      'I build dashboards executives open every morning, not the kind that get made once and forgotten. Power BI, Tableau or Looker Studio, depending on where your data already lives. The test I hold every report to: what decision does this change?',
    problem:
      'Most dashboards fail silently. Teams build them in isolation, hand them off, and they gather dust. Or they get opened, but nobody trusts the numbers. Or they\'re so slow and fragile that one schema change breaks everything.',
    whatYouGet: [
      'A dashboard tied to a real decision (not just metrics for metrics\' sake)',
      'Performance-optimized queries and cached data layers',
      'A maintenance-first design so you can own updates without breaking things',
      'One-page snapshot + drill-through depth for stakeholders at every level',
    ],
    relatedCaseStudies: ['project-mercury-levis', 'levis-last-touch-channel', 'pharma-market-dashboards'],
    faq: [
      {
        question: 'Which tool should we choose: Power BI, Tableau, or Looker Studio?',
        answer: 'It depends on where your data lives and your licensing constraints. If you\'re on Azure/Microsoft, Power BI is often the natural fit. If you need maximum interactivity and don\'t mind premium pricing, Tableau. If you\'re Google-native or cost-conscious, Looker Studio. I\'ve shipped in all three; the right choice is the one your team can maintain.',
      },
      {
        question: 'How long does a dashboard build typically take?',
        answer: 'A single-dashboard engagement is usually 4–6 weeks: data exploration, design, build, review, refinement. Multi-dashboard migrations or complex federated setups take 3–6 months. I\'ll give you a clear timeline after understanding your data.',
      },
      {
        question: 'Do you handle data infrastructure, or just the dashboard layer?',
        answer: 'I can build a dashboard on top of whatever you have (SQL Server, BigQuery, Salesforce, Excel). If your data layer is messy, I can help there too, but that\'s a separate engagement.',
      },
    ],
  },
  {
    slug: 'analytics-migration',
    title: 'Analytics Migration & Stack Modernization Consultant',
    metaDescription: 'Migrate reporting and ETL pipelines to BigQuery, Azure, or modern stacks. Keep data integrity, reduce costs.',
    headline: 'Analytics Migration & Modernization',
    intro:
      'Moving off fragmented reporting systems, outdated tools, or expensive third-party platforms is one of the highest-ROI projects a data team can take on. I\'ve led two-year enterprise migrations. I know where the hidden costs and risks are, and how to move without losing data or trust.',
    problem:
      'Legacy reporting stacks are expensive, rigid, and painful. You\'re on multiple platforms (Looker, Qlik, hand-built spreadsheets) with no single source of truth. Migrations scare you because the last one cost months and broke things.',
    whatYouGet: [
      'A migration plan that treats data consistency as non-negotiable',
      'End-to-end ETL rebuild in your target stack (BigQuery, Azure, Snowflake, etc.)',
      'Reconciliation and validation at every step so you know data is correct',
      'Training so your team owns the new stack post-migration',
      'A data governance foundation so the next migration is easier',
    ],
    relatedCaseStudies: ['project-mercury-levis', 'global-apparel-forecasting'],
    faq: [
      {
        question: 'How do you handle data validation during a migration?',
        answer: 'Every field is reconciled row-by-row against the source. Row counts, sums, dates, null patterns — all verified before cutover. I build automated tests so you can re-run them post-launch.',
      },
      {
        question: 'What if we\'re using multiple data sources?',
        answer: 'That\'s actually the norm. I design a unified ingestion layer that pulls from Salesforce, Google Analytics, your data warehouse, and custom APIs. The work is in the orchestration and conflict resolution, not the ingestion itself.',
      },
      {
        question: 'Can we run old and new stacks in parallel during migration?',
        answer: 'Yes, and often essential for large teams. We can run both for weeks or months, gradually shifting reports and stakeholders over while old reports stay live.',
      },
    ],
  },
  {
    slug: 'predictive-modeling',
    title: 'Forecasting & Predictive Modeling Consultant',
    metaDescription: 'Revenue forecasts, demand planning, time-series models for retail and e-commerce. Models that ship to production.',
    headline: 'Forecasting & Predictive Modeling',
    intro:
      'The difference between guessing and forecasting is a model that captures your data\'s patterns and tells you what to expect. I build production-grade forecast and risk models tuned to your business: revenue, demand, churn, attrition.',
    problem:
      'Spreadsheet forecasts become outdated the moment they\'re made. Forecasts built by consultants live in a deck, not in your daily decision-making. You need something you trust, update weekly, and can act on.',
    whatYouGet: [
      'A production model updated automatically from your data source',
      'Weekly/monthly forecasts with confidence intervals so you know the range',
      'Explainability: which factors drive the forecast, not a black box',
      'Tuning to your business: seasonal patterns, trend breaks, anomalies',
      'Integration into your BI layer so forecasts live next to actuals',
    ],
    relatedCaseStudies: ['global-apparel-forecasting', 'levis-bot-scoring-model'],
    faq: [
      {
        question: 'How much historical data do I need?',
        answer: 'Time-series models need at least 2 years of clean data to capture seasonality. More is better. If you have less, we can use external data or simpler approaches.',
      },
      {
        question: 'What happens when business changes (a new product launch, a crisis)?',
        answer: 'Good models degrade gracefully but don\'t auto-correct for regime changes. We build in manual override layers and re-train quarterly with new patterns.',
      },
      {
        question: 'Do you build neural nets / deep learning models?',
        answer: 'Only when they\'re necessary. 90% of forecasting problems are solved better with classical time-series (ARIMA, Prophet) or gradient boosting. I choose the simplest model that works.',
      },
    ],
  },
  {
    slug: 'ai-chatbots',
    title: 'RAG Chatbot & AI Assistant Developer',
    metaDescription: 'Custom AI chatbots and assistants built on LLMs. For customer support, internal tools, and workflow automation.',
    headline: 'AI Chatbots & Assistants',
    intro:
      'LLMs are powerful but unreliable when you need them to answer questions about *your* data without hallucinating. I build retrieval-augmented generation (RAG) systems that ground LLMs in your knowledge base, so they answer accurately.',
    problem:
      'Off-the-shelf ChatGPT integrations make up answers. Fine-tuned models are expensive and fragile. You need a chatbot that knows your docs, your customer FAQs, your product, and doesn\'t BS.',
    whatYouGet: [
      'A RAG system that retrieves from your documents before answering',
      'Grounding in your data so no hallucinations about your product',
      'Fast iteration cycles: update docs, the chatbot updates automatically',
      'Multi-format ingestion: PDFs, web pages, databases, Slack history',
      'Conversation memory and context so it feels natural',
    ],
    relatedCaseStudies: ['pharma-market-dashboards'],
    faq: [
      {
        question: 'What\'s RAG and why is it better than fine-tuning?',
        answer: 'RAG retrieves relevant documents at query time, so the model answers based on your actual data, not memorized training. It\'s faster to update, cheaper, and doesn\'t require retraining.',
      },
      {
        question: 'Can it integrate with our existing systems?',
        answer: 'Yes. Slack, email, customer portals, internal tools—I can build the integration layer. The chatbot can query your databases, pull from Salesforce, check inventory in real time.',
      },
      {
        question: 'How do you prevent it from confidently giving wrong answers?',
        answer: 'Confidence scoring, retrieval quality checks, and user feedback loops. We log queries it doesn\'t have good answers for and retrain. It also knows when to say "I don\'t know."',
      },
    ],
  },
  {
    slug: 'marketing-analytics',
    title: 'GA4 & Marketing Attribution Consultant',
    metaDescription: 'Google Analytics 4, GTM setup, funnel analysis, and marketing attribution. Connect spend to revenue outcomes.',
    headline: 'Marketing Analytics & Attribution',
    intro:
      'Marketing loves to claim credit. Attribution is how you actually know which channels drive value. GA4 is powerful but confusing. I help you set up tracking that you can trust, then build dashboards that answer: where is revenue coming from?',
    problem:
      'GA4 is a maze. You have events firing but no idea if they\'re right. Attribution is "first-touch" by default (wrong for most businesses). You\'re flying blind on channel performance.',
    whatYouGet: [
      'Clean GA4 implementation with proper event tracking and data layers',
      'Google Tag Manager setup so you can update tags without code changes',
      'Custom reporting: last-touch, multi-touch, time-decay attribution models',
      'Funnel analysis showing where visitors drop off and why',
      'Dashboards connecting spend to revenue by channel and campaign',
    ],
    relatedCaseStudies: ['estliving-digital-analytics', 'levis-last-touch-channel'],
    faq: [
      {
        question: 'How do you handle cross-device and offline attribution?',
        answer: 'GA4 uses first-party data and cross-domain tracking. For offline, we connect CRM or backend conversion data to GA4 via user IDs. Full cross-device requires something like customer data platforms (CDPs).',
      },
      {
        question: 'Which attribution model should we use?',
        answer: 'Depends on your business. E-commerce often uses time-decay or position-based. SaaS usually last-touch or multi-touch. We\'ll test models against your data and pick the one that correlates to actual ROI.',
      },
      {
        question: 'How often should we audit our tracking?',
        answer: 'After major changes (new products, traffic sources, site redesigns). Otherwise, quarterly audits catch drift. I recommend monthly spot-checks.',
      },
    ],
  },
  {
    slug: 'web-development',
    title: 'Next.js Developer & Data Web App Builder',
    metaDescription: 'Production-ready Next.js websites and data-driven web apps. Fast, modern, SEO-friendly.',
    headline: 'Web Development & Data Apps',
    intro:
      'Modern web apps need to be fast, live on real data, and rank on search engines. I build with Next.js, TypeScript, and Tailwind—the modern stack. From marketing sites to interactive dashboards and data apps.',
    problem:
      'WordPress and no-code tools are slow and inflexible. Hiring a full-time engineer is expensive. You need a web presence that performs, ranks, and scales.',
    whatYouGet: [
      'A fast, modern site built in Next.js (98+ Lighthouse performance)',
      'SEO-optimized from the ground up (schema, canonical, meta, sitemaps)',
      'Interactive dashboards and data visualizations if you need them',
      'Deployed to Vercel: 99.95% uptime, automatic scaling, edge caching',
      'Analytics and monitoring so you know what\'s working',
    ],
    relatedCaseStudies: ['positive-minds-gippsland', 'jwe-group-it-engagement'],
    faq: [
      {
        question: 'Is Next.js overkill for a brochure site?',
        answer: 'Not anymore. Next.js is so fast and has great DX that it\'s my default for anything from a simple site to a complex app. The learning curve is small, the benefits are huge.',
      },
      {
        question: 'Can you integrate with our CMS or backend?',
        answer: 'Yes. Headless CMS (Contentful, Strapi), your own API, databases, anything with a REST or GraphQL endpoint. Next.js is API-agnostic.',
      },
      {
        question: 'What about maintenance and updates after launch?',
        answer: 'I hand over clean, well-documented code. You can maintain it yourself or I offer retainer-based support: small fixes, performance optimizations, feature additions.',
      },
    ],
  },
] as const;

// ============================================================
// INSIGHTS / BLOG — Articles that rank for how-to intent
// ============================================================
export const insights = [
  {
    slug: 'enterprise-reporting-migration',
    title: 'Migrating Enterprise Reporting Off Third-Party Tools: What I Learned Over Two Years',
    metaDescription: 'How to migrate reporting from Looker, Qlik, or third-party platforms to BigQuery and Looker Studio without losing data.',
    excerpt: 'Moving 50+ reports across three regions taught me that migrations fail not because of technology, but because of data debt.',
    publishedAt: '2024-06-01',
    readTime: 12,
    tags: ['Analytics', 'BigQuery', 'Migrations'],
    relatedService: 'analytics-migration',
    relatedCaseStudies: ['project-mercury-levis'],
  },
  {
    slug: 'bot-traffic-filtering',
    title: 'How to Catch Bot Traffic That Fools Your BI Filters',
    metaDescription: 'Building a bot traffic scoring model to protect KPI accuracy when standard third-party filters fail.',
    excerpt: 'Third-party bot detection misses sophisticated visitors that mimic human behavior. Here is how to build a hybrid scoring model.',
    publishedAt: '2024-05-15',
    readTime: 10,
    tags: ['Analytics', 'Data Quality', 'Python'],
    relatedService: 'analytics-migration',
    relatedCaseStudies: ['levis-bot-scoring-model'],
  },
  {
    slug: 'last-touch-attribution-bigquery',
    title: 'Last-Touch Attribution Across Web and App in BigQuery',
    metaDescription: 'How to build unified attribution reporting across web and mobile app traffic in BigQuery.',
    excerpt: 'Attribution is marketing favorite lie until you have traffic across web, app, email, and offline. Here is the pragmatic approach.',
    publishedAt: '2024-04-20',
    readTime: 13,
    tags: ['Analytics', 'BigQuery', 'Attribution'],
    relatedService: 'marketing-analytics',
    relatedCaseStudies: ['levis-last-touch-channel'],
  },
  {
    slug: 'power-bi-vs-tableau-vs-looker',
    title: 'Power BI vs. Looker Studio vs. Tableau: How I Actually Choose',
    metaDescription: 'Comparison of Power BI, Tableau, and Looker Studio. Which tool should you actually use?',
    excerpt: 'Everyone asks which tool is best. The answer is: depends. Here is my decision framework for choosing the right BI tool.',
    publishedAt: '2024-03-30',
    readTime: 11,
    tags: ['BI Tools', 'Dashboard Design', 'Decisions'],
    relatedService: 'bi-dashboards',
    relatedCaseStudies: [],
  },
] as const;

// ============================================================
// FAQ — Structured Q&A for homepage and service pages
// ============================================================
export const homepageFAQ = [
  {
    question: 'How do you work with clients who have data under NDA?',
    answer: 'All my work is confidential by default. I do not share client data, naming, metrics, or approaches without explicit written permission. In case studies, I anonymize or speak in generics. Your data stays yours.',
  },
  {
    question: 'What does a typical engagement look like, and how long does it take?',
    answer: 'It depends on scope. A single dashboard is typically 4-6 weeks. An analytics migration is 3-6 months. A predictive model is 2-3 months. I give you a detailed timeline after understanding your data and requirements in our discovery call.',
  },
  {
    question: 'Do you work fixed-price or retainer?',
    answer: 'Both. Project-based work (dashboards, migrations, models) is fixed-price with milestones. Ongoing support is retainer-based (hourly or monthly). We can mix: build something fixed-price, then support it on a small retainer.',
  },
  {
    question: 'Which time zones do you cover?',
    answer: 'I am based in Lahore, Pakistan. I work across APAC (Singapore, Australia, India), EU (UK, Germany), and US time zones. I am online 6am-10pm Pakistan time, which covers most business hours across these regions.',
  },
  {
    question: 'Can you work with our existing BigQuery / Power BI / Azure setup?',
    answer: 'Yes. I build on top of whatever you have. If your data is in BigQuery, Snowflake, Redshift, or SQL Server, I can work with it. Same for existing BI tools. I integrate with your stack rather than forcing you to move.',
  },
  {
    question: 'What is the smallest project you will take?',
    answer: 'A single dashboard or small analysis is fine. There is no minimum project size, but I do have a minimum hourly rate. For small work, retainer-based support often makes more sense economically.',
  },
];

export const serviceFAQs: Record<string, typeof homepageFAQ> = {
  'bi-dashboards': [
    {
      question: 'Which tool should we choose: Power BI, Tableau, or Looker Studio?',
      answer: 'It depends on where your data lives and your team\'s technical depth. If you are on Azure/Microsoft, Power BI is natural. If you are Google-native, Looker Studio. If you need maximum interactivity, Tableau. I can help you decide based on your constraints.',
    },
    {
      question: 'How long does a dashboard build typically take?',
      answer: 'A single dashboard is usually 4-6 weeks. Multi-dashboard engagements or complex federated setups take 3-6 months. I will give you a clear timeline after understanding your data.',
    },
    {
      question: 'Do you handle data infrastructure, or just the dashboard layer?',
      answer: 'I build dashboards on top of whatever you have. If your data layer is messy, I can clean it up, but that is a separate engagement. I let you know if infrastructure work is needed before we start.',
    },
  ],
  'analytics-migration': [
    {
      question: 'How do you handle data validation during a migration?',
      answer: 'Every field is reconciled row-by-row against the source. Row counts, sums, dates, null patterns are all verified before cutover. I build automated tests you can re-run post-launch.',
    },
    {
      question: 'What if we are using multiple data sources?',
      answer: 'That is the norm. I design a unified ingestion layer pulling from Salesforce, GA4, your data warehouse, and custom APIs. The work is in orchestration and conflict resolution.',
    },
    {
      question: 'Can we run old and new stacks in parallel during migration?',
      answer: 'Yes. We can run both for weeks or months, gradually shifting reports over. This is often essential for large teams to maintain stability.',
    },
  ],
  'predictive-modeling': [
    {
      question: 'How much historical data do I need?',
      answer: 'Time-series models need at least 2 years of clean data to capture seasonality. More is better. If you have less, we can use external data or simpler approaches.',
    },
    {
      question: 'What happens when business changes (product launch, crisis)?',
      answer: 'Good models degrade gracefully but don\'t auto-correct for regime changes. We build in manual override layers and retrain quarterly to adapt to new patterns.',
    },
    {
      question: 'Do you build neural nets or deep learning?',
      answer: 'Only when necessary. 90% of forecasting problems solve better with classical time-series (ARIMA, Prophet) or gradient boosting. I choose the simplest model that works.',
    },
  ],
  'ai-chatbots': [
    {
      question: 'What is RAG and why is it better than fine-tuning?',
      answer: 'RAG retrieves relevant documents at query time, so the model answers based on your actual data, not memorized training. It is faster to update, cheaper, and doesn\'t require retraining.',
    },
    {
      question: 'Can it integrate with our existing systems?',
      answer: 'Yes. Slack, email, customer portals, internal tools — I can build the integration layer. The chatbot can query your databases and pull from Salesforce in real time.',
    },
    {
      question: 'How do you prevent it from confidently giving wrong answers?',
      answer: 'Confidence scoring, retrieval quality checks, and user feedback loops. We log queries without good answers and retrain. It also knows when to say "I do not know."',
    },
  ],
  'marketing-analytics': [
    {
      question: 'How do you handle cross-device and offline attribution?',
      answer: 'GA4 uses first-party data and cross-domain tracking. For offline, we connect CRM or backend conversion data via user IDs. Full cross-device needs customer data platforms.',
    },
    {
      question: 'Which attribution model should we use?',
      answer: 'Depends on your business. E-commerce often uses time-decay or position-based. SaaS usually last-touch or multi-touch. We test models against your data and pick what correlates to ROI.',
    },
    {
      question: 'How often should we audit our tracking?',
      answer: 'After major changes. Otherwise, quarterly audits catch drift. I recommend monthly spot-checks.',
    },
  ],
  'web-development': [
    {
      question: 'Is Next.js overkill for a brochure site?',
      answer: 'No. Next.js is so fast and has great developer experience that it is my default for anything from a simple site to a complex app.',
    },
    {
      question: 'Can you integrate with our CMS or backend?',
      answer: 'Yes. Headless CMS (Contentful, Strapi), your own API, databases, anything with a REST or GraphQL endpoint. Next.js is API-agnostic.',
    },
    {
      question: 'What about maintenance and updates after launch?',
      answer: 'I hand over clean, documented code. You can maintain it yourself or I offer retainer support for fixes, optimizations, and feature additions.',
    },
  ],
};

// ============================================================
// NAVIGATION
// ============================================================
export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

// ============================================================
// HELPERS
// ============================================================
export function getYearsOfExperience(): number {
  const now = new Date();
  return now.getFullYear() - site.careerStartYear;
}
