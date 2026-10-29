// src/pages/Team.jsx
import { TEAM } from '../data/site'
import SectionLabel from '../components/ui/SectionLabel'
import Badge        from '../components/ui/Badge'

const REF_NUMBERS = ['ÉTAPE 1 · PATIENT', 'ÉTAPE 2 & 3 · INDUCTION', 'ÉTAPE 4 · ENTRETIEN']

function TeamMemberCard({ member, index }) {
  const { name, credentials, badge, bio } = member
  const paragraphs = bio.split('\n\n')

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e8dbc9] flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="w-full md:w-80 shrink-0 bg-[#243344] text-white p-8 flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#e8dbc9]">
            {REF_NUMBERS[index] || 'GUIDE'}
          </span>
          <h3 className="font-serif text-2xl text-white leading-snug">{name}</h3>
        </div>
        <div className="border-t border-white/15 pt-4">
          <p className="text-xs text-[#e8dbc9]/90 leading-relaxed font-medium">
            {credentials}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="p-8 lg:p-10 flex flex-col gap-5 justify-center">
        <div className="flex flex-wrap items-start gap-3">
          <Badge>{badge}</Badge>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-[#1f1f1f]">{name}</h2>
          <p className="text-[#3e546d] font-medium text-sm mt-1">{credentials}</p>
        </div>
        <div className="flex flex-col gap-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[#333] text-sm leading-relaxed">{p}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-[#f3ece2] py-20 px-6 md:px-12">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-5">
          <SectionLabel>Comment ça marche</SectionLabel>
          <h1 className="font-serif text-4xl md:text-6xl text-[#1f1f1f] leading-tight">
            Un guide clair pour vos calculs au quotidien
          </h1>
          <p className="text-[#3e546d] font-medium text-base max-w-3xl">
            Découvrez comment l’application utilise les données de votre patient pour calculer et simplifier les doses d’induction, les dilutions et l’entretien.
          </p>
        </div>
      </section>

      {/* Reference list */}
      <section className="py-16 px-6 md:px-12 bg-[#fff8f0]">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-8">
          {TEAM.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </section>
    </>
  )
}
