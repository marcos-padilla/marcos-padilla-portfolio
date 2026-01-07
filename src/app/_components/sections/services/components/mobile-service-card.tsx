'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { Service } from '../types'

interface MobileServiceCardProps {
	service: Service
	index: number
	onExpand: () => void
}

export function MobileServiceCard({
	service,
	index,
	onExpand,
}: MobileServiceCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5, delay: index * 0.05 }}
			onClick={onExpand}
			className='group relative rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden active:scale-[0.98] transition-transform cursor-pointer'
		>
			<div
				className='absolute top-0 right-0 w-64 h-64 opacity-10 blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none'
				style={{ backgroundColor: service.color }}
			/>

			<div className='p-6 md:p-8 relative z-10'>
				<div className='flex justify-between items-start mb-6'>
					<div className='p-3 bg-neutral-800 rounded-xl inline-block'>
						<service.icon
							size={24}
							style={{ color: service.color }}
						/>
					</div>
					<Badge
						variant='outline'
						className='px-3 py-1 rounded-full border-white/10 bg-white/5 text-xs text-neutral-400'
					>
						0{index + 1}
					</Badge>
				</div>

				<h3 className='text-2xl font-semibold text-white mb-3'>
					{service.title}
				</h3>
				<p className='text-neutral-400 mb-6 text-sm leading-relaxed'>
					{service.description}
				</p>

				<div className='flex items-center gap-2 text-sm text-blue-400 font-medium mt-4'>
					View Details <ArrowRight size={14} />
				</div>
			</div>
		</motion.div>
	)
}

