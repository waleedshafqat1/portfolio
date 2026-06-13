# Claude Code Prompt — Convert waleedshafqat.com to a Multi-Page Architecture

Paste everything below the line into Claude Code. The metadata appendix at the end is the source of truth for every page's title, description and keywords. Work through the prompt top to bottom and commit per logical step.

---

## TASK

Convert this Next.js 14 (App Router) portfolio from a single-page site into a multi-page, hub-and-spoke architecture for SEO. The homepage stays as a strong overview hub but routes visitors out to dedicated, indexable pages. Do not break existing case-study pages or inbound anchor links. Apply the exact per-page metadata from the Appendix.

**Stack:** Next.js 14 App Router · TypeScript · Tailwind · Framer Motion · Vercel · Resend contact form. Content likely centralised in `lib/content.ts`. Read the existing `app/layout.tsx`, `app/page.tsx`, `app/work/[slug]/page.tsx`, `lib/content.ts`, `next.config`, `app/sitemap.ts` and `app/robots.ts` before making changes, and adapt to the real structure rather than assuming.

## TARGET ROUTE MAP

Build this structure. Keep existing `/work/[slug]` pages untouched in content; just link them from the new index.

```
/                          Hub homepage (condensed sections that link OUT)
/services                  Services overview/index
/services/bi-dashboards
/services/analytics-migration
/services/predictive-modeling
/services/ai-chatbots
/services/marketing-analytics
/services/web-development
/work                      Case-study index (grid, filter by industry/skill)
/work/[slug]               Existing case studies (KEEP AS-IS, just link from /work)
/about                     Full bio, timeline, experience, credentials, certs, publications
/contact                   Form + booking + WhatsApp + email
/discovery-audit           Free analytics health-check lead magnet
/insights                  Article index
/insights/[slug]           MDX articles (scaffold the route; content added later)
```

Fold the current "Skills" section into `/about` (and reuse it as a short band on relevant service pages). It is too thin to be its own indexed page.

## HOW TO CONVERT (do in this order)

### 1. Extract content into a single source of truth
If service, about, experience and skills content is hardcoded in `page.tsx`, move it into typed structures in `lib/content.ts` (e.g. `services`, `caseStudies`, `experience`, `credentials`, `testimonials`). Every page and the sitemap should read from here. This prevents the homepage and the service pages from drifting out of sync.

### 2. Build the dedicated pages
For each `/services/*` page, render: H1 (primary keyword phrased naturally), a human intro, "What you get" deliverables, related case studies (internal links), a short process, a 2–4 question FAQ with FAQPage JSON-LD, and a booking CTA. Pull copy from `lib/content.ts`.

Build `/services` and `/work` as index pages (grids that link to the detail pages). Build `/about`, `/contact`, `/discovery-audit` as full pages. Scaffold `/insights` and `/insights/[slug]` as an MDX-ready route with an empty-state index for now.

### 3. Rework the homepage into a hub
The homepage must NOT duplicate the full service copy (that causes duplicate content against the service pages). Instead:
- Hero (unchanged intent, keep it strong).
- Services: short teaser cards only — one or two sentences each — every card links to its full `/services/*` page.
- Featured work: 3–4 case studies, linking to `/work` and individual case studies.
- A condensed about teaser linking to `/about`.
- Testimonials + trust bar.
- Contact/booking band.

Keep section `id`s on the homepage (`#services`, `#work`, `#about`, `#contact`) so old anchor links still resolve.

### 4. Update navigation
Header nav links change from in-page anchors to real routes: Services → `/services`, Work → `/work`, About → `/about`, Contact → `/contact`. Add a prominent "Book a call" button. Keep the logo linking to `/`. Update the footer nav the same way. Add a sensible mobile menu.

