// src/components/ui/SectionLabel.jsx – small pill label above headings
export default function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#3e546d] text-[#3e546d] text-xs font-medium tracking-widest uppercase">
      {children}
    </span>
  )
}
