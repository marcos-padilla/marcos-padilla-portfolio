'use client'

import { motion } from 'framer-motion'

interface HeroTitleProps {
	name: string
	headline: string
}

export function HeroTitle({ name, headline }: HeroTitleProps) {
	return (
		<motion.h1
			initial={{ opacity: 0, y: 14 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, delay: 0.05 }}
			className='mt-6 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl'
		>
			<span className='block'>Hi, I&apos;m</span>
			<span className='relative mt-1 inline-block'>
				<span className='relative z-10'>{name}</span>
				<span className='absolute -inset-x-2 -inset-y-1 -z-10 rounded-xl bg-[linear-gradient(90deg,rgba(99,102,241,0.18),rgba(16,185,129,0.14),rgba(14,165,233,0.14))]' />
			</span>
			<span className='block mt-3 text-slate-700 text-xl sm:text-2xl font-medium'>
				{headline}
			</span>
		</motion.h1>
	)
}

