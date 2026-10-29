// src/components/ui/Badge.jsx
import { cn } from '../../lib/utils'

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#3e546d] text-[#3e546d] text-xs font-medium tracking-wide',
        className
      )}
    >
      {children}
    </span>
  )
}
