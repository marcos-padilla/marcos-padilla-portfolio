import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/common/section-header'
import { Chip } from '@/components/common/chip'
import { Reveal } from '@/components/common/reveal'
import { PROJECTS } from '@/data'

export function Projects() {
	return (
		<section
			className='mx-auto max-w-6xl px-4 py-14 sm:py-16'
			id='projects'
		>
			<SectionHeader
				eyebrow='Work'
				title='Projects'
				desc='A selection of work that shows range: multi-tenant products, analytics, automation.'
			/>

			<div className='grid gap-4 md:grid-cols-2'>
				{PROJECTS.map((p, idx) => (
					<Reveal key={p.title} delay={idx * 0.05}>
						<Card className='group relative rounded-2xl border-zinc-200 bg-white shadow-sm transition hover:shadow-md gap-0'>
							<div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-zinc-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100' />
							<CardContent className="p-6 relative gap-0">
								<div className='flex items-start justify-between gap-3'>
									<div>
										<div className='text-base font-semibold text-zinc-900'>
											{p.title}
										</div>
										<p className='mt-2 text-sm text-zinc-600'>
											{p.description}
										</p>
									</div>
									<div className='hidden sm:flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700'>
										<span className='text-lg'>↗</span>
									</div>
								</div>

								<div className='mt-4 flex flex-wrap gap-2'>
									{p.tags.map((t) => (
										<Chip key={t} label={t} />
									))}
								</div>

								{p.links?.length ? (
									<div className='mt-5 flex flex-wrap gap-2'>
										{p.links.map((l) => (
											<Button
												key={l.label}
												variant="outline"
												size="sm"
												className='rounded-xl border-zinc-200 bg-white hover:bg-zinc-50'
												asChild
											>
												<a href={l.href}>
													{l.label}
													<span className='text-zinc-400 ml-2'>→</span>
												</a>
											</Button>
										))}
									</div>
								) : null}
							</CardContent>
						</Card>
					</Reveal>
				))}
			</div>
		</section>
	)
}

