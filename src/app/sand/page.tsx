import type { Metadata } from 'next'
import SandCalculator from './SandCalculator'
import QuickAnswer from '@/components/QuickAnswer'
import AdSlot from '@/components/AdSlot'
import PageMeta from '@/components/PageMeta'
import RelatedQuestions from '@/components/RelatedQuestions'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema, webApplicationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Sand Calculator: Cubic Yards and Tons',
  description:
    'Calculate how much sand you need for any project. Instant cubic yard and ton results for leveling, fill, play areas, and more. Free.',
  alternates: { canonical: 'https://concrete.mrknowitall.net/sand/' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-04-01',
    modifiedTime: '2026-07-14',
  },
}

const faqs = [
  {
    question: 'How much sand do I need to level a 10×10 ft area at 2 inches deep?',
    answer:
      'A 10×10 ft area at 2 inches deep requires 16.7 cubic feet, about 0.62 cubic yards or roughly 0.84 tons of dry sand. For a patio base, add 5–10% for waste and compaction.',
  },
  {
    question: 'How deep should the sand base be under pavers?',
    answer:
      'A paver sand base should be 1 inch of coarse bedding sand over a 4-inch compacted gravel sub-base. The sand layer levels and cushions the pavers, so keep it at exactly 1 inch for best results.',
  },
  {
    question: 'What is the difference between play sand and fill sand?',
    answer:
      'Play sand is washed, fine-grained, and rounded, making it safe for sandboxes and children\'s areas. Fill sand is coarser, may contain silt, and is used for sub-base and drainage projects. Never use fill sand in a sandbox.',
  },
  {
    question: 'How many tons of sand are in a cubic yard?',
    answer:
      'It depends on type and moisture. Dry sand is about 1.35 tons per cubic yard; wet or packed sand can reach 1.68 tons per cubic yard. Use the sand type selector in the calculator for the most accurate result.',
  },
  {
    question: 'How much does a cubic yard of sand cost?',
    answer:
      'Bulk sand typically costs $15–$50 per cubic yard depending on type and location. Play sand in bags (50 lb) runs $5–$8 per bag at hardware stores, which is significantly more expensive per cubic yard than bulk.',
  },
  {
    question: 'Can I use sand to level my lawn?',
    answer:
      'Pure sand is not recommended for leveling lawns because it can cause drainage problems and harm grass roots. Use a topdressing mix of sand and compost (50/50) for lawn leveling instead.',
  },
]

const relatedLinks = [
  { href: '/gravel/', label: 'Gravel Calculator' },
  { href: '/topsoil/', label: 'Topsoil Calculator' },
  { href: '/concrete/', label: 'Concrete Calculator' },
  { href: '/mulch/', label: 'Mulch Calculator' },
  { href: '/sod/', label: 'Sod Calculator' },
]

const SITE = 'https://concrete.mrknowitall.net'

const referenceRows = [
  { area: '10×10 ft', depth: '1"', yd3: '0.31', tons: '0.42' },
  { area: '10×10 ft', depth: '2"', yd3: '0.62', tons: '0.84' },
  { area: '10×20 ft', depth: '1"', yd3: '0.62', tons: '0.84' },
  { area: '10×20 ft', depth: '2"', yd3: '1.23', tons: '1.66' },
  { area: '20×20 ft', depth: '2"', yd3: '2.47', tons: '3.33' },
  { area: '20×40 ft', depth: '2"', yd3: '4.94', tons: '6.67' },
  { area: '20×40 ft', depth: '4"', yd3: '9.88', tons: '13.33' },
]

