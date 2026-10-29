// src/pages/PrivacyPolicy.jsx
import { PRIVACY_POLICY, SITE } from '../data/site'
import SectionLabel from '../components/ui/SectionLabel'

function Section({ section }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-serif text-2xl text-[#1f1f1f]">{section.title}</h2>
      {section.content && <p className="text-[#444] text-sm leading-relaxed">{section.content}</p>}
      {section.items && (
        <ul className="list-none flex flex-col gap-1.5 pl-4">
          {section.items.map((item, i) => (
            <li key={i} className="text-[#444] text-sm leading-relaxed before:content-['•'] before:mr-2 before:text-[#3e546d]">
              {item}
            </li>
          ))}
        </ul>
      )}
      {section.note && <p className="text-[#555] text-sm italic leading-relaxed">{section.note}</p>}
      {section.subsections && section.subsections.map((sub, i) => (
        <div key={i} className="pl-4 flex flex-col gap-3">
          <h3 className="font-semibold text-base text-[#1f1f1f]">{sub.title}</h3>
          <p className="text-[#444] text-sm leading-relaxed">{sub.content}</p>
          {sub.items && (
            <ul className="flex flex-col gap-1.5 pl-4">
              {sub.items.map((item, j) => (
                <li key={j} className="text-[#444] text-sm leading-relaxed before:content-['•'] before:mr-2 before:text-[#3e546d]">
                  {item}
                </li>
              ))}
            </ul>
          )}
          {sub.note && <p className="text-[#555] text-sm italic">{sub.note}</p>}
        </div>
      ))}
      {section.contact && (
        <div className="pl-4 flex flex-col gap-1 text-sm text-[#444]">
          <span className="font-medium text-[#1f1f1f]">{section.contact.name}</span>
          <span>{section.contact.address}</span>
          <span>{section.contact.phone}</span>
          <a href={`mailto:${SITE.email}`} className="hover:text-[#3e546d] transition-colors">{section.contact.email}</a>
        </div>
      )}
    </div>
  )
}

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-[#f3ece2] py-20 px-6 md:px-12">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-5">
          <SectionLabel>Confidentialité &amp; Sécurité Clinique</SectionLabel>
          <h1 className="font-serif text-4xl md:text-6xl text-[#1f1f1f] leading-tight">
            Confidentialité des Données &amp; Bon Usage au Bloc
          </h1>
          <p className="text-[#555] text-sm">Dernière mise à jour : {PRIVACY_POLICY.lastUpdated}</p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-[#fff8f0]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#333] text-base leading-relaxed mb-10">
            ANESTH-ASSIT s'engage à garantir la confidentialité totale des paramètres cliniques saisis lors de vos calculs de doses, de dilutions et d'entretien au bloc opératoire.
          </p>
          <div className="flex flex-col divide-y divide-[#e8dbc9] gap-0">
            {PRIVACY_POLICY.sections.map((section, i) => (
              <div key={i} className="py-8">
                <Section section={section} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
