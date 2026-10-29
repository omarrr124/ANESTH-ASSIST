// src/pages/Contact.jsx
import { SITE } from '../data/site'
import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'
import { ShieldCheck, Mail, BookOpen, Clock, CheckCircle2 } from 'lucide-react'

function InfoItem({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-[#e8dbc9] flex items-center justify-center shrink-0">
        <Icon size={18} className="text-[#3e546d]" />
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-medium text-[#3e546d] uppercase tracking-wide">{label}</span>
        <span className="text-[#1f1f1f] text-base">{children}</span>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f3ece2] py-20 px-6 md:px-12">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-5">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="font-serif text-4xl md:text-6xl text-[#1f1f1f] leading-tight">
            Une Question ou une Suggestion ?
          </h1>
          <p className="text-[#3e546d] font-medium text-base max-w-2xl">
            ANESTH-ASSIST est conçu pour simplifier le quotidien des techniciens en anesthésie et réanimation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 md:px-12 bg-[#fff8f0]">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <h2 className="font-serif text-3xl text-[#1f1f1f]">À Propos de l’Application</h2>

            <div className="flex flex-col gap-6">
              <InfoItem icon={ShieldCheck} label="Pour qui ?">
                {SITE.addressLine1} — {SITE.addressLine2}
              </InfoItem>

              <InfoItem icon={BookOpen} label="Calculs">
                Basés sur les {SITE.fax}
              </InfoItem>

              <InfoItem icon={Mail} label="Email">
                <a href={`mailto:${SITE.email}`} className="hover:text-[#3e546d] transition-colors">
                  {SITE.email}
                </a>
              </InfoItem>

              <InfoItem icon={Clock} label="Disponibilité">
                <span>
                  {SITE.hours}<br />
                  <span className="text-sm text-[#666]">{SITE.hoursNote}</span><br />
                  <span className="text-sm text-[#666]">{SITE.closed}</span>
                </span>
              </InfoItem>
            </div>

            <div className="pt-2">
              <Button href={SITE.doseblocUrl}>
                Ouvrir ANESTH-ASSIST
              </Button>
            </div>
          </div>

          {/* Checklist Summary Card */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-[#e8dbc9] bg-white p-8 lg:p-10 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#3e546d]">
                En Résumé
              </span>
              <h3 className="font-serif text-2xl text-[#1f1f1f]">
                Comment fonctionne ANESTH-ASSIST :
              </h3>
              <ul className="flex flex-col gap-3.5 mt-2">
                {[
                  '1. Première interface : Vous entrez les données du patient (sexe, âge, taille, poids, groupage sanguin), les valeurs du bilan biologique et l’évaluation pré-anesthésique (Mallampati, NYHA, MET…).',
                  '2. Choix des drogues : Vous avez une liste de drogues et vous choisissez selon ce que vous avez dans le bloc.',
                  '3. Calcul pour l’induction & simplification : L’application calcule les doses selon les recommandations récentes et vous donne une simplification claire (ex : 200 mg Propofol = une seringue de 20 ml d’une ampoule de 200 mg/20 ml).',
                  '4. Choix de l’entretien : Après l’induction, l’application vous donne le choix du type d’entretien (gaz volatils, PSE, etc.).',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#333] leading-relaxed">
                    <CheckCircle2 size={18} className="text-[#3e546d] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
