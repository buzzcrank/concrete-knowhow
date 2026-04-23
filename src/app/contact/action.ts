'use server'
import { Resend } from 'resend'

export type ContactState = { success?: boolean; error?: string } | null

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get('name') as string | null)?.trim()
  const email = (formData.get('email') as string | null)?.trim()
  const subject = (formData.get('subject') as string | null)?.trim() ?? ''
  const message = (formData.get('message') as string | null)?.trim()

  if (!name || !email || !message) {
    return { error: 'Please fill in all required fields.' }
  }

  const to = process.env.CONTACT_EMAIL
  const from = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'

  if (!to) return { error: 'Contact form is not configured.' }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: `Contact Form <${from}>`,
      to,
      replyTo: email,
      subject: subject ? `[Contact] ${subject}` : `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })
    return { success: true }
  } catch (err) {
    console.error('[contact form]', err)
    return { error: 'Failed to send. Please try again later.' }
  }
}
