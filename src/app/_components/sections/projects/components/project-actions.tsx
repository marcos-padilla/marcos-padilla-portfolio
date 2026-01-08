'use client'

import { ArrowUpRight, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Project } from '../types'

interface ProjectActionsProps {
	project: Project
}

export function ProjectActions({ project }: ProjectActionsProps) {
	return (
		<div className='flex items-center gap-4 pt-6 border-t border-slate-200'>
			{project.link && project.link !== '' && (
				<Button
					size='lg'
					className='flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors group'
					asChild
				>
					<a href={project.link}>
						View Live{' '}
						<ArrowUpRight
							size={18}
							className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform'
						/>
					</a>
				</Button>
			)}
			{project.repo && project.repo !== '' && (
			<Button
				variant='outline'
				size='icon'
				className='rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200 hover:border-slate-300'
				asChild
			>
				<a href={project.repo} aria-label={`View ${project.title} on GitHub`}>
					<Github size={20} />
				</a>
			</Button>
		)}
		</div>
	)
}

