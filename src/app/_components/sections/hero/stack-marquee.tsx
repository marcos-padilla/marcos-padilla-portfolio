'use client'

import { Badge } from '@/components/ui/badge'
import { chips } from './data'

export function StackMarquee() {
	return (
		<div className='mt-12'>
			<div className='flex items-center justify-between px-0'>
				<p className='text-xs font-medium text-slate-500'>Stack I use</p>
			</div>

			{/* Screen reader only: accessible list of technologies */}
			<ul className='sr-only'>
				<li>Technologies I use: {chips.join(', ')}</li>
			</ul>

			{/* On mobile: wrap neatly (no marquee) */}
			<div className='mt-3 md:hidden flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white/60 p-3 shadow-sm backdrop-blur' aria-hidden='true'>
				{chips.map((c) => (
					<Badge
						key={c}
						variant='outline'
						className='whitespace-nowrap rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200'
					>
						{c}
					</Badge>
				))}
			</div>

			{/* On md+: full-bleed ticker */}
			<div className='mt-3 hidden md:block' aria-hidden='true'>
				<div className='relative left-1/2 right-1/2 -mx-[50vw] w-screen px-6'>
					<div className='mx-auto max-w-7xl'>
						<div className='overflow-hidden rounded-2xl border border-slate-200 bg-white/60 shadow-sm backdrop-blur'>
							<div className='tickerTrack group flex gap-3 py-3 [--duration:28s] hover:[animation-play-state:paused]' aria-hidden='true'>
								<div className='tickerGroup flex shrink-0 gap-3 pr-3'>
									{chips.map((c) => (
										<Badge
											key={`a-${c}`}
											variant='outline'
											className='whitespace-nowrap rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200'
										>
											{c}
										</Badge>
									))}
								</div>
								<div
									className='tickerGroup flex shrink-0 gap-3 pr-3'
									aria-hidden='true'
								>
									{chips.map((c) => (
										<Badge
											key={`b-${c}`}
											variant='outline'
											className='whitespace-nowrap rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200'
										>
											{c}
										</Badge>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

