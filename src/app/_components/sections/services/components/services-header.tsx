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
				<div className='flex items-center gap-2 text-sm font-medium text-neutral-500 mb-6 uppercase tracking-wider'>
					<span className='w-2 h-2 rounded-full bg-blue-500 animate-pulse' />
					Capabilities & Expertise
				</div>
				<h2 className='text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6'>
					Everything you need to{' '}
					<br className='hidden md:block' />
					<span className='text-neutral-500'>
						accelerate your digital growth.
					</span>
				</h2>
				<p className='text-lg text-neutral-400 max-w-xl leading-relaxed'>
					We combine technical precision with creative
					problem-solving to deliver solutions that scale.
					Explore our core services below.
				</p>
			</motion.div>
		</div>
	)
}

