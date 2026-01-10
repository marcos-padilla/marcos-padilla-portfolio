'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

interface DriftCTAsProps {
	githubUrl: string
}

export function DriftCTAs({ githubUrl }: DriftCTAsProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: 0.3, duration: 0.6 }}
			className='flex flex-wrap items-center justify-center gap-4'
		>
			<Button
				size='lg'
				variant='outline'
				className='rounded-full border-slate-200 bg-white/50 hover:bg-white hover:border-slate-300 backdrop-blur-sm'
				asChild
			>
				<a
					href={githubUrl}
					target='_blank'
					rel='noopener noreferrer'
				>
					<Github size={18} />
					<span>View on GitHub</span>
				</a>
			</Button>
		</motion.div>
	)
}