### 5. Preserve old anchor URLs
Anyone with a link to `https://www.waleedshafqat.com/#services` should not 404. Because those are same-page anchors they still work as long as the homepage keeps the `id`s (step 3). Do not add redirects for hash fragments (servers don't see them); just keep the IDs. If any *real* old paths existed, add 301s in `next.config`.

### 6. Apply per-page metadata (Appendix)
Use the App Router `generateMetadata` (dynamic routes) or exported `metadata` (static routes) to set the exact `title`, `description` and `keywords` from the Appendix for every page. Confirm `metadataBase` is the canonical `https://www.waleedshafqat.com`, every page has a self-referencing `alternates.canonical`, and each has its own `openGraph` title/description. No two pages share a title or description.

### 7. Update sitemap, llms.txt and internal links
Add every new route to `app/sitemap.ts`. Update `public/llms.txt` to point at the new service and index URLs. Add internal links: each service page links to 2–3 related case studies; each case study links back to its parent service and to 2 sibling case studies; the homepage links to all hubs. No orphan pages.

### 8. Verify
- `npm run build` passes with no type errors.
- Every route in the map renders and returns 200.
- `/sitemap.xml` lists all new routes.
- Each page's title/description matches the Appendix.
- Old `/#services` style anchors still scroll correctly.
- No duplicate-content overlap between homepage and service pages.
- Lighthouse SEO score 100 on the homepage and one service page.

## CONSTRAINTS

- Do not change the visual design system (fonts, colours, spacing). Reuse existing components.
- Do not rewrite case-study page content.
- Keep all copy human. Avoid em-dash overuse, avoid identical sentence rhythm across cards, write in first person, lead with specifics. (See the Copy Standard in the earlier optimization brief.)
- Commit per step with clear messages (e.g. `feat: add /services/bi-dashboards page`).

---

# APPENDIX — Per-Page Metadata & Keyword Clusters

For each page: **Title** goes in `metadata.title` (aim under ~60 characters so it doesn't truncate in search results). **Description** goes in `metadata.description` (150–160 characters, written for a human to click). **Keywords** can populate `metadata.keywords` — note this tag is not a Google ranking factor, so its real value is as a checklist of terms to place naturally in the page's H1, H2s, body copy, image alt text and internal-link anchor text. That placement is what actually earns coverage.

---

### `/` — Homepage
**Title:** Waleed Shafqat — Data Science & Analytics Consultant
**Description:** Senior analytics and data science consultant. 7+ years building BI dashboards, BigQuery migrations and ML models for Levis, AstraZeneca and Toyota. Let's talk.
**Keywords:** data science consultant, analytics consultant, freelance data scientist, Power BI consultant, BigQuery consultant, machine learning consultant, BI dashboard developer, remote data scientist

---

### `/services` — Services Overview
**Title:** Analytics & Data Science Services | Waleed Shafqat
**Description:** BI dashboards, analytics migration, forecasting, AI chatbots, marketing analytics and web development — services delivered for enterprise and independent clients.
**Keywords:** data analytics services, data science consulting services, BI consulting services, analytics consulting, freelance analytics services, data consultant for hire

---

### `/services/bi-dashboards`
**Title:** Power BI, Tableau & Looker Studio Dashboards | Waleed Shafqat
**Description:** BI dashboard consultant building Power BI, Tableau and Looker Studio reports executives actually open. Tied to real decisions, not vanity metrics. See the work.
**Primary keyword:** Power BI consultant
**Keywords:** Power BI consultant, Tableau consultant, Looker Studio dashboards, BI dashboard developer, enterprise reporting, dashboard design, business intelligence consultant, Power BI developer, data visualization consultant, reporting automation

---

### `/services/analytics-migration`
**Title:** Analytics & Reporting Migration to BigQuery & Azure | Waleed Shafqat
**Description:** Migrate reporting, CVM and ETL pipelines off legacy tools to BigQuery and Azure. Enterprise migrations delivered with no reporting downtime. See how it works.
**Primary keyword:** analytics migration consultant
**Keywords:** analytics migration consultant, BigQuery migration, reporting stack modernization, ETL migration, data warehouse migration, Azure data migration, CVM migration, legacy BI migration, data pipeline migration, reporting platform migration

---

### `/services/predictive-modeling`
**Title:** Forecasting & Predictive Modeling Consultant | Waleed Shafqat
**Description:** Revenue forecasts, demand planning and time-series models for retail and e-commerce. Production-ready predictions your planning teams can actually act on.
**Primary keyword:** demand forecasting consultant
**Keywords:** demand forecasting consultant, revenue forecasting, predictive analytics consultant, time-series forecasting, sales forecasting, machine learning forecasting, ARIMA, Prophet, XGBoost, retail demand planning, inventory forecasting

---

### `/services/ai-chatbots`
**Title:** AI Chatbot & RAG Assistant Developer | Waleed Shafqat
**Description:** Custom AI chatbots and RAG assistants built on LLMs for support, internal tools and automation — grounded in your data so they don't make things up.
**Primary keyword:** RAG chatbot developer
**Keywords:** RAG chatbot developer, AI assistant developer, LLM consultant, custom AI chatbot, OpenAI developer, LangChain developer, retrieval augmented generation, enterprise AI assistant, conversational AI consultant, AI automation consultant

---

### `/services/marketing-analytics`
**Title:** GA4, GTM & Marketing Attribution Analytics | Waleed Shafqat
**Description:** GA4, Google Tag Manager and funnel analysis that connect marketing spend to revenue. Last-touch attribution across web and app, built in BigQuery.
**Primary keyword:** GA4 consultant
**Keywords:** GA4 consultant, marketing attribution consultant, Google Tag Manager setup, funnel analysis, conversion analytics, web analytics consultant, last touch attribution, marketing analytics consultant, GTM consultant, customer journey analytics

---

### `/services/web-development`
**Title:** Next.js Websites & Data-Driven Web Apps | Waleed Shafqat
**Description:** Fast, production-ready Next.js sites and data dashboards. Clean modern code, built by a developer who also understands the analytics behind the screen.
**Primary keyword:** Next.js developer
**Keywords:** Next.js developer, React developer, data dashboard web app, web app development, freelance web developer, TypeScript developer, Tailwind developer, data-driven website, full stack developer, business website developer

---

### `/work` — Case Study Index
**Title:** Case Studies & Selected Work | Waleed Shafqat
**Description:** Anonymized case studies across retail, pharma, automotive and finance — the problem, the approach and what the work delivered. NDA respected throughout.
**Keywords:** data science case studies, analytics portfolio, BI project examples, data science portfolio, analytics case studies, machine learning projects, dashboard examples, consulting case studies

---

### `/about`
**Title:** About Waleed Shafqat — Senior Data Scientist
**Description:** From a CS student in Lahore to enterprise dashboards on three continents. RMIT MSc, Azure-certified, 7+ years across retail, pharma and finance analytics.
**Keywords:** senior data scientist, data analytics consultant, RMIT data analytics, Azure Data Scientist Associate, Lahore data scientist, machine learning engineer, analytics expert, data science background

---

### `/contact`
**Title:** Contact & Book a Call | Waleed Shafqat
**Description:** Need a BI dashboard, forecast, AI chatbot or website? Book a 20-minute call or send a message. I typically reply within 24 hours.
**Keywords:** hire data scientist, book analytics consultant, contact data consultant, hire Power BI consultant, hire freelance data scientist, analytics consultation

---

### `/discovery-audit`
**Title:** Free 30-Minute Analytics Health Check | Waleed Shafqat
**Description:** A free 30-minute review of your reporting and data setup. Walk away with 2–3 concrete improvements you can action — no obligation, no pitch.
**Keywords:** free analytics audit, data health check, BI audit, free data consultation, analytics review, reporting audit, free BI assessment, data strategy session

---

### `/insights` — Article Index
**Title:** Insights on Analytics, BI & Data Science | Waleed Shafqat
**Description:** Practical write-ups on BI migrations, attribution, forecasting and AI — first-hand lessons from enterprise and independent data work.
**Keywords:** data analytics blog, BI insights, data science articles, analytics tutorials, Power BI tips, BigQuery guides, forecasting how-to, attribution modeling guide

---

### `/insights/[slug]` — Article template (set dynamically per post)
**Title pattern:** `<Article Title> | Waleed Shafqat`
**Description:** unique per article, 150–160 chars, written from the article's own angle, primary long-tail keyword used once naturally.
**Keywords:** the article's specific long-tail cluster (e.g. for a Power BI vs Looker Studio piece: power bi vs looker studio, looker studio vs power bi, choosing a bi tool, bi tool comparison).

---

## Keyword placement cheat-sheet (where coverage actually comes from)

For each page, the primary keyword should appear in: the `<title>`, the H1, at least one H2, the first 100 words of body copy, one image alt attribute, the URL slug, and the anchor text of at least one internal link pointing to the page. Secondary keywords go in subheadings and body naturally. Never repeat a phrase so often it reads unnatural — write for the reader first, place keywords second. That single discipline, across a dozen focused pages, gives you far broader and stronger coverage than any meta tag ever could.
