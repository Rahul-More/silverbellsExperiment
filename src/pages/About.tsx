import Section from '../components/Section'
import texts from '../i18n'

export default function About() {
  const t = texts.about

  return (
    <> 
      <Section title={t.title} subtitle={t.subtitle}>
        <div className="prose prose-slate max-w-none">
          <p>{t.lead}</p>
        </div>
      </Section>

      <Section title="Leadership & Values">
        <div className="grid gap-6 md:grid-cols-2">
          {t.leadership.map(item => (
            <div key={item.heading} className="card p-5">
              <div className="font-semibold">{item.heading}</div>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}