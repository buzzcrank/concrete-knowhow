import type { Metadata } from 'next'
import MulchCalculator from './MulchCalculator'
import QuickAnswer from '@/components/QuickAnswer'
import AdSlot from '@/components/AdSlot'
import PageMeta from '@/components/PageMeta'
import RelatedQuestions from '@/components/RelatedQuestions'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema, webApplicationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Mulch Calculator: Cubic Yards and Bag Count',
  description:
    'Calculate how much mulch you need for any garden bed or landscape area. Instant cubic yard results plus 2 ft³ and 3 ft³ bag counts. Free.',
  alternates: { canonical: 'https://concrete.mrknowitall.net/mulch/' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-04-01',
    modifiedTime: '2026-07-14',
  },
}

const faqs = [
  {
    question: 'How much mulch do I need for a 10×20 ft bed at 3 inches deep?',
    answer:
      'A 10×20 ft bed at 3 inches deep is 50 cubic feet, or about 1.85 cubic yards. That equals 25 bags of 2 ft³ mulch or 17 bags of 3 ft³ mulch.',
  },
  {
    question: 'How deep should mulch be?',
    answer:
      'Apply mulch 2–4 inches deep for most landscape beds. Shredded wood mulch at 3 inches is the most common recommendation: deep enough to suppress weeds and retain moisture, but not so deep it smothers plant roots. Keep mulch 2–3 inches away from plant stems and tree trunks.',
  },
  {
    question: 'How many bags of mulch are in a cubic yard?',
    answer:
      'One cubic yard equals 27 cubic feet. A 2 ft³ bag gives you 13.5 bags per cubic yard; a 3 ft³ bag gives you 9 bags per cubic yard. Bulk mulch by the yard is almost always cheaper for areas over 3 cubic yards.',
  },
  {
    question: 'How often should I replace mulch?',
    answer:
      'Top up mulch every 1–2 years. Organic mulches like shredded bark and wood chips decompose and enrich the soil over time. Check depth in spring, and if it has fallen below 2 inches, add a fresh layer rather than replacing everything.',
  },
  {
    question: 'What type of mulch is best?',
    answer:
      'Shredded hardwood bark is the most versatile. It stays in place, decomposes slowly, and looks tidy. Pine straw works well around acid-loving plants. Cedar and cypress resist insects and decompose more slowly. Avoid dyed rubber mulch near edible plants.',
  },
  {
    question: 'Should I remove old mulch before adding new?',
    answer:
      'Usually no. If the existing layer is still 1–2 inches deep and not matted, just loosen it with a rake and add a fresh top layer. Remove and replace only if the old mulch has become a thick, matted layer over 4–5 inches or shows signs of fungal growth.',
  },
]

const relatedLinks = [
  { href: '/topsoil/', label: 'Topsoil Calculator' },
  { href: '/gravel/', label: 'Gravel Calculator' },
  { href: '/sand/', label: 'Sand Calculator' },
  { href: '/concrete/', label: 'Concrete Calculator' },
  { href: '/sod/', label: 'Sod Calculator' },
]

const SITE = 'https://concrete.mrknowitall.net'

const referenceRows = [
  { area: '10×10 ft', depth: '2"', yd3: '0.62', bags2: 9, bags3: 7 },
  { area: '10×10 ft', depth: '3"', yd3: '0.93', bags2: 13, bags3: 9 },
  { area: '10×20 ft', depth: '2"', yd3: '1.23', bags2: 17, bags3: 12 },
  { area: '10×20 ft', depth: '3"', yd3: '1.85', bags2: 25, bags3: 17 },
  { area: '20×20 ft', depth: '3"', yd3: '3.70', bags2: 50, bags3: 34 },
  { area: '20×40 ft', depth: '3"', yd3: '7.41', bags2: 100, bags3: 67 },
  { area: '50×50 ft', depth: '2"', yd3: '15.43', bags2: 209, bags3: 139 },
]

