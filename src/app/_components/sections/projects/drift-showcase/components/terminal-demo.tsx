'use client'

import { motion } from 'framer-motion'
import { TerminalHeader } from './terminal-header'
import { TerminalBody } from './terminal-body'

export function TerminalDemo() {
	return (
		<div className='w-full max-w-4xl mx-auto'>
			<motion.div
				initial={{ opacity: 0, y: 40, rotateX: 5 }}
				whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
				viewport={{ once: true, margin: '-50px' }}
				transition={{ type: 'spring', stiffness: 40, damping: 15 }}
				className='relative rounded-xl overflow-hidden bg-white border border-slate-200 shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5'
			>
				<TerminalHeader />

				<TerminalBody />

				{/* Decorative grid pattern */}
				<div className='absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none opacity-30' />
			</motion.div>

			{/* Background Glow */}
			<div className='absolute -inset-10 bg-indigo-100/20 blur-[80px] -z-10 rounded-[50%] opacity-30' />
		</div>
	)
}
