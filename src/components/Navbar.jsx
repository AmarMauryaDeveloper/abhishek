import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-green-500/20 bg-slate-950/95 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            <span className="text-white">ADS</span>
            <span className="text-lime-400">WITHABHI</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="transition hover:text-lime-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-lime-400" />
            ) : (
              <Menu size={24} className="text-lime-400" />
            )}
          </button>
        </div>

        {isOpen && (
          <nav className="mt-4 flex flex-col gap-4 border-t border-green-500/20 pt-4 text-sm text-slate-300 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="transition hover:text-lime-400"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
