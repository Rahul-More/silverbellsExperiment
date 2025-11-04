import Section from '../components/Section'

export default function Activities() {
  return (
    <> 
      <Section title="Activities" subtitle="Arts, sports, clubs, and events that enrich learning.">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: 'Sports & Fitness', text: 'Team games, athletics, yoga, and more.' },
            { title: 'Visual & Performing Arts', text: 'Music, dance, theatre, and fine arts.' },
            { title: 'Clubs & Societies', text: 'STEM, literature, environment, and community service.' },
            { title: 'Competitions & Fests', text: 'Inter-house and inter-school opportunities.' }
          ].map((a) => (
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