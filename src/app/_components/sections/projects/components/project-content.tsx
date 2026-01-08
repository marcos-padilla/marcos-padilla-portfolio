'use client'

import { Badge } from '@/components/ui/badge'
import { ProjectTechTags } from './project-tech-tags'
import { ProjectActions } from './project-actions'
import type { Project } from '../types'

interface ProjectContentProps {
	project: Project
	index: number
	totalProjects: number
}

export function ProjectContent({
	project,
	index,
	totalProjects,
}: ProjectContentProps) {
	return (
		<div className='w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between order-2 md:order-1 relative z-10 flex-shrink-0'>
			<div>
				<div className='flex items-center justify-between mb-8'>
					<Badge
						variant='outline'
						className='px-3 py-1 rounded-full text-xs font-medium border bg-slate-50'
						style={{
							color: project.color,
							borderColor: `${project.color}40`,
							backgroundColor: `${project.color}10`,
						}}
					>
						{project.category}
					</Badge>
					<span className='text-slate-500 font-mono text-sm'>
						0{index + 1} / 0{totalProjects}
					</span>
				</div>

				<h3 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight'>
					{project.title}
				</h3>

				<p className='text-slate-600 text-lg leading-relaxed mb-8'>
					{project.description}
				</p>

				<ProjectTechTags tech={project.tech} />
			</div>

			<ProjectActions project={project} />
		</div>
	)
}

