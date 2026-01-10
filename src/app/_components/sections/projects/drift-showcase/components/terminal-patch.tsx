'use client'

import { motion } from 'framer-motion'

export function TerminalPatch() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 5 }}
			animate={{ opacity: 1, y: 0 }}
			className='ml-0 md:ml-12 p-4 bg-slate-50 rounded-md border-l-2 border-green-500/50 my-2 font-mono text-xs md:text-sm'
		>
			<div className='flex justify-between items-center mb-2 text-slate-500 text-[10px] uppercase tracking-wider font-semibold'>
				<span>Proposed Patch</span>
				<span>src/stream.py</span>
			</div>
			<div className='space-y-1'>
				<div className='flex'>
					<span className='w-6 text-slate-400 select-none'>42</span>
					<span className='text-slate-500 line-through opacity-50'>
						data = await fetch_stream()
					</span>
				</div>
				<div className='flex'>
					<span className='w-6 text-slate-400 select-none'>42</span>
					<span className='text-green-600'>+ try:</span>
				</div>
				<div className='flex'>
					<span className='w-6 text-slate-400 select-none'>43</span>
					<span className='text-green-600'>
						+ data = await fetch_stream()
					</span>
				</div>
				<div className='flex'>
					<span className='w-6 text-slate-400 select-none'>44</span>
					<span className='text-green-600'>
						+ except ConnectionError:
					</span>
				</div>
				<div className='flex'>
					<span className='w-6 text-slate-400 select-none'>45</span>
					<span className='text-green-600'>+ return reconnect()</span>
				</div>
			</div>
		</motion.div>
	)
}
