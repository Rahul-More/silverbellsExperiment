import Section from '../components/Section'
import texts from '../i18n'

export default function News() {
  const t = texts.news

  return (
    <> 
      <Section title={t.title} subtitle={t.subtitle}>
        <div className="grid gap-4">
          {t.items.map(n => (
            <article key={n.title} className="card p-5">
              <div className="text-xs text-slate-500">{n.date}</div>
              <h3 className="font-semibold mt-1">{n.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{n.desc}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}