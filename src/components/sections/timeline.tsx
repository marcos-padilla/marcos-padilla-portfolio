import { Card, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/common/section-header'
import { Reveal } from '@/components/common/reveal'
import { cn } from '@/lib/utils'
import { TIMELINE } from '@/data'

export function Timeline() {
	return (
		<section
			className='mx-auto max-w-6xl px-4 py-14 sm:py-16'
			id='experience'
		>
			<SectionHeader
				eyebrow='Experience'
				title='Timeline'
				desc='A clean, readable timeline with subtle motion — great for recruiters.'
			/>

			<Card className='rounded-3xl border-zinc-200 bg-white shadow-sm overflow-hidden'>
				<div className='grid gap-0'>
					{TIMELINE.map((t, idx) => (
						<Reveal key={t.title} delay={idx * 0.05}>
							<div
								className={cn(
									'p-6 sm:p-8',
									idx !== 0 && 'border-t border-zinc-200'
								)}
							>
								<div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3'>
									<div>
										<div className='text-sm font-semibold text-zinc-900'>
											{t.title}
										</div>
										<div className='mt-1 text-sm text-zinc-600'>
											{t.org ? <span>{t.org} • </span> : null}
											<span className='text-zinc-500'>{t.period}</span>
										</div>
									</div>
									<div className='inline-flex w-fit rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700'>
										Highlights
									</div>
								</div>

								<div className='mt-4 grid gap-2'>
									{t.details.map((d) => (
										<div
											key={d}
											className='flex items-start gap-2 text-sm text-zinc-700'
										>
											<span className='mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400' />
											<span>{d}</span>
										</div>
									))}
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</Card>
		</section>
	)
}

