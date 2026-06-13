# Claude Code Execution Brief — waleedshafqat.com

**Goal:** turn the site into a lead-generation machine that ranks on search engines and is correctly understood by AI answer engines (ChatGPT, Claude, Perplexity, Gemini).

**Stack (do not change without reason):** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · deployed to Vercel · contact form via Resend · domain via Namecheap.

**How to use this file:** work top to bottom. Tasks are grouped P0 → P1 → P2 by impact-on-leads. Each task has a *What*, a *Why it matters*, and *Acceptance criteria*. Do not batch-commit everything at once. Ship in the order below, commit per task, and verify acceptance criteria before moving on. Where I give code, treat it as a starting point to adapt to the existing component structure, not a literal drop-in.

**One rule that overrides everything else:** every word that ships must read like a person wrote it. There is a Copy & Humanization Standard near the end. Read it before touching any user-facing text.

---

## Context Claude Code should load first

Before writing any code, read these existing files so changes fit the current architecture:

- `app/layout.tsx` (or `src/app/layout.tsx`) — root metadata, fonts, analytics scripts
- `app/page.tsx` — homepage section composition
- `app/work/[slug]/page.tsx` and the case-study data source (likely `lib/content.ts` or MDX)
- `lib/content.ts` — centralised content if present
- `next.config.js` / `next.config.mjs` — headers, redirects, image config
- `tailwind.config.ts` — design tokens
- `public/` — existing `robots.txt`, `sitemap.xml`, `og-image.png`, `resume.pdf`, logos, images

Confirm whether case-study content lives in `lib/content.ts`, in MDX, or hardcoded in components. Every content task below assumes a single source of truth. If content is scattered, the first refactor is to centralise it.

---

# P0 — Highest leverage. Do these first.

These move leads and fix foundational SEO. Expect the biggest return here.

## P0-1 · Fix the canonical domain split

**What:** the site serves on `https://www.waleedshafqat.com` but `og:url` and `og:image` reference the non-www `https://waleedshafqat.com`. Pick **one** canonical host (recommend keeping `www` since that is what currently serves) and make everything consistent.

- Set a permanent 301 redirect from the non-canonical host to the canonical one (Vercel: add the domain and set the redirect in project Domains settings, or via `next.config` redirects if both are on the same project).
- Update every absolute URL in metadata to the canonical host: `metadataBase`, `openGraph.url`, `openGraph.images`, `twitter.images`, and the JSON-LD `url` fields added later.
- Add a self-referencing `<link rel="canonical">` on every page via the App Router `alternates.canonical` metadata field.

In `app/layout.tsx`:

```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://www.waleedshafqat.com"),
  alternates: { canonical: "/" },
  // ...existing metadata, with all absolute URLs switched to the www host
};
```

**Why it matters:** split signals between www and non-www dilute ranking and can break social card previews. This is a silent bug costing authority on every page.

**Acceptance criteria:** `curl -I https://waleedshafqat.com` returns a 301 to the www host. Every page's canonical and OG URL uses the same host. Facebook/LinkedIn/Twitter card debuggers show the correct image.

## P0-2 · Make the hero stats render server-side with real numbers

**What:** the animated counters (Years Experience, Projects Delivered, Client Satisfaction, Industries Served) currently render as `0+` in raw HTML because the count-up only runs client-side after hydration. Crawlers and AI fetchers that read initial HTML see zeros.

- Render the final value as the server-side text content, then animate *from* a lower number to that value on the client. The DOM should always contain the real number even before JS runs.
- Pattern: server-render `7+`, `120+`, etc. as the element's text; have Framer Motion / the count-up hook read the target from a `data-value` attribute or prop and animate visually without ever emptying the DOM to `0`.

**Why it matters:** your strongest credibility signals (7+ years, enterprise client count, 100% satisfaction) are invisible to Google's initial render and to AI crawlers that do not execute JS. You are hiding your best proof.

**Acceptance criteria:** `curl https://www.waleedshafqat.com | grep -i "years"` shows the real number in the HTML, not `0`. View-source contains the true figures.

