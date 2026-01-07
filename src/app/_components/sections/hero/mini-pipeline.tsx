'use client'

import { motion } from 'framer-motion'

interface MiniPipelineProps {
	reducedMotion: boolean
}

export function MiniPipeline({ reducedMotion }: MiniPipelineProps) {
	const nodes = [14, 76, 138, 200]
	const start = nodes[0]
	const end = nodes[nodes.length - 1]

	return (
		<div className='relative'>
			<svg
				viewBox='0 0 220 44'
				className='h-11 w-full'
				role='img'
				aria-label='AI pipeline'
			>
				<defs>
					<linearGradient id='pipe' x1='0' y1='0' x2='1' y2='0'>
						<stop
							offset='0'
							stopColor='rgb(99 102 241 / 0.75)'
						/>
						<stop
							offset='0.5'
							stopColor='rgb(16 185 129 / 0.55)'
						/>
						<stop
							offset='1'
							stopColor='rgb(14 165 233 / 0.65)'
						/>
					</linearGradient>
				</defs>

				{/* track */}
				<line
					x1={start}
					y1={22}
					x2={end}
					y2={22}
					stroke='rgb(15 23 42 / 0.18)'
					strokeWidth='6'
					strokeLinecap='round'
				/>
				<line
					x1={start}
					y1={22}
					x2={end}
					y2={22}
					stroke='url(#pipe)'
					strokeWidth='2.5'
					strokeLinecap='round'
					strokeDasharray='4 7'
					className={!reducedMotion ? 'dash' : undefined}
				/>

				{/* nodes */}
				{nodes.map((x, idx) => (
					<g key={x}>
						<circle
							cx={x}
							cy={22}
							r={7}
							fill='rgb(255 255 255 / 0.85)'
						/>
						<circle
							cx={x}
							cy={22}
							r={6}
							fill='transparent'
							stroke='rgb(15 23 42 / 0.18)'
						/>
						<circle
							cx={x}
							cy={22}
							r={2.7}
							fill='rgb(15 23 42 / 0.65)'
						/>
						<text
							x={x}
							y={41}
							textAnchor='middle'
							fontSize='8'
							fill='rgb(100 116 139)'
						>
							{idx === 0
								? 'ingest'
								: idx === 1
								? 'embed'
								: idx === 2
								? 'retrieve'
								: 'generate'}
						</text>
					</g>
				))}

				{/* moving dot */}
				{!reducedMotion && (
					<motion.circle
						r={4.2}
						cy={22}
						fill='rgb(15 23 42 / 0.9)'
						initial={{ cx: start }}
						animate={{ cx: [start, end, start] }}
						transition={{
							duration: 4.8,
							repeat: Infinity,
							ease: 'linear',
						}}
					/>
				)}
			</svg>

			{/* subtle glow */}
			<div className='pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.15),transparent_55%)]' />
		</div>
	)
}

