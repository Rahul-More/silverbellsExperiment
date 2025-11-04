import Section from '../components/Section'

export default function Admissions() {
  return (
    <> 
      <Section title="Admissions" subtitle="We’re excited to welcome new learners.">
        <ol className="list-decimal pl-5 text-sm text-slate-700 grid gap-2">
          <li>Submit an online enquiry</li>
          <li>Visit campus and interaction (as applicable)</li>
          <li>Confirm seat and complete documentation</li>
        </ol>
        <a className="btn mt-6" href="mailto:info@silverbellsschool.org?subject=Admission Enquiry">Enquire via Email</a>
      </Section>

      <Section title="Documents Required">
        <ul className="list-disc pl-5 text-sm text-slate-700 grid gap-1">
          <li>Birth certificate</li>
          <li>Previous school reports</li>
          <li>Passport-size photographs</li>
          <li>Address proof</li>
        </ul>
      </Section>
    </>
  )
}