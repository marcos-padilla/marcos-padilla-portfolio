import { Badge } from '@/components/ui/badge'
import type { Project } from '../types'

interface ProjectTechTagsProps {
	tech: Project['tech']
}

export function ProjectTechTags({ tech }: ProjectTechTagsProps) {
	return (
		<div className='flex flex-wrap gap-2 mb-8'>
			{tech.map((t) => (
				<Badge
					key={t}
					variant='outline'
					className='px-3 py-1.5 rounded-md bg-slate-50 border-slate-200 text-slate-600 text-xs font-medium'
				>
					{t}
				</Badge>
			))}
		</div>
	)
}

