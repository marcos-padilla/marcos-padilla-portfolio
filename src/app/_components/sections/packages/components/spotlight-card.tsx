'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { PackageIcon } from './package-icon'
import { PackageStats } from './package-stats'
import { InstallCommand } from './install-command'
import { PackageTags } from './package-tags'
import type { PackageItem } from '../types'

interface SpotlightCardProps {
	pkg: PackageItem
	index: number
}

export function SpotlightCard({ pkg, index }: SpotlightCardProps) {
	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	const handleMouseMove = ({
		currentTarget,
		clientX,
		clientY,
	}: React.MouseEvent) => {
		const { left, top } = currentTarget.getBoundingClientRect()
		mouseX.set(clientX - left)
		mouseY.set(clientY - top)
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: index * 0.1, duration: 0.5 }}
			className={cn(
				'group relative border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow',
				pkg.span || ''
			)}
			onMouseMove={handleMouseMove}
		>
			{/* Spotlight Overlay */}
			<motion.div
				className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100'
				style={{
					background: useMotionTemplate`
                    radial-gradient(
                        650px circle at ${mouseX}px ${mouseY}px,
                        rgba(99,102,241,0.08),
                        transparent 80%
                    )
                `,
				}}
			/>

			{/* Content Container */}
			<div className='relative h-full p-8 flex flex-col'>
				{/* Header: Icon & Stats */}
				<div className='flex justify-between items-start mb-6'>
					<PackageIcon pkg={pkg} />
					<PackageStats pkg={pkg} />
				</div>

				{/* Title & Description */}
				<div className='mb-3'>
					<h3 className='text-2xl font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors'>
						{pkg.name}
					</h3>
					{pkg.requiresBM360 && (
						<p className='text-xs text-slate-500 mt-1 italic'>
							Requires BusinessMate360 account
						</p>
					)}
				</div>
				<p className='text-slate-600 leading-relaxed mb-8 flex-grow'>
					{pkg.description}
				</p>

				{/* Install Command Area */}
				<div className='mt-auto space-y-4'>
					<InstallCommand command={pkg.installCmd} />

					{/* Footer: Tags & Link */}
					<div className='flex items-center justify-between pt-4 border-t border-slate-200'>
						<PackageTags tags={pkg.tags} />
						<Button
							variant='ghost'
							size='icon'
							className='rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900'
							asChild
						>
							<a href='#' aria-label={`View ${pkg.name} on GitHub`}>
								<Github size={18} />
							</a>
						</Button>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

