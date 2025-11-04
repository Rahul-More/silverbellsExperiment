import Section from '../components/Section'

export default function Events() {
  const events = [
    { title: 'Annual Sports Day', date: 'Nov 30', desc: 'Inter-house competitions and awards.' },
    { title: 'Science Exhibition', date: 'Dec 15', desc: 'Student projects and demos.' }
  ]

  return (
    <> 
      <Section title="Events" subtitle="What’s happening on campus.">
        <div className="grid gap-4">
          {events.map(e => (
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