'use client'

import { motion } from 'framer-motion'
import { Code } from 'lucide-react'

export function ProjectsHeader() {
	return (
		<div className='mb-24 md:text-center max-w-3xl mx-auto'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className='flex items-center gap-2 text-sm font-medium text-slate-500 mb-4 uppercase tracking-wider md:justify-center'
			>
				<Code size={16} />
				Selected Works
			</motion.div>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.1 }}
				className='text-4xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900'
			>
				Crafting{' '}
				<span className='text-slate-600'>Digital Reality.</span>
			</motion.h2>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.2 }}
				className='text-lg text-slate-600 leading-relaxed'
			>
				A curated selection of projects that demonstrate
				my passion for building robust, scalable, and
				user-centric applications.
			</motion.p>
		</div>
	)
}

