import type { Metadata } from 'next'
import TopsoilCalculator from './TopsoilCalculator'
import QuickAnswer from '@/components/QuickAnswer'
import AdSlot from '@/components/AdSlot'
import PageMeta from '@/components/PageMeta'
import RelatedQuestions from '@/components/RelatedQuestions'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema, webApplicationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Topsoil Calculator — Cubic Yards with Settling Allowance',
  description:
    'Calculate how much topsoil you need for any lawn or garden project. Instant cubic yard results with a built-in settling allowance. Free.',
  alternates: { canonical: 'https://concrete.mrknowitall.net/topsoil/' },
}

const faqs = [
  {
    question: 'How much topsoil do I need for a 10×20 ft lawn area at 4 inches deep?',
    answer:
      'A 10×20 ft area at 4 inches deep is 66.7 cubic feet — about 2.47 cubic yards. With a 10% settling allowance, order 2.72 cubic yards to end up at your target depth after compaction.',
  },
  {
    question: 'How deep should topsoil be for a new lawn?',
    answer:
      'Grass roots need at least 4–6 inches of good topsoil. For a new lawn from seed or sod, aim for 4 inches minimum; 6 inches is better in compacted or poor native soil. Raised garden beds typically need 8–12 inches.',
  },
  {
    question: 'Why do I need to order extra topsoil for settling?',
    answer:
      'Bulk topsoil is loose when delivered and compacts 10–15% once watered in, walked on, and settled over time. If you order only the exact calculated amount, you will end up short of your target grade. Always add 10–15%.',
  },
  {
    question: 'How much does a cubic yard of topsoil weigh?',
    answer:
      'A cubic yard of dry topsoil weighs roughly 1,800–2,200 lbs depending on its composition and moisture content. Wet topsoil can weigh over a ton per cubic yard.',
  },
  {
    question: 'What is the difference between topsoil and fill dirt?',
    answer:
      'Topsoil is the upper 2–8 inches of earth, rich in organic matter and nutrients — it supports plant growth. Fill dirt is subsoil used to fill voids or raise grade, contains little organic matter, and should never be used as a growing medium.',
  },
  {
    question: 'How many bags of topsoil equal a cubic yard?',
    answer:
      'A standard 40 lb bag of topsoil is about 0.75 cubic feet. You need approximately 36 bags to equal one cubic yard (27 ft³). Bulk delivery is far more economical for any project over 1–2 cubic yards.',
  },
]

const relatedLinks = [
  { href: '/mulch/', label: 'Mulch Calculator' },
  { href: '/sod/', label: 'Sod Calculator' },
  { href: '/gravel/', label: 'Gravel Calculator' },
  { href: '/sand/', label: 'Sand Calculator' },
  { href: '/concrete/', label: 'Concrete Calculator' },
]

const SITE = 'https://concrete.mrknowitall.net'

const referenceRows = [
  { area: '10×10 ft', depth: '2"', yd3: '0.62', ordered: '0.68' },
  { area: '10×10 ft', depth: '4"', yd3: '1.23', ordered: '1.36' },
  { area: '10×20 ft', depth: '4"', yd3: '2.47', ordered: '2.72' },
  { area: '10×20 ft', depth: '6"', yd3: '3.70', ordered: '4.07' },
  { area: '20×20 ft', depth: '4"', yd3: '4.94', ordered: '5.44' },
  { area: '20×40 ft', depth: '4"', yd3: '9.88', ordered: '10.86' },
  { area: '50×50 ft', depth: '6"', yd3: '46.30', ordered: '50.93' },
]

export default function TopsoilPage() {
  return (
    <>
      <JsonLd
        data={webApplicationSchema({
          name: 'Topsoil Calculator',
          description: 'Calculate cubic yards of topsoil with settling allowance for lawns and gardens.',
          url: `${SITE}/topsoil/`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `${SITE}/` },
          { name: 'Topsoil Calculator', url: `${SITE}/topsoil/` },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Topsoil Calculator
      </h1>
      <PageMeta lastUpdated="April 2024" readingTime="4 min" />

      <QuickAnswer>
        Enter your area&apos;s length, width, and depth to get cubic feet, cubic yards, and
        the recommended order quantity — with a settling allowance so you don&apos;t end up
        short after the soil compacts.
      </QuickAnswer>

      <TopsoilCalculator />

      <AdSlot id="topsoil-ad-1" />

      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Common Coverage Areas — Quick Reference
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          &ldquo;Order This Much&rdquo; includes a 10% settling allowance.
        </p>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['Area', 'Depth', 'Cubic Yards', 'Order This Much'].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold text-gray-600">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {referenceRows.map((row) => (
                <tr key={`${row.area}-${row.depth}`} className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{row.area}</td>
                  <td className="px-4 py-3 text-gray-600">{row.depth}</td>
                  <td className="px-4 py-3 text-gray-600">{row.yd3} yd³</td>
                  <td className="px-4 py-3 font-medium text-brand-700">{row.ordered} yd³</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="my-10 prose prose-gray max-w-none">
        <h2>How to Spread Topsoil — Step by Step</h2>
        <ol>
          <li>
            <strong>Test your existing soil.</strong> A basic soil test (available at garden
            centers) tells you pH and nutrient levels. Amend existing soil before adding
            topsoil where possible — it&apos;s cheaper than replacing it.
          </li>
          <li>
            <strong>Remove debris and weeds.</strong> Clear the area of rocks, roots, and
            existing vegetation. Till or loosen compacted areas to at least 4 inches to
            help new topsoil blend with native soil.
          </li>
          <li>
            <strong>Calculate and order.</strong> Use this calculator and add 10–15% for
            settling. Have it delivered as close to the project area as possible — topsoil
            is heavy to move by hand.
          </li>
          <li>
            <strong>Spread and grade.</strong> Distribute topsoil evenly with a rake. Work
            toward a slight slope away from foundations (6 inches per 10 feet) to direct
            drainage away from structures.
          </li>
          <li>
            <strong>Till the interface.</strong> Where new topsoil meets existing soil, till
            2–3 inches deep to blend the layers. This prevents a hard boundary that can
            trap water or restrict root growth.
          </li>
          <li>
            <strong>Compact lightly.</strong> Use a lawn roller or your feet to gently firm
            the surface. Avoid heavy compaction — you want soil to be firm but still have
            air pockets for root development.
          </li>
          <li>
            <strong>Water thoroughly.</strong> Water the new topsoil to encourage settling
            and help it bond with underlying soil. You may need to top up low spots.
          </li>
          <li>
            <strong>Seed, sod, or plant.</strong> Wait 1–2 days after watering before
            seeding or laying sod so the surface firms up slightly. New plantings should
            be watered daily for the first 2 weeks.
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
