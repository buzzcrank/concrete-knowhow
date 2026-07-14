import type { Metadata } from 'next'
import ConcreteCalculator from './ConcreteCalculator'
import QuickAnswer from '@/components/QuickAnswer'
import AdSlot from '@/components/AdSlot'
import PageMeta from '@/components/PageMeta'
import RelatedQuestions from '@/components/RelatedQuestions'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema, webApplicationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Concrete Slab Calculator: Cubic Yards and Bag Count',
  description:
    'Calculate how much concrete you need for any slab. Instant results: cubic feet, cubic yards, and 40, 50, 60, or 80 lb bag counts. Free and accurate.',
  alternates: { canonical: 'https://concrete.mrknowitall.net/concrete/' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-04-01',
    modifiedTime: '2026-07-14',
  },
}

const faqs = [
  {
    question: 'How many bags of concrete do I need for a 10×10 slab at 4 inches thick?',
    answer:
      'A 10×10 ft slab at 4 inches thick is 33.33 cubic feet (1.23 cubic yards). You need 75 bags of 60 lb mix or 56 bags of 80 lb mix. At this volume, ready-mix delivery is worth pricing out.',
  },
  {
    question: 'How thick should a concrete slab be?',
    answer:
      'A standard residential driveway or patio slab is 4 inches thick. Garage floors are typically 4–6 inches. Footings and heavy-load slabs should be 6–8 inches. Always check local building codes.',
  },
  {
    question: 'How many cubic yards is one 80 lb bag of concrete?',
    answer:
      'One 80 lb bag of concrete mix yields approximately 0.60 cubic feet, which equals about 0.022 cubic yards. You need roughly 45 bags to make one cubic yard.',
  },
  {
    question: 'How much does a yard of concrete cost?',
    answer:
      'Ready-mix concrete typically costs $125–$175 per cubic yard delivered, depending on your region, mix design, and quantity. Short loads (under 5 yards) usually carry a surcharge.',
  },
  {
    question: 'Should I add a waste buffer when ordering concrete?',
    answer:
      'Yes. Add at least 5% (ideally 10%) to your calculated volume. Subgrades are rarely perfectly level, forms can have slight inaccuracies, and a little extra is far cheaper than a second delivery.',
  },
  {
    question: 'When does ready-mix make more sense than bags?',
    answer:
      'Ready-mix becomes cost-competitive above roughly 1 cubic yard (about 27 bags). For larger projects, the labor savings of not mixing bags typically outweigh the delivery cost.',
  },
]

const relatedLinks = [
  { href: '/gravel/', label: 'Gravel Calculator' },
  { href: '/mulch/', label: 'Mulch Calculator' },
  { href: '/topsoil/', label: 'Topsoil Calculator' },
  { href: '/sand/', label: 'Sand Calculator' },
  { href: '/sod/', label: 'Sod Calculator' },
]

const SITE = 'https://concrete.mrknowitall.net'

const referenceRows = [
  { size: '4×4 ft', thick: '4"', ft3: '5.3', yd3: '0.20', bags60: 12, bags80: 9 },
  { size: '10×10 ft', thick: '4"', ft3: '33.3', yd3: '1.23', bags60: 75, bags80: 56 },
  { size: '12×12 ft', thick: '4"', ft3: '48.0', yd3: '1.78', bags60: 107, bags80: 80 },
  { size: '20×20 ft', thick: '4"', ft3: '133.3', yd3: '4.94', bags60: 297, bags80: 223 },
  { size: '10×10 ft', thick: '6"', ft3: '50.0', yd3: '1.85', bags60: 112, bags80: 84 },
  { size: '12×20 ft', thick: '4"', ft3: '80.0', yd3: '2.96', bags60: 178, bags80: 134 },
  { size: '20×30 ft', thick: '4"', ft3: '200.0', yd3: '7.41', bags60: 445, bags80: 334 },
]

