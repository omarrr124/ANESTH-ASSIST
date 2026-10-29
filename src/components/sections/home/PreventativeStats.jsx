// src/components/sections/home/PreventativeStats.jsx
import { PREVENTATIVE_STATS } from '../../../data/site'
import SectionLabel from '../../ui/SectionLabel'

function RadialChart({ percent }) {
  const radius = 78
  const stroke = 12
  const normalizedRadius = radius - stroke * 0.5
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (percent / 100) * circumference

  return (
    <div className="relative w-44 h-44 flex items-center justify-center">
      <svg height="176" width="176" className="-rotate-90">
        <circle
          stroke="#e8dbc9"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="88"
          cy="88"
        />
        <circle
          stroke="#3e546d"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx="88"
          cy="88"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <span className="absolute font-serif text-4xl text-[#1f1f1f]">
        {percent}%
      </span>
    </div>
  )
}

export default function PreventativeStats() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#fff8f0]">
      <div className="max-w-[1320px] mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <SectionLabel>Pourquoi ANESTH-ASSIST</SectionLabel>
          <h3 className="font-serif text-3xl md:text-5xl text-[#191919] text-center max-w-3xl leading-tight">
            Tout ce dont vous avez besoin pour préparer votre salle simplement
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {PREVENTATIVE_STATS.map(({ percent, label }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white/70 border border-[#e8dbc9]/60 shadow-sm"
            >
              <RadialChart percent={percent} />
              <p className="text-[#333] font-medium text-base max-w-[230px] leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
