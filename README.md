# Waleed Shafqat — Portfolio

Senior Data Scientist portfolio website. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx                # Root layout, fonts, metadata, theme provider
│   ├── page.tsx                  # Home page — composes all sections
│   ├── globals.css               # Tailwind + theme variables
│   ├── work/[slug]/page.tsx      # Dynamic case study pages
│   └── api/contact/route.ts      # Serverless contact form handler
├── components/
│   ├── sections/                 # Each page section lives here
│   │   ├── hero.tsx
│   │   ├── impact-metrics.tsx
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   ├── skills.tsx
│   │   ├── work.tsx              # Case study cards
│   │   ├── clients.tsx           # Client logo marquee
│   │   ├── experience.tsx
│   │   ├── education.tsx
│   │   ├── testimonials.tsx
│   │   └── contact.tsx
│   └── shared/                   # Used across sections
│       ├── navbar.tsx
│       ├── footer.tsx
│       ├── theme-provider.tsx
│       └── theme-toggle.tsx
├── lib/
│   ├── data.ts                   # ⭐ ALL SITE CONTENT — edit here to update copy
│   └── utils.ts
├── public/
│   ├── images/                   # Add waleed.png here (profile photo)
│   ├── logos/                    # Client, tech, and education logos
│   └── resume.pdf                # Add your resume here for download button
├── tailwind.config.ts            # Midnight Analyst color palette
└── next.config.js
```

## Updating Content

**99% of text changes live in one file:** `lib/data.ts`

Edit that file to update your experience, services, skills, testimonials, case studies, etc. The UI updates automatically — no component editing needed.

## Adding Your Profile Photo

1. Add your photo to `public/images/waleed.png` (transparent PNG ideal, ~800×800px)
2. Open `components/sections/hero.tsx`
3. Find the placeholder block with "Photo goes here" and replace with:

```tsx
<Image
  src="/images/waleed.png"
  alt="Waleed Shafqat"
  width={400}
  height={400}
  className="object-cover"
  priority
/>
```

(Don't forget to `import Image from 'next/image'`.)

## Adding Your Resume

Drop your resume PDF into `public/resume.pdf`. The "Download Resume" button in the navbar will work automatically.

## Color Theme — Midnight Analyst

- **Dark mode (primary):** deep navy background (#0a0e27) + electric blue accent (#3b82f6)
- **Light mode (default):** off-white (#fafafa) + navy text + same electric blue accent
- **Typography:** Instrument Serif (display) · Inter (body) · JetBrains Mono (accents)

To change colors, edit `tailwind.config.ts` and `app/globals.css`.

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to https://vercel.com/new
3. Import the repo — Vercel auto-detects Next.js
4. Click Deploy
5. Free SSL + CDN + custom domain support included

### Custom Domain

1. Buy domain from Namecheap, Cloudflare Registrar, or Porkbun
2. In Vercel project → Settings → Domains → add your domain
3. Follow the DNS instructions Vercel gives you
4. SSL is auto-provisioned within minutes

### Contact Form Setup (Resend)

1. Sign up at https://resend.com (free tier covers 3,000 emails/month)
2. Verify a sending domain (or use `onboarding@resend.dev` for testing)
3. Create an API key
4. In Vercel → Settings → Environment Variables, add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (where messages get delivered)
   - `CONTACT_FROM_EMAIL` (verified sender address)
5. Redeploy

Until configured, form submissions log to the server console.

## Future: Adding a Chatbot

A `/api/chat` route can be added that calls Claude or OpenAI. The architecture is ready — just drop in the route handler and a chat UI component. Same pattern as `/api/contact`.

## Accessibility

- Keyboard navigation on all interactive elements
- `prefers-reduced-motion` respected
- Semantic HTML throughout
- ARIA labels on icon buttons

## Performance

- Next.js Image optimization
- Font subsetting via next/font
- Static generation for marketing pages
- Route-based code splitting
- Expected Lighthouse: 95+ across all categories

## License

Personal portfolio — all content copyright © Waleed Shafqat.
