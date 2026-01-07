'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface HeroCTAsProps {
	primaryCta: { label: string; href: string }
	secondaryCta: { label: string; href: string }
}

export function HeroCTAs({ primaryCta, secondaryCta }: HeroCTAsProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, delay: 0.24 }}
			className='mt-8 flex flex-wrap items-center gap-3'
		>
			<Button
				size='lg'
				className='group rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md hover:bg-slate-800'
				asChild
			>
				<a href={primaryCta.href}>
					{primaryCta.label}
					<span className='ml-2 transition-transform group-hover:translate-x-0.5'>
						→
					</span>
				</a>
			</Button>
			<Button
				variant='outline'
				size='lg'
				className='rounded-2xl border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:shadow-md hover:bg-white'
				asChild
			>
				<a href={secondaryCta.href}>
					{secondaryCta.label}
					<span aria-hidden className='ml-2 text-slate-400'>
						↗
					</span>
				</a>
			</Button>
			<div className='ml-0 flex items-center gap-2 text-xs text-slate-500 sm:ml-4'>
				<span className='flex items-center gap-1.5'>
					<span className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
					<span>Shipping mindset</span>
				</span>
				<span className='text-slate-300'>•</span>
				<span className='flex items-center gap-1.5'>
					<span className='h-1.5 w-1.5 rounded-full bg-indigo-500' />
					<span>Metrics-first</span>
				</span>
			</div>
		</motion.div>
	)
}

