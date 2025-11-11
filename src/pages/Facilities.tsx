import Section from '../components/Section'
import texts from '../i18n'

export default function Facilities() {
  const t = texts.facilities

  return (
    <> 
      <Section title={t.title} subtitle={t.subtitle}>
        <div className="grid gap-6 md:grid-cols-3">
          {t.items.map((f) => (
            <div key={f} className="card p-5">
              <div className="font-semibold">{f}</div>
              <p className="mt-2 text-sm text-slate-600">{t.itemDescription}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}