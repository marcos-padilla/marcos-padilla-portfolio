'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { MotionValue } from 'framer-motion'
import { floatingCardsData } from './data'

interface HeroVisualCardProps {
	reducedMotion: boolean
	tiltX: MotionValue<number>
	tiltY: MotionValue<number>
	glowX: MotionValue<string>
	glowY: MotionValue<string>
}

export function HeroVisualCard({
	reducedMotion,
	tiltX,
	tiltY,
	glowX,
	glowY,
}: HeroVisualCardProps) {
	const chartData = [18, 28, 22, 38, 30, 52]

	return (
		<div className='relative'>
			{/* cursor glow */}
			<motion.div
				aria-hidden
				style={{
					background:
						'radial-gradient(240px circle at var(--x) var(--y), rgba(99,102,241,0.18), transparent 60%)',
					'--x': glowX as unknown as string,
					'--y': glowY as unknown as string,
				} as React.CSSProperties}
				className='pointer-events-none absolute inset-0 rounded-[2.25rem]'
			/>

			<motion.div
				style={
					reducedMotion
						? undefined
						: {
								rotateX: tiltX,
								rotateY: tiltY,
								transformStyle: 'preserve-3d',
						  }
				}
				className='relative rounded-[2.25rem] border border-slate-200 bg-white/60 p-5 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.45)] backdrop-blur'
			>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-2'>
						<div className='flex gap-1.5'>
							<span className='h-2.5 w-2.5 rounded-full bg-slate-300' />
							<span className='h-2.5 w-2.5 rounded-full bg-slate-300' />
							<span className='h-2.5 w-2.5 rounded-full bg-slate-300' />
						</div>
						<span className='text-xs font-medium text-slate-500'>
							live.build
						</span>
					</div>
					<Badge className='rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white'>
						v1.0
					</Badge>
				</div>

				{/* core visual */}
				<div className='mt-5 grid gap-4'>
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.7,
							delay: 0.2,
						}}
						className='relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-4'
					>
						<div className='flex items-start justify-between gap-3'>
							<div>
								<p className='text-xs font-semibold text-slate-900'>
									Real-world impact
								</p>
								<p className='mt-1 text-xs text-slate-500'>
									Product + data + AI, in one workflow.
								</p>
							</div>
							<motion.div
								aria-hidden
								animate={
									reducedMotion
										? undefined
										: {
												y: [0, -6, 0],
												rotate: [0, 2, 0],
										  }
								}
								transition={{
									duration: 3.5,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
								className='rounded-xl bg-slate-900 px-3 py-2 text-[10px] font-semibold text-white shadow-sm'
							>
								Deploy →
							</motion.div>
						</div>

						{/* tiny code + chart */}
						<div className='mt-4 grid gap-3 sm:grid-cols-2'>
							<Card className='rounded-xl border-slate-200 bg-slate-950 p-3 gap-0'>
								<CardContent className='p-0 text-[11px] leading-relaxed text-slate-200 gap-0'>
									<div className='text-slate-400'>$</div>
									<div className='mt-1'>
										<span className='text-emerald-300'>train</span>
										<span className='text-slate-300'>(</span>
										<span className='text-indigo-300'>dataset</span>
										<span className='text-slate-300'>)</span>
										<span className='text-slate-300'> → </span>
										<span className='text-cyan-300'>ship</span>
										<span className='text-slate-300'>(</span>
										<span className='text-indigo-300'>feature</span>
										<span className='text-slate-300'>)</span>
									</div>
									<div className='mt-2 text-slate-400'>
										# faster iteration, fewer bugs
									</div>
								</CardContent>
							</Card>

							<Card className='rounded-xl border-slate-200 bg-white p-3 gap-0'>
								<CardContent className='p-0 gap-0'>
									<div className='flex items-center justify-between'>
										<span className='text-[11px] font-semibold text-slate-900'>
											Uplift
										</span>
										<span className='text-[11px] text-emerald-600 font-semibold'>
											+18.4%
										</span>
									</div>
									<div className='mt-2 flex h-20 items-end gap-2'>
										{chartData.map((h, i) => (
											<motion.div
												key={i}
												initial={{
													height: 8,
													opacity: 0.7,
												}}
												animate={{
													height: h,
													opacity: 1,
												}}
												transition={{
													duration: 0.9,
													delay: 0.25 + i * 0.06,
												}}
												className='w-full rounded-lg bg-slate-900/90'
											/>
										))}
									</div>
									<div className='mt-2 flex items-center justify-between text-[10px] text-slate-500'>
										<span>baseline</span>
										<span>today</span>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* shimmer */}
						{!reducedMotion && (
							<motion.div
								aria-hidden
								className='pointer-events-none absolute inset-0'
								animate={{
									backgroundPosition: ['-200% 0%', '200% 0%'],
								}}
								transition={{
									duration: 6,
									repeat: Infinity,
									ease: 'linear',
								}}
								style={{
									backgroundImage:
										'linear-gradient(90deg, transparent, rgba(99,102,241,0.10), transparent)',
									backgroundSize: '200% 100%',
								}}
							/>
						)}
					</motion.div>

					{/* Floating cards */}
					<div className='grid gap-3 sm:grid-cols-3'>
						{floatingCardsData.map((c, idx) => (
							<motion.div
								key={c.title}
								initial={{
									opacity: 0,
									y: 14,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									duration: 0.65,
									delay: 0.32 + idx * 0.08,
								}}
								whileHover={
									reducedMotion
										? undefined
										: { y: -4 }
								}
								className='rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur'
							>
								<div className='flex items-center justify-between'>
									<p className='text-xs font-semibold text-slate-900'>
										{c.title}
									</p>
									<Badge
										variant='outline'
										className='text-[10px] rounded-full bg-slate-50 px-2 py-1 text-slate-500 ring-1 ring-slate-200'
									>
										{c.tag}
									</Badge>
								</div>
								<p className='mt-2 text-sm font-semibold text-slate-900'>
									{c.value}
								</p>
								<p className='mt-1 text-xs text-slate-500'>{c.hint}</p>
							</motion.div>
						))}
					</div>

					{/* Signature strip */}
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.7,
							delay: 0.5,
						}}
						className='relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 p-4'
					>
						<div className='flex items-center justify-between gap-4'>
							<div>
								<p className='text-xs font-semibold text-white'>
									What I&apos;m best at
								</p>
								<p className='mt-1 text-xs text-white/70'>
									turning messy problems into clean systems.
								</p>
							</div>
							<Button
								variant='outline'
								size='sm'
								className='inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 border-white/20'
								asChild
							>
								<a href='#work'>
									See work{' '}
									<span aria-hidden>→</span>
								</a>
							</Button>
						</div>

						{!reducedMotion && (
							<motion.div
								aria-hidden
								className='pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-white/10 blur-2xl'
								animate={{
									x: [0, -10, 0],
									y: [0, 10, 0],
								}}
								transition={{
									duration: 6,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							/>
						)}
					</motion.div>
				</div>
			</motion.div>

			<p className='mt-3 text-center text-xs text-slate-400'>
				Move your cursor for subtle depth ✨
			</p>
		</div>
	)
}

