export type NavLink = {
  key:
    | 'home'
    | 'about'
    | 'academics'
    | 'admissions'
    | 'facilities'
    | 'activities'
    | 'gallery'
    | 'news'
    | 'events'
    | 'careers'
    | 'contact'
  label: string
  path: string
  external?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'about', label: 'About', path: '/about' },
  { key: 'academics', label: 'Academics', path: '/academics' },
  { key: 'admissions', label: 'Admissions', path: '/admissions' },
  { key: 'facilities', label: 'Facilities', path: '/facilities' },
  { key: 'activities', label: 'Activities', path: '/activities' },
  { key: 'gallery', label: 'Gallery', path: '/gallery' },
  { key: 'news', label: 'News', path: '/news' },
  { key: 'events', label: 'Events', path: '/events' },
  { key: 'careers', label: 'Careers', path: '/careers' },
  { key: 'contact', label: 'Contact', path: '/contact' },
]

export const SITE = {
  name: 'Silverbells School',
  tagline: 'Inspiring Excellence, Nurturing Character',
  // Replace these URLs with real image URLs from silverbellsschool.org if permitted
  heroImages: [
    'https://images.unsplash.com/photo-1523246191897-eca2276d8b6b?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop'
  ],
  contact: {
    email: 'info@silverbellsschool.org',
    phone: '+91 00000 00000',
    address: 'Silverbells School, Your City, India'
  },
  social: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    youtube: '#'
  }
}
