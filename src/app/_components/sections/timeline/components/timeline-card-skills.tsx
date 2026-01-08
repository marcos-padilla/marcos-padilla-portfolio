'use client'

import { Badge } from '@/components/ui/badge'

interface TimelineCardSkillsProps {
	skills: string[]
	isEven: boolean
}

export function TimelineCardSkills({
	skills,
	isEven,
}: TimelineCardSkillsProps) {
	return (
		<div
			className={`flex flex-wrap gap-2 ${
				!isEven ? 'md:justify-end' : ''
			}`}
		>
			{skills.map((skill) => (
				<Badge
					key={skill}
					variant='outline'
					className='px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-700 border-slate-200 group-hover:border-slate-300 transition-colors'
				>
					{skill}
				</Badge>
			))}
		</div>
	)
}

