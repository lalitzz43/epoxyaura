import { useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { navigation } from '../data/siteData'
import Logo from './Logo'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const page = pathname === '/' ? 'home' : pathname.slice(1)

  return (
      <header className="sticky top-0 z-30 border-b border-gold/15 bg-cream/95 shadow-[0_4px_24px_#172b2405] backdrop-blur-xl">
        <div className="container-shell flex min-h-24 items-center justify-between gap-5">
          <Logo />

          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {navigation.map(([key, label]) => (
              <NavLink
                key={key}
                to={key === 'home' ? '/' : `/${key}`} end
                aria-current={page === key ? 'page' : undefined}
                className={`border-b py-2 text-sm font-medium transition-colors ${
                  page === key
                    ? 'border-gold text-gold'
                    : 'border-transparent hover:text-gold'
                }`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <NavLink to="/contact" className="button-outline hidden xl:inline-flex">
            Enquire Now ↗
          </NavLink>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="rounded border border-gold/30 px-3 py-2 text-gold lg:hidden"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="container-shell flex flex-col gap-1 border-t border-gold/15 py-4 lg:hidden"
          >
            {navigation.map(([key, label]) => (
              <NavLink
                key={key}
                to={key === 'home' ? '/' : `/${key}`} end
                onClick={() => setMenuOpen(false)}
                aria-current={page === key ? 'page' : undefined}
                className={`rounded px-3 py-3 text-sm ${
                  page === key ? 'bg-paper text-gold' : ''
                }`}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>
  )
}
