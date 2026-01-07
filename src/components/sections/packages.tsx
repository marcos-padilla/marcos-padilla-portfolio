import { Card, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/common/section-header'
import { Chip } from '@/components/common/chip'
import { Reveal } from '@/components/common/reveal'
import { PACKAGES } from '@/data'

export function Packages() {
	return (
		<section
			className='mx-auto max-w-6xl px-4 py-14 sm:py-16'
			id='packages'
		>
			<SectionHeader
				eyebrow='Open source'
				title='Packages'
				desc='Small tools that solve real pain. These are great for showing product thinking in miniature.'
			/>

			<div className='grid gap-4 md:grid-cols-3'>
				{PACKAGES.map((p, idx) => (
					<Reveal key={p.name} delay={idx * 0.05}>
						<Card className='group block rounded-2xl border-zinc-200 bg-white shadow-sm transition hover:shadow-md gap-0'>
							<a href={p.href ?? '#'} className="block">
								<CardContent className="p-6 gap-0">
									<div className='flex items-start justify-between gap-3'>
										<div>
											<div className='text-base font-semibold text-zinc-900'>
												{p.name}
											</div>
											<p className='mt-2 text-sm text-zinc-600'>
												{p.description}
											</p>
										</div>
										<div className='h-9 w-9 shrink-0 rounded-xl border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 group-hover:bg-zinc-50'>
											↗
										</div>
									</div>

									<div className='mt-4 flex flex-wrap gap-2'>
										{p.tech.map((t) => (
											<Chip key={t} label={t} />
										))}
									</div>

									<div className='mt-5 text-sm text-zinc-700'>
										<span className='text-zinc-500'>Why it matters:</span>{' '}
										reduces friction and improves reliability.
									</div>
								</CardContent>
							</a>
						</Card>
					</Reveal>
				))}
			</div>
		</section>
	)
}

