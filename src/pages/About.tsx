import Section from '../components/Section'

export default function About() {
  return (
    <> 
      <Section title="About Us" subtitle="Our mission is to nurture confident and compassionate learners.">
        <div className="prose prose-slate max-w-none">
          <p>
            We provide a student-centered, inclusive environment where every child discovers
            their potential through academic excellence and meaningful experiences.
          </p>
        </div>
      </Section>

      <Section title="Leadership & Values">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-5">
            <div className="font-semibold">Vision</div>
            <p className="mt-2 text-sm text-slate-600">To inspire lifelong learning and character building.</p>
          </div>
          <div className="card p-5">
            <div className="font-semibold">Mission</div>
            <p className="mt-2 text-sm text-slate-600">To foster curiosity, creativity, and community spirit.</p>
          </div>
        </div>
      </Section>
    </>
  )
}