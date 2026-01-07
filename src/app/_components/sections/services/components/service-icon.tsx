import type { LucideIcon } from 'lucide-react'

interface ServiceIconProps {
	icon: LucideIcon
	color: string
}

export function ServiceIcon({ icon: Icon, color }: ServiceIconProps) {
	return (
		<div className='p-3 rounded-2xl bg-white border border-slate-200 shadow-sm relative z-10'>
			<Icon className='w-6 h-6' style={{ color }} />
		</div>
	)
}

