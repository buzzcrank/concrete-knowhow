import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact the Concrete Knowhow team with questions, corrections, or feedback.',
  alternates: { canonical: 'https://concrete.mrknowitall.net/contact/' },
}

export default function ContactPage() {
  return (
    <article className="prose prose-gray max-w-3xl mx-auto py-10">
      <h1>Contact Us</h1>
      <p>
        Have a question, spotted an error, or want to suggest a new calculator? We&apos;d love to
        hear from you.
      </p>
      <p>
        Email us at{' '}
        <a href="mailto:hello@mrknowitall.net">hello@mrknowitall.net</a>
      </p>
      <p>We aim to respond within 2 business days.</p>
    </article>
  )
}
