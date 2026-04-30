import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer for Concrete Knowhow calculator tools and content.',
  alternates: { canonical: 'https://concrete.mrknowitall.net/disclaimer/' },
  robots: { index: false, follow: false },
}

export default function DisclaimerPage() {
  return (
    <article className="prose prose-gray max-w-3xl mx-auto py-10">
      <h1>Disclaimer</h1>
      <p>
        The calculators and information provided on Concrete Knowhow are for reference and
        estimation purposes only. Results are based on standard formulas and typical material
        densities and may not reflect actual conditions at your job site.
      </p>
      <p>
        Always consult with a qualified contractor or engineer for structural projects. Verify all
        quantities with your material supplier before placing orders. Concrete Knowhow is not
        responsible for any over- or under-ordering, project failures, or costs arising from the
        use of these calculators.
      </p>
      <p>
        Material coverage rates, bag sizes, and bulk densities can vary by manufacturer and
        region. Use these results as a starting point, and always add an appropriate waste buffer
        (5&ndash;10%) for real projects.
      </p>
    </article>
  )
}
