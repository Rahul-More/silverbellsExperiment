import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Academics = lazy(() => import('./pages/Academics'))
const Admissions = lazy(() => import('./pages/Admissions'))
const Facilities = lazy(() => import('./pages/Facilities'))
const Activities = lazy(() => import('./pages/Activities'))
const Gallery = lazy(() => import('./pages/Gallery'))
const News = lazy(() => import('./pages/News'))
const Events = lazy(() => import('./pages/Events'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

import App from './App'
import { NAV_LINKS } from './site.config'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      { index: true, element: <Home /> },
      ...NAV_LINKS.filter(l => !l.external).map(l => ({
        path: l.path.replace(/^\\/, ''),
        element:
          l.key === 'about' ? <About /> :
          l.key === 'academics' ? <Academics /> :
          l.key === 'admissions' ? <Admissions /> :
          l.key === 'facilities' ? <Facilities /> :
          l.key === 'activities' ? <Activities /> :
          l.key === 'gallery' ? <Gallery /> :
          l.key === 'news' ? <News /> :
          l.key === 'events' ? <Events /> :
          l.key === 'careers' ? <Careers /> :
          l.key === 'contact' ? <Contact /> :
          <Navigate to="/" />
      })),
      { path: '*', element: <NotFound /> }
    ]
  }
])
