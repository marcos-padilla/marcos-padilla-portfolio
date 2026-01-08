'use client'

import { motion } from 'framer-motion'
import type { ExperienceItem } from '../types'
import { TimelineDot } from './timeline-dot'
import { TimelineCardHeader } from './timeline-card-header'
import { TimelineCardSkills } from './timeline-card-skills'
import { TimelineCardIcon } from './timeline-card-icon'

interface TimelineCardProps {
	experience: ExperienceItem
	index: number
}

export function TimelineCard({ experience, index }: TimelineCardProps) {
	const isEven = index % 2 === 0

	return (
		<div
			className={`relative flex items-center ${
				isEven ? 'md:flex-row-reverse' : 'md:flex-row'
			} md:justify-between group`}
		>
			{/* The Dot on the Line */}
			<TimelineDot />

			{/* The Content Card */}
			<motion.div
				initial={{ opacity: 0, y: 20, x: isEven ? -20 : 20 }}
				whileInView={{ opacity: 1, y: 0, x: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.5, delay: index * 0.1 }}
				className={`w-full pl-20 md:pl-0 md:w-[45%] ${
					!isEven ? 'md:text-right md:items-end' : ''
				}`}
			>
				<div className='relative p-6 md:p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-colors shadow-sm hover:shadow-md group-hover:bg-slate-50/50'>
					{/* Header Info */}
					<TimelineCardHeader
						experience={experience}
						isEven={isEven}
					/>

					{/* Description */}
					<p className='text-slate-600 leading-relaxed mb-6'>
						{experience.description}
					</p>

					{/* Skills */}
					<TimelineCardSkills
						skills={experience.skills}
						isEven={isEven}
					/>

					{/* Role Icon Watermark */}
					<TimelineCardIcon type={experience.type} isEven={isEven} />
				</div>
			</motion.div>

			{/* Empty Spacer for the other side (Desktop only) */}
			<div className='hidden md:block md:w-[45%]' />
		</div>
	)
}

