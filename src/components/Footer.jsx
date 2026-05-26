import { Link } from 'react-router-dom'
import { Globe, Mail, MapPin, Users } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-950/95 border-t border-white/10 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 text-2xl font-bold text-white">
              ADSWITHABHI
            </Link>
            <p className="max-w-sm text-slate-400">
              Smart Ads. Real Growth. We help businesses scale with data-driven digital marketing strategies.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-lime-400 transition hover:bg-lime-400/10"
                aria-label="LinkedIn"
              >
                <Users size={18} />
              </a>
              <a
                href="https://adswithabhi.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-lime-400 transition hover:bg-lime-400/10"
                aria-label="Website"
              >
                <Globe size={18} />
              </a>
              <a
                href="mailto:hello@adswithabhi.com"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-lime-400 transition hover:bg-lime-400/10"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="transition hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link to="/services" className="transition hover:text-white">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-white">
                  Google Ads (PPC)
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-white">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-white">
                  Meta Ads
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-white">
                  Content Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-lime-400" />
                <span>hello@adswithabhi.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Users size={18} className="text-lime-400" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-lime-400" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ADSWITHABHI. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <span className="text-slate-600">|</span>
            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
