// src/components/sections/home/FAQ.jsx
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '../../../data/site'
import SectionLabel from '../../ui/SectionLabel'
import { cn } from '../../../lib/utils'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#e8dbc9] last:border-b-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-[#1f1f1f] text-base">{q}</span>
        <ChevronDown
          size={20}
          className={cn(
            'shrink-0 text-[#3e546d] transition-transform duration-300',
            open && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <p className="text-[#555] text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-6 md:px-12 bg-[#fff8f0]">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-4">
          <SectionLabel>Questions Fréquentes</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1f1f1f]">
            Fonctionnement de l'Application au Bloc
          </h2>
        </div>
        <div className="bg-white rounded-2xl px-6 md:px-10 shadow-sm border border-[#e8dbc9]/60">
          {FAQS.map(({ q, a }) => (
            <FAQItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
