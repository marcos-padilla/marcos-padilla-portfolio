'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Chip } from '@/components/common/chip'
import { Glow } from '@/components/common/glow'
import { PROFILE, HIGHLIGHTS } from '@/data'

export function Hero() {
	const reduce = useReducedMotion()

	return (
		<section className='relative overflow-hidden'>
			<Glow />
			<div className='mx-auto max-w-6xl px-4 pt-14 pb-10 sm:pt-20 sm:pb-14'>
				<div className='grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end'>
					<div>
						<motion.div
							initial={
								reduce
									? { opacity: 1 }
									: { opacity: 0, y: 14 }
							}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.7,
								ease: [0.22, 1, 0.36, 1],
							}}
							className='inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-700'
						>
							<span className='inline-block h-2 w-2 rounded-full bg-emerald-500' />
							Available for roles (Data Analyst / Developer)
						</motion.div>

						<motion.h1
							initial={
								reduce
									? { opacity: 1 }
									: { opacity: 0, y: 18 }
							}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								ease: [0.22, 1, 0.36, 1],
								delay: 0.05,
							}}
							className='mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900'
						>
							{PROFILE.title}
							<span className='block mt-2 text-zinc-500 text-2xl sm:text-3xl'>
								Shipping products + turning data into decisions.
							</span>
						</motion.h1>

						<motion.p
							initial={
								reduce
									? { opacity: 1 }
									: { opacity: 0, y: 16 }
							}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								ease: [0.22, 1, 0.36, 1],
								delay: 0.12,
							}}
							className='mt-5 max-w-2xl text-base sm:text-lg text-zinc-600'
						>
							{PROFILE.blurb}
						</motion.p>

						<motion.div
							initial={
								reduce
									? { opacity: 1 }
									: { opacity: 0, y: 12 }
							}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								ease: [0.22, 1, 0.36, 1],
								delay: 0.18,
							}}
							className='mt-7 flex flex-wrap items-center gap-3'
						>
							<Button
								size="lg"
								className='rounded-xl bg-zinc-900 hover:bg-zinc-800'
								asChild
							>
								<a href={PROFILE.ctaPrimary.href}>
									{PROFILE.ctaPrimary.label}
								</a>
							</Button>
							<Button
								variant="outline"
								size="lg"
								className='rounded-xl border-zinc-200 bg-white hover:bg-zinc-50'
								asChild
							>
								<a href={PROFILE.ctaSecondary.href}>
									{PROFILE.ctaSecondary.label}
								</a>
							</Button>

							<div className='flex items-center gap-2 pl-1'>
								{PROFILE.socials.map((s) => (
									<a
										key={s.label}
										href={s.href}
										className='rounded-xl px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition'
									>
										{s.label}
									</a>
								))}
							</div>
						</motion.div>
					</div>

					<Card className='rounded-2xl border-zinc-200 bg-white/70 p-5 sm:p-6 shadow-sm gap-0'>
						<CardContent className="p-0 gap-0">
							<div className='flex items-start justify-between gap-4'>
								<div>
									<div className='text-sm font-medium text-zinc-900'>
										{PROFILE.name}
									</div>
									<div className='mt-1 text-sm text-zinc-600'>
										{PROFILE.location}
									</div>
								</div>
								<div className='inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700'>
									Portfolio
								</div>
							</div>

							<div className='mt-5 grid grid-cols-2 gap-3'>
								{HIGHLIGHTS.map((h, i) => (
									<motion.div
										key={h.label}
										initial={
											reduce
												? { opacity: 1 }
												: { opacity: 0, y: 12 }
										}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.6,
											ease: [0.22, 1, 0.36, 1],
											delay: 0.22 + i * 0.06,
										}}
										className='rounded-2xl border border-zinc-200 bg-white p-4'
									>
										<div className='text-xl font-semibold text-zinc-900'>
											{h.value}
										</div>
										<div className='mt-1 text-xs text-zinc-600'>
											{h.label}
										</div>
									</motion.div>
								))}
							</div>

							<div className='mt-5 rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-4'>
								<div className='text-sm font-medium text-zinc-900'>
									What I do
								</div>
								<div className='mt-2 flex flex-wrap gap-2'>
									{[
										'SQL',
										'pandas',
										'Dashboards',
										'Next.js',
										'TypeScript',
										'Laravel',
									].map((t) => (
										<Chip key={t} label={t} />
									))}
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			{/* Divider */}
			<div className='mx-auto max-w-6xl px-4'>
				<div className='h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent' />
			</div>
		</section>
	)
}

