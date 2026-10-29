// src/components/ui/Button.jsx
import { cn } from '../../lib/utils'

/**
 * Reusable Button / anchor component.
 * variant: 'primary' | 'outline' | 'ghost'
 */
export default function Button({ children, href, className, variant = 'primary', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 font-inter font-semibold text-sm leading-none rounded-lg transition-all duration-300 cursor-pointer no-underline px-5 py-4'

  const variants = {
    primary: 'bg-[#3e546d] text-white hover:bg-[#243344]',
    outline: 'border border-[#3e546d] text-[#3e546d] bg-transparent hover:bg-[#3e546d] hover:text-white',
    ghost:   'text-[#3e546d] hover:text-[#243344] bg-transparent',
  }

  const cls = cn(base, variants[variant], className)

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