export default function SandPage() {
  return (
    <>
      <JsonLd
        data={webApplicationSchema({
          name: 'Sand Calculator',
          description: 'Calculate cubic yards and tons of sand for leveling, fill, and paver bases.',
          url: `${SITE}/sand/`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `${SITE}/` },
          { name: 'Sand Calculator', url: `${SITE}/sand/` },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Sand Calculator
      </h1>
      <PageMeta lastUpdated="July 2026" readingTime="7 min" />

      <QuickAnswer>
        Select your sand type, enter the area dimensions and depth, and get instant cubic
        feet, cubic yards, and tons, with density-adjusted weight for your specific sand.
      </QuickAnswer>

      <SandCalculator />

      <AdSlot id="sand-ad-1" />

      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Common Coverage Areas: Quick Reference
        </h2>
        <p className="text-sm text-gray-500 mb-3">Tons calculated using dry sand (1.35 t/yd³). No waste buffer.</p>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['Area', 'Depth', 'Cubic Yards', 'Tons (Dry Sand)'].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold text-gray-600">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {referenceRows.map((row) => (
                <tr key={`${row.area}-${row.depth}`} className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{row.area}</td>
                  <td className="px-4 py-3 text-gray-600">{row.depth}</td>
                  <td className="px-4 py-3 font-medium text-brand-700">{row.yd3}</td>
                  <td className="px-4 py-3 text-gray-600">{row.tons}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sand types */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Sand Types and What Each One Is For
        </h2>
        <p className="text-sm text-gray-600 mb-3">
          Sand products are graded by particle size and cleanliness, and they are not
          interchangeable. Using the wrong sand under pavers or in a sandbox causes real
          problems, so match the product to the job before ordering.
        </p>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['Type', 'Grain', 'Use It For', 'Notes'].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold text-gray-600">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Concrete sand (coarse)</td><td className="px-4 py-3 text-gray-600">Coarse, angular</td><td className="px-4 py-3 text-gray-600">Paver bedding, concrete mixing, drainage</td><td className="px-4 py-3 text-gray-600">The correct choice under pavers</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Masonry sand</td><td className="px-4 py-3 text-gray-600">Fine, screened</td><td className="px-4 py-3 text-gray-600">Mortar, stucco, joint filling</td><td className="px-4 py-3 text-gray-600">Cleaner and finer than concrete sand</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Play sand</td><td className="px-4 py-3 text-gray-600">Very fine, rounded, washed</td><td className="px-4 py-3 text-gray-600">Sandboxes, play areas</td><td className="px-4 py-3 text-gray-600">Too fine for structural bedding</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Polymeric sand</td><td className="px-4 py-3 text-gray-600">Fine, with binder</td><td className="px-4 py-3 text-gray-600">Filling paver joints only</td><td className="px-4 py-3 text-gray-600">Hardens when misted; never use as bedding</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Fill sand</td><td className="px-4 py-3 text-gray-600">Mixed, may contain silt</td><td className="px-4 py-3 text-gray-600">Sub-base fill, trench backfill</td><td className="px-4 py-3 text-gray-600">Cheapest option; not for finish work</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Formula and worked example */}
      <section className="my-10 prose prose-gray max-w-none">
        <h2>How the Sand Math Works</h2>
        <p>
          Length times width times depth in feet gives cubic feet; divide by 27 for cubic
          yards. To estimate weight, multiply cubic yards by the density of your sand: about
          1.35 tons per cubic yard dry, up to roughly 1.68 tons per cubic yard wet or packed.
          Moisture matters more for sand than for most materials, which is why supplier quotes
          by the ton can vary from your volume estimate.
        </p>
        <p>
          <strong>Worked example.</strong> A 12 ft by 14 ft paver patio needs a 1 inch bedding
          layer: 12 times 14 times 0.083 equals 14 cubic feet, or 0.52 cubic yards, roughly
          0.7 tons of concrete sand. Suppliers often have half-yard minimums, so this order is
          exactly one half-yard scoop plus a couple of bags for screeding low spots.
        </p>
      </section>

      <section className="my-10 prose prose-gray max-w-none">
        <h2>How to Lay a Sand Base for Pavers, Step by Step</h2>
        <ol>
          <li>
            <strong>Excavate the area.</strong> Dig down 5–7 inches: 4 inches for your gravel
            sub-base plus 1 inch of sand plus the thickness of your pavers. Remove all
            organic material.
          </li>
          <li>
            <strong>Install edge restraints.</strong> Plastic or metal edging keeps your
            paver field from spreading. Stake it securely before adding base material.
          </li>
          <li>
            <strong>Add and compact the gravel sub-base.</strong> Spread 4 inches of crushed
            stone (#57 or #411). Compact with a plate compactor in overlapping passes until
            the surface is firm and doesn&apos;t shift underfoot.
          </li>
          <li>
            <strong>Spread the sand layer.</strong> Add 1 inch of coarse bedding sand (not
            fine play sand). Use screed pipes and a long straight board to establish a
            perfectly flat, 1-inch-thick layer.
          </li>
          <li>
            <strong>Do not compact the sand.</strong> The sand layer should remain loose so
            pavers can be set and adjusted. Compacting it now defeats the purpose.
          </li>
          <li>
            <strong>Lay pavers.</strong> Start from a straight edge or corner. Set each paver
            by pressing it straight down. Do not drag it, which disturbs the sand bed.
          </li>
          <li>
            <strong>Check for level frequently.</strong> Use a rubber mallet and level to
            adjust individual pavers. It&apos;s much easier to correct now than after the
            whole field is set.
          </li>
          <li>
            <strong>Compact and fill joints.</strong> Run the plate compactor over the
            finished surface. Sweep polymeric sand into joints, compact again, and mist
            lightly to activate the binder.
          </li>
        </ol>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <dl className="space-y-5">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-lg border border-gray-100 bg-gray-50 px-5 py-4">
              <dt className="font-semibold text-gray-800">{faq.question}</dt>
              <dd className="mt-2 text-sm text-gray-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <RelatedQuestions links={relatedLinks} />
    </>
  )
}
