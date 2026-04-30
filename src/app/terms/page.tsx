import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for Concrete Knowhow.',
  alternates: { canonical: 'https://concrete.mrknowitall.net/terms/' },
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <article className="prose prose-gray max-w-3xl mx-auto py-10">
      <h1>Terms of Use</h1>
      <p>Last updated: April 2024</p>
      <p>
        By using Concrete Knowhow (&quot;the Site&quot;), you agree to these terms. If you do not
        agree, please do not use the Site.
      </p>
      <h2>Use of Calculators</h2>
      <p>
        The calculators are provided free of charge for personal and commercial estimation
        purposes. Results are estimates only &mdash; see our{' '}
        <a href="/disclaimer/">Disclaimer</a> for full details.
      </p>
      <h2>Intellectual Property</h2>
      <p>
        All content on this Site is owned by Concrete Knowhow unless otherwise noted. You may
        not reproduce or redistribute content without permission.
      </p>
      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Concrete Knowhow shall not be liable for any
        direct, indirect, incidental, or consequential damages arising from the use of this Site
        or its calculators.
      </p>
      <h2>Changes to Terms</h2>
      <p>
        We may update these terms at any time. Continued use of the Site constitutes acceptance
        of the updated terms.
      </p>
    </article>
  )
}
