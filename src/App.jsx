// src/App.jsx
import { useEffect } from 'react'
import { useRouter } from './hooks/useRouter'
import PageLayout    from './components/layout/PageLayout'

import Home          from './pages/Home'
import Team          from './pages/Team'
import Services      from './pages/Services'
import Contact       from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'

function useSPALinks() {
  useEffect(() => {
    function handleClick(e) {
      const anchor = e.target.closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (
        !href ||
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.endsWith('.html') ||
        anchor.target === '_blank'
      )
        return

      // Pure hash on current page
      if (href.startsWith('#') && !href.startsWith('#/')) {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        return
      }

      if (href.startsWith('/')) {
        e.preventDefault()
        const [pathname, hash] = href.split('#')
        if (window.location.protocol === 'file:') {
          window.location.hash = '#' + pathname
        } else {
          window.history.pushState(null, '', '#' + pathname)
          window.dispatchEvent(new PopStateEvent('popstate'))
        }

        if (hash) {
          setTimeout(() => {
            const el = document.getElementById(hash)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}

const PAGE_TITLES = {
  '/':               'ANESTH-ASSIT — Application pour Techniciens en Anesthésie et Réanimation',
  '/team':           'Référentiels & Calculs | ANESTH-ASSIT',
  '/services':       'Workflow & Modules | ANESTH-ASSIT',
  '/contact':        'Support & Protocole | ANESTH-ASSIT',
  '/privacy-policy': 'Confidentialité & Sécurité | ANESTH-ASSIT',
}

function RouterView({ path }) {
  const p = path === '/' ? '/' : path.replace(/\/$/, '')
  switch (p) {
    case '/':               return <Home />
    case '/team':           return <Team />
    case '/services':       return <Services />
    case '/contact':        return <Contact />
    case '/privacy-policy': return <PrivacyPolicy />
    default:                return <Home />
  }
}

export default function App() {
  const path = useRouter()
  useSPALinks()

  useEffect(() => {
    const p = path === '/' ? '/' : path.replace(/\/$/, '')
    document.title = PAGE_TITLES[p] ?? 'ANESTH-ASSIT'
  }, [path])

  return (
    <PageLayout currentPath={path}>
      <RouterView path={path} />
    </PageLayout>
  )
}
