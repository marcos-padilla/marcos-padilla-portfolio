import { Card, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/common/section-header'
import { Reveal } from '@/components/common/reveal'
import { SKILLS } from '@/data'

export function Skills() {
	const groups = Object.entries(SKILLS)

	return (
		<section
			className='mx-auto max-w-6xl px-4 py-14 sm:py-16'
			id='skills'
		>
			<SectionHeader
				eyebrow='Capabilities'
				title='Analytics and engineering — cleanly packaged'
				desc='A quick snapshot of the tools and skills I use to deliver outcomes.'
			/>

			<div className='grid gap-4 md:grid-cols-3'>
				{groups.map(([k, items], idx) => (
					<Reveal key={k} delay={idx * 0.05}>
						<Card className='rounded-2xl border-zinc-200 bg-white shadow-sm gap-0'>
							<CardContent className="p-5 gap-0">
								<div className='text-sm font-semibold text-zinc-900'>
									{k}
								</div>
								<div className='mt-4 flex flex-col gap-2'>
									{items.map((it) => (
										<div
											key={it}
											className='flex items-start gap-2 text-sm text-zinc-700'
										>
											<span className='mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400' />
											<span>{it}</span>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</Reveal>
				))}
			</div>
		</section>
	)
}

