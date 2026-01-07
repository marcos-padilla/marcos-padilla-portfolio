export function Glow() {
	return (
		<div
			aria-hidden
			className='pointer-events-none absolute inset-0 overflow-hidden'
		>
			<div className='absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-b from-zinc-200/70 to-transparent blur-3xl' />
			<div className='absolute -bottom-48 left-1/3 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-t from-zinc-200/70 to-transparent blur-3xl' />
		</div>
	)
}

