'use client'

import { motion } from 'framer-motion'
import type { Service } from '../types'

interface ServicesBackgroundProps {
	activeService: Service
}

export function ServicesBackground({ activeService }: ServicesBackgroundProps) {
	return (
		<div className='absolute inset-0 z-0 transition-colors duration-700 ease-in-out bg-neutral-950'>
			<motion.div
				className='absolute inset-0 opacity-20'
				animate={{
					background: `radial-gradient(circle at 50% 50%, ${activeService.color} 0%, transparent 60%)`,
				}}
				transition={{
					duration: 0.8,
					ease: 'easeInOut',
				}}
			/>
			<div className='absolute inset-0 bg-neutral-950/80 backdrop-blur-3xl' />
		</div>
	)
}

