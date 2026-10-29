// src/components/sections/home/About.jsx
import { ABOUT_PARAGRAPHS, ABOUT_LEAD } from '../../../data/site'
import SectionLabel from '../../ui/SectionLabel'

export default function About() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#fff8f0]">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Image */}
          <div className="w-full lg:w-[44%] shrink-0 rounded-2xl overflow-hidden bg-white border border-[#e8dbc9] shadow-lg">
            <img
              src="./images/about-syringe.jpg"
              alt="Préparation et dilution des seringues d'anesthésie"
              className="w-full h-full max-h-[540px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col gap-7">
            <SectionLabel>Simple &amp; Pratique</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1f1f1f] leading-[1.18]">
              Conçue pour faciliter le travail du technicien au bloc.
            </h2>
            <p className="text-[#3e546d] font-medium text-lg leading-relaxed italic">
              {ABOUT_LEAD}
            </p>
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <p key={i} className="text-[#333] text-base leading-relaxed">
                {p}
              </p>
            ))}

            {/* Approach pills */}
            <div className="flex flex-wrap gap-3 mt-1">
              {[
                { main: 'Simplification en Seringues', sub: 'Ex. : 200 mg Propofol = 1 seringue de 20 ml (ampoule 200 mg/20 ml)' },
                { main: 'Choix de l’Entretien',        sub: 'Gaz volatils ou PSE juste après l’induction' },
              ].map(({ main, sub }) => (
                <div
                  key={main}
                  className="px-4 py-3 rounded-xl border border-[#e8dbc9] bg-[#f3ece2] flex flex-col gap-0.5"
                >
                  <span className="font-semibold text-sm text-[#1f1f1f]">{main}</span>
                  <span className="text-xs text-[#3e546d]">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
