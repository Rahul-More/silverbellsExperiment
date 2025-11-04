import Section from '../components/Section'

export default function Academics() {
  return (
    <> 
      <Section title="Academics" subtitle="A structured curriculum supported by modern pedagogy and evaluation.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: 'Primary', text: 'Foundational learning with focus on literacy, numeracy, and exploration.' },
            { title: 'Middle School', text: 'Concept mastery through inquiry, projects, and applied practices.' },
            { title: 'Secondary', text: 'Advanced preparation for board exams and future pathways.' }
          ].map(x => (
            <div key={x.title} className="card p-5">
              <div className="font-semibold">{x.title}</div>
              <p className="mt-2 text-sm text-slate-600">{x.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Co-Scholastic" subtitle="Sports, arts, and clubs for holistic development." />
    </>
  )
}