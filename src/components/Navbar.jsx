import { NavLink, useLocation } from 'react-router'
import { navigation } from '../data/siteData'
import Logo from './Logo'

export default function Navbar() {
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

          <NavLink to="/contact" className="rounded-full border border-gold/40 px-4 py-2 text-xs font-medium text-gold lg:hidden">Enquire Now &rarr;</NavLink>
        </div>

          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="container-shell flex flex-wrap items-center justify-center gap-x-4 gap-y-1 border-t border-gold/15 py-2 lg:hidden"
          >
            {navigation.map(([key, label]) => (
              <NavLink
                key={key}
                to={key === 'home' ? '/' : `/${key}`} end
                aria-current={page === key ? 'page' : undefined}
                className={`border-b-2 py-2 text-[11px] font-medium sm:text-sm ${
                  page === key ? 'border-gold text-gold' : 'border-transparent text-ink/80 hover:text-gold'
                }`}
              >
                {label}
              </NavLink>
            ))}
          </nav>
      </header>
  )
}
