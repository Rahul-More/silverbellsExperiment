import { Link } from 'react-router-dom'
import texts from '../i18n'

export default function NotFound() {
  const t = texts.notFound

  return (
    <div className="container-page py-24 text-center">
      <div className="text-6xl font-bold text-brand">{t.code}</div>
      <p className="mt-2 text-slate-600">{t.subtitle}</p>
      <Link to="/" className="btn mt-6">{t.homeLink}</Link>
    </div>
  )
}