export default function ConcretePage() {
  return (
    <>
      <JsonLd
        data={webApplicationSchema({
          name: 'Concrete Slab Calculator',
          description: 'Calculate cubic yards and bag count for any concrete slab.',
          url: `${SITE}/concrete/`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `${SITE}/` },
          { name: 'Concrete Calculator', url: `${SITE}/concrete/` },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Concrete Slab Calculator
      </h1>
      <PageMeta lastUpdated="July 2026" readingTime="7 min" />

      <QuickAnswer>
        Enter your slab&apos;s length, width, and thickness to instantly calculate cubic feet,
        cubic yards, and how many 60 lb or 80 lb bags of concrete you need, with an optional
        waste buffer.
      </QuickAnswer>

      <ConcreteCalculator />

      <AdSlot id="concrete-ad-1" />

      {/* Reference table */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Common Slab Sizes: Quick Reference
        </h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['Slab Size', 'Thickness', 'Cubic Ft', 'Cubic Yd', '60 lb Bags', '80 lb Bags'].map(
                  (h) => (
                    <th key={h} className="px-4 py-3 font-semibold text-gray-600">
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {referenceRows.map((row) => (
                <tr key={`${row.size}-${row.thick}`} className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{row.size}</td>
                  <td className="px-4 py-3 text-gray-600">{row.thick}</td>
                  <td className="px-4 py-3 text-gray-600">{row.ft3}</td>
                  <td className="px-4 py-3 font-medium text-brand-700">{row.yd3}</td>
                  <td className="px-4 py-3 text-gray-600">{row.bags60}</td>
                  <td className="px-4 py-3 text-gray-600">{row.bags80}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-400">
          All bag counts assume no waste buffer. Add 5 to 10 percent for real projects.
        </p>
      </section>

      {/* Formula and worked example */}
      <section className="my-10 prose prose-gray max-w-none">
        <h2>How the Concrete Math Works</h2>
        <p>
          Every concrete volume estimate comes down to one formula. Multiply length by width by
          thickness to get cubic feet, then divide by 27 to convert to cubic yards, because one
          cubic yard is a 3 ft by 3 ft by 3 ft cube (27 cubic feet). Thickness is usually
          measured in inches, so divide it by 12 first to convert to feet.
        </p>
        <p>
          <strong>Worked example.</strong> Say you are pouring a 12 ft by 15 ft patio at 4
          inches thick. Convert the thickness: 4 divided by 12 is 0.333 ft. Multiply: 12 times
          15 times 0.333 equals 60 cubic feet. Divide by 27: 2.22 cubic yards. Add a 10 percent
          waste buffer and you should order about 2.45 cubic yards. Ready-mix trucks sell in
          quarter-yard increments, so you would order 2.5 yards.
        </p>
        <p>
          Wet concrete weighs roughly 150 pounds per cubic foot, or about 4,050 pounds per
          cubic yard. That number matters for two reasons: it tells you why hand-mixing more
          than a yard is a serious workout, and it tells you a pickup truck cannot haul a yard
          of ready-mix in tow-behind form without checking its rated capacity.
        </p>
      </section>

      {/* Bag yields */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Concrete Bag Sizes and Yields
        </h2>
        <p className="text-sm text-gray-600 mb-3">
          Yields below are the standard manufacturer figures printed on bagged concrete mix
          (for example, Quikrete and Sakrete data sheets). Actual yield varies slightly with
          how much water you add.
        </p>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['Bag Size', 'Yield (cubic feet)', 'Bags per Cubic Foot', 'Bags per Cubic Yard'].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold text-gray-600">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">40 lb</td><td className="px-4 py-3 text-gray-600">0.30</td><td className="px-4 py-3 text-gray-600">3.3</td><td className="px-4 py-3 text-gray-600">90</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">50 lb</td><td className="px-4 py-3 text-gray-600">0.375</td><td className="px-4 py-3 text-gray-600">2.7</td><td className="px-4 py-3 text-gray-600">72</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">60 lb</td><td className="px-4 py-3 text-gray-600">0.45</td><td className="px-4 py-3 text-gray-600">2.2</td><td className="px-4 py-3 text-gray-600">60</td></tr>
              <tr className="bg-white"><td className="px-4 py-3 font-medium text-gray-800">80 lb</td><td className="px-4 py-3 text-gray-600">0.60</td><td className="px-4 py-3 text-gray-600">1.7</td><td className="px-4 py-3 text-gray-600">45</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bags vs ready-mix */}
      <section className="my-10 prose prose-gray max-w-none">
        <h2>Bags or Ready-Mix: a Real Cost Comparison</h2>
        <p>
          For the 10 ft by 10 ft slab in the table above (1.23 cubic yards), you would need 56
          bags of 80 lb mix. At a typical $6 to $8 per bag, that is $336 to $448 in material,
          plus mixing labor: a bag takes about 3 to 5 minutes to mix in a rented mixer, so
          budget 3 to 4 hours of continuous mixing. Ready-mix for the same slab at $125 to
          $175 per yard is $155 to $215 in concrete, plus a short-load fee that often runs $75
          to $150 for orders under 5 yards.
        </p>
        <p>
          The practical crossover: below about half a cubic yard, bags win on cost and
          convenience. Between half a yard and 1.5 yards, the numbers are close and the decision
          is really about labor and access. Above 1.5 yards, ready-mix nearly always wins, and
          it also removes the biggest quality risk of bagged pours, which is cold joints forming
          between batches mixed too far apart.
        </p>
      </section>

      {/* Common mistakes */}
      <section className="my-10 prose prose-gray max-w-none">
        <h2>Common Mistakes When Estimating Concrete</h2>
        <ul>
          <li>
            <strong>Measuring thickness at one spot.</strong> Subgrades are rarely level. If
            your excavation varies between 4 and 5 inches, calculate at the average depth, not
            the shallowest point.
          </li>
          <li>
            <strong>Forgetting thickened edges and footings.</strong> Many slabs are poured
            with a thickened perimeter (8 to 12 inches deep and wide). Calculate that volume
            separately and add it to the slab volume.
          </li>
          <li>
            <strong>Skipping the waste buffer.</strong> Running short mid-pour is the worst
            outcome in concrete work: the first batch starts setting while you wait, creating a
            weak cold joint. Order 5 to 10 percent extra, every time.
          </li>
          <li>
            <strong>Confusing cubic feet with square feet.</strong> Suppliers quote volume, not
            area. A 100 sq ft slab is meaningless to a dispatcher until you tell them the
            thickness.
          </li>
        </ul>
      </section>

      {/* How-to guide */}
      <section className="my-10 prose prose-gray max-w-none">
        <h2>How to Pour a Concrete Slab, Step by Step</h2>
        <ol>
          <li>
            <strong>Plan and mark the area.</strong> Use stakes and string to mark the perimeter.
            Call 811 (USA) to have underground utilities located before digging.
          </li>
          <li>
            <strong>Excavate and prepare the sub-base.</strong> Dig down 4–8 inches depending on
            your slab thickness and frost depth. Compact the soil and add 4 inches of compacted
            gravel base for drainage.
          </li>
          <li>
            <strong>Build your forms.</strong> Use 2×4 or 2×6 lumber secured with stakes. Check
            for level (or deliberate slope for drainage). Oil the inside of forms for easy removal.
          </li>
          <li>
            <strong>Add reinforcement.</strong> For slabs subject to load, lay #3 or #4 rebar on
            2-inch chairs, or use wire mesh. Keep reinforcement centered vertically in the slab.
          </li>
          <li>
            <strong>Calculate and order concrete.</strong> Use this calculator, add 5–10% waste,
            and order bags or schedule ready-mix delivery for your pour date.
          </li>
          <li>
            <strong>Pour and screed.</strong> Pour from one end, working toward the other. Use a
            screed board to level the surface flush with the top of the forms.
          </li>
          <li>
            <strong>Float and finish.</strong> Use a bull float immediately after screeding, then
            a hand float and trowel once bleed water evaporates. Add control joints every 8–12 feet.
          </li>
          <li>
            <strong>Cure.</strong> Keep the slab moist for at least 7 days. Curing blankets or a
            curing compound are good options. Full strength is reached at 28 days.
          </li>
        </ol>
      </section>

      {/* FAQ */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
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
