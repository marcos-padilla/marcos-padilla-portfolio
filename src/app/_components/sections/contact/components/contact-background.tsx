'use client'

export function ContactBackground() {
	return (
		<>
			<div className='absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none' />
			<div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none' />
		</>
	)
}

