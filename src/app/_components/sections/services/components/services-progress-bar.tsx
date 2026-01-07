'use client'

import { motion, MotionValue } from 'framer-motion'
import type { Service } from '../types'

interface ServicesProgressBarProps {
	scrollYProgress: MotionValue<number>
	activeService: Service
}

export function ServicesProgressBar({
	scrollYProgress,
	activeService,
}: ServicesProgressBarProps) {
	return (
		<div className='absolute bottom-0 left-0 right-0 z-20 w-full bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent pb-8 pt-12 px-6'>
			<div className='max-w-7xl mx-auto'>
				<div className='h-1 w-full bg-white/5 rounded-full overflow-hidden backdrop-blur-sm'>
					<motion.div
						className='h-full w-full origin-left'
						style={{ scaleX: scrollYProgress }}
						animate={{
							backgroundColor: activeService.color,
						}}
						transition={{ duration: 0.5 }}
					/>
				</div>
			</div>
		</div>
	)
}

