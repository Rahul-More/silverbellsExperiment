import Section from '../components/Section'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <div className="text-6xl font-bold text-brand">404</div>
      <p className="mt-2 text-slate-600">Page not found</p>
      <Link to="/" className="btn mt-6">Go Home</Link>
    </div>
  )
}