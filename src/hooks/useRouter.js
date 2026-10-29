// src/hooks/useRouter.js
import { useState, useEffect } from 'react'

function normalizePath() {
  // Support hash routing (e.g. #/team) for static/Live Server/file:// environments
  if (window.location.hash && window.location.hash.startsWith('#/')) {
    return window.location.hash.slice(1)
  }
  const p = window.location.pathname || '/'
  if (p.endsWith('/index.html') || p === '/index.html') {
    return '/'
  }
  return p
}

export function useRouter() {
  const [path, setPath] = useState(normalizePath)

  useEffect(() => {
    const handler = () => setPath(normalizePath())
    window.addEventListener('popstate', handler)
    window.addEventListener('hashchange', handler)
    return () => {
      window.removeEventListener('popstate', handler)
      window.removeEventListener('hashchange', handler)
    }
  }, [])

  return path
}
