'use client'

import * as React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/common/section-header'
import { Chip } from '@/components/common/chip'
import { useSmoothProgress } from '@/components/common/reveal'

const cards = [
	{
		title: 'Data cleanup → ready-to-query',
		desc: 'Schema checks, type normalization, null handling, dedupe.',
		chips: ['pandas', 'Excel', 'Quality'],
	},
	{
		title: 'SQL that scales',
		desc: 'Indexes, window functions, query plans, reliable metrics.',
		chips: ['Postgres', 'SQL', 'Modeling'],
	},
	{
		title: 'Dashboards teams trust',
		desc: 'Definitions, metric governance, and clear storytelling.',
		chips: ['BI', 'KPIs', 'Narrative'],
	},
	{
		title: 'Production-ready UIs',
		desc: 'Modern components, motion, performance, accessibility.',
		chips: ['Next.js', 'TS', 'UI'],
	},
	{
		title: 'Automation & integrations',
		desc: 'Webhooks, schedulers, workflow orchestration.',
		chips: ['n8n', 'APIs', 'Ops'],
	},
]

export function HorizontalScroll() {
	const outerRef = React.useRef<HTMLDivElement | null>(null)
	const trackRef = React.useRef<HTMLDivElement | null>(null)

	const { scrollYProgress } = useScroll({
		target: outerRef,
		offset: ['start start', 'end end'],
	})

	const progress = useSmoothProgress(scrollYProgress)

	// Translate the track from 0 to negative overflow width.
	const x = useTransform(progress, [0, 1], [0, -900])

	return (
		<section
			className='mx-auto max-w-6xl px-4 py-14 sm:py-16'
			ref={outerRef}
		>
			<SectionHeader
				eyebrow='Process'
				title='Horizontal scroll — how I work'
				desc='As you scroll, the story moves sideways. This is great for a compact, premium narrative section.'
			/>

			<div className='relative h-[520px] sm:h-[560px] rounded-3xl border border-zinc-200 bg-white shadow-sm overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-b from-zinc-50/70 to-transparent' />

				<div className='sticky top-20 sm:top-24 h-[520px] sm:h-[560px] flex items-center'>
					<motion.div
						ref={trackRef}
						style={{ x }}
						className='relative flex gap-4 px-6 sm:px-10'
					>
						{cards.map((c) => (
							<Card
								key={c.title}
								className='w-[280px] sm:w-[320px] shrink-0 rounded-2xl border-zinc-200 bg-white shadow-sm gap-0'
							>
								<CardContent className="p-5 gap-0">
									<div className='text-sm font-semibold text-zinc-900'>
										{c.title}
									</div>
									<p className='mt-2 text-sm text-zinc-600'>{c.desc}</p>
									<div className='mt-4 flex flex-wrap gap-2'>
										{c.chips.map((t) => (
											<Chip key={t} label={t} />
										))}
									</div>
									<div className='mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4'>
										<div className='text-xs text-zinc-500'>Outcome</div>
										<div className='mt-1 text-sm font-medium text-zinc-900'>
											Measurable improvement, not just output.
										</div>
									</div>
								</CardContent>
							</Card>
						))}

						{/* End cap */}
						<div className='w-[120px] shrink-0' />
					</motion.div>
				</div>
			</div>

			<div className='mt-4 text-xs text-zinc-500'>
				Tip: Adjust the x range (-900) to match your card count / widths.
			</div>
		</section>
	)
}

