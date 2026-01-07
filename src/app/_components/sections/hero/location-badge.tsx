'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

interface LocationBadgeProps {
	location: string
}

export function LocationBadge({ location }: LocationBadgeProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, delay: 0.18 }}
			className='mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500'
		>
			<Badge
				variant='outline'
				className='inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 ring-1 ring-slate-200'
			>
				<span className='h-1.5 w-1.5 rounded-full bg-slate-400' />
				{location}
			</Badge>
			<a
				href='#contact'
				className='underline underline-offset-4 hover:text-slate-700'
			>
				Let&apos;s talk
			</a>
		</motion.div>
	)
}

