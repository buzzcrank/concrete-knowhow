import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact the Concrete Knowhow team with questions, corrections, or feedback.',
  alternates: { canonical: 'https://concrete.mrknowitall.net/contact/' },
}

export default function ContactPage() {
  return (
    <article className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Have a question, spotted an error, or want to suggest a new calculator? Fill out the form
        and we&apos;ll get back to you within 2 business days.
      </p>
      <ContactForm />
    </article>
  )
}
