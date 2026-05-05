import type { Metadata } from 'next'
import GravelCalculator from './GravelCalculator'
import QuickAnswer from '@/components/QuickAnswer'
import AdSlot from '@/components/AdSlot'
import PageMeta from '@/components/PageMeta'
import RelatedQuestions from '@/components/RelatedQuestions'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema, webApplicationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Gravel Calculator — Cubic Yards & Tons',
  description:
    'Calculate how much gravel, crushed stone, or river rock you need. Instant cubic yard and ton results for driveways, paths, and drainage. Free.',
  alternates: { canonical: 'https://concrete.mrknowitall.net/gravel/' },
  openGraph: {
    type: 'article',
    publishedTime: '2024-04-01',
    modifiedTime: '2026-05-05',
  },
}

const faqs = [
  {
    question: 'How many cubic yards of gravel do I need for a 10×20 ft driveway at 4 inches deep?',
    answer:
      'A 10×20 ft area at 4 inches deep is 66.7 cubic feet, or about 2.47 cubic yards. For crushed stone at 1.5 t/yd³ that works out to roughly 3.7 tons. Always add 10% for a driveway to account for compaction.',
  },
  {
    question: 'How deep should gravel be for a driveway?',
    answer:
      'A gravel driveway should have a base layer of 4–6 inches of larger crushed stone (#3 or #4), topped with 2–3 inches of smaller gravel (#57 or pea gravel). Total depth is typically 6–8 inches for light vehicles.',
  },
  {
    question: 'How much does a ton of gravel cover?',
    answer:
      'One ton of pea gravel covers roughly 54 sq ft at 3 inches deep, or about 100 sq ft at 2 inches deep. Crushed stone is slightly denser so covers a little less area per ton.',
  },
  {
    question: 'What is the difference between cubic yards and tons for gravel?',
    answer:
      'Cubic yards measure volume; tons measure weight. Gravel is sold by both, depending on the supplier. To convert, multiply cubic yards by the bulk density of your material — typically 1.4 t/yd³ for pea gravel and 1.5 t/yd³ for crushed stone.',
  },
  {
    question: 'How much gravel do I need for a French drain?',
    answer:
      'A typical French drain trench is 12 inches wide and 18–24 inches deep. For every 10 linear feet, that is roughly 15–20 cubic feet (0.55–0.74 yd³) of gravel. Use clean #57 crushed stone or pea gravel, not pea-sized or fines.',
  },
  {
    question: 'Should I add a waste buffer for gravel?',
    answer:
      'Yes — add 10% for driveways and paths to account for compaction and settling. For decorative beds you can get away with 5%. It is almost always cheaper to have a little left over than to order a second delivery.',
  },
]

const relatedLinks = [
  { href: '/concrete/', label: 'Concrete Calculator' },
  { href: '/sand/', label: 'Sand Calculator' },
  { href: '/topsoil/', label: 'Topsoil Calculator' },
  { href: '/mulch/', label: 'Mulch Calculator' },
  { href: '/sod/', label: 'Sod Calculator' },
]

const SITE = 'https://concrete.mrknowitall.net'

const referenceRows = [
  { area: '10×10 ft', depth: '2"', yd3: '0.62', tons: '0.93' },
  { area: '10×10 ft', depth: '4"', yd3: '1.23', tons: '1.85' },
  { area: '10×20 ft', depth: '3"', yd3: '1.85', tons: '2.78' },
  { area: '10×20 ft', depth: '4"', yd3: '2.47', tons: '3.70' },
  { area: '12×40 ft', depth: '4"', yd3: '5.93', tons: '8.89' },
  { area: '20×40 ft', depth: '4"', yd3: '9.88', tons: '14.81' },
  { area: '20×40 ft', depth: '6"', yd3: '14.81', tons: '22.22' },
]

export default function GravelPage() {
  return (
    <>
      <JsonLd
        data={webApplicationSchema({
          name: 'Gravel Calculator',
          description: 'Calculate cubic yards and tons of gravel for driveways, paths, and drainage.',
          url: `${SITE}/gravel/`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `${SITE}/` },
          { name: 'Gravel Calculator', url: `${SITE}/gravel/` },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Gravel Calculator
      </h1>
      <PageMeta lastUpdated="May 2026" readingTime="4 min" />

      <QuickAnswer>
        Enter your area&apos;s length, width, and depth, then choose your material to instantly
        get cubic feet, cubic yards, and tons — with an optional waste buffer for compaction.
      </QuickAnswer>

      <GravelCalculator />

      <AdSlot id="gravel-ad-1" />

      {/* Reference table */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Common Coverage Areas — Quick Reference
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          Tons calculated using crushed stone (1.5 t/yd³). No waste buffer included.
        </p>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['Area', 'Depth', 'Cubic Yards', 'Tons (Crushed Stone)'].map((h) => (
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

      {/* How-to guide */}
      <section className="my-10 prose prose-gray max-w-none">
        <h2>How to Lay a Gravel Driveway or Path — Step by Step</h2>
        <ol>
          <li>
            <strong>Mark the area.</strong> Use stakes and string or marking paint to outline
            the driveway or path. Call 811 to have underground utilities located before digging.
          </li>
          <li>
            <strong>Excavate.</strong> Dig down 6–8 inches for a driveway, or 3–4 inches for a
            decorative path. Remove all grass and organic material — it will decompose and cause
            settling.
          </li>
          <li>
            <strong>Grade and compact the sub-base.</strong> Slope the surface slightly (1–2%)
            away from structures for drainage. Compact the soil with a plate compactor.
          </li>
          <li>
            <strong>Install edging.</strong> Plastic, steel, or timber edging keeps gravel
            contained and reduces spreading onto lawns. Set it flush with your desired finished
            grade.
          </li>
          <li>
            <strong>Lay landscape fabric (optional).</strong> For driveways, skip fabric — it
            tears under vehicle weight. For paths and decorative beds, fabric under the gravel
            helps suppress weeds.
          </li>
          <li>
            <strong>Add your base layer.</strong> For driveways, spread 4 inches of larger
            crushed stone (#3 or #4 aggregate). Rake level and compact thoroughly.
          </li>
          <li>
            <strong>Add the top layer.</strong> Spread 2–3 inches of your finish gravel (pea
            gravel, #57 stone, or decomposed granite). Rake level.
          </li>
          <li>
            <strong>Compact and top up.</strong> Compact the surface — gravel will settle
            10–15%. Top up as needed, especially after the first few rains.
          </li>
        </ol>
      </section>

      {/* FAQ */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <dl className="space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-lg border border-gray-100 bg-gray-50 px-5 py-4"
            >
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
