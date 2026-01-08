'use client'

import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { projects } from './data'
import { ProjectsBackground, ProjectsHeader, ProjectCard } from './components'

export default function ProjectsSection() {
	const container = useRef<HTMLDivElement>(null)

	// Track scroll progress of the entire section
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	})

	return (
		<section
			id='projects'
			ref={container}
			className='relative bg-white text-slate-900 font-sans pt-20 pb-40'
		>
			<ProjectsBackground />

			<div className='max-w-7xl mx-auto px-6 relative z-10'>
				<ProjectsHeader />

				{/* Stacking Cards Container */}
				<div className='flex flex-col items-center w-full'>
					{projects.map((project, index) => {
						// Calculate scale range for each card
						// As scroll progresses, the scale decreases slightly to create depth
						const targetScale =
							1 - (projects.length - index) * 0.05

						return (
							<ProjectCard
								key={project.id}
								index={index}
								project={project}
								progress={scrollYProgress}
								range={[index * 0.25, 1]}
								targetScale={targetScale}
								totalProjects={projects.length}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}
