'use client'

import { Badge } from '@/components/ui/badge'
import { Building2, MapPin } from 'lucide-react'
import type { ExperienceItem } from '../types'

interface TimelineCardHeaderProps {
	experience: ExperienceItem
	isEven: boolean
}

export function TimelineCardHeader({
	experience,
	isEven,
}: TimelineCardHeaderProps) {
	return (
		<div
			className={`flex flex-col gap-2 mb-4 ${
				!isEven ? 'md:items-end' : 'md:items-start'
			}`}
		>
			<Badge
				variant='outline'
				className='text-sm font-mono text-blue-600 bg-blue-50 px-3 py-1 rounded-full border-blue-200 w-fit'
			>
				{experience.period}
			</Badge>
			<h3 className='text-xl md:text-2xl font-bold text-slate-900 mt-2'>
				{experience.role}
			</h3>
			<div
				className={`flex items-center gap-2 text-slate-600 text-sm ${
					!isEven ? 'md:flex-row-reverse' : ''
				}`}
			>
				<Building2 size={14} />
				<span>{experience.company}</span>
				<span className='w-1 h-1 rounded-full bg-slate-300' />
				<MapPin size={14} />
				<span>{experience.location}</span>
			</div>
		</div>
	)
}

