import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">Page not found.</p>
      <Link
        href="/"
        className="inline-block rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
