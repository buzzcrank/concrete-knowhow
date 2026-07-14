import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Free Construction Material Calculators: Concrete, Gravel, Mulch and More',
  description:
    'Calculate exactly how much concrete, gravel, mulch, topsoil, sand, or sod you need. Free, instant results with cubic yard and ton conversions. No sign-up required.',
  alternates: { canonical: 'https://concrete.mrknowitall.net/' },
  openGraph: {
    type: 'website',
    url: 'https://concrete.mrknowitall.net/',
    title: 'Free Construction Material Calculators: Concrete, Gravel, Mulch and More',
    description: 'Calculate exactly how much concrete, gravel, mulch, topsoil, sand, or sod you need. Instant cubic yard and ton results, free.',
  },
}

const tools = [
  {
    href: '/concrete/',
    title: 'Concrete Calculator',
    desc: 'Cubic yards + bag count for slabs, footings, and more.',
  },
  {
    href: '/gravel/',
    title: 'Gravel Calculator',
    desc: 'Cubic yards and tons for driveways, paths, and drainage.',
  },
  {
    href: '/mulch/',
    title: 'Mulch Calculator',
    desc: 'Cubic yards plus 2 ft³ and 3 ft³ bag counts.',
  },
  {
    href: '/topsoil/',
    title: 'Topsoil Calculator',
    desc: 'Cubic yards with settling allowance built in.',
  },
  {
    href: '/sand/',
    title: 'Sand Calculator',
    desc: 'Cubic yards and tons for leveling and fill.',
  },
  {
    href: '/sod/',
    title: 'Sod Calculator',
    desc: 'Rolls and pallets for any lawn area.',
  },
]

const faqs = [
  {
    question: 'How many bags of concrete do I need for a 10×10 slab at 4 inches thick?',
    answer: 'A 10×10 slab at 4 inches (0.333 ft) thick is 33.3 cubic feet, or about 1.23 cubic yards. You would need 75 bags of 60 lb concrete mix or 56 bags of 80 lb mix. At this volume, ready-mix delivery is worth getting quotes on.',
  },
  {
    question: 'How do I convert cubic feet to cubic yards?',
    answer: 'Divide cubic feet by 27. There are 27 cubic feet in one cubic yard (3 ft × 3 ft × 3 ft = 27 ft³).',
  },
  {
    question: 'How much does a cubic yard of concrete weigh?',
    answer: 'A cubic yard of concrete weighs approximately 3,900–4,050 pounds (about 2 tons) when wet.',
  },
  {
    question: 'When should I use ready-mix instead of bags?',
    answer: 'Ready-mix concrete becomes more economical at volumes above 1 cubic yard (roughly 27 bags). For larger pours, always get ready-mix quotes.',
  },
  {
    question: 'Why should I add a waste buffer?',
    answer: "Adding 5–10% extra accounts for spillage, uneven subgrades, and forms that aren't perfectly square. It's much cheaper to have a little left over than to run short mid-pour.",
  },
]

const SITE = 'https://concrete.mrknowitall.net'

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: 'Home', url: `${SITE}/` }])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <section className="py-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Construction Material Calculators
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Find out exactly how much concrete, gravel, mulch, topsoil, sand, or sod you need,
          instantly and for free.
        </p>
      </section>

      <section className="mb-10 prose prose-gray max-w-none">
        <p>
          Ordering the wrong amount of concrete or gravel is one of the most common (and
          expensive) mistakes on DIY projects. Too little means a second delivery and a
          cold joint; too much means wasted money and a disposal problem. These calculators
          give you the exact cubic yards, cubic feet, and, where relevant, tons or bag
          counts for your project dimensions, with a built-in waste buffer option so you
          order right the first time.
        </p>
        <p>
          Every calculator on this site works the same way: enter your dimensions, pick
          your unit of measure, and get instant results. No account required, no
          upsells, just the numbers you need before you call the supply yard or head to
          the hardware store.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group rounded-xl border border-gray-200 bg-white p-6 hover:border-brand-400 hover:shadow-md transition-all"
          >
            <h2 className="font-bold text-gray-900 group-hover:text-brand-700 transition-colors">
              {tool.title}
            </h2>
            <p className="mt-1 text-sm text-gray-500">{tool.desc}</p>
          </Link>
        ))}
      </section>

      <section className="mb-16 prose prose-gray max-w-none">
        <h2>How These Calculators Work</h2>
        <p>
          All six tools are built on the same volume formula used by every supply yard and
          ready-mix dispatcher: length times width times depth gives cubic feet, and dividing
          by 27 converts to cubic yards, the unit bulk materials are sold in. Depth in inches
          is divided by 12 first. From there, each calculator applies the conversion specific
          to its material: bag yields for concrete and mulch, bulk density for gravel, sand,
          and topsoil (to quote in tons), and roll or pallet coverage for sod.
        </p>
        <p>
          The conversion factors are the standard published figures: concrete bag yields from
          manufacturer data sheets, aggregate densities from common supplier values, and a
          settling allowance for topsoil. Each calculator page documents the exact numbers it
          uses, so you can check the math or adjust for what your local supplier quotes.
        </p>
        <h2>Measure First, Then Order</h2>
        <p>
          The most common estimating error is not the arithmetic, it is the measurement. For
          rectangular areas, measure both dimensions rather than assuming them, since a
          &quot;10 by 12&quot; patio is often 9.5 by 12.5 in reality. For irregular areas,
          break the space into rectangles, triangles, and circles, calculate each, and add
          them up. For depth, measure at several points and use the average. Then add a waste
          buffer: 5 to 10 percent for most materials, and 10 percent or more for anything
          that compacts, like gravel and topsoil.
        </p>
        <h2>Bulk Delivery or Bags?</h2>
        <p>
          As a rule of thumb, bagged material wins below about half a cubic yard, bulk wins
          above 2 to 3 cubic yards, and in between it depends on delivery fees and how much
          shoveling you want to do. One cubic yard equals 27 cubic feet: that is 45 bags of 80
          lb concrete mix, 13.5 bags of 2 cubic foot mulch, or roughly 36 bags of 40 lb
          topsoil. Seeing the bag count next to the cubic yardage is usually what settles the
          decision, and every calculator here shows both.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <dl className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-lg border border-gray-100 bg-gray-50 px-5 py-4">
              <dt className="font-semibold text-gray-800">{faq.question}</dt>
              <dd className="mt-2 text-sm text-gray-600">{faq.answer}</dd>
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
            <div className="font-bold text-white group-hover:text-brand-400 transition-colors">
              Tenant Knowhow
            </div>
            <p className="mt-1 text-sm text-gray-400">
              Know your rights as a renter: state-by-state tenant law, plain English.
            </p>
            <span className="mt-3 inline-block text-xs text-brand-400">tenant.mrknowitall.net</span>
          </a>
          <a
            href="https://mrknowitall.net"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-navy-700 bg-navy-800 p-5 hover:border-brand-400 hover:bg-navy-700 transition-all"
          >
            <div className="font-bold text-white group-hover:text-brand-400 transition-colors">
              Mr. Know-It-All
            </div>
            <p className="mt-1 text-sm text-gray-400">
              The hub for all our calculators and reference tools in one place.
            </p>
            <span className="mt-3 inline-block text-xs text-brand-400">mrknowitall.net</span>
          </a>
        </div>
      </section>
    </>
  )
}
