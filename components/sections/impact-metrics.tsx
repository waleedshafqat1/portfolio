'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { impactMetrics, getYearsOfExperience } from '@/lib/data';

function Counter({
  target,
  suffix = '',
  prefix = '',
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(target);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView || hasAnimated) return;
    setHasAnimated(true);
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target, hasAnimated]);

  return (
    <span ref={ref} data-value={target}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function ImpactMetrics() {
  return (
    <section className="relative py-16 md:py-20 border-y border-ink-200 dark:border-ink-800 bg-ink-50/50 dark:bg-ink-950/50">
      <div className="container-page">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-4">
          {impactMetrics.map((metric, i) => {
            const target =
              metric.dynamic === 'experience'
                ? getYearsOfExperience()
                : (metric.value ?? 0);
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center md:text-left md:border-l md:border-ink-200 md:dark:border-ink-800 md:pl-6 first:border-l-0"
              >
                <div className="font-display text-4xl sm:text-5xl md:text-6xl text-ink-900 dark:text-ink-50">
                  {metric.static ? (
                    <span>{metric.static}</span>
                  ) : (
                    <Counter target={target} suffix={metric.suffix} />
                  )}
                </div>
                <div className="mt-2 text-sm font-mono uppercase tracking-wider text-ink-500">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
