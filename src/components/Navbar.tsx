import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../site.config'
import texts from '../i18n'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container-page flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-brand text-white grid place-items-center font-bold shadow-soft">
            SB
          </div>
          <div className="leading-tight">
            <div className="font-semibold">{SITE.name}</div>
            <div className="text-xs text-slate-500 hidden sm:block">{SITE.tagline}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.key}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm ${isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`
              }
              end={link.path === '/'}
            >
              {texts.nav[link.key]}
            </NavLink>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden h-10 w-10 grid place-items-center rounded-lg border border-slate-300 text-slate-700"
          onClick={() => setOpen((s) => !s)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-page py-2 grid">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.key}
                to={link.path}
                className={({ isActive }) => `px-3 py-2 rounded-lg text-sm ${isActive ? 'bg-slate-100' : 'hover:bg-slate-50'}`}
                end={link.path === '/'}
              >
                {texts.nav[link.key]}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}