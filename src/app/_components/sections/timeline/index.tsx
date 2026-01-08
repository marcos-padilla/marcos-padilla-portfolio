'use client'

import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { experiences } from './data'
import {
	TimelineBackground,
	TimelineHeader,
	TimelineLine,
	TimelineCard,
} from './components'

export default function TimelineSection() {
	const containerRef = useRef<HTMLDivElement>(null)

	// Track scroll progress relative to this section
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start center', 'end center'],
	})

	return (
		<section
			id='experience'
			ref={containerRef}
			className='relative w-full py-32 bg-white text-slate-900 overflow-hidden'
		>
			<TimelineBackground />

			<div className='max-w-7xl mx-auto px-6 relative z-10'>
				<TimelineHeader />

				{/* Timeline Container */}
				<div className='relative'>
					<TimelineLine scrollYProgress={scrollYProgress} />

					{/* Items */}
					<div className='space-y-12 md:space-y-24'>
						{experiences.map((exp, index) => (
							<TimelineCard
								key={exp.id}
								experience={exp}
								index={index}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
