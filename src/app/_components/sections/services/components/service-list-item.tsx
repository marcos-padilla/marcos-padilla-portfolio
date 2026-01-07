'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Service } from '../types'

interface ServiceListItemProps {
	service: Service
	isActive: boolean
	onClick: () => void
}

export function ServiceListItem({
	service,
	isActive,
	onClick,
}: ServiceListItemProps) {
	return (
		<motion.div
			initial={false}
			animate={{
				opacity: 1,
			}}
		>
			<Button
				variant='ghost'
				onClick={onClick}
				className={cn(
					'group w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 h-auto',
					isActive
						? 'bg-white/5 border border-white/10'
						: 'hover:bg-white/5 border border-transparent hover:border-white/5'
				)}
			>
				<div className='flex items-center gap-4'>
					<div
						className={cn(
							'p-2 rounded-lg transition-colors duration-300',
							isActive
								? 'bg-white text-black'
								: 'bg-neutral-900 text-neutral-500 group-hover:text-white'
						)}
					>
						<service.icon size={20} />
					</div>
					<span
						className={cn(
							'text-xl font-medium transition-colors duration-300',
							isActive
								? 'text-white'
								: 'text-neutral-500 group-hover:text-neutral-300'
						)}
					>
						{service.title}
					</span>
				</div>

				<motion.div
					animate={{
						opacity: isActive ? 1 : 0,
						x: isActive ? 0 : -10,
					}}
					transition={{ duration: 0.3 }}
				>
					<ChevronRight size={20} className='text-white/50' />
				</motion.div>
			</Button>
		</motion.div>
	)
}

