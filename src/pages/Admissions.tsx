import Section from '../components/Section'
import texts from '../i18n'

export default function Admissions() {
  const t = texts.admissions

  return (
    <> 
      <Section title={t.title} subtitle={t.subtitle}>
        <ol className="list-decimal pl-5 text-sm text-slate-700 grid gap-2">
          {t.steps.map(step => <li key={step}>{step}</li>)}
        </ol>
        <a className="btn mt-6" href={t.enquireEmailHref}>{t.enquireEmailCtaLabel}</a>
      </Section>

      <Section title={t.documentsRequiredTitle}>
        <ul className="list-disc pl-5 text-sm text-slate-700 grid gap-1">
          {t.documents.map(doc => <li key={doc}>{doc}</li>)}
        </ul>
      </Section>
    </>
  )
}