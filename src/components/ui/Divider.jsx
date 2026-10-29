// src/components/ui/Divider.jsx – thin horizontal rule used between sections
import { cn } from '../../lib/utils'

export default function Divider({ className }) {
  return <hr className={cn('border-t border-[#e8dbc9] w-full', className)} />
}
