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
						? 'bg-slate-100 border border-slate-200 shadow-sm'
						: 'hover:bg-slate-50 border border-transparent hover:border-slate-200'
				)}
			>
				<div className='flex items-center gap-4'>
					<div
						className={cn(
							'p-2 rounded-lg transition-colors duration-300',
							isActive
								? 'bg-slate-900 text-white'
								: 'bg-slate-100 text-slate-600 group-hover:text-slate-900'
						)}
					>
						<service.icon size={20} />
					</div>
					<span
						className={cn(
							'text-xl font-medium transition-colors duration-300',
							isActive
								? 'text-slate-900'
								: 'text-slate-600 group-hover:text-slate-900'
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
					<ChevronRight size={20} className='text-slate-400' />
				</motion.div>
			</Button>
		</motion.div>
	)
}

