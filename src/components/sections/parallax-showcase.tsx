'use client'

import * as React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/common/section-header'
import { Chip } from '@/components/common/chip'
import { useSmoothProgress } from '@/components/common/reveal'

export function ParallaxShowcase() {
	const ref = React.useRef<HTMLDivElement | null>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})
	const progress = useSmoothProgress(scrollYProgress)

	const y1 = useTransform(progress, [0, 1], [40, -40])
	const y2 = useTransform(progress, [0, 1], [80, -80])
	const y3 = useTransform(progress, [0, 1], [120, -120])
	const scale = useTransform(progress, [0, 0.5, 1], [0.98, 1, 0.98])
	const opacity = useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

	return (
		<section className='mx-auto max-w-6xl px-4 py-14 sm:py-16' ref={ref}>
			<SectionHeader
				eyebrow='Signature'
				title='A parallax moment'
				desc='A premium scroll beat that still feels integrated with the layout.'
			/>

			<motion.div
				style={{ scale }}
				className='relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 shadow-sm'
			>
				<div className='absolute inset-0'>
					<div className='absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-b from-zinc-200/80 to-transparent blur-3xl' />
					<div className='absolute -bottom-32 right-[-80px] h-[520px] w-[520px] rounded-full bg-gradient-to-t from-zinc-200/60 to-transparent blur-3xl' />
				</div>

				<div className='relative grid gap-6 p-7 sm:p-10 md:grid-cols-[1.1fr_0.9fr] md:items-center'>
					<div>
						<div className='text-xs font-medium tracking-[0.2em] uppercase text-zinc-500'>
							Storytelling through results
						</div>
						<h3 className='mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900'>
							Insight → Implementation → Impact
						</h3>
						<p className='mt-3 text-sm sm:text-base text-zinc-600 max-w-xl'>
							I like building in loops: identify the metric, understand the
							behavior, ship the change, and validate the outcome.
						</p>

						<div className='mt-5 flex flex-wrap gap-2'>
							{[
								'Define KPI',
								'Model data',
								'Ship UI',
								'Measure lift',
							].map((t) => (
								<Chip key={t} label={t} />
							))}
						</div>
					</div>

					<div className='relative'>
						<Card className='rounded-2xl border-zinc-200 bg-white gap-0'>
							<CardContent className="p-4 gap-0">
								<div className='flex items-center justify-between'>
									<div className='text-sm font-semibold text-zinc-900'>
										Weekly Snapshot
									</div>
									<div className='text-xs text-zinc-500'>
										Last 7 days
									</div>
								</div>
								<div className='mt-4 grid grid-cols-2 gap-3'>
									{[
										{ k: 'Leads', v: '+18%' },
										{ k: 'Conversion', v: '+4.2%' },
										{ k: 'Retention', v: '+1.1%' },
										{ k: 'Latency', v: '-22%' },
									].map((it) => (
										<div
											key={it.k}
											className='rounded-2xl border border-zinc-200 bg-zinc-50 p-4'
										>
											<div className='text-xs text-zinc-600'>{it.k}</div>
											<div className='mt-1 text-lg font-semibold text-zinc-900'>
												{it.v}
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>

						{/* floating layers */}
						<motion.div
							style={{ y: y1, opacity }}
							className='pointer-events-none absolute -left-5 -top-6 rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur px-4 py-3 shadow-sm'
						>
							<div className='text-xs text-zinc-500'>SQL</div>
							<div className='text-sm font-semibold text-zinc-900'>
								Window functions
							</div>
						</motion.div>

						<motion.div
							style={{ y: y2, opacity }}
							className='pointer-events-none absolute -right-4 top-8 rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur px-4 py-3 shadow-sm'
						>
							<div className='text-xs text-zinc-500'>pandas</div>
							<div className='text-sm font-semibold text-zinc-900'>
								Cohort analysis
							</div>
						</motion.div>

						<motion.div
							style={{ y: y3, opacity }}
							className='pointer-events-none absolute left-10 -bottom-6 rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur px-4 py-3 shadow-sm'
						>
							<div className='text-xs text-zinc-500'>Next.js</div>
							<div className='text-sm font-semibold text-zinc-900'>
								Perf-first UI
							</div>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	)
}

