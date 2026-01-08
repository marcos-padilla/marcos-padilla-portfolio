'use client'

import { MapPin } from 'lucide-react'

interface LocationCardProps {
	location: string
}

export function LocationCard({ location }: LocationCardProps) {
	return (
		<div className='flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200'>
			<div className='p-2.5 rounded-lg bg-purple-50 text-purple-600'>
				<MapPin size={20} />
			</div>
			<div className='flex-1 min-w-0'>
				<p className='text-xs text-slate-500 font-medium mb-0.5'>
					Location
				</p>
				<p className='text-base font-semibold text-slate-900'>
					{location}
				</p>
			</div>
		</div>
	)
}

