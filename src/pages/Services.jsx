// src/pages/Services.jsx
import { SERVICES, SITE } from '../data/site'
import SectionLabel        from '../components/ui/SectionLabel'
import Button              from '../components/ui/Button'
import PatientPortalBanner from '../components/sections/PatientPortalBanner'

const STEP_PREVIEWS = [
  {
    step: 'ÉTAPE 1',
    subtitle: 'Données du Patient & Fiche Pré-AG',
    metrics: [
      { k: 'Patient', v: 'Sexe · Âge · Taille · Poids · Groupage sanguin' },
      { k: 'Bilan Biologique', v: 'Valeurs du bilan (Hémoglobine, Plaquettes, Créatinine…)' },
      { k: 'Fiche Pré-AG', v: 'Mallampati · NYHA · MET · ASA' },
    ],
  },
  {
    step: 'ÉTAPE 2',
    subtitle: 'Choix des Drogues du Bloc',
    metrics: [
      { k: 'Liste des drogues', v: 'Vous cochez ce que vous avez dans votre bloc' },
      { k: 'Hypnotiques & Morphiniques', v: 'Propofol, Étomidate, Kétamine, Sufentanil, Fentanyl…' },
      { k: 'Curares & Autres', v: 'Rocuronium, Célocurine, Cisatracurium, Éphédrine…' },
    ],
  },
  {
    step: 'ÉTAPE 3',
    subtitle: 'Calcul d’Induction & Simplification',
    metrics: [
      { k: 'Calcul automatique', v: 'Doses d’induction selon les recommandations récentes' },
      { k: 'Exemple Propofol', v: '200 mg = 1 seringue de 20 ml (ampoule 200 mg/20 ml)' },
      { k: 'Dilution claire', v: 'Volume exact en ml et nombre d’ampoules à préparer' },
    ],
  },
  {
    step: 'ÉTAPE 4',
    subtitle: 'Choix du Type d’Entretien',
    metrics: [
      { k: 'Gaz volatils', v: 'Sévoflurane, Desflurane ou Isoflurane' },
      { k: 'PSE (Pousse-seringue)', v: 'Débits d’entretien calculés directement en ml/h' },
      { k: 'Suivi simple', v: 'Réinjections et entretien adaptés au patient' },
    ],
  },
]

function ServiceCard({ service, index, reverse = false }) {
  const { id, title, tags, body } = service
  const preview = STEP_PREVIEWS[index] || STEP_PREVIEWS[0]

  return (
    <div
      id={id}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-0 rounded-2xl overflow-hidden border border-[#e8dbc9] shadow-sm bg-white scroll-mt-28`}
    >
      {/* Visual Panel */}
      <div className="w-full lg:w-5/12 shrink-0 bg-[#243344] text-white p-8 lg:p-10 flex flex-col justify-between gap-6">
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-[#3e546d] text-[#e8dbc9]">
            {preview.step}
          </span>
          <span className="text-xs text-white/60 font-mono">ANESTH-ASSIST</span>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-xl text-[#e8dbc9]">{preview.subtitle}</h3>
          <div className="flex flex-col gap-2.5 mt-1">
            {preview.metrics.map(({ k, v }) => (
              <div key={k} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                <div className="text-[11px] uppercase tracking-wider text-[#e8dbc9]/80 font-semibold">{k}</div>
                <div className="text-sm text-white font-medium mt-0.5">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="w-full lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center gap-5">
        <div className="flex gap-2 flex-wrap">
          {tags.map(t => (
            <span key={t} className="text-xs px-3 py-1 rounded-full bg-[#e8dbc9] text-[#3e546d] font-medium">
              {t}
            </span>
          ))}
        </div>
        <h2 className="font-serif text-2xl md:text-4xl text-[#1f1f1f] leading-snug">{title}</h2>
        <p className="text-[#444] text-base leading-relaxed">{body}</p>
        <div className="pt-2">
          <Button href={SITE.doseblocUrl} variant="outline">
            Ouvrir dans ANESTH-ASSIST
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f3ece2] py-20 px-6 md:px-12">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-5">
          <SectionLabel>Les 4 Étapes</SectionLabel>
          <h1 className="font-serif text-4xl md:text-6xl text-[#1f1f1f] leading-tight max-w-4xl">
            Comment utiliser l’application en 4 étapes simples
          </h1>
          <p className="text-[#3e546d] font-medium text-base max-w-3xl">
            Entrez les données du patient, choisissez les drogues présentes dans votre bloc, obtenez vos doses d’induction simplifiées en seringues, puis choisissez votre entretien.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 px-6 md:px-12 bg-[#fff8f0]">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} reverse={i % 2 !== 0} />
          ))}
        </div>
      </section>

      <PatientPortalBanner />
    </>
  )
}
