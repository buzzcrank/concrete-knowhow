import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Concrete Knowhow.',
  alternates: { canonical: 'https://concrete.mrknowitall.net/privacy/' },
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <article className="prose prose-gray max-w-3xl mx-auto py-10">
      <h1>Privacy Policy</h1>
      <p>Last updated: April 2024</p>
      <h2>Information We Collect</h2>
      <p>
        All calculator inputs are processed entirely in your browser. We do not collect or store
        any measurement data you enter into our calculators.
      </p>
      <p>
        We use Google Analytics to collect anonymous usage statistics (pages visited, time on
        site, browser type). This data is aggregated and cannot be used to identify you
        personally.
      </p>
      <h2>Cookies</h2>
      <p>
        Google Analytics may set cookies to distinguish users. You can opt out of Google
        Analytics by installing the{' '}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Analytics Opt-out Browser Add-on
        </a>
        .
      </p>
      <h2>Third Parties</h2>
      <p>
        We do not sell, rent, or share personal data with third parties. We may display
        third-party advertisements; those providers have their own privacy policies.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Email{' '}
        <a href="mailto:hello@mrknowitall.net">hello@mrknowitall.net</a>.
      </p>
    </article>
  )
}
