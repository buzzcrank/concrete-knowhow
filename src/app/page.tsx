import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Construction Material Calculators',
  description:
    'Calculate exactly how much concrete, gravel, mulch, topsoil, sand, or sod you need. Free, instant results — no sign-up required.',
  alternates: { canonical: 'https://concrete.mrknowitall.net/' },
}

const tools = [
  {
    href: '/concrete/',
    emoji: '🏗️',
    title: 'Concrete Calculator',
    desc: 'Cubic yards + bag count for slabs, footings, and more.',
  },
  {
    href: '/gravel/',
    emoji: '⛏️',
    title: 'Gravel Calculator',
    desc: 'Cubic yards and tons for driveways, paths, and drainage.',
  },
  {
    href: '/mulch/',
    emoji: '🌿',
    title: 'Mulch Calculator',
    desc: 'Cubic yards plus 2 ft³ and 3 ft³ bag counts.',
  },
  {
    href: '/topsoil/',
    emoji: '🌱',
    title: 'Topsoil Calculator',
    desc: 'Cubic yards with settling allowance built in.',
  },
  {
    href: '/sand/',
    emoji: '🏖️',
    title: 'Sand Calculator',
    desc: 'Cubic yards and tons for leveling and fill.',
  },
  {
    href: '/sod/',
    emoji: '🌾',
    title: 'Sod Calculator',
    desc: 'Rolls and pallets for any lawn area.',
  },
]

const faqs = [
  {
    q: 'How many bags of concrete do I need for a 10×10 slab at 4 inches thick?',
    a: 'A 10×10 slab at 4 inches (0.333 ft) thick is 33.3 cubic feet, or about 1.23 cubic yards. You would need 74 bags of 60 lb concrete mix or 56 bags of 80 lb mix. At this volume, ready-mix delivery is worth getting quotes on.',
  },
  {
    q: 'How do I convert cubic feet to cubic yards?',
    a: 'Divide cubic feet by 27. There are 27 cubic feet in one cubic yard (3 ft × 3 ft × 3 ft = 27 ft³).',
  },
  {
    q: 'How much does a cubic yard of concrete weigh?',
    a: 'A cubic yard of concrete weighs approximately 3,900–4,050 pounds (about 2 tons) when wet.',
  },
  {
    q: 'When should I use ready-mix instead of bags?',
    a: 'Ready-mix concrete becomes more economical at volumes above 1 cubic yard (roughly 27 bags). For larger pours, always get ready-mix quotes.',
  },
  {
    q: 'Why should I add a waste buffer?',
    a: "Adding 5–10% extra accounts for spillage, uneven subgrades, and forms that aren't perfectly square. It's much cheaper to have a little left over than to run short mid-pour.",
  },
]

export default function HomePage() {
  return (
    <>
      <section className="py-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Construction Material Calculators
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Find out exactly how much concrete, gravel, mulch, topsoil, sand, or sod you need —
          instantly and for free.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group rounded-xl border border-gray-200 bg-white p-6 hover:border-brand-400 hover:shadow-md transition-all"
          >
            <div className="text-3xl mb-3">{tool.emoji}</div>
            <h2 className="font-bold text-gray-900 group-hover:text-brand-700 transition-colors">
              {tool.title}
            </h2>
            <p className="mt-1 text-sm text-gray-500">{tool.desc}</p>
          </Link>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <dl className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-lg border border-gray-100 bg-gray-50 px-5 py-4">
              <dt className="font-semibold text-gray-800">{faq.q}</dt>
              <dd className="mt-2 text-sm text-gray-600">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mb-16 rounded-xl bg-navy-900 px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-1">
          Mr. Know-It-All Network
        </p>
        <h2 className="text-2xl font-bold text-white mb-2">More from Mr. Know-It-All</h2>
        <p className="text-gray-400 mb-6">Your hand of calculators &amp; reference info.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="https://tenant.mrknowitall.net"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-navy-700 bg-navy-800 p-5 hover:border-brand-400 hover:bg-navy-700 transition-all"
          >
            <div className="text-2xl mb-2">🏠</div>
            <div className="font-bold text-white group-hover:text-brand-400 transition-colors">
              Tenant Knowhow
            </div>
            <p className="mt-1 text-sm text-gray-400">
              Know your rights as a renter — state-by-state tenant law, plain English.
            </p>
            <span className="mt-3 inline-block text-xs text-brand-400">tenant.mrknowitall.net ↗</span>
          </a>
          <a
            href="https://mrknowitall.net"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-navy-700 bg-navy-800 p-5 hover:border-brand-400 hover:bg-navy-700 transition-all"
          >
            <div className="text-2xl mb-2">🤙</div>
            <div className="font-bold text-white group-hover:text-brand-400 transition-colors">
              Mr. Know-It-All
            </div>
            <p className="mt-1 text-sm text-gray-400">
              The hub — all our calculators and reference tools in one place.
            </p>
            <span className="mt-3 inline-block text-xs text-brand-400">mrknowitall.net ↗</span>
          </a>
        </div>
      </section>
    </>
  )
}
