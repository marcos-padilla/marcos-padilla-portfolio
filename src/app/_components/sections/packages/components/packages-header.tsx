'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Terminal } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PackagesHeader() {
	return (
		<div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6'>
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				className='max-w-2xl'
			>
				<div className='flex items-center gap-2 text-sm font-medium text-slate-500 mb-4 uppercase tracking-wider'>
					<Terminal size={16} />
					Open Source & Libraries
				</div>
				<h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900'>
					Built for{' '}
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600'>
						Builders.
					</span>
				</h2>
				<p className='text-slate-600 text-lg leading-relaxed'>
					A collection of high-quality,
					production-ready packages I've crafted to
					solve real-world problems. Open source and
					available for your next project.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
			>
				<Button
					variant='ghost'
					className='inline-flex items-center gap-2 text-slate-700 border-b border-slate-300 pb-1 hover:border-slate-900 transition-colors group'
					asChild
				>
					<a href='#'>
						View all on GitHub
						<ArrowRight
							size={16}
							className='group-hover:translate-x-1 transition-transform'
						/>
					</a>
				</Button>
			</motion.div>
		</div>
	)
}

