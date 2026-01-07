'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ServiceIcon } from './service-icon'
import type { Service } from '../types'

interface ServiceCardProps {
	service: Service
	onExpand: () => void
	isExpanded: boolean
}

export function ServiceCard({
	service,
	onExpand,
	isExpanded,
}: ServiceCardProps) {
	return (
		<motion.div
			layoutId={`card-${service.id}`}
			key={service.id}
			initial={{ opacity: 0, scale: 0.9, y: 20 }}
			animate={{ opacity: isExpanded ? 0 : 1, scale: 1, y: 0 }}
			exit={{ opacity: 0, scale: 0.95, y: -20 }}
			transition={{ type: 'spring', stiffness: 200, damping: 25 }}
			className='w-full aspect-square md:aspect-[4/3] relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl group cursor-pointer'
			onClick={onExpand}
		>
			{/* Abstract Dynamic Background */}
			<div className='absolute inset-0 bg-grid-white/[0.02]' />

			{/* Glow Blob */}
			<div
				className='absolute top-0 right-0 w-3/4 h-3/4 opacity-20 blur-[100px] transition-colors duration-500'
				style={{ backgroundColor: service.color }}
			/>

			<div className='absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10 pointer-events-none'>
				<div className='pointer-events-auto'>
					<ServiceIcon icon={service.icon} color={service.color} />
					<motion.h3
						layoutId={`title-${service.id}`}
						className='mt-6 text-3xl font-semibold text-white tracking-tight'
					>
						{service.title}
					</motion.h3>
					<motion.p
						layoutId={`desc-${service.id}`}
						className='mt-4 text-lg text-neutral-400 leading-relaxed line-clamp-3'
					>
						{service.description}
					</motion.p>
				</div>

				<div className='space-y-4 pointer-events-auto'>
					<div className='h-px w-full bg-gradient-to-r from-white/20 to-transparent' />
					<ul className='grid grid-cols-1 gap-2'>
						{service.details.map((detail, i) => (
							<li
								key={i}
								className='flex items-center gap-2 text-sm text-neutral-300'
							>
								<div
									className='w-1.5 h-1.5 rounded-full'
									style={{
										backgroundColor: service.color,
									}}
								/>
								{detail}
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Hover Effect CTA */}
			<div className='absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto z-20'>
				<Button
					variant='ghost'
					size='sm'
					onClick={(e) => {
						e.stopPropagation()
						onExpand()
					}}
					className='flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-md'
				>
					Learn more <ArrowUpRight size={14} />
				</Button>
			</div>
		</motion.div>
	)
}

