import type { Metadata } from 'next'
import SodCalculator from './SodCalculator'
import QuickAnswer from '@/components/QuickAnswer'
import AdSlot from '@/components/AdSlot'
import PageMeta from '@/components/PageMeta'
import RelatedQuestions from '@/components/RelatedQuestions'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema, webApplicationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Sod Calculator — Rolls & Pallets',
  description:
    'Calculate how many rolls and pallets of sod you need for any lawn area. Instant results with a waste buffer for cuts. Free.',
  alternates: { canonical: 'https://concrete.mrknowitall.net/sod/' },
}

const faqs = [
  {
    question: 'How many rolls of sod do I need for a 20×20 ft lawn?',
    answer:
      'A 20×20 ft lawn is 400 sq ft. At 10 sq ft per roll, you need 40 rolls — plus a 5–10% waste buffer for cuts, so order 42–44 rolls. That is less than one pallet (typically 450 sq ft).',
  },
  {
    question: 'How much does a pallet of sod cover?',
    answer:
      'A standard pallet of sod covers 450–504 sq ft depending on the supplier and grass type. Our calculator uses 450 sq ft per pallet as a conservative estimate. Always confirm coverage with your specific supplier.',
  },
  {
    question: 'How much does sod cost per pallet?',
    answer:
      'Sod costs $150–$450 per pallet depending on grass variety and region. Bermuda and fescue are typically less expensive; St. Augustine and zoysia run higher. Installation labor adds $0.50–$2.00 per sq ft.',
  },
  {
    question: 'When is the best time to lay sod?',
    answer:
      'Cool-season grasses (fescue, bluegrass, rye) establish best in fall or early spring. Warm-season grasses (Bermuda, zoysia, St. Augustine) do best in late spring through summer when soil temperatures are above 60°F.',
  },
  {
    question: 'How do I prepare ground for sod?',
    answer:
      'Till the soil 4–6 inches deep, remove debris, grade to slope away from structures, and add topsoil or compost if needed. Firm the surface so it does not shift underfoot, then water lightly before laying sod.',
  },
  {
    question: 'How long does sod take to root?',
    answer:
      'Sod roots into the soil in 2–6 weeks under good conditions. Keep it moist (water daily for the first 2 weeks) and off the lawn. After 6 weeks, tug a corner — if it resists, it has rooted.',
  },
]

const relatedLinks = [
  { href: '/topsoil/', label: 'Topsoil Calculator' },
  { href: '/mulch/', label: 'Mulch Calculator' },
  { href: '/gravel/', label: 'Gravel Calculator' },
  { href: '/sand/', label: 'Sand Calculator' },
  { href: '/concrete/', label: 'Concrete Calculator' },
]

const SITE = 'https://concrete.mrknowitall.net'

const referenceRows = [
  { area: '10×10 ft', sqFt: 100, rolls: 11, pallets: 1 },
  { area: '15×20 ft', sqFt: 300, rolls: 32, pallets: 1 },
  { area: '20×20 ft', sqFt: 400, rolls: 42, pallets: 1 },
  { area: '20×40 ft', sqFt: 800, rolls: 84, pallets: 2 },
  { area: '40×40 ft', sqFt: 1600, rolls: 168, pallets: 4 },
  { area: '50×80 ft', sqFt: 4000, rolls: 420, pallets: 9 },
  { area: '100×100 ft', sqFt: 10000, rolls: 1050, pallets: 23 },
]

export default function SodPage() {
  return (
    <>
      <JsonLd
        data={webApplicationSchema({
          name: 'Sod Calculator',
          description: 'Calculate rolls and pallets of sod needed for any lawn area.',
          url: `${SITE}/sod/`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `${SITE}/` },
          { name: 'Sod Calculator', url: `${SITE}/sod/` },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Sod Calculator
      </h1>
      <PageMeta lastUpdated="April 2024" readingTime="4 min" />

      <QuickAnswer>
        Enter your lawn&apos;s length and width to instantly get square footage, roll count
        (at 10 sq ft per roll), and pallet count (at 450 sq ft per pallet) — with a waste
        buffer for cuts and edges.
      </QuickAnswer>

      <SodCalculator />

      <AdSlot id="sod-ad-1" />

      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Common Lawn Sizes — Quick Reference
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          All values include a 5% waste buffer. Pallets based on 450 sq ft coverage.
        </p>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['Lawn Size', 'Sq Ft', 'Rolls (+5%)', 'Pallets (+5%)'].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold text-gray-600">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {referenceRows.map((row) => (
                <tr key={row.area} className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{row.area}</td>
                  <td className="px-4 py-3 text-gray-600">{row.sqFt.toLocaleString()}</td>
                  <td className="px-4 py-3 font-medium text-brand-700">{row.rolls}</td>
                  <td className="px-4 py-3 text-gray-600">{row.pallets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="my-10 prose prose-gray max-w-none">
        <h2>How to Lay Sod — Step by Step</h2>
        <ol>
          <li>
            <strong>Prepare the soil.</strong> Till 4–6 inches deep, remove rocks and old
            grass, and grade the surface so it slopes slightly away from your home. Add
            topsoil or compost if needed. Use our{' '}
            <a href="/topsoil/">topsoil calculator</a> to estimate how much you need.
          </li>
          <li>
            <strong>Test soil pH.</strong> Most turfgrasses prefer pH 6.0–7.0. Lime raises
            pH; sulfur lowers it. Apply amendments before laying sod so they work into
            the soil.
          </li>
          <li>
            <strong>Firm the surface.</strong> Roll or tamp the prepared soil so it is firm
            but not compacted. The surface should not shift when you walk on it — if it
            does, the sod will have an uneven finish.
          </li>
          <li>
            <strong>Water before laying.</strong> Lightly moisten the soil surface just
            before installation. This helps sod roots make immediate contact with moist soil.
          </li>
          <li>
            <strong>Lay sod in straight rows.</strong> Start along a straight edge —
            driveway, sidewalk, or string line. Butt pieces tightly together; gaps will
            dry out and die. Stagger joints like brickwork.
          </li>
          <li>
            <strong>Use a sharp knife for cuts.</strong> Trim pieces to fit around edges,
            curves, and obstacles. Cut on the soil side, not the grass side, for a
            cleaner edge.
          </li>
          <li>
            <strong>Roll after laying.</strong> Use a water-filled lawn roller to press
            the sod firmly against the soil, eliminating air gaps under the roots.
          </li>
          <li>
            <strong>Water immediately and daily.</strong> Soak the sod thoroughly right
            after installation. For the first 2 weeks, water daily to keep the root zone
            moist. Stay off the lawn until roots have established (2–6 weeks).
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
