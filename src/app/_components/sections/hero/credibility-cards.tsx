'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { credibilityData } from './data'

export function CredibilityCards() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, delay: 0.3 }}
			className='mt-10 grid gap-3 sm:grid-cols-3'
		>
			{credibilityData.map((x) => (
				<Card
					key={x.k}
					className='rounded-2xl border-slate-200 bg-white/60 p-4 shadow-sm backdrop-blur gap-0'
				>
					<CardContent className='p-0 gap-0'>
						<p className='text-[11px] font-semibold text-slate-500'>
							{x.k}
						</p>
						<p className='mt-1 text-sm font-semibold text-slate-900'>
							{x.v}
						</p>
						<p className='mt-1 text-xs text-slate-500'>{x.d}</p>
					</CardContent>
				</Card>
			))}
		</motion.div>
	)
}

