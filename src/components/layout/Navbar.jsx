// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE } from '../../data/site'
import { cn } from '../../lib/utils'
import Button from '../ui/Button'

export default function Navbar({ currentPath = '/' }) {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => setOpen(false), [currentPath])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#fff8f0]/95 backdrop-blur-sm border-b border-[#e8dbc9] shadow-sm'
          : 'bg-[#fff8f0] border-b border-[#e8dbc9]'
      )}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 flex items-center justify-between h-[76px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 flex-shrink-0 min-h-0 no-underline">
          <img
            src="./images/rfm-logo.png"
            alt="ANESTH-ASSIT"
            className="h-12 w-12 rounded-full object-contain"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-wide text-[#1f1f1f] leading-tight">
              ANESTH-ASSIT
            </span>
            <span className="text-[10px] font-semibold tracking-[0.16em] text-[#3e546d] uppercase">
              Safety | Precision | Life
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const active = currentPath === href
            return (
              <a
                key={href}
                href={href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                  active
                    ? 'bg-[#eee4d7] text-[#1f1f1f] font-semibold'
                    : 'text-[#1f1f1f] hover:bg-[#eee4d7]/60'
                )}
              >
                {label}
              </a>
            )
          })}
        </div>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href="/services"
            variant="outline"
            className="text-sm py-2.5 px-4"
          >
            Les 4 Étapes
          </Button>
          <Button
            href={SITE.doseblocUrl}
            className="text-sm py-2.5 px-4"
          >
            Ouvrir ANESTH-ASSIST
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[#3e546d] hover:bg-[#eee4d7] transition-colors"
          onClick={() => setOpen(o => !o)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-[#fff8f0] border-t border-[#e8dbc9]',
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 pt-4 pb-6 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const active = currentPath === href
            return (
              <a
                key={href}
                href={href}
                className={cn(
                  'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                  active
                    ? 'bg-[#eee4d7] text-[#1f1f1f] font-semibold'
                    : 'text-[#1f1f1f] hover:bg-[#eee4d7]/60'
                )}
              >
                {label}
              </a>
            )
          })}
          <div className="mt-4 flex flex-col gap-3">
            <Button href="/services" variant="outline" className="w-full justify-center text-sm">
              Les 4 Étapes
            </Button>
            <Button
              href={SITE.doseblocUrl}
              className="w-full justify-center text-sm"
            >
              Ouvrir ANESTH-ASSIST
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
