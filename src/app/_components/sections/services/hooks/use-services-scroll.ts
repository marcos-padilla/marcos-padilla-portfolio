import { useRef, useState, useEffect } from 'react'
import { useScroll, MotionValue } from 'framer-motion'
import { services } from '../data'

interface UseServicesScrollReturn {
	containerRef: React.RefObject<HTMLDivElement | null>
	activeService: number
	scrollYProgress: MotionValue<number>
	scrollToService: (index: number) => void
}

export function useServicesScroll(
	expandedId: string | null
): UseServicesScrollReturn {
	const containerRef = useRef<HTMLDivElement>(null)
	const [activeService, setActiveService] = useState<number>(0)

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	})

	useEffect(() => {
		const unsubscribe = scrollYProgress.on('change', (latest) => {
			// Only update active service if we are NOT currently expanded
			if (!expandedId) {
				const step = 1 / services.length
				const newIndex = Math.min(
					Math.max(Math.floor(latest / step), 0),
					services.length - 1
				)
				setActiveService(newIndex)
			}
		})
		return () => unsubscribe()
	}, [scrollYProgress, expandedId])

	const scrollToService = (index: number) => {
		if (!containerRef.current) return
		const container = containerRef.current
		const { top } = container.getBoundingClientRect()
		const scrollTop =
			window.pageYOffset || document.documentElement.scrollTop
		const containerTop = top + scrollTop
		const containerHeight = container.clientHeight
		const windowHeight = window.innerHeight
		const scrollableDistance = containerHeight - windowHeight
		const step = 1 / services.length
		const targetProgress = index * step + step * 0.05
		const targetScrollY =
			containerTop + targetProgress * scrollableDistance

		window.scrollTo({ top: targetScrollY, behavior: 'instant' })
	}

	return {
		containerRef,
		activeService,
		scrollYProgress,
		scrollToService,
	}
}

