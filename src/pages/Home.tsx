import Hero from '../components/Hero'
import Section from '../components/Section'
import texts from '../i18n'

export default function Home() {
  const t = texts.home

  return (
    <> 
      <Hero />
      <Section
        title={t.sectionWhyTitle}
        subtitle={t.sectionWhySubtitle}
        ctaLabel={t.sectionWhyCtaLabel}
        ctaHref={t.sectionWhyCtaHref}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.map((i) => (
            <div key={i.title} className="card p-5">
              <div className="text-brand font-semibold">{i.title}</div>
              <p className="mt-2 text-sm text-slate-600">{i.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t.highlightsSectionTitle}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-5">
            <div className="text-sm text-slate-500">{t.highlights.admissionsBadge}</div>
            <div className="text-lg font-semibold mt-1">{t.highlights.admissionsTitle}</div>
            <p className="mt-2 text-sm text-slate-600">{t.highlights.admissionsText}</p>
            <a className="btn mt-4" href={t.highlights.admissionsCtaHref}>{t.highlights.admissionsCtaLabel}</a>
          </div>
          <div className="card p-5">
            <div className="text-sm text-slate-500">{t.highlights.eventsBadge}</div>
            <div className="text-lg font-semibold mt-1">{t.highlights.eventsTitle}</div>
            <p className="mt-2 text-sm text-slate-600">{t.highlights.eventsText}</p>
            <a className="btn-outline mt-4" href={t.highlights.eventsCtaHref}>{t.highlights.eventsCtaLabel}</a>
          </div>
        </div>
      </Section>
    </>
  )
}