'use client';

import { useState } from 'react';
import { employers, projectOrgs } from '@/lib/data';

// ─── Employer card (static row) ───────────────────────────────────────────────

function EmployerCard({
  name,
  role,
  period,
  logo,
}: {
  name: string;
  role: string;
  period: string;
  logo: string;
}) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3 px-6 py-6 rounded-xl border border-accent-500/40 bg-accent-500/5 hover:border-accent-500 hover:-translate-y-1 transition-all duration-300 w-full sm:w-56">
      {logoFailed ? (
        <div className="h-12 w-12 rounded-xl bg-accent-500/10 flex items-center justify-center">
          <span className="font-display text-2xl text-accent-500">{name[0]}</span>
        </div>
      ) : (
        <img
          src={logo}
          alt={name}
          className="h-10 w-auto max-w-[130px] object-contain dark:brightness-[1.1]"
          onError={() => setLogoFailed(true)}
        />
      )}
      <div className="text-center">
        <div className="font-display text-base text-ink-900 dark:text-ink-50 leading-tight">
          {name}
        </div>
        <div className="mt-1 font-mono text-[10px] text-accent-500 uppercase tracking-wider">
          {role}
        </div>
        <div className="mt-0.5 font-mono text-[10px] text-ink-500 uppercase tracking-widest">
          {period}
        </div>
      </div>
    </div>
  );
}

// ─── Project org card (marquee) ───────────────────────────────────────────────

function ProjectCard({
  name,
  industry,
  logo,
}: {
  name: string;
  industry: string;
  logo: string | null;
}) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <div className="shrink-0 w-52 h-28 card-base flex flex-col items-center justify-center gap-2 px-6 hover:border-accent-500 hover:-translate-y-1 transition-all duration-300">
      {logo === null ? (
        <>
          <div className="font-display text-xl text-ink-900 dark:text-ink-50 text-center leading-tight">
            {name}
          </div>
          <div className="font-mono text-[10px] text-ink-500 uppercase tracking-widest">
            {industry}
          </div>
        </>
      ) : logoFailed ? (
        <>
          <div className="h-10 w-10 rounded-xl bg-accent-500/10 flex items-center justify-center">
            <span className="font-display text-xl text-accent-500">{name[0]}</span>
          </div>
          <div className="font-mono text-[10px] text-ink-500 uppercase tracking-widest">
            {industry}
          </div>
        </>
      ) : (
        <>
          <img
            src={logo}
            alt={name}
            className="h-10 w-auto max-w-[130px] object-contain dark:brightness-[1.1]"
            onError={() => setLogoFailed(true)}
          />
          <div className="font-mono text-[10px] text-ink-500 uppercase tracking-widest">
            {industry}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Clients() {
  const doubled = [...projectOrgs, ...projectOrgs];

  return (
    <section className="py-20 border-y border-ink-200 dark:border-ink-800 bg-ink-50/50 dark:bg-ink-950/50 overflow-hidden">
      <div className="container-page">

        {/* ── Employers ── */}
        <div className="text-center mb-10">
          <span className="section-label mx-auto justify-center">Experience</span>
          <h2 className="mt-6 font-display text-3xl md:text-4xl text-ink-900 dark:text-ink-50">
            Companies I&apos;ve{' '}
            <span className="italic text-gradient">worked for</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {employers.map((emp) => (
            <EmployerCard key={emp.name} {...emp} />
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-ink-200 dark:bg-ink-800" />
          <span className="font-mono text-[10px] text-ink-400 uppercase tracking-[0.2em] whitespace-nowrap">
            Projects &amp; contributions
          </span>
          <div className="flex-1 h-px bg-ink-200 dark:bg-ink-800" />
        </div>

        {/* ── Project orgs ── */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-ink-900 dark:text-ink-50">
            Organisations behind{' '}
            <span className="italic text-gradient">the work</span>
          </h2>
          <p className="mt-3 text-sm text-ink-500 max-w-xl mx-auto">
            Enterprise projects delivered through Lynx Analytics; remaining
            engagements sourced independently via Upwork.
          </p>
        </div>
      </div>

      {/* Marquee — intentionally full-bleed */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-48 bg-gradient-to-r from-ink-50 dark:from-ink-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-48 bg-gradient-to-l from-ink-50 dark:from-ink-950 to-transparent z-10 pointer-events-none" />
        <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((org, i) => (
            <ProjectCard
              key={`${org.name}-${i}`}
              name={org.name}
              industry={org.industry}
              logo={org.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
