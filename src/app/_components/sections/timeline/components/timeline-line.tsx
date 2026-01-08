'use client'

import { motion, useTransform, type MotionValue } from 'framer-motion'

interface TimelineLineProps {
	scrollYProgress: MotionValue<number>
}

export function TimelineLine({ scrollYProgress }: TimelineLineProps) {
	const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

	return (
		<>
			{/* Vertical Base Line (The "Track") */}
			<div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2' />

			{/* Active Moving Line (The "Fill") */}
			<motion.div
				style={{ height: lineHeight }}
				className='absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 -translate-x-1/2 origin-top shadow-[0_0_15px_rgba(59,130,246,0.4)]'
			/>
		</>
	)
}

