import Section from '../components/Section'
import texts from '../i18n'

export default function Activities() {
  const t = texts.activities

  return (
    <> 
      <Section title={t.title} subtitle={t.subtitle}>
        <div className="grid gap-6 md:grid-cols-2">
          {t.items.map((a) => (
            <div key={a.title} className="card p-5">
              <div className="font-semibold">{a.title}</div>
              <p className="mt-2 text-sm text-slate-600">{a.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}