import Section from '../components/Section'
import texts from '../i18n'

export default function Events() {
  const t = texts.events

  return (
    <> 
      <Section title={t.title} subtitle={t.subtitle}>
        <div className="grid gap-4">
          {t.items.map(e => (
            <article key={e.title} className="card p-5">
              <div className="text-xs text-slate-500">{e.date}</div>
              <h3 className="font-semibold mt-1">{e.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{e.desc}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}