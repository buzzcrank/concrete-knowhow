import Link from 'next/link'

const navLinks = [
  { href: '/concrete/', label: 'Concrete' },
  { href: '/gravel/', label: 'Gravel' },
  { href: '/mulch/', label: 'Mulch' },
  { href: '/topsoil/', label: 'Topsoil' },
  { href: '/sand/', label: 'Sand' },
  { href: '/sod/', label: 'Sod' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xs font-semibold uppercase tracking-widest text-navy-700">
            Mr. Knoi It All
          </span>
          <span className="text-xl font-extrabold text-navy-900">
            Concrete <span className="text-brand-600">Knowhow</span>
          </span>
        </Link>
        <nav className="hidden gap-5 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-navy-800 hover:text-brand-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
