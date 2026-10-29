// src/components/sections/home/ServicesPreview.jsx
import { HOME_SERVICES } from '../../../data/site'
import SectionLabel from '../../ui/SectionLabel'
import Button from '../../ui/Button'
import { ArrowRight } from 'lucide-react'

export default function ServicesPreview() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#f3ece2]">
      <div className="max-w-[1320px] mx-auto flex flex-col items-center gap-12">

        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
          <SectionLabel>Comment ça fonctionne</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl text-[#1f1f1f] leading-tight">
            Un Calcul Simple du Début à la Fin
          </h2>
          <p className="text-[#3e546d] text-base font-medium">
            Données Patient · Choix des Drogues du Bloc · Doses d’Induction Simplifiées · Entretien
          </p>
        </div>

        {/* 3-Column Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {HOME_SERVICES.map(({ id, title, summary, href }) => (
            <div
              key={id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e8dbc9] flex flex-col justify-between p-7 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#e8dbc9]/70 text-[#3e546d]">
                  {id === 'patient-evaluation' && '1 · Première Interface'}
                  {id === 'induction-dilution' && '2 · Choix & Induction'}
                  {id === 'entretien-surveillance' && '3 · Après l’Induction'}
                </span>
                <h3 className="font-serif text-2xl text-[#191919] leading-snug">{title}</h3>
                <p className="text-[#4c4c4c] text-sm leading-relaxed">{summary}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#e8dbc9]/60 flex flex-col gap-2">
                <Button
                  href={href}
                  variant="outline"
                  className="w-full justify-center text-sm py-3"
                >
                  En savoir plus <ArrowRight size={15} />
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
