'use client'

import * as React from 'react'
import {
	motion,
	useInView,
	useReducedMotion,
	useSpring,
	type MotionValue,
} from 'framer-motion'

interface RevealProps {
	children: React.ReactNode
	delay?: number
	y?: number
}

export function Reveal({ children, delay = 0, y = 16 }: RevealProps) {
	const ref = React.useRef<HTMLDivElement | null>(null)
	const inView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })
	const reduce = useReducedMotion()

	return (
		<motion.div
			ref={ref}
			initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
			animate={inView ? { opacity: 1, y: 0 } : undefined}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
		>
			{children}
		</motion.div>
	)
}

export function useSmoothProgress(value: MotionValue<number>) {
	return useSpring(value, { stiffness: 120, damping: 24, mass: 0.3 })
}

