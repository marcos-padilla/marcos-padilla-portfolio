'use client'

import { motion } from 'framer-motion'

export function DriftBackground() {
	return (
		<div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0'>
			<motion.div
				animate={{
					opacity: [0.1, 0.15, 0.1],
					scale: [1, 1.1, 1],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className='absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[120px]'
			/>
			<motion.div
				animate={{
					opacity: [0.08, 0.12, 0.08],
					scale: [1, 1.2, 1],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 2,
				}}
				className='absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-blue-100/30 rounded-full blur-[120px]'
			/>
		</div>
	)
}
