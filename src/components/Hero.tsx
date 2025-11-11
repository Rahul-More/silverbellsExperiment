import { SITE } from '../site.config'
import { useEffect, useState } from 'react'
import texts from '../i18n'

export default function Hero() {
  const [index, setIndex] = useState(0)
  const images = SITE.heroImages
  const t = texts.home

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 5000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <section className="relative">
      <div className="relative h-[52vh] sm:h-[60vh] md:h-[64vh] lg:h-[70vh] overflow-hidden">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="School"
            loading="eager"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`} 
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 container-page pb-10">
          <div className="max-w-2xl">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold drop-shadow">
              {SITE.name}
            </h1>
            <p className="mt-3 text-white/90 text-sm sm:text-base md:text-lg drop-shadow">
              {SITE.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/admissions" className="btn">{t.heroAdmissionsButton}</a>
              <a href="/about" className="btn-outline">{t.heroLearnMoreButton}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}