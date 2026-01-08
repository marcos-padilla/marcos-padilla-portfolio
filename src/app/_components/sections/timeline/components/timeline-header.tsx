'use client'

import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'

export function TimelineHeader() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className='text-center mb-24 max-w-3xl mx-auto'
		>
			<div className='flex items-center justify-center gap-2 text-sm font-medium text-blue-600 mb-4 uppercase tracking-wider'>
				<Trophy size={16} />
				Career Journey
			</div>
			<h2 className='text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6'>
				Professional{' '}
				<span className='text-slate-500'>Timeline.</span>
			</h2>
			<p className='text-slate-600 text-lg leading-relaxed'>
				A roadmap of my professional growth, key milestones, and
				the skills I've gathered along the way.
			</p>
		</motion.div>
	)
}

