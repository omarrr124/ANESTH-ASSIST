// src/components/layout/Footer.jsx
import { SITE, NAV_LINKS } from '../../data/site'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#243344] text-white">
      {/* Clinical motto banner */}
      <div className="border-b border-white/10 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-3">
          <p className="font-serif text-xl md:text-3xl text-white/95 italic leading-relaxed">
            {SITE.verse}
          </p>
          <p className="text-sm text-[#e8dbc9] font-medium tracking-wider uppercase">{SITE.verseRef}</p>
          <p className="text-sm text-white/60">— Dédié aux Techniciens Supérieurs en Anesthésie et Réanimation</p>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand & Info column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a href="/" className="flex items-center gap-3.5 w-fit min-h-0 no-underline">
              <img
                src="./images/rfm-logo-light.png"
                alt="ANESTH-ASSIT"
                className="h-14 w-14 rounded-full object-contain bg-white p-0.5"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-wide text-white leading-tight">
                  ANESTH-ASSIT
                </span>
                <span className="text-[10px] font-semibold tracking-[0.18em] text-[#e8dbc9] uppercase">
                  Safety | Precision | Life
                </span>
              </div>
            </a>
            <div className="text-white/75 text-sm leading-relaxed space-y-1.5 max-w-md">
              <p className="font-medium text-white/90">{SITE.hours}</p>
              <p className="text-white/65">{SITE.hoursNote}</p>
              <p className="text-white/65">{SITE.closed}</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-5">Navigation Rapide</h4>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-white/70 hover:text-[#e8dbc9] transition-colors min-h-0 py-1"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/#faq" className="text-sm text-white/70 hover:text-[#e8dbc9] transition-colors min-h-0 py-1">
                  Questions Fréquentes (FAQ)
                </a>
              </li>
              <li>
                <a
                  href={SITE.doseblocUrl}
                  className="text-sm text-white/70 hover:text-[#e8dbc9] transition-colors min-h-0 py-1"
                >
                  Calculateur ANESTH-ASSIST
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-sm text-white/70 hover:text-[#e8dbc9] transition-colors min-h-0 py-1">
                  Confidentialité &amp; Avertissement
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Referentials */}
          <div>
            <h4 className="font-serif text-lg text-white mb-5">Support Clinique</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 shrink-0 text-[#e8dbc9]" />
                <span>{SITE.phone}<br/>{SITE.fax}</span>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 hover:text-[#e8dbc9] transition-colors min-h-0">
                  <Mail size={16} className="mt-1 shrink-0 text-[#e8dbc9]" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-[#e8dbc9]" />
                <span>{SITE.addressLine1}<br/>{SITE.addressLine2}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-5">
        <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>{SITE.copyright}</span>
          <span>Outil d'aide au calcul — Toujours vérifier le protocole du MAR</span>
        </div>
      </div>
    </footer>
  )
}
