import { Link } from 'react-router-dom'
import texts from '../i18n'
import { SITE } from '../site.config'

export default function Footer() {
  const f = texts.footer

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="container-page py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-9 w-9 rounded-lg bg-brand text-white grid place-items-center font-bold shadow-soft">SB</div>
            <div className="font-semibold">{SITE.name}</div>
          </div>
          <p className="text-sm text-slate-600 max-w-sm">{SITE.tagline}</p>
        </div>

        <div>
          <div className="font-semibold mb-3">Explore</div>
          <ul className="grid gap-2 text-sm">
            {Object.entries(texts.nav).map(([key, label]) => {
              const link = (NAV_LINKS || []).find((l) => l.key === key) || null
              const to = link?.path ?? '/'
              return (
                <li key={key}>
                  <Link to={to} className="text-slate-600 hover:text-slate-900">
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-3">Contact</div>
          <ul className="text-sm text-slate-600">
            <li className="mb-1">{SITE.contact.address}</li>
            <li className="mb-1">
              <a className="hover:text-slate-900" href={`tel:${SITE.contact.phone}`}>{SITE.contact.phone}</a>
            </li>
            <li className="mb-1">
              <a className="hover:text-slate-900" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
            </li>
          </ul>
          <div className="mt-3 flex items-center gap-3">
            {SITE.social.facebook !== '#' && (
              <a className="badge hover:bg-brand hover:text-white" href={SITE.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
            )}
            {SITE.social.instagram !== '#' && (
              <a className="badge hover:bg-brand hover:text-white" href={SITE.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
            )}
            {SITE.social.youtube !== '#' && (
              <a className="badge hover:bg-brand hover:text-white" href={SITE.social.youtube} target="_blank" rel="noreferrer">YouTube</a>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 text-center text-xs text-slate-500 py-4">
        {f?.copyright ?? `© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.`}
      </div>
    </footer>
  )
}