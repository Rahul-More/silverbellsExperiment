import Section from '../components/Section'
import { SITE } from '../site.config'

export default function Contact() {
  return (
    <> 
      <Section title="Contact Us" subtitle="We’re here to help.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-5">
            <div className="font-semibold">Reach Us</div>
            <ul className="mt-2 text-sm text-slate-700 grid gap-1">
              <li>{SITE.contact.address}</li>
              <li><a className="hover:text-slate-900" href={`tel:${SITE.contact.phone}`}>{SITE.contact.phone}</a></li>
              <li><a className="hover:text-slate-900" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a></li>
            </ul>
            <div className="mt-4">
              <div className="text-xs text-slate-500">Office Hours</div>
              <div className="text-sm">Mon–Fri, 9:00 AM – 4:00 PM</div>
            </div>
          </div>

          <form className="card p-5 grid gap-3" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm text-slate-600">Name</label>
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Your name" required />
            </div>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="text-sm text-slate-600">Message</label>
              <textarea className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" rows={4} placeholder="How can we help?" required />
            </div>
            <button className="btn" type="submit">Send Message</button>
            <p className="text-xs text-slate-500">This demo form does not send emails. Replace with your form backend.</p>
          </form>
        </div>
      </Section>
    </>
  )
}