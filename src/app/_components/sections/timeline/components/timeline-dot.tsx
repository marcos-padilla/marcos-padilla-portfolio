'use client'

interface TimelineDotProps {
	isActive?: boolean
}

export function TimelineDot({ isActive }: TimelineDotProps) {
	return (
		<div className='absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-slate-300 z-20 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_0_4px_rgba(255,255,255,1)]'>
			{/* Glow effect for the dot */}
			<div className='absolute inset-0 rounded-full bg-blue-500/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity' />
		</div>
	)
}

