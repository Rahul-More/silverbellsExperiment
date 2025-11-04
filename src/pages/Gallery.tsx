import Section from '../components/Section'

const sampleImages = [
  // Replace these with valid image URLs from silverbellsschool.org if permitted
  'https://images.unsplash.com/photo-1537202108838-e7072bad1927?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523246191897-eca2276d8b6b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop'
]

export default function Gallery() {
  return (
    <> 
      <Section title="Gallery" subtitle="Snapshots from campus life.">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {sampleImages.map((src) => (
            <img
              key={src}
              src={src}
              alt="Campus"
              loading="lazy"
              className="w-full h-52 object-cover rounded-lg border border-slate-200"
            />
          ))}
        </div>
      </Section>
    </>
  )
}