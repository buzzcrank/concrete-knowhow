import type { Metadata } from 'next'
import GravelCalculator from './GravelCalculator'
import QuickAnswer from '@/components/QuickAnswer'
import AdSlot from '@/components/AdSlot'
import PageMeta from '@/components/PageMeta'
import RelatedQuestions from '@/components/RelatedQuestions'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema, webApplicationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Gravel Calculator: Cubic Yards and Tons',
  description:
    'Calculate how much gravel, crushed stone, or river rock you need. Instant cubic yard and ton results for driveways, paths, and drainage. Free.',
  alternates: { canonical: 'https://concrete.mrknowitall.net/gravel/' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-04-01',
    modifiedTime: '2026-07-14',
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
      'Cubic yards measure volume; tons measure weight. Gravel is sold by both, depending on the supplier. To convert, multiply cubic yards by the bulk density of your material, typically 1.4 t/yd³ for pea gravel and 1.5 t/yd³ for crushed stone.',
  },
  {
    question: 'How much gravel do I need for a French drain?',
    answer:
      'A typical French drain trench is 12 inches wide and 18–24 inches deep. For every 10 linear feet, that is roughly 15–20 cubic feet (0.55–0.74 yd³) of gravel. Use clean #57 crushed stone or pea gravel, not pea-sized or fines.',
  },
  {
    question: 'Should I add a waste buffer for gravel?',
    answer:
      'Yes. Add 10% for driveways and paths to account for compaction and settling. For decorative beds you can get away with 5%. It is almost always cheaper to have a little left over than to order a second delivery.',
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
      <PageMeta lastUpdated="July 2026" readingTime="7 min" />

      <QuickAnswer>
        Enter your area&apos;s length, width, and depth, then choose your material to instantly
        get cubic feet, cubic yards, and tons, with an optional waste buffer for compaction.
      </QuickAnswer>

      <GravelCalculator />

      <AdSlot id="gravel-ad-1" />

      {/* Reference table */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Common Coverage Areas: Quick Reference
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

      {/* Gravel types */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Gravel Types and When to Use Each One
        </h2>
        <p className="text-sm text-gray-600 mb-3">
          Gravel is not one product. The right choice depends on whether the material needs to
          compact into a firm surface (angular crushed stone locks together) or stay loose and
          decorative (rounded stone does not lock). Densities below are typical bulk values;
          your supplier can give exact numbers for their stock.
        </p>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['Type', 'Size', 'Typical Density', 'Best For'].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold text-gray-600">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Crushed stone #57</td><td className="px-4 py-3 text-gray-600">0.75 to 1 in</td><td className="px-4 py-3 text-gray-600">1.4 to 1.5 t/yd³</td><td className="px-4 py-3 text-gray-600">Driveway top layer, drainage, concrete base</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Crushed stone #3 / #4</td><td className="px-4 py-3 text-gray-600">1 to 2.5 in</td><td className="px-4 py-3 text-gray-600">1.4 to 1.6 t/yd³</td><td className="px-4 py-3 text-gray-600">Driveway base layer, heavy drainage</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Pea gravel</td><td className="px-4 py-3 text-gray-600">0.25 to 0.5 in</td><td className="px-4 py-3 text-gray-600">1.3 to 1.4 t/yd³</td><td className="px-4 py-3 text-gray-600">Paths, playgrounds, between pavers</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Crusher run / road base</td><td className="px-4 py-3 text-gray-600">Fines to 1 in</td><td className="px-4 py-3 text-gray-600">1.5 to 1.7 t/yd³</td><td className="px-4 py-3 text-gray-600">Compacted bases under pavers and sheds</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Decomposed granite</td><td className="px-4 py-3 text-gray-600">Fines to 0.25 in</td><td className="px-4 py-3 text-gray-600">1.4 to 1.6 t/yd³</td><td className="px-4 py-3 text-gray-600">Natural-look paths and patios</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">River rock</td><td className="px-4 py-3 text-gray-600">1 to 3 in</td><td className="px-4 py-3 text-gray-600">1.3 to 1.4 t/yd³</td><td className="px-4 py-3 text-gray-600">Decorative beds, dry creek beds</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Formula and worked example */}
      <section className="my-10 prose prose-gray max-w-none">
        <h2>How the Gravel Math Works</h2>
        <p>
          Volume first: length in feet times width in feet times depth in feet gives cubic
          feet, and dividing by 27 gives cubic yards. Depth is normally in inches, so divide
          it by 12 before multiplying. To convert cubic yards to tons, multiply by the bulk
          density of your material, typically 1.4 tons per cubic yard for pea gravel and 1.5
          for crushed stone.
        </p>
        <p>
          <strong>Worked example.</strong> A 12 ft by 40 ft driveway topped with 3 inches of
          #57 crushed stone: 3 divided by 12 is 0.25 ft. Multiply 12 by 40 by 0.25 to get 120
          cubic feet, then divide by 27 to get 4.44 cubic yards. At 1.5 tons per yard that is
          about 6.7 tons. Add 10 percent for compaction and order roughly 7.3 tons. Most
          suppliers deliver by the ton, and a typical single-axle dump truck carries about 10
          tons, so this fits in one delivery.
        </p>
        <p>
          Why the buffer matters for gravel specifically: angular stone compacts 10 to 15
          percent when driven on or plate-compacted. A driveway that measures perfect on day
          one will look thin after the first month of traffic if you ordered the bare
          calculated volume.
        </p>
      </section>

      {/* How-to guide */}
      <section className="my-10 prose prose-gray max-w-none">
        <h2>How to Lay a Gravel Driveway or Path, Step by Step</h2>
        <ol>
          <li>
            <strong>Mark the area.</strong> Use stakes and string or marking paint to outline
            the driveway or path. Call 811 to have underground utilities located before digging.
          </li>
          <li>
            <strong>Excavate.</strong> Dig down 6–8 inches for a driveway, or 3–4 inches for a
            decorative path. Remove all grass and organic material, which will decompose and cause
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
            <strong>Lay landscape fabric (optional).</strong> For driveways, skip fabric, because it
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
            <strong>Compact and top up.</strong> Compact the surface. Gravel will settle
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
