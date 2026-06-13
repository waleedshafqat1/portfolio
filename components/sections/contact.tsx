'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { site } from '@/lib/data';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', email: '', projectType: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-5">
            <span className="section-label">Contact</span>
            <h2 className="mt-6 heading-display">
              Let&apos;s build{' '}
              <span className="italic text-gradient">something</span>
            </h2>
            <p className="mt-6 text-ink-600 dark:text-ink-400 leading-relaxed">
              Whether you need a BI dashboard, a forecasting model, an AI chatbot
              or a website — I typically respond within 24 hours.
            </p>

            {/* Contact items */}
            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-ink-100 dark:hover:bg-ink-900 transition-colors group"
              >
                <div className="h-10 w-10 rounded-lg bg-accent-500/10 flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                  <Mail className="h-4 w-4 text-accent-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-mono text-ink-500 uppercase tracking-widest">
                    Email
                  </div>
                  <div className="text-ink-900 dark:text-ink-100 break-all">
                    {site.contact.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${site.contact.phone.replace(/[^+\d]/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-ink-100 dark:hover:bg-ink-900 transition-colors group"
              >
                <div className="h-10 w-10 rounded-lg bg-accent-500/10 flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                  <Phone className="h-4 w-4 text-accent-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-mono text-ink-500 uppercase tracking-widest">
                    Phone
                  </div>
                  <div className="text-ink-900 dark:text-ink-100">
                    {site.contact.phone}
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/61451466432?text=Hi%20Waleed,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20ask%20about..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-ink-100 dark:hover:bg-ink-900 transition-colors group"
              >
                <div className="h-10 w-10 rounded-lg bg-accent-500/10 flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                  <MessageCircle className="h-4 w-4 text-accent-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-mono text-ink-500 uppercase tracking-widest">
                    WhatsApp
                  </div>
                  <div className="text-ink-900 dark:text-ink-100">
                    Message me
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4">
                <div className="h-10 w-10 rounded-lg bg-accent-500/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-accent-500" />
                </div>
                <div>
                  <div className="text-xs font-mono text-ink-500 uppercase tracking-widest">
                    Based In
                  </div>
                  <div className="text-ink-900 dark:text-ink-100">
                    {site.contact.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-10 pt-8 border-t border-ink-200 dark:border-ink-800">
              <div className="text-xs font-mono text-ink-500 uppercase tracking-widest mb-4">
                Find me elsewhere
              </div>
              <div className="flex gap-3">
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-ink-200 dark:border-ink-800 hover:border-accent-500 hover:text-accent-500 transition-colors text-sm"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={site.social.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-ink-200 dark:border-ink-800 hover:border-accent-500 hover:text-accent-500 transition-colors text-sm"
                >
                  <Briefcase className="h-4 w-4" />
                  Upwork
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            {/* Trust bar */}
            <div className="mb-8 p-4 rounded-lg bg-accent-500/5 border border-accent-500/20 flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-accent-500 shrink-0" />
              <p className="text-xs font-medium text-ink-700 dark:text-ink-300">
                Top Rated on Upwork · 100% Job Success · 7+ years · Enterprise clients
              </p>
            </div>
            <div className="card-base p-8 md:p-10">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-ink-50 dark:bg-ink-950 border border-ink-200 dark:border-ink-800 rounded-lg focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-all text-ink-900 dark:text-ink-100 placeholder:text-ink-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 bg-ink-50 dark:bg-ink-950 border border-ink-200 dark:border-ink-800 rounded-lg focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-all text-ink-900 dark:text-ink-100 placeholder:text-ink-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">
                    Project Type
                  </label>
                  <select
                    value={form.projectType}
                    onChange={(e) =>
                      setForm({ ...form, projectType: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-ink-50 dark:bg-ink-950 border border-ink-200 dark:border-ink-800 rounded-lg focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-all text-ink-900 dark:text-ink-100"
                  >
                    <option value="">Select a project type</option>
                    <option value="dashboards">BI Dashboards & Reporting</option>
                    <option value="forecasting">Forecasting / Predictive Modeling</option>
                    <option value="ai-chatbot">AI Chatbot / Assistant</option>
                    <option value="web-dev">Web Development</option>
                    <option value="credit-risk">Credit / Risk Scoring</option>
                    <option value="migration">Analytics Migration</option>
                    <option value="marketing">Marketing Analytics</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-ink-500 mb-2">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={6}
                    placeholder="Tell me about your project, timeline, and what success looks like..."
                    className="w-full px-4 py-3 bg-ink-50 dark:bg-ink-950 border border-ink-200 dark:border-ink-800 rounded-lg focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-all text-ink-900 dark:text-ink-100 placeholder:text-ink-400 resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-start gap-3 p-5 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 text-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">Thank you for reaching out!</div>
                      <div className="leading-relaxed opacity-90">Your message has been received. I will review it and get back to you as soon as possible — typically within 24 hours.</div>
                    </div>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    Please fill in all required fields and try again.
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
