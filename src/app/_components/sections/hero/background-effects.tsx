export function BackgroundEffects() {
	return (
		<div className='pointer-events-none absolute inset-0 -z-10'>
			{/* soft grid */}
			<div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:72px_72px]' />
			{/* gradient washes */}
			<div className='absolute -top-44 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_55%)] blur-2xl' />
			<div className='absolute -bottom-52 right-[-10rem] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.16),transparent_55%)] blur-2xl' />
			<div className='absolute -bottom-36 left-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.14),transparent_55%)] blur-2xl' />
		</div>
	)
}

