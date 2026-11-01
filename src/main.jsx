import { BrowserRouter } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const legacyPage = window.location.hash.slice(1)
if (['home', 'about', 'collection', 'new-arrivals', 'contact'].includes(legacyPage)) {
  window.history.replaceState(null, '', legacyPage === 'home' ? '/' : `/${legacyPage}`)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
