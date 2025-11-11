import Section from '../components/Section'
import texts from '../i18n'

export default function Careers() {
  const t = texts.careers

  return (
    <> 
      <Section title={t.title} subtitle={t.subtitle}>
        <div className="grid gap-4">
          {t.jobs.map(j => (
            <div key={j.role} className="card p-5 flex items-center justify-between">
              <div>
                <div className="font-semibold">{j.role}</div>
                <div className="text-xs text-slate-500">{j.type} • {j.location}</div>
              </div>
              <a className="btn-outline" href={t.applyHref}>{t.applyCtaLabel}</a>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}