## P0-3 · Add a frictionless booking path as the primary CTA

**What:** right now the only conversion route is a contact form. Add a calendar booking link as the dominant call to action.

- Set up **Cal.com** (free, open-source, cleaner than Calendly for this use) with a 20-minute "Intro Call" event type. Embed it on a `/book` route using the Cal.com React embed, and link every primary CTA button to it.
- Keep the contact form, but reposition booking as the headline action. Hierarchy: **Book a call** (primary) → **Send a message** (secondary) → email/WhatsApp (tertiary).
- Add the booking CTA in: hero, end of each case study, sticky header on scroll, and contact section.

**Why it matters:** every extra step between intent and contact loses leads. A form makes a prospect compose a message and wait. A calendar lets them grab a slot in ten seconds. For a high-ticket consultant, booked calls are the funnel.

**Acceptance criteria:** a visitor can book a call from the hero in two clicks. The booking CTA appears at the bottom of every case study page and in a sticky element after the user scrolls past the hero.

## P0-4 · Ship the "Discovery Audit" lead magnet

**What:** offer a free, low-commitment first step. Frame it as a **Free 30-Minute Data & Analytics Health Check** (or "Discovery Audit"). This is the foot-in-the-door offer.

- Create a short section on the homepage and a dedicated `/discovery-audit` page explaining what they get: a 30-minute call where you review their current reporting/data setup and leave them with 2–3 concrete, actionable improvements, no obligation.
- Point its CTA at the same Cal.com booking with a dedicated event type so you can track which leads came via the audit offer.
- This deserves its own indexable page because "free analytics audit" / "BI health check" are searchable intents.

**Why it matters:** people do not hire a consultant cold. They hire after a small, valuable, low-risk first interaction. A named free offer converts far better than "Let's Talk" because it tells the prospect exactly what they get and what it costs them (nothing).

**Acceptance criteria:** `/discovery-audit` exists, is in the sitemap, has unique meta, and its CTA books a dedicated call type.

## P0-5 · Add a WhatsApp contact channel

**What:** add a WhatsApp click-to-chat link (`https://wa.me/<number>?text=<prefilled>`) in the contact section and as a small floating button.

**Why it matters:** for international and APAC/Middle East clients, WhatsApp is often the preferred low-friction channel, and it converts hesitant leads who will not fill a form. Prefill a message like "Hi Waleed, I saw your portfolio and wanted to ask about..." to lower the activation barrier.

**Acceptance criteria:** WhatsApp link opens a chat with a prefilled message. Floating button is unobtrusive on mobile and does not cover other CTAs.

## P0-6 · Add JSON-LD structured data

