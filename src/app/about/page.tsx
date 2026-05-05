import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Concrete Knowhow — Free Construction Material Calculators',
  description:
    'Learn about Concrete Knowhow — who we are, how our calculators work, and why accuracy matters when estimating construction materials.',
  alternates: { canonical: 'https://concrete.mrknowitall.net/about/' },
}

export default function AboutPage() {
  return (
    <article className="prose prose-gray max-w-3xl mx-auto py-10">
      <h1>About Concrete Knowhow</h1>
      <p>
        Concrete Knowhow is a free tool suite for anyone who needs to estimate construction
        materials — homeowners tackling a weekend project, landscapers working up a bid, or
        contractors double-checking a supplier&apos;s quote. We cover concrete, gravel, mulch,
        topsoil, sand, and sod, and we give you the answer instantly, without a sign-up or a
        paywall.
      </p>

      <h2>How the calculators work</h2>
      <p>
        Every calculator on this site uses the same core geometry: multiply length × width ×
        depth to get volume, then convert to the unit your supplier uses — cubic yards, tons,
        rolls, or bags. We apply material-specific density constants sourced from industry
        references and verified against published supplier data.
      </p>
      <p>
        For example, our gravel calculator uses 1.5 t/yd³ for crushed stone and 1.4 t/yd³
        for pea gravel — standard values drawn from ASTM gradation references. Our concrete
        bag yields (0.45 ft³ per 60 lb bag; 0.60 ft³ per 80 lb bag) match the manufacturer
        data sheets from the major ready-mix bag producers.
      </p>
      <p>
        All calculations run entirely in your browser. Nothing is sent to a server.
      </p>

      <h2>Why we built this</h2>
      <p>
        Ordering the wrong amount of material is an expensive mistake. Order too little and you
        pay a second delivery fee — and deal with a color mismatch in your concrete pour. Order
        too much and you&apos;re hauling away a cubic yard of topsoil with nowhere to go. The
        math isn&apos;t complicated, but it&apos;s easy to get wrong when you&apos;re juggling
        inches, feet, cubic yards, and bag counts all at once.
      </p>
      <p>
        We built Concrete Knowhow because we wanted a single, reliable place to do that math
        quickly — no ads blocking the inputs, no forced unit conversion in your head, no
        sign-up required.
      </p>

      <h2>Accuracy and methodology</h2>
      <p>
        Our reference values come from published industry sources:
      </p>
      <ul>
        <li>
          <strong>Concrete bag yields</strong> — manufacturer data sheets (60 lb bags yield
          0.45 ft³; 80 lb bags yield 0.60 ft³). One cubic yard requires approximately 45
          bags of 80 lb mix.
        </li>
        <li>
          <strong>Gravel densities</strong> — 1.4 t/yd³ for pea gravel; 1.5 t/yd³ for
          crushed stone. These are conservative mid-range values; actual density varies by
          material gradation and moisture.
        </li>
        <li>
          <strong>Sand densities</strong> — 1.35 t/yd³ for dry sand; 1.68 t/yd³ for
          wet-packed sand, per standard soil classification references.
        </li>
        <li>
          <strong>Topsoil settling</strong> — bulk topsoil compacts approximately 10–15%
          after delivery. Our calculator includes an optional settling allowance so you
          don&apos;t end up short of your target grade.
        </li>
        <li>
          <strong>Sod coverage</strong> — standard roll at 10 sq ft; pallet at 450 sq ft.
          Actual coverage varies by supplier and grass variety; always confirm before ordering.
        </li>
      </ul>
      <p>
        We recommend adding a 5–10% waste buffer to all estimates. Real projects involve
        uneven subgrades, irregular shapes, and human error. The buffer costs far less than
        a second delivery.
      </p>

      <h2>Part of the Mr. Know-It-All network</h2>
      <p>
        Concrete Knowhow is part of{' '}
        <a href="https://mrknowitall.net" target="_blank" rel="noopener noreferrer">
          Mr. Know-It-All
        </a>
        , a small network of free reference tools. Our sister site,{' '}
        <a href="https://tenant.mrknowitall.net" target="_blank" rel="noopener noreferrer">
          Tenant Knowhow
        </a>
        , covers state-by-state renter rights with the actual statute cited on every page.
      </p>

      <h2>Feedback and corrections</h2>
      <p>
        If you find a calculation that seems off, or a material type we haven&apos;t covered,
        use our{' '}
        <a href="/contact/">contact page</a> to let us know. We take accuracy seriously and
        will investigate and update any reported discrepancy.
      </p>
    </article>
  )
}
