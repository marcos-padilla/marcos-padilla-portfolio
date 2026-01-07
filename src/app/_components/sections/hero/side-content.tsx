'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MiniPipeline } from './mini-pipeline'
import { highlightsData } from './data'

interface SideContentProps {
	reducedMotion: boolean
}

export function SideContent({ reducedMotion }: SideContentProps) {
	return (
		<div className='pointer-events-none absolute -right-10 top-10 hidden xl:block'>
			<motion.div
				initial={{ opacity: 0, y: 14 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.7,
					delay: 0.25,
				}}
				className='w-64 space-y-3'
			>
				<Card className='rounded-[1.35rem] border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur gap-0'>
					<CardContent className='p-0 gap-0'>
						<div className='flex items-center justify-between'>
							<p className='text-xs font-semibold text-slate-900'>
								AI pipeline
							</p>
							<Badge
								variant='outline'
								className='rounded-full bg-slate-50 px-2 py-1 text-[10px] font-semibold text-slate-600 ring-1 ring-slate-200'
							>
								live
							</Badge>
						</div>
						<div className='mt-3'>
							<MiniPipeline reducedMotion={reducedMotion} />
						</div>
						<p className='mt-2 text-[11px] text-slate-500'>
							turning data → features → decisions
						</p>
					</CardContent>
				</Card>

				<Card className='rounded-[1.35rem] border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur gap-0'>
					<CardContent className='p-0 gap-0'>
						<p className='text-xs font-semibold text-slate-900'>
							Recent highlights
						</p>
						<ul className='mt-2 space-y-2 text-[11px] text-slate-600'>
							{highlightsData.map((item, i) => (
								<li key={i} className='flex gap-2'>
									<span
										className={`mt-1.5 h-1.5 w-1.5 rounded-full ${item.color}`}
									/>
									{item.text}
								</li>
							))}
						</ul>
					</CardContent>
				</Card>
			</motion.div>
		</div>
	)
}

