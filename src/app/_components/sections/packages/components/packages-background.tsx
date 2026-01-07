export function PackagesBackground() {
	return (
		<div className='absolute inset-0 bg-white'>
			<div className='absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white' />
			<div
				className='absolute inset-0 z-0 pointer-events-none opacity-[0.03]'
				style={{
					backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
					backgroundSize: '24px 24px',
				}}
			/>
		</div>
	)
}

