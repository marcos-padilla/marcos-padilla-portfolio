'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { DriftCTAs } from './drift-ctas'

interface DriftHeroProps {
	badgeText: string
	title: string
	titleHighlight: string
	description: string
	githubUrl: string
}

export function DriftHero({
	badgeText,
	title,
	titleHighlight,
	description,
	githubUrl,
}: DriftHeroProps) {
	return (
		<div className='flex flex-col items-center text-center mb-16 md:mb-24'>
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className='mb-8'
			>
				<Badge
					variant='outline'
					className='bg-slate-50 text-slate-700 border-slate-200'
				>
					{badgeText}
				</Badge>
			</motion.div>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.1, duration: 0.6 }}
				className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[0.95]'
			>
				<span className='block'>{title}</span>
				<span className='block -mt-2 md:-mt-3 lg:-mt-4 text-slate-700'>
					{titleHighlight}
				</span>
			</motion.h1>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.2, duration: 0.6 }}
				className='text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed antialiased'
			>
				{description}
			</motion.p>

			<DriftCTAs githubUrl={githubUrl} />
		</div>
	)
}
