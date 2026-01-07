interface SectionHeaderProps {
	eyebrow: string
	title: string
	desc?: string
}

export function SectionHeader({
	eyebrow,
	title,
	desc,
}: SectionHeaderProps) {
	return (
		<div className='mb-8'>
			<div className='text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase'>
				{eyebrow}
			</div>
			<h2 className='mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900'>
				{title}
			</h2>
			{desc ? (
				<p className='mt-3 max-w-2xl text-sm sm:text-base text-zinc-600'>
					{desc}
				</p>
			) : null}
		</div>
	)
}

