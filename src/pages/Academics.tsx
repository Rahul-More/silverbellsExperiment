import Section from '../components/Section'
import texts from '../i18n'

export default function Academics() {
  const t = texts.academics

  return (
    <> 
      <Section title={t.title} subtitle={t.subtitle}>
        <div className="grid gap-6 md:grid-cols-3">
          {t.stages.map(x => (
            <div key={x.title} className="card p-5">
              <div className="font-semibold">{x.title}</div>
              <p className="mt-2 text-sm text-slate-600">{x.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t.coScholastic.title} subtitle={t.coScholastic.subtitle} />
    </>
  )
}