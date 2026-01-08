'use client'

import { Briefcase, GraduationCap, Calendar } from 'lucide-react'
import type { ExperienceType } from '../types'

interface TimelineCardIconProps {
	type: ExperienceType
	isEven: boolean
}

export function TimelineCardIcon({ type, isEven }: TimelineCardIconProps) {
	const IconComponent =
		type === 'work'
			? Briefcase
			: type === 'education'
				? GraduationCap
				: Calendar

	return (
		<div
			className={`absolute -bottom-4 -right-4 text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 rotate-12 pointer-events-none ${
				!isEven
					? 'md:left-4 md:right-auto md:-rotate-12'
					: ''
			}`}
		>
			<IconComponent size={80} />
		</div>
	)
}

