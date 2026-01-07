'use client'

import { motion } from 'framer-motion'

export function StatusPill() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-sm text-slate-700 shadow-sm backdrop-blur'
		>
			<span className='relative flex h-2 w-2'>
				<span className='absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping' />
				<span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
			</span>
			<span className='font-medium'>Available</span>
			<span className='text-slate-500'>•</span>
			<span className='text-slate-600'>Freelance / Full-time</span>
		</motion.div>
	)
}

