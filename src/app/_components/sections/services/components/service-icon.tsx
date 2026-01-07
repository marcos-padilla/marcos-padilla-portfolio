import type { LucideIcon } from 'lucide-react'

interface ServiceIconProps {
	icon: LucideIcon
	color: string
}

export function ServiceIcon({ icon: Icon, color }: ServiceIconProps) {
	return (
		<div className='p-3 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl relative z-10'>
			<Icon className='w-6 h-6' style={{ color }} />
		</div>
	)
}