export default function MulchPage() {
  return (
    <>
      <JsonLd
        data={webApplicationSchema({
          name: 'Mulch Calculator',
          description: 'Calculate cubic yards and bag count for any mulch project.',
          url: `${SITE}/mulch/`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `${SITE}/` },
          { name: 'Mulch Calculator', url: `${SITE}/mulch/` },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Mulch Calculator
      </h1>
      <PageMeta lastUpdated="July 2026" readingTime="7 min" />

      <QuickAnswer>
        Enter your bed&apos;s length, width, and desired depth to instantly get cubic feet,
        cubic yards, and how many 2 ft³ or 3 ft³ bags of mulch you need.
      </QuickAnswer>

      <MulchCalculator />

      <AdSlot id="mulch-ad-1" />

      {/* Reference table */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Common Bed Sizes: Quick Reference
        </h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['Bed Size', 'Depth', 'Cubic Yards', '2 ft³ Bags', '3 ft³ Bags'].map((h) => (
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
                  <td className="px-4 py-3 text-gray-600">{row.bags2}</td>
                  <td className="px-4 py-3 text-gray-600">{row.bags3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-400">No waste buffer included. Add 5 to 10 percent for irregular shapes.</p>
      </section>

      {/* Mulch types */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Mulch Types Compared
        </h2>
        <p className="text-sm text-gray-600 mb-3">
          The volume math is the same for every mulch, but lifespan and best use vary a lot by
          material. This is what actually matters when you are standing at the supply yard.
        </p>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['Type', 'Typical Lifespan', 'Best For', 'Notes'].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold text-gray-600">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Shredded hardwood</td><td className="px-4 py-3 text-gray-600">1 to 2 years</td><td className="px-4 py-3 text-gray-600">General beds, slopes</td><td className="px-4 py-3 text-gray-600">Knits together, stays put on grades</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Cedar</td><td className="px-4 py-3 text-gray-600">2 to 3 years</td><td className="px-4 py-3 text-gray-600">Foundation beds, pathways</td><td className="px-4 py-3 text-gray-600">Natural oils slow decay and deter some insects</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Cypress</td><td className="px-4 py-3 text-gray-600">2 to 3 years</td><td className="px-4 py-3 text-gray-600">Wet climates</td><td className="px-4 py-3 text-gray-600">Rot resistant; check sourcing sustainability</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Pine bark nuggets</td><td className="px-4 py-3 text-gray-600">2 to 3 years</td><td className="px-4 py-3 text-gray-600">Flat beds, acid-loving plants</td><td className="px-4 py-3 text-gray-600">Floats and migrates in heavy rain</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Pine straw</td><td className="px-4 py-3 text-gray-600">6 to 12 months</td><td className="px-4 py-3 text-gray-600">Azaleas, blueberries, natural areas</td><td className="px-4 py-3 text-gray-600">Sold by the bale, not the yard</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Dyed wood mulch</td><td className="px-4 py-3 text-gray-600">1 to 2 years</td><td className="px-4 py-3 text-gray-600">Color-matched landscaping</td><td className="px-4 py-3 text-gray-600">Confirm the source wood; avoid near vegetable beds</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">Rubber mulch</td><td className="px-4 py-3 text-gray-600">10+ years</td><td className="px-4 py-3 text-gray-600">Playgrounds</td><td className="px-4 py-3 text-gray-600">No soil benefit; keep away from edibles</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Formula and cost comparison */}
      <section className="my-10 prose prose-gray max-w-none">
        <h2>How the Mulch Math Works</h2>
        <p>
          Length times width gives square feet. Multiply by depth in feet (inches divided by
          12) to get cubic feet, then divide by 27 for cubic yards. A useful shortcut: one
          cubic yard covers 324 square feet at 1 inch deep, so at the standard 3 inch depth,
          one yard covers 108 square feet.
        </p>
        <p>
          <strong>Worked example.</strong> Three beds totaling 350 square feet at 3 inches
          deep: 350 times 0.25 ft equals 87.5 cubic feet, divided by 27 is 3.24 cubic yards.
          Round to 3.5 yards for irregular edges and you are covered.
        </p>
        <h2>Bulk or Bagged: Where the Break-Even Sits</h2>
        <p>
          One cubic yard equals 13.5 bags of 2 cubic foot mulch or 9 bags of 3 cubic foot
          mulch. At a typical $4 to $7 per 2 cubic foot bag, a yard of bagged mulch costs $54
          to $95. Bulk mulch runs $25 to $60 per yard plus a delivery fee that is often $50 to
          $100 regardless of quantity. The break-even is usually around 2 to 3 cubic yards:
          below that, bags are competitive and easier to move; above it, bulk wins clearly.
          Bags also make sense when you cannot accept a driveway pile, since a yard of bulk
          mulch weighs 400 to 800 pounds and arrives loose.
        </p>
      </section>

      {/* How-to guide */}
      <section className="my-10 prose prose-gray max-w-none">
        <h2>How to Mulch a Garden Bed, Step by Step</h2>
        <ol>
          <li>
            <strong>Weed thoroughly.</strong> Pull all weeds before mulching. Mulch suppresses
            future weed seeds but won&apos;t kill established weeds already in the bed.
          </li>
          <li>
            <strong>Edge the bed.</strong> Cut a clean edge with a spade or edging tool to
            define the border and keep mulch from spreading onto the lawn.
          </li>
          <li>
            <strong>Water the soil.</strong> If the ground is dry, water it before mulching.
            Mulch locks in whatever moisture is present, so start with moist soil.
          </li>
          <li>
            <strong>Apply a pre-emergent (optional).</strong> For beds prone to weed pressure,
            apply a granular pre-emergent before laying mulch, following label directions.
          </li>
          <li>
            <strong>Spread mulch 2–4 inches deep.</strong> Pour mulch into the bed and rake it
            level. Aim for a consistent 3-inch depth for most situations.
          </li>
          <li>
            <strong>Keep mulch away from stems and trunks.</strong> Leave a 2–3 inch gap around
            plant bases and tree trunks. Mulch piled against stems traps moisture and promotes
            rot and disease.
          </li>
          <li>
            <strong>Fluff the edges.</strong> Use a rake to feather the mulch at bed edges so
            it doesn&apos;t mound up against edging or lawn borders.
          </li>
          <li>
            <strong>Top up annually.</strong> Check depth each spring. Add a fresh 1–2 inch
            layer as needed rather than replacing the entire bed.
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
