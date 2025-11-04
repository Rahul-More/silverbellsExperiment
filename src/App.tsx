import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="container-page py-20">Loading…</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
