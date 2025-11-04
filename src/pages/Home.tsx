import Hero from '../components/Hero'
import Section from '../components/Section'

export default function Home() {
  return (
    <> 
      <Hero />
      <Section
        title="Why Choose Us"
        subtitle="A compact, modern campus experience focused on excellence in academics, character, and activities."
        ctaLabel="Explore Academics"
        ctaHref="/academics"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Holistic Education', text: 'Balanced focus on academics, co-curriculars, and values.' },
            { title: 'Experienced Faculty', text: 'Dedicated teachers guiding every child’s growth.' },
            { title: 'Modern Infrastructure', text: 'Safe, tech-enabled classrooms and facilities.' },
          ].map((i) => (
            <div key={i.title} className="card p-5">
              <div className="text-brand font-semibold">{i.title}</div>
              <p className="mt-2 text-sm text-slate-600">{i.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Highlights">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-5">
            <div className="text-sm text-slate-500">Admissions</div>
            <div className="text-lg font-semibold mt-1">Now Open</div>
            <p className="mt-2 text-sm text-slate-600">Apply online with a simple, guided process.</p>
            <a className="btn mt-4" href="/admissions">Apply Now</a>
          </div>
          <div className="card p-5">
            <div className="text-sm text-slate-500">Events</div>
            <div className="text-lg font-semibold mt-1">Upcoming Activities</div>
            <p className="mt-2 text-sm text-slate-600">Stay updated with school events and programs.</p>
            <a className="btn-outline mt-4" href="/events">View Events</a>
          </div>
        </div>
      </Section>
    </>
  )
}