'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, TrendingUp, Award } from 'lucide-react';
import { experience, education, certifications } from '@/lib/data';
import Link from 'next/link';

const storyBeats = [
  {
    icon: GraduationCap,
    year: '2012—2016',
    title: 'Foundation',
    text: 'BSc Computer Science at FAST — Pakistan\'s top CS school.',
  },
  {
    icon: MapPin,
    year: '2016—2017',
    title: 'Engineering',
    text: 'Software Engineer at i2c. Built the SQL, Linux and debugging instincts that still ground my work today.',
  },
  {
    icon: TrendingUp,
    year: '2017—2019',
    title: 'Pivot',
    text: 'MSc Data Analytics at RMIT Melbourne. Dean\'s List. Interned at Coles doing ML segmentation.',
  },
  {
    icon: Award,
    year: '2019—2021',
    title: 'Independence',
    text: 'Freelanced on Upwork. Built credit models, analytics dashboards and earned Top Rated status with 100% client satisfaction.',
  },
  {
    icon: TrendingUp,
    year: '2021—Present',
    title: 'Enterprise',
    text: 'Joined Lynx Analytics, Singapore. Promoted to Senior in 2024. Leading enterprise analytics for retail, pharmaceutical, and automotive clients.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-page">
        {/* Intro */}
        <div className="max-w-3xl mb-24">
          <h1 className="heading-display mb-6">About</h1>
          <div className="space-y-4 text-ink-600 dark:text-ink-400 leading-relaxed">
            <p>
              I started as a computer science student with an unusual conviction: that data was going to matter more than most people realized. A decade later, I'm building the models, pipelines, dashboards, and analytics systems that drive enterprise decisions across three continents.
            </p>
            <p>
              My work spans the full data science and analytics spectrum — from machine learning models and forecasting systems in production, to BI dashboards executives actually open, to data pipelines and migrations that modernise how organisations manage their data. I've delivered across retail, pharmaceutical, automotive finance, and microfinance, with clients including Levis, AstraZeneca, and Toyota.
            </p>
            <p className="text-ink-900 dark:text-ink-100 font-medium">
              I don't do work for its own sake. Every project I take on answers one question: <em>what decision, outcome, or capability does this unlock?</em>
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h2 className="font-display text-2xl text-ink-900 dark:text-ink-50 mb-12">Journey</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500 via-accent-500/50 to-transparent" />

            <div className="space-y-8">
              {storyBeats.map((beat, i) => {
                const Icon = beat.icon;
                return (
                  <motion.div
                    key={beat.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Node */}
                    <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white dark:bg-ink-900 border-2 border-accent-500 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-accent-500" />
                    </div>

                    <div className="card-base p-6 hover:border-accent-500 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs uppercase tracking-widest text-accent-500">
                          {beat.year}
                        </span>
                        <span className="font-display text-xl text-ink-900 dark:text-ink-50">
                          {beat.title}
                        </span>
                      </div>
                      <p className="text-ink-600 dark:text-ink-400 text-sm leading-relaxed">
                        {beat.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-24">
          <h2 className="font-display text-2xl text-ink-900 dark:text-ink-50 mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((role, i) => (
              <motion.div
                key={role.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-base p-6"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-display text-lg text-ink-900 dark:text-ink-50">
                      {role.role}
                    </h3>
                    <p className="text-sm text-accent-500 font-medium">{role.company} · {role.location}</p>
                  </div>
                  <span className="text-xs font-mono text-ink-500 whitespace-nowrap">{role.period}</span>
                </div>
                {'highlight' in role && role.highlight && (
                  <p className="text-xs font-mono text-accent-500 mb-3">{role.highlight}</p>
                )}
                <ul className="space-y-2">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-ink-600 dark:text-ink-400 flex gap-3">
                      <span className="text-accent-500 mt-1">·</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certs */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="font-display text-2xl text-ink-900 dark:text-ink-50 mb-6">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card-base p-4"
                >
                  <h3 className="font-medium text-ink-900 dark:text-ink-50">{edu.degree}</h3>
                  <p className="text-sm text-accent-500">{edu.institution}</p>
                  <p className="text-xs text-ink-500 mt-1">{edu.location} · {edu.period}</p>
                  {'highlight' in edu && edu.highlight && (
                    <p className="text-xs text-accent-600 dark:text-accent-400 mt-2 font-medium">{edu.highlight}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink-900 dark:text-ink-50 mb-6">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card-base p-4"
                >
                  <h3 className="font-medium text-ink-900 dark:text-ink-50">{cert.name}</h3>
                  <p className="text-sm text-accent-500">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-ink-600 dark:text-ink-400 mb-6">Ready to work together?</p>
          <div className="flex gap-4 justify-center">
            <Link href="/book" className="btn-primary">
              Book a Call
            </Link>
            <Link href="/discovery-audit" className="btn-secondary">
              Free Audit
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
