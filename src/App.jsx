import { useLocation } from 'react-router'
import AppRoutes from './routes/AppRoutes'
import RouteEffects from './components/RouteEffects'

export default function App() {
  const { pathname } = useLocation()

  return (
    <>
      <RouteEffects />
      <AppRoutes key={pathname} />
    </>
  )
}
