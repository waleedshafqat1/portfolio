'use client';

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, TrendingUp, Award } from 'lucide-react';

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
    text: 'Joined Lynx Analytics, Singapore. Promoted to Senior in 2024. Leading work for Levis, AstraZeneca.',
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Intro */}
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-label"
            >
              About
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 heading-display"
            >
              A decade from{' '}
              <span className="italic text-gradient">Lahore</span> to the
              C-suite dashboard.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 space-y-4 text-ink-600 dark:text-ink-400 leading-relaxed"
            >
              <p>
                I started as a computer science student with an unusual
                conviction: that data was going to matter more than most
                people realized. A decade later, I&apos;m building the models,
                dashboards, and analytics systems that run enterprise
                decisions at enterprise clients across three continents.
              </p>
              <p>
                My sweet spot is translating data into clear business
                decisions — dashboards executives actually open, analytics
                that move revenue and ML models that get deployed in
                production. I&apos;ve delivered across retail, pharmaceutical,
                automotive finance and microfinance, with clients spanning
                three continents.
              </p>
              <p className="text-ink-900 dark:text-ink-100 font-medium">
                I don&apos;t do dashboards-for-dashboards&apos;-sake. Every
                project I take on answers: <em>what decision does this unlock?</em>
              </p>
            </motion.div>
          </div>

          {/* Right: Timeline */}
          <div className="lg:col-span-7">
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
                      viewport={{ once: true, margin: '-50px' }}
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
        </div>
      </div>
    </section>
  );
}
