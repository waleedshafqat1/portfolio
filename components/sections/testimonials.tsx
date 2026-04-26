'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '@/lib/data';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = testimonials[index];

  return (
    <section
      className="section-padding relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-page">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-label mx-auto justify-center">
            Client Voices
          </span>
          <h2 className="mt-6 heading-display">
            What clients{' '}
            <span className="italic text-gradient">actually say</span>
          </h2>

          <div className="mt-16 relative">
            <Quote className="h-16 w-16 text-accent-500/20 mx-auto mb-8" />

            <div className="min-h-[360px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent-500 text-accent-500"
                      />
                    ))}
                  </div>

                  <blockquote className="font-display text-2xl md:text-3xl leading-relaxed text-ink-900 dark:text-ink-50 italic">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  <div className="mt-8 flex flex-col items-center gap-1">
                    <div className="font-medium text-ink-900 dark:text-ink-100">
                      {current.author}
                    </div>
                    <div className="text-sm text-ink-500">
                      {current.role} · {current.company}
                    </div>
                    <div className="mt-2 px-2.5 py-1 text-xs font-mono rounded-md bg-accent-500/10 text-accent-500">
                      via {current.source}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-12 flex items-center justify-center gap-6">
              <button
                onClick={() =>
                  setIndex((i) =>
                    i === 0 ? testimonials.length - 1 : i - 1
                  )
                }
                aria-label="Previous testimonial"
                className="h-10 w-10 rounded-full border border-ink-200 dark:border-ink-800 flex items-center justify-center hover:border-accent-500 hover:text-accent-500 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === index
                        ? 'w-8 bg-accent-500'
                        : 'w-2 bg-ink-300 dark:bg-ink-700 hover:bg-accent-500/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setIndex((i) => (i + 1) % testimonials.length)
                }
                aria-label="Next testimonial"
                className="h-10 w-10 rounded-full border border-ink-200 dark:border-ink-800 flex items-center justify-center hover:border-accent-500 hover:text-accent-500 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
