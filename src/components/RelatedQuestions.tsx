import Link from 'next/link'

interface RelatedLink {
  href: string
  label: string
}

export default function RelatedQuestions({ links }: { links: RelatedLink[] }) {
  return (
    <section className="my-10">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Related Calculators</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-brand-700 hover:border-brand-400 hover:bg-brand-50 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  )
}
