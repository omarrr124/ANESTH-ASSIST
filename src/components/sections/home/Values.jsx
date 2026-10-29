// src/components/sections/home/Values.jsx
import { VALUES } from '../../../data/site'
import { CompassionIcon, ComfortIcon, IntegrityIcon, FaithIcon } from '../../ui/Icons'

const ICON_COMPONENTS = {
  Compassion: CompassionIcon,
  Comfort:    ComfortIcon,
  Integrity:  IntegrityIcon,
  Faith:      FaithIcon,
}

export default function Values() {
  return (
    <section className="py-12 px-6 md:px-12 bg-[#fff8f0]">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#e8dbc9] border border-[#e8dbc9] rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm">
          {VALUES.map(({ title, displayTitle, body }) => {
            const IconComponent = ICON_COMPONENTS[title] || CompassionIcon
            return (
              <div
                key={title}
                className="flex flex-col items-center text-center gap-5 p-8 md:p-10"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#f3ece2] border border-[#e8dbc9] flex items-center justify-center">
                  <IconComponent className="w-7 h-7 text-[#3e546d]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-2xl text-[#1f1f1f]">{displayTitle || title}</h3>
                  <p className="text-[#4c4c4c] text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
