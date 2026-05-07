/**
 * SITE DATA — Edit this file to update all content across the site.
 * Structured so non-developers can update copy without touching components.
 */

export const site = {
  name: 'Waleed Shafqat',
  title: 'Waleed Shafqat — Senior Analytics & Data Science Consultant',
  description:
    'Senior Analytics & Data Science Consultant with 6+ years delivering BI dashboards, analytics solutions and predictive models for Levis, AstraZeneca and Toyota. Top Rated on Upwork with 100% client satisfaction.',
  url: 'https://waleedshafqat.com', // Update after domain purchase
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
    phone: '+92-347-7711888',
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
  'turning messy data into strategic clarity',
  'delivering BI insights that drive real decisions',
  'building forecasting models that move revenue',
  'shipping ML solutions for enterprise clients',
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
      'Enterprise dashboards spanning Product Performance, Market Comparison, Business Analytics and Marketing Reporting — built in Power BI, Tableau and Looker Studio and tied to real decisions.',
    tags: ['Power BI', 'Tableau', 'Looker Studio'],
  },
  {
    icon: 'Workflow',
    title: 'Analytics Migration & Automation',
    description:
      'Move CVM, reporting and ETL pipelines to modern stacks — BigQuery, Azure and automation-first.',
    tags: ['BigQuery', 'Azure', 'Power Automate'],
  },
  {
    icon: 'Activity',
    title: 'Marketing & User Journey Analytics',
    description:
      'Google Analytics, GTM and funnel analysis to connect marketing spend to revenue outcomes.',
    tags: ['GA4', 'GTM', 'Funnel Metrics'],
  },
  {
    icon: 'Bot',
    title: 'AI Chatbots & Assistants',
    description:
      'Custom AI-powered chatbots and assistants built on LLMs — for customer support, internal tools and workflow automation.',
    tags: ['OpenAI', 'LangChain', 'RAG', 'Python'],
  },
  {
    icon: 'LineChart',
    title: 'Forecasting & Predictive Modeling',
    description:
      'Revenue forecasts, demand planning and time-series models for retail and e-commerce at scale.',
    tags: ['Python', 'ARIMA', 'Prophet', 'XGBoost'],
  },
  {
    icon: 'ShieldCheck',
    title: 'Risk & Credit Scoring Models',
    description:
      'Credit risk models for banks and loan portfolios, built with validation-first ML pipelines.',
    tags: ['Scikit-learn', 'Feature Engineering', 'A/B Testing'],
  },
  {
    icon: 'Brain',
    title: 'Custom ML Solutions',
    description:
      'From segmentation to recommendation engines — production-ready models tailored to your data.',
    tags: ['k-means', 'Clustering', 'NLP'],
  },
  {
    icon: 'Globe',
    title: 'Web Development',
    description:
      'Clean, fast, production-ready websites and web apps — from business sites to data-driven dashboards.',
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
      'Developed Python models for assortment optimization, revenue forecasting and pricing for Levi China.',
      'Designed and maintained dashboards for Levis China, US and Europe e-commerce reporting.',
      'Built Funnel Metrics and Out-of-Stock Analysis reports for Levi US.',
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
    slug: 'pharma-market-dashboards',
    title: 'Market Tracking for a Top-10 Pharma Company',
    client: 'AstraZeneca (via Lynx Analytics)',
    industry: 'Pharmaceutical',
    duration: 'Ongoing',
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
    duration: 'Ongoing',
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
    duration: 'Ongoing',
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
