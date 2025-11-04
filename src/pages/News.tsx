import Section from '../components/Section'

export default function News() {
  const items = [
    { title: 'Exam Schedule Released', date: 'Oct 2025', desc: 'Check the timetable and guidelines.' },
    { title: 'New Club Launched', date: 'Sep 2025', desc: 'Join the Student Innovation Club.' }
  ]

  return (
    <> 
      <Section title="News" subtitle="Latest announcements and updates.">
        <div className="grid gap-4">
          {items.map(n => (
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