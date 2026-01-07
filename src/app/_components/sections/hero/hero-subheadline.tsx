'use client'

import { motion } from 'framer-motion'

interface HeroSubheadlineProps {
	subheadline: string
}

export function HeroSubheadline({ subheadline }: HeroSubheadlineProps) {
	return (
		<motion.p
			initial={{ opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, delay: 0.12 }}
			className='mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg'
		>
			{subheadline}
		</motion.p>
	)
}

