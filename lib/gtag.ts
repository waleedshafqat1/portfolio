// GA4 event tracking utility

export const pageview = (url: string) => {
  if (typeof window === 'undefined') return;
  const gtag = (window as any).gtag;
  if (gtag) {
    gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};

export const event = (
  action: string,
  params?: {
    [key: string]: string | number | boolean;
  }
) => {
  if (typeof window === 'undefined') return;
  const gtag = (window as any).gtag;
  if (gtag) {
    gtag('event', action, params);
  }
};

// Conversion events
export const trackBookCallClick = () => {
  event('book_call_click', {
    event_category: 'conversion',
    event_label: 'Primary CTA',
  });
};

export const trackAuditCtaClick = () => {
  event('audit_cta_click', {
    event_category: 'conversion',
    event_label: 'Discovery Audit',
  });
};

export const trackContactSubmit = () => {
  event('contact_submit', {
    event_category: 'conversion',
    event_label: 'Contact Form',
  });
};

export const trackWhatsAppClick = () => {
  event('whatsapp_click', {
    event_category: 'conversion',
    event_label: 'WhatsApp',
  });
};

export const trackResumeDownload = () => {
  event('file_download', {
    file_name: 'resume.pdf',
    event_category: 'engagement',
  });
};
