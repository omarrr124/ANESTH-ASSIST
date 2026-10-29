// src/components/sections/home/Hero.jsx
import { SITE } from '../../../data/site'

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl mx-6 md:mx-12 my-6 bg-[#243344]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="./images/hero-bloc.png"
          alt="Bloc opératoire — Anesthésie et Réanimation"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#243344]/90 via-[#243344]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[500px] md:min-h-[560px] flex flex-col justify-center px-8 md:px-16 py-20">
        <div className="max-w-[680px] flex flex-col gap-6">

          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
              Techniciens en Anesthésie et Réanimation
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-white leading-[1.12] drop-shadow-sm">
              {SITE.tagline}
            </h1>
            <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl drop-shadow-sm">
              {SITE.subtitle}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