**What:** inject schema.org structured data so search engines and AI engines understand who you are and what you offer. Add as `<script type="application/ld+json">` blocks (use Next's pattern of rendering a `<script>` with `dangerouslySetInnerHTML` in the relevant layout/page, or a small `<JsonLd>` component).

Add these types:

1. **Person** (in root layout) — your identity entity.
2. **ProfessionalService** (homepage) — the business offering, with `areaServed`, `serviceType`, `knowsAbout`.
3. **BreadcrumbList** (case study + service pages).
4. **CreativeWork** or **Article** (each case study).
5. **FAQPage** (on the FAQ section once P1-3 lands).

Person + ProfessionalService starter:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Waleed Shafqat",
  "url": "https://www.waleedshafqat.com",
  "image": "https://www.waleedshafqat.com/images/waleed.png",
  "jobTitle": "Senior Data Scientist & Analytics Consultant",
  "description": "Senior analytics and data science consultant with 7+ years delivering BI dashboards, analytics migrations and predictive models for enterprise clients.",
  "alumniOf": [
    { "@type": "CollegeOrUniversity", "name": "RMIT University" },
    { "@type": "CollegeOrUniversity", "name": "National University of Computer & Emerging Sciences (FAST)" }
  ],
  "knowsAbout": ["Power BI","BigQuery","Python","Tableau","Looker Studio","Machine Learning","Data Engineering","Marketing Analytics","Forecasting","Credit Risk Modeling"],
  "hasCredential": "Microsoft Certified: Azure Data Scientist Associate",
  "sameAs": [
    "https://www.linkedin.com/in/waleedshafqat1/",
    "https://www.upwork.com/freelancers/~011464dcb5c9f683c7"
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Waleed Shafqat — Analytics & Data Science Consulting",
  "url": "https://www.waleedshafqat.com",
  "image": "https://www.waleedshafqat.com/og-image.png",
  "priceRange": "$$",
  "areaServed": ["Australia","Singapore","United States","United Kingdom","Worldwide"],
  "serviceType": ["BI Dashboards","Analytics Migration","Predictive Modeling","AI Chatbots","Marketing Analytics","Web Development"],
  "founder": { "@type": "Person", "name": "Waleed Shafqat" },
  "knowsAbout": ["Power BI","BigQuery","Looker Studio","Python","Machine Learning"]
}
```

**Why it matters:** structured data is how Google builds rich results and how AI answer engines decide what to cite. Without it, you are a wall of text the machine has to guess at. With it, you are an entity with defined skills, credentials and services.

**Acceptance criteria:** every JSON-LD block validates in Google's Rich Results Test and schema.org validator with zero errors. Person and ProfessionalService present on homepage; Article/CreativeWork + BreadcrumbList on every case study.

## P0-7 · Generate robots.txt and sitemap.xml dynamically

**What:** use the App Router native files so these stay in sync automatically.

`app/sitemap.ts`:

```ts
import type { MetadataRoute } from "next";

const base = "https://www.waleedshafqat.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = [
    "project-mercury-levis",
    "levis-bot-scoring-model",
    "levis-last-touch-channel",
    "pharma-market-dashboards",
    "astrazeneca-patient-model-tracker",
    "global-apparel-forecasting",
    "coles-baby-customer-segmentation",
    "solv-workplace-injury-reporting",
    "estliving-digital-analytics",
    "microfinance-credit-scoring",
  ];
  const services = [
    "bi-dashboards",
    "analytics-migration",
    "predictive-modeling",
    "ai-chatbots",
    "marketing-analytics",
    "web-development",
  ];

  const staticRoutes = ["", "/discovery-audit", "/work", "/services", "/about", "/contact", "/insights"];

  return [
    ...staticRoutes.map((p) => ({ url: `${base}${p}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${base}/services/${s}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...caseStudies.map((c) => ({ url: `${base}/work/${c}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
```

`app/robots.ts`:

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Search + AI citation crawlers: allow everything
      { userAgent: ["Googlebot", "Bingbot", "ChatGPT-User", "Claude-User", "PerplexityBot", "OAI-SearchBot"], allow: "/" },
      // Training-data scrapers: your call. Allowing them increases the odds you are
      // referenced in AI answers. Disallowing protects your content from training use.
      // Default below allows everything; flip to Disallow: "/" per-agent if you prefer.
      { userAgent: ["GPTBot", "ClaudeBot", "Google-Extended", "CCBot"], allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://www.waleedshafqat.com/sitemap.xml",
    host: "https://www.waleedshafqat.com",
  };
}
```

Note the comment in robots: decide whether to allow training-data bots. Allowing them makes it more likely AI tools surface and cite your work, which is a lead source in 2026. Disallowing them keeps your case-study writing out of training corpora. For a consultant who *wants* to be found and cited, allowing is the recommended default.

**Why it matters:** dynamic generation means new case studies and service pages get indexed without you hand-editing XML. The AI-bot directives control whether you show up in AI-generated answers, which is becoming a real referral channel.

**Acceptance criteria:** `/robots.txt` and `/sitemap.xml` resolve, list all real routes, and the sitemap is submitted in Google Search Console (see P2-3).

## P0-8 · Strengthen social proof above the fold and near every CTA

**What:** you have exactly one testimonial (EST Living). That is thin for a high-ticket service.

- Pull together 3–5 testimonials. Sources: Upwork reviews (you are Top Rated with 100% JSS, so you have them), LinkedIn recommendations, JWE Group / Jake Worth, and any enterprise contacts willing to give an anonymised line.
- Display them as a rotating or grid testimonial block, each with name/role/company (or anonymised role where NDA requires, e.g. "Analytics Lead, Top-10 Pharma").
- Add a compact trust bar near the hero and near the contact CTA: "Top Rated on Upwork · 100% Job Success · 7+ years · Enterprise clients on 3 continents."
- Add the client logos you are permitted to show, with a clear caption that enterprise work was delivered through Lynx Analytics (you already caption this correctly — keep that honesty, it builds trust).

**Why it matters:** social proof next to the decision point is one of the highest-converting elements on any service site. One testimonial reads as "could only find one." Five reads as "in demand."

**Acceptance criteria:** at least 3 testimonials live, each with attribution. A trust bar appears within the first viewport and again adjacent to the contact CTA.

---

# P1 — SEO content engine and service architecture.

This is where organic lead flow actually comes from. P0 captures the traffic you have; P1 grows the traffic.

## P1-1 · Build dedicated, indexable service pages

**What:** your services are currently cards on the homepage only. Each should become its own page at `/services/<slug>` so it can rank for its keyword and be linked to directly.

Create pages for:

| Slug | Primary target keyword | Page intent |
|---|---|---|
| `bi-dashboards` | "Power BI consultant" / "BI dashboard developer" | dashboards in Power BI, Tableau, Looker Studio |
| `analytics-migration` | "analytics migration consultant" / "BigQuery migration" | moving reporting/ETL to modern stacks |
| `predictive-modeling` | "forecasting consultant" / "demand forecasting" | revenue forecasts, time-series |
| `ai-chatbots` | "RAG chatbot developer" / "AI assistant consultant" | LLM/RAG assistants |
| `marketing-analytics` | "GA4 consultant" / "marketing attribution" | GA4, GTM, funnel, attribution |
| `web-development` | "Next.js developer" / "data dashboard web app" | production sites and data apps |

Each service page structure:
1. H1 with the keyword phrased naturally (not stuffed).
2. A short, human intro: the problem this solves, who it's for.
3. "What you get" — concrete deliverables.
4. Relevant case studies (internal links to `/work/*`).
5. A short process/how-it-works.
6. A service-specific FAQ (2–4 questions, marked up as FAQPage schema).
7. CTA to book a call.

Keep the homepage service cards, but link each card to its full page.

**Why it matters:** a single homepage cannot rank for six different services. Six focused pages can each rank for their own intent, multiplying your organic surface area. This is the single biggest SEO lever after the technical fixes.

**Acceptance criteria:** six service pages live, each with unique title/meta/H1, at least one internal link to a relevant case study, a service FAQ, and a booking CTA. All in the sitemap.

## P1-2 · Launch an Insights/blog section

**What:** create `/insights` with article pages at `/insights/<slug>`, authored in MDX so you can write naturally and include code/charts.

Seed it with 4–6 articles that target real search intent and demonstrate expertise. Topic ideas drawn from genuine experience (write these yourself or from your own notes; they must be first-hand, not generated filler):

- "Migrating enterprise reporting off third-party BI tools: what I learned over two years" (Project Mercury angle, anonymised).
- "How to catch bot traffic that fools your BI filters" (the Levis bot-scoring work, anonymised).
- "Last-touch attribution across web and app: a practical setup in BigQuery + Looker Studio."
- "Power BI vs Looker Studio vs Tableau: how I actually choose for a client."
- "Building a RAG chatbot that doesn't hallucinate your company's data."
- "What a 30-minute analytics health check actually finds."

Each article: 1,200–2,000 words, an honest first-person voice, real specifics, internal links to relevant service and case-study pages, Article JSON-LD, a unique OG image, and a soft CTA at the end (book the audit).

**Why it matters:** content marketing is the durable, compounding lead engine. Service pages rank for "hire" intent; articles rank for the much larger "how do I..." intent and pull people into your funnel earlier. They also give AI engines fresh, citable material with your name on it. This was already flagged as the primary gap in your earlier SEO audit.

**Acceptance criteria:** `/insights` index page lists posts; at least 3 articles published with full schema, internal links, and CTAs; posts appear in the sitemap with `changeFrequency: weekly`.

## P1-3 · Add an FAQ section (homepage + service pages)

**What:** add a frequently-asked-questions block answering real prospect objections, marked up with FAQPage JSON-LD.

Questions to cover (answer in your own voice, briefly and specifically):
- How do you work with clients who have data under NDA?
- What does a typical engagement look like, and how long does it take?
- Do you work fixed-price or retainer?
- Which time zones do you cover? (You are Lahore-based, serving APAC/EU/US — say so plainly.)
- Can you work with our existing BigQuery / Power BI / Azure setup?
- What's the smallest project you'll take?

**Why it matters:** FAQ schema wins featured snippets and "People also ask" placements, and it's exactly the structured Q&A that AI answer engines lift directly into responses. It also handles objections that otherwise kill conversions silently.

**Acceptance criteria:** FAQPage schema validates; questions render as an accessible accordion; at least 6 Q&As on the homepage and 2–4 tailored ones per service page.

## P1-4 · Unique metadata and OG images per page

**What:** every page (case studies, service pages, articles) needs a unique `<title>`, meta description, and ideally a unique OG image. Currently the case studies likely inherit the homepage OG image.

- Use the App Router `generateMetadata` per dynamic route to produce title/description from the content source.
- Generate per-page OG images dynamically with `next/og` (`ImageResponse`) so each case study and article gets a branded card with its own title. One template, dynamic text.

Title formula: `<Specific Page Topic> | Waleed Shafqat` — front-load the keyword, keep under ~60 characters. Meta description: 140–160 characters, written for a human to click, including the primary keyword once, naturally.

**Why it matters:** duplicate titles/descriptions across pages cannibalise rankings and produce weak search snippets. Per-page OG images dramatically lift click-through when your links are shared on LinkedIn, which is where your prospects are.

**Acceptance criteria:** no two pages share a title or description; each case study and article renders a unique OG image; all validate in social debuggers.

## P1-5 · Internal linking and a real `/work` index

**What:**
- Build a proper `/work` index page (grid of all case studies, filterable by industry/skill) instead of only the homepage scroll section.
- Cross-link: every case study links to 2–3 related case studies and to the relevant service page. Every service page links to its supporting case studies.
- Add contextual in-body links in articles to services and case studies.

**Why it matters:** internal links spread authority, keep visitors moving deeper (lower bounce, more pages per session), and help search engines understand topical relationships. A flat single-page site leaks all of this.

**Acceptance criteria:** `/work` index exists and is indexed; every case study has a "Related work" and a "Related service" link; no orphan pages.

## P1-6 · Add an engagement-models / pricing-posture section

**What:** you don't need public dollar figures, but you should reduce pricing ambiguity. Add a short "How we can work together" block describing your three packages (BI Dashboard Build, Analytics Migration / Stack Modernisation with a Discovery Audit entry point, AI Chatbot / Automation Build) plus the retainer option, each with an indicative scope and a "from" framing or "project-based / monthly retainer" note.

**Why it matters:** prospects self-qualify on pricing posture. Total silence on cost makes serious buyers hesitate ("is this out of my league or beneath them?"). Naming engagement models and a starting point filters tyre-kickers and warms real buyers before the call.

**Acceptance criteria:** an engagement-models section/page is live, links each package to relevant case studies and to booking.

---

# P2 — Polish, performance, future-proofing.

## P2-1 · Ship llms.txt and llms-full.txt

**What:** create `/llms.txt` (curated map) and `/llms-full.txt` (fuller dump) at the domain root. Serve them as static files in `public/`, or generate via a route handler so they stay current. Keep `llms.txt` under ~10 KB.

Use this content for `public/llms.txt` (adapt URLs/text):

```markdown
# Waleed Shafqat — Senior Analytics & Data Science Consultant

> Waleed Shafqat is a senior data science and analytics consultant with 7+ years
> delivering BI dashboards, analytics migrations, forecasting and ML models for
> enterprise clients including Levis, AstraZeneca and Toyota (delivered via Lynx
> Analytics) and independent clients via Upwork (Top Rated, 100% Job Success).
> Based in Lahore, Pakistan; works remotely across APAC, Europe and the US.
> Core stack: Power BI, Tableau, Looker Studio, BigQuery, Python, Azure, SQL, RAG/LLM.

## Services
- [BI Dashboards & Reporting](https://www.waleedshafqat.com/services/bi-dashboards): Power BI, Tableau and Looker Studio dashboards tied to real decisions.
- [Analytics Migration & Automation](https://www.waleedshafqat.com/services/analytics-migration): moving reporting, CVM and ETL to BigQuery, Azure and automation-first stacks.
- [Forecasting & Predictive Modeling](https://www.waleedshafqat.com/services/predictive-modeling): revenue forecasts, demand planning, time-series for retail and e-commerce.
- [AI Chatbots & Assistants](https://www.waleedshafqat.com/services/ai-chatbots): LLM and RAG assistants for support, internal tools and automation.
- [Marketing & User-Journey Analytics](https://www.waleedshafqat.com/services/marketing-analytics): GA4, GTM, funnel and attribution analysis.
- [Web Development](https://www.waleedshafqat.com/services/web-development): production Next.js sites and data-driven web apps.

## Selected work
- [Project Mercury — Reporting Migration (Levis)](https://www.waleedshafqat.com/work/project-mercury-levis): two-year enterprise reporting migration across US, EU and Canada.
- [Bot Traffic Scoring Model (Levis)](https://www.waleedshafqat.com/work/levis-bot-scoring-model): hybrid model protecting KPI accuracy against sophisticated bots.
- [Last-Touch Channel Attribution (Levis)](https://www.waleedshafqat.com/work/levis-last-touch-channel): unified web and app attribution in BigQuery and Looker Studio.
- [Market Tracking (AstraZeneca)](https://www.waleedshafqat.com/work/pharma-market-dashboards): market-comparison dashboards and a Patient Model Wizard app.
- [Customer Segmentation (Coles)](https://www.waleedshafqat.com/work/coles-baby-customer-segmentation): k-means segmentation for the baby category.

## About & contact
- [About](https://www.waleedshafqat.com/about): background, credentials and approach.
- [Book a call](https://www.waleedshafqat.com/book): 20-minute intro call.
- [Free Discovery Audit](https://www.waleedshafqat.com/discovery-audit): 30-minute analytics health check.

## Credentials
- MSc Data Analytics, RMIT University (Dean's List). BSc Computer Science, FAST.
- Microsoft Certified: Azure Data Scientist Associate. SAS Advanced Analytics.
```

For `llms-full.txt`, concatenate the full markdown text of each service page, case study and key article so an AI ingesting it gets your complete content in one clean file. Generate this from your content source rather than maintaining by hand.

**Why it matters:** llms.txt is the curated entry point AI assistants use to find your canonical pages during live queries. It costs almost nothing and increases the odds AI tools describe and cite you accurately, which is a growing referral path. Naming convention matters: it must be `llms.txt`, not `llm.txt`, or no crawler looks for it.

**Acceptance criteria:** both files resolve at the root, `llms.txt` is valid markdown starting with an H1 and a blockquote summary, stays under 10 KB, and every link in it returns 200.

## P2-2 · Core Web Vitals and performance

**What:** Framer Motion and heavy hero imagery are the usual culprits for poor LCP/CLS on portfolio sites. Audit and fix:

- Serve the hero image (`waleed.png`) through `next/image` with explicit width/height, `priority`, and a modern format (WebP/AVIF). A PNG portrait is likely oversized.
- Reserve space for animated elements so they don't cause layout shift (CLS).
- Defer non-critical Framer Motion animations; respect `prefers-reduced-motion`.
- Ensure fonts use `next/font` with `display: swap` (you reportedly already migrated to `next/font/google` for JWE; apply the same here).
- Run Lighthouse and Vercel Speed Insights; target LCP < 2.5s, CLS < 0.1, INP < 200ms on mobile.

**Why it matters:** Core Web Vitals are a ranking factor, and slow mobile load kills conversions outright. A consultant's site that loads slowly undercuts the "I optimise things" message.

**Acceptance criteria:** mobile Lighthouse Performance ≥ 90; all three Core Web Vitals in the green in PageSpeed Insights field/lab data.

## P2-3 · Analytics, Search Console, and heatmaps

**What:**
- Verify the site in **Google Search Console** (DNS or the `next` metadata verification tag) and submit the sitemap. Verify in **Bing Webmaster Tools** too.
- Add **Vercel Analytics** + **Speed Insights** (one line each, privacy-friendly).
- Add **GA4** for funnel/source tracking, gated behind a lightweight consent approach.
- Add **Microsoft Clarity** (free) for session recordings and heatmaps so you can see where visitors drop off and which CTAs get ignored.
- Define conversion events: `book_call_click`, `audit_cta_click`, `contact_submit`, `whatsapp_click`, `resume_download`.

**Why it matters:** you cannot improve lead conversion you can't measure. GSC tells you which queries you rank for (and which to write content around next). Clarity shows you exactly where prospects hesitate.

**Acceptance criteria:** GSC verified and sitemap submitted; GA4 firing the five conversion events; Clarity recording sessions.

## P2-4 · Accessibility pass

**What:** semantic headings (one H1 per page, logical H2/H3 order), descriptive alt text on every image (your logos and portrait currently lean on generic alts), visible focus states, sufficient colour contrast on the dark theme, keyboard-navigable accordion/menu, and `aria-label`s on icon-only buttons (WhatsApp, social links).

**Why it matters:** accessibility overlaps heavily with SEO (semantic structure, alt text) and widens your audience. It also signals craft to the technical buyers evaluating you.

**Acceptance criteria:** axe DevTools reports zero critical issues; all images have meaningful alt text; full keyboard navigation works.

## P2-5 · Security headers

**What:** add a strict but functional header set in `next.config` (you've done this before for JWE to pass SecurityScorecard): `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`. Allow the Cal.com, analytics and Resend origins in the CSP.

**Why it matters:** clean security headers are table stakes for enterprise buyers who may run a quick scan, and they're a minor trust/SEO signal. You already know this drill.

**Acceptance criteria:** securityheaders.com grade A or better with no broken functionality.

---
# P3 Onwards

# Copy & Humanization Standard


## The AI tells currently on your site, and what to do

1. **Em-dash overuse.** Your copy leans hard on the em-dash (—). It appears in nearly every paragraph. This is now the single most recognisable AI-writing tell. Cut most of them. Replace with a full stop, a comma, or a rewrite. Keep at most one per few paragraphs, used deliberately.

2. **The "X — built in Y and tied to Z" cadence.** Several service descriptions follow the same rhythm ("...built in Power BI, Tableau and Looker Studio and tied to real decisions"). When every sentence has the same shape, it reads generated. Vary sentence length deliberately. Follow a long sentence with a short one. Three words. Then a longer thought that breathes.

3. **Consultant-ese abstractions.** "Turning complex data into strategic clarity" (in your footer) is the kind of line that says nothing. Replace abstractions with specifics: a number, a tool, a named outcome. "Strategic clarity" → "a forecast the merchandising team actually plans against."

4. **"Grounded in real client work," "from the trenches," "that matters."** These are fine in moderation but you use a few of them. One signature phrase is voice; three is a pattern. Keep "from the trenches" if you like it, cut the others.

5. Remove "," right before any "and" word or "or" word. Human don't use it and AI often does.

## Rules for human copy

- Write in first person. "I built..." not "Built...". You are a person, not a CV bullet.
- Lead with specifics: numbers, tools, outcomes, named industries. Specificity is the fastest path to sounding human and credible at once.
- Vary sentence length on purpose. Mix short punchy lines with longer ones.
- Use plain words. "Use," not "utilise." "Help," not "facilitate." (Your current copy is mostly good here. Keep it.)
- Allow a little personality and the occasional imperfection. A rhetorical question, a dry aside, an opinion ("I don't do dashboards for dashboards' sake" is exactly right — more of that).
- Read every line aloud. If you wouldn't say it to a client across a table, rewrite it.
- Avoid the tricolon reflex (lists of exactly three). AI defaults to threes constantly. Sometimes use two items. Sometimes four.

## Before / after examples

**Footer tagline**
- Before: "Senior Data Scientist & Analytics Consultant turning complex data into strategic clarity for enterprise clients and ambitious teams."
- After: "I build the dashboards, models and pipelines that enterprise teams actually run decisions on. Seven years, three continents, mostly retail and pharma."

**Services intro**
- Before: "From BI dashboards and AI chatbots to predictive models and full websites — each service is grounded in real client work, enterprise and independent alike."
- After: "Everything here is work I've shipped for real clients, not a service menu I padded out. Some of it was enterprise work through Lynx. Some I delivered solo on Upwork. Pick what fits your problem."

**A service card (BI Dashboards)**
- Before: "Enterprise dashboards spanning Product Performance, Market Comparison, Business Analytics and Marketing Reporting — built in Power BI, Tableau and Looker Studio and tied to real decisions."
- After: "I build dashboards executives open every morning, not the kind that get made once and forgotten. Power BI, Tableau or Looker Studio, depending on where your data already lives. The test I hold every report to: what decision does this change?"

Apply this standard to the hero, services, about, case-study intros, FAQ answers and articles. The goal isn't to strip professionalism. It's to sound like the specific, opinionated expert you are.

---

# Keyword map (for service pages, articles, and metadata)

Target these intents. Use them naturally in H1s, intros, and meta. Do not stuff.

| Page | Primary keyword | Secondary keywords |
|---|---|---|
| Homepage | freelance data science consultant | analytics consultant, Power BI consultant, BigQuery consultant |
| /services/bi-dashboards | Power BI consultant | Tableau consultant, Looker Studio dashboards, BI dashboard developer |
| /services/analytics-migration | analytics migration consultant | BigQuery migration, reporting stack modernization, ETL migration |
| /services/predictive-modeling | demand forecasting consultant | revenue forecasting, time-series forecasting, predictive analytics |
| /services/ai-chatbots | RAG chatbot developer | LLM consultant, AI assistant developer, custom AI chatbot |
| /services/marketing-analytics | GA4 consultant | marketing attribution, GTM setup, funnel analysis |
| /services/web-development | Next.js developer | data dashboard web app, React developer |
| /discovery-audit | free analytics audit | data health check, BI audit |
| Articles | long-tail "how to" | e.g. "last touch attribution BigQuery", "Power BI vs Looker Studio" |

Long-term: a chunk of your buyers search location/skill combos ("freelance Power BI consultant", "remote data scientist for hire"). The service pages plus Upwork/LinkedIn presence cover these. Don't fake a local-business angle you don't have; lean into "remote, works across APAC/EU/US time zones."

---

# Suggested execution order (checklist)

```
P0  [ ] P0-1  Canonical domain fix
    [ ] P0-2  Server-render hero stats
    [ ] P0-3  Cal.com booking as primary CTA
    [ ] P0-4  Discovery Audit lead magnet + page
    [ ] P0-5  WhatsApp channel
    [ ] P0-6  JSON-LD structured data
    [ ] P0-7  Dynamic robots.txt + sitemap.xml
    [ ] P0-8  Testimonials + trust bar
P1  [ ] P1-1  Six service pages
    [ ] P1-2  Insights/blog (3+ articles)
    [ ] P1-3  FAQ + FAQPage schema
    [ ] P1-4  Per-page metadata + dynamic OG images
    [ ] P1-5  /work index + internal linking
    [ ] P1-6  Engagement models section
P2  [ ] P2-1  llms.txt + llms-full.txt
    [ ] P2-2  Core Web Vitals
    [ ] P2-3  GSC + GA4 + Clarity + Bing
    [ ] P2-4  Accessibility
    [ ] P2-5  Security headers
COPY[ ] Humanization pass across all shipped pages (apply the standard above)
```

Commit each task separately with a clear message. After P0 and P1 ship, request indexing of the new pages in Google Search Console rather than waiting for the crawl.
