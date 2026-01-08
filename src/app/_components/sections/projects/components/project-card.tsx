'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { ProjectContent } from './project-content'
import { ProjectPreview } from './project-preview'
import type { Project } from '../types'

interface ProjectCardProps {
	index: number
	project: Project
	progress: MotionValue<number>
	range: [number, number]
	targetScale: number
	totalProjects: number
}

export function ProjectCard({
	index,
	project,
	progress,
	range,
	targetScale,
	totalProjects,
}: ProjectCardProps) {
	const container = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'start start'],
	})

	// Transform logic for the "stacking" effect
	const scale = useTransform(progress, range, [1, targetScale])

	// Slight offset to make cards visible behind each other
	const topOffset = 120 + index * 20

	return (
		<div
			ref={container}
			className='h-screen flex items-center justify-center sticky top-0 w-full'
		>
			<motion.div
				style={{
					scale,
					top: `calc(${topOffset}px)`,
				}}
				className='relative flex flex-col md:flex-row w-full max-w-6xl h-[65vh] md:h-[600px] bg-white backdrop-blur-xl border border-slate-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow origin-top flex-shrink-0'
			>
				<ProjectContent
					project={project}
					index={index}
					totalProjects={totalProjects}
				/>
				<ProjectPreview project={project} />
			</motion.div>
		</div>
	)
}

