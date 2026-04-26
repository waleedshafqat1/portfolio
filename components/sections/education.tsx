'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, ExternalLink } from 'lucide-react';
import { education, certifications, publications } from '@/lib/data';

export function Education() {
  return (
    <section
      id="education"
      className="section-padding relative bg-ink-50/50 dark:bg-ink-950/50 border-y border-ink-200 dark:border-ink-800"
    >
      <div className="container-page">
        <div className="max-w-2xl mb-16">
          <span className="section-label">Credentials</span>
          <h2 className="mt-6 heading-display">
            Education, certs &amp;{' '}
            <span className="italic text-gradient">publications</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-5 w-5 text-accent-500" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-500">
                Education
              </h3>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="card-base p-6 hover:border-accent-500 transition-colors"
                >
                  <div className="font-display text-lg text-ink-900 dark:text-ink-50 leading-tight">
                    {edu.degree}
                  </div>
                  <div className="mt-2 text-ink-600 dark:text-ink-300 font-medium">
                    {edu.institution}
                  </div>
                  <div className="mt-1 text-xs text-ink-500">
                    {edu.location} · {edu.period}
                  </div>
                  {'highlight' in edu && edu.highlight && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent-500/10 text-accent-500 text-xs font-medium">
                      <Award className="h-3 w-3" />
                      {edu.highlight}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-5 w-5 text-accent-500" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-500">
                Certifications
              </h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="card-base p-6 hover:border-accent-500 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 h-12 w-12 rounded-lg bg-accent-500/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-accent-500" />
                    </div>
                    <div>
                      <div className="font-medium text-ink-900 dark:text-ink-100 leading-tight">
                        {cert.name}
                      </div>
                      <div className="mt-1 text-xs text-ink-500 font-mono">
                        {cert.issuer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-5 w-5 text-accent-500" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-500">
                Publications
              </h3>
            </div>
            <div className="space-y-4">
              {publications.map((pub) => (
                <div
                  key={pub.title}
                  className="card-base p-6 hover:border-accent-500 transition-colors"
                >
                  <div className="font-medium text-ink-900 dark:text-ink-100 leading-snug">
                    {pub.title}
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-ink-500 font-mono">
                    <span>{pub.venue}</span>
                    <span>·</span>
                    <span>{pub.year}</span>
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-accent-500 hover:text-accent-400"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
