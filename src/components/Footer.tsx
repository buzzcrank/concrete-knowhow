import Link from 'next/link'

const calculators = [
  { href: '/concrete/', label: 'Concrete Calculator' },
  { href: '/gravel/', label: 'Gravel Calculator' },
  { href: '/mulch/', label: 'Mulch Calculator' },
  { href: '/topsoil/', label: 'Topsoil Calculator' },
  { href: '/sand/', label: 'Sand Calculator' },
  { href: '/sod/', label: 'Sod Calculator' },
]

const company = [
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
]

const legal = [
  { href: '/disclaimer/', label: 'Disclaimer' },
  { href: '/privacy/', label: 'Privacy Policy' },
  { href: '/terms/', label: 'Terms of Use' },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-navy-900 mt-16">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-1">
              Mr. Knoi It All
            </p>
            <p className="font-bold text-white mb-2">Concrete Knowhow</p>
            <p className="text-sm text-gray-400">
              Free construction material calculators for DIYers and professionals.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              Calculators
            </p>
            <ul className="space-y-2">
              {calculators.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-brand-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              Company
            </p>
            <ul className="space-y-2">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-brand-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://mrknowitall.net"
                  className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mrknowitall.net ↗
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              Legal
            </p>
            <ul className="space-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-brand-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col gap-1 sm:flex-row sm:justify-between">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Mr. Knoi It All. For reference only — always verify
            with your supplier. See our{' '}
            <Link href="/disclaimer/" className="underline hover:text-brand-400">
              disclaimer
            </Link>
            .
          </p>
          <p className="text-xs text-gray-600">
            Part of the{' '}
            <a
              href="https://mrknowitall.net"
              className="underline hover:text-brand-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mr. Knoi It All
            </a>{' '}
            network
          </p>
        </div>
      </div>
    </footer>
  )
}
