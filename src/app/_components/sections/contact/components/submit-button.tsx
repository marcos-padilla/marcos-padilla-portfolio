'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

type FormState = 'idle' | 'submitting' | 'success'

interface SubmitButtonProps {
	state: FormState
}

export function SubmitButton({ state }: SubmitButtonProps) {
	return (
		<button
			type='submit'
			disabled={state !== 'idle'}
			className={cn(
				'w-full h-12 rounded-xl font-semibold text-base transition-all duration-300',
				'flex items-center justify-center gap-2',
				'disabled:cursor-not-allowed disabled:opacity-70',
				state === 'success'
					? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm'
					: 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md'
			)}
		>
			<AnimatePresence mode='wait'>
				{state === 'idle' && (
					<motion.div
						key='idle'
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className='flex items-center gap-2'
					>
						Send Message <ArrowRight size={18} />
					</motion.div>
				)}
				{state === 'submitting' && (
					<motion.div
						key='submitting'
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
					>
						<div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
					</motion.div>
				)}
				{state === 'success' && (
					<motion.div
						key='success'
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						className='flex items-center gap-2'
					>
						Message Sent <Check size={18} />
					</motion.div>
				)}
			</AnimatePresence>
		</button>
	)
}

