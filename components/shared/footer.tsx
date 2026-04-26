import Link from 'next/link';
import { Linkedin, Mail, Briefcase, Github } from 'lucide-react';
import { site, navLinks } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-ink-200 dark:border-ink-800 bg-ink-50/50 dark:bg-ink-950">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-display text-3xl text-ink-900 dark:text-ink-50"
            >
              Waleed<span className="text-accent-500">.</span>
            </Link>
            <p className="mt-4 text-ink-600 dark:text-ink-400 max-w-md leading-relaxed">
              Senior Data Scientist & Analytics Consultant turning complex data
              into strategic clarity for enterprise clients and ambitious teams.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-full border border-ink-200 dark:border-ink-800 flex items-center justify-center hover:border-accent-500 hover:text-accent-500 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={site.social.upwork}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork"
                className="h-10 w-10 rounded-full border border-ink-200 dark:border-ink-800 flex items-center justify-center hover:border-accent-500 hover:text-accent-500 transition-colors"
              >
                <Briefcase className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                aria-label="Email"
                className="h-10 w-10 rounded-full border border-ink-200 dark:border-ink-800 flex items-center justify-center hover:border-accent-500 hover:text-accent-500 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              {site.social.github && (
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="h-10 w-10 rounded-full border border-ink-200 dark:border-ink-800 flex items-center justify-center hover:border-accent-500 hover:text-accent-500 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink-500 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-ink-600 dark:text-ink-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink-500 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-ink-600 dark:text-ink-400">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-accent-500 transition-colors break-all"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>{site.contact.phone}</li>
              <li>{site.contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ink-200 dark:border-ink-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ink-500">
          <p>
            © {new Date().getFullYear()} {site.name}. Crafted with precision.
          </p>
          <p className="font-mono text-xs">
            Built with Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
