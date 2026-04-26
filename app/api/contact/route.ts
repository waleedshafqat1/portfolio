import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { site } from '@/lib/data';

/**
 * Contact form submission handler.
 *
 * SETUP (after deployment):
 * 1. Create a free account at https://resend.com
 * 2. Verify your domain (or use their test domain initially)
 * 3. Generate an API key
 * 4. In Vercel dashboard → Settings → Environment Variables, add:
 *    - RESEND_API_KEY = your_key_here
 *    - CONTACT_TO_EMAIL = waleedshafqat1@gmail.com (where you want messages delivered)
 *    - CONTACT_FROM_EMAIL = noreply@yourdomain.com (verified sender)
 *
 * Until then, submissions will log to the server console but not send email.
 */

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // If Resend is configured, send the email
    if (resend) {
      const to = process.env.CONTACT_TO_EMAIL || site.contact.email;
      const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

      await resend.emails.send({
        from: `Portfolio Contact <${from}>`,
        to: [to],
        replyTo: email,
        subject: `New inquiry from ${name}${projectType ? ` — ${projectType}` : ''}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="color: #0f172a;">New portfolio inquiry</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748b;">Name:</td><td>${escapeHtml(name)}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Email:</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              ${projectType ? `<tr><td style="padding: 8px 0; color: #64748b;">Type:</td><td>${escapeHtml(projectType)}</td></tr>` : ''}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #f1f5f9; border-radius: 8px;">
              <div style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Message</div>
              <div style="white-space: pre-wrap;">${escapeHtml(message)}</div>
            </div>
          </div>
        `,
      });
    } else {
      // Dev mode: just log
      console.log('[Contact form] Resend not configured. Submission:', {
        name,
        email,
        projectType,
        message,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
