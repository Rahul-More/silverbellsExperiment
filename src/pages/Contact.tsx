import Section from '../components/Section'
import { SITE } from '../site.config'
import texts from '../i18n'

export default function Contact() {
  const t = texts.contact

  return (
    <> 
      <Section title={t.title} subtitle={t.subtitle}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-5">
            <div className="font-semibold">{t.reachUsHeading}</div>
            <ul className="mt-2 text-sm text-slate-700 grid gap-1">
              <li>{SITE.contact.address}</li>
              <li><a className="hover:text-slate-900" href={`tel:${SITE.contact.phone}`}>{SITE.contact.phone}</a></li>
              <li><a className="hover:text-slate-900" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a></li>
            </ul>
            <div className="mt-4">
              <div className="text-xs text-slate-500">{t.officeHoursLabel}</div>
              <div className="text-sm">{t.officeHoursValue}</div>
            </div>
          </div>

          <form className="card p-5 grid gap-3" onSubmit={(e) => e.preventDefault()}> 
            <div>
              <label className="text-sm text-slate-600">{t.nameLabel}</label>
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder={t.namePlaceholder} required />
            </div>
            <div>
              <label className="text-sm text-slate-600">{t.emailLabel}</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder={t.emailPlaceholder} required />
            </div>
            <div>
              <label className="text-sm text-slate-600">{t.messageLabel}</label>
              <textarea className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" rows={4} placeholder={t.messagePlaceholder} required />
            </div>
            <button className="btn" type="submit">{t.submitButton}</button>
            <p className="text-xs text-slate-500">{t.formNote}</p>
          </form>
        </div>
      </Section>
    </>
  )
}