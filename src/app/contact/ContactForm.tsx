'use client'
import { useFormState, useFormStatus } from 'react-dom'
import { submitContact, type ContactState } from './action'

const inputClass =
  'w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60 transition-colors"
    >
      {pending ? 'Sending…' : 'Send message'}
    </button>
  )
}

export default function ContactForm() {
  const [state, formAction] = useFormState<ContactState, FormData>(submitContact, null)

  if (state?.success) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6">
        <p className="font-semibold text-green-800">Message sent!</p>
        <p className="mt-1 text-sm text-green-700">
          We&apos;ll get back to you within 2 business days.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
          Name <span className="text-red-500">*</span>
        </label>
        <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
      </div>
      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
          Subject
        </label>
        <input id="subject" name="subject" type="text" placeholder="What&apos;s this about?" className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Your message…"
          className={inputClass}
        />
      </div>
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
      <SubmitButton />
    </form>
  )
}
