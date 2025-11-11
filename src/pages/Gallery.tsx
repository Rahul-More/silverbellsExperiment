import Section from '../components/Section'
import texts from '../i18n'

const sampleImages = [
  'https://images.unsplash.com/photo-1537202108838-e7072bad1927?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523246191897-eca2276d8b6b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop'
]

export default function Gallery() {
  const t = texts.gallery

  return (
    <> 
      <Section title={t.title} subtitle={t.subtitle}>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {sampleImages.map((src) => (
            <img
              key={src}
              src={src}
              alt={t.imageAlt}
              loading="lazy"
              className="w-full h-52 object-cover rounded-lg border border-slate-200"
            />
          ))}
        </div>
      </Section>
    </>
  )
}