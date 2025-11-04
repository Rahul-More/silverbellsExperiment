type Props = {
  title: string
  subtitle?: string
  children?: React.ReactNode
  ctaLabel?: string
  ctaHref?: string
}

export default function Section({ title, subtitle, children, ctaLabel, ctaHref }: Props) {
  return (
    <section className="container-page py-12">
      <div className="max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
        {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
      </div>
      <div className="mt-6">
        {children}
      </div>
      {ctaLabel && ctaHref && (
        <div className="mt-6">
          <a href={ctaHref} className="btn">{ctaLabel}</a>
        </div>
      )}
    </section>
  )
}