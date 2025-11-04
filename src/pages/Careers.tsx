import Section from '../components/Section'

export default function Careers() {
  const jobs = [
    { role: 'Primary Teacher', type: 'Full-time', location: 'On-site' },
    { role: 'Science Lab Assistant', type: 'Part-time', location: 'On-site' }
  ]
  return (
    <> 
      <Section title="Careers" subtitle="Join our talented and caring team.">
        <div className="grid gap-4">
          {jobs.map(j => (
            <div key={j.role} className="card p-5 flex items-center justify-between">
              <div>
                <div className="font-semibold">{j.role}</div>
                <div className="text-xs text-slate-500">{j.type} • {j.location}</div>
              </div>
              <a className="btn-outline" href="mailto:info@silverbellsschool.org?subject=Job Application">Apply</a>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}