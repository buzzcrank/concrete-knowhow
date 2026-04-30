import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Concrete Knowhow — Free Construction Material Calculators',
  description: 'Learn about Concrete Knowhow — free construction material calculators for DIYers and contractors.',
  alternates: { canonical: 'https://concrete.mrknowitall.net/about/' },
}

export default function AboutPage() {
  return (
    <article className="prose prose-gray max-w-3xl mx-auto py-10">
      <h1>About Concrete Knowhow</h1>
      <p>
        Concrete Knowhow provides free, accurate calculators for estimating construction materials
        including concrete, gravel, mulch, topsoil, sand, and sod. Our tools are designed for
        homeowners, DIYers, landscapers, and contractors who need quick, reliable estimates.
      </p>
      <h2>Our Mission</h2>
      <p>
        We believe that accurate material estimation should be free and accessible. Buying too little
        means delays and extra delivery fees; buying too much wastes money and materials. Our
        calculators help you get it right the first time.
      </p>
      <h2>How It Works</h2>
      <p>
        All calculations run directly in your browser &mdash; nothing is sent to a server. Enter your
        dimensions, select your waste buffer if needed, and get instant results.
      </p>
      <p>
        Always verify quantities with your supplier before ordering, and add a 5&ndash;10% waste buffer
        for any real project.
      </p>
    </article>
  )
}
