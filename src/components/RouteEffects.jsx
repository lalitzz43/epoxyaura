import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { navigation } from '../data/siteData'

export default function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const page = pathname === '/' ? 'home' : pathname.slice(1)
    const title = navigation.find(([key]) => key === page)?.[1] || 'Home'
    document.title = `${title} | EPOXYAURA`
  }, [pathname])

  return null
}
