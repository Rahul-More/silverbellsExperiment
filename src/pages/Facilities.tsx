import Section from '../components/Section'

export default function Facilities() {
  return (
    <> 
      <Section title="Facilities" subtitle="Safe and student-friendly infrastructure.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            'Smart Classrooms',
            'Library & Labs',
            'Sports & Play Areas',
            'Transport',
            'Activity Rooms',
            'Infirmary'
          ].map((f) => (
            <div key={f} className="card p-5">
              <div className="font-semibold">{f}</div>
              <p className="mt-2 text-sm text-slate-600">Designed for engaged learning and wellbeing.</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}