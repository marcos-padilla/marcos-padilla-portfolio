'use client'

import { motion } from 'framer-motion'

export function ServicesHeader() {
	return (
		<div className='relative z-10 w-full px-6 py-24 md:py-32 max-w-7xl mx-auto'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className='max-w-3xl'
			>
				<div className='flex items-center gap-2 text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider'>
					<span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
					What I Do
				</div>
			<h2 className='text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6'>
				Full-stack development,{' '}
				<br className='hidden md:block' />
				<span className='text-slate-600'>
					AI solutions, and data analytics.
				</span>
			</h2>
			<p className='text-lg text-slate-600 max-w-xl leading-relaxed'>
				I combine technical precision with creative
				problem-solving to deliver solutions that scale.
				Explore my core services below.
			</p>
			</motion.div>
		</div>
	)
}

