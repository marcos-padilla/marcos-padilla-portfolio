'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Check, ArrowUpRight } from 'lucide-react'

interface DownloadResumeButtonProps {
	href: string
	label?: string
}

export function DownloadResumeButton({
	href,
	label = 'Download Résumé',
}: DownloadResumeButtonProps) {
	const [isDownloading, setIsDownloading] = useState(false)
	const [isDownloaded, setIsDownloaded] = useState(false)
	const [isHovered, setIsHovered] = useState(false)

	const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		
		if (isDownloading || isDownloaded) return

		setIsDownloading(true)

		// Simulate download animation
		await new Promise((resolve) => setTimeout(resolve, 1500))

		// Trigger actual download
		const link = document.createElement('a')
		link.href = href
		link.download = 'Marcos-Padilla-Resume.pdf'
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)

		setIsDownloading(false)
		setIsDownloaded(true)

		// Reset after 3 seconds
		setTimeout(() => {
			setIsDownloaded(false)
		}, 3000)
	}

	return (
		<motion.a
			href={href}
			onClick={handleClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			className='group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition-all hover:shadow-md hover:bg-white overflow-hidden'
		>
			{/* Animated background gradient on hover */}
			<motion.div
				className='absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-0'
				animate={{
					opacity: isHovered ? 1 : 0,
				}}
				transition={{ duration: 0.3 }}
			/>

			{/* Content */}
			<span className='relative z-10 flex items-center gap-2'>
				<AnimatePresence mode='wait'>
					{isDownloading ? (
						<motion.div
							key='downloading'
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							className='flex items-center gap-2'
						>
							<motion.div
								animate={{ rotate: 360 }}
								transition={{
									duration: 1,
									repeat: Infinity,
									ease: 'linear',
								}}
							>
								<Download size={16} />
							</motion.div>
							<span>Downloading...</span>
						</motion.div>
					) : isDownloaded ? (
						<motion.div
							key='downloaded'
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							className='flex items-center gap-2 text-emerald-600'
						>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{
									type: 'spring',
									stiffness: 300,
									damping: 20,
								}}
							>
								<Check size={16} />
							</motion.div>
							<span>Downloaded!</span>
						</motion.div>
					) : (
						<motion.div
							key='default'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className='flex items-center gap-2'
						>
							<span>{label}</span>
							<motion.span
								animate={{
									x: isHovered ? 4 : 0,
									y: isHovered ? -4 : 0,
								}}
								transition={{
									type: 'spring',
									stiffness: 400,
									damping: 17,
								}}
							>
								<ArrowUpRight size={16} className='text-slate-400' />
							</motion.span>
						</motion.div>
					)}
				</AnimatePresence>
			</span>

			{/* Shimmer effect on hover */}
			<motion.div
				className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent'
				animate={{
					translateX: isHovered ? ['100%', '-100%'] : '100%',
				}}
				transition={{
					duration: 1.5,
					repeat: isHovered ? Infinity : 0,
					ease: 'linear',
				}}
			/>
		</motion.a>
	)
}

