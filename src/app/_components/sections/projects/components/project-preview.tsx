import type { Project } from '../types'

interface ProjectPreviewProps {
	project: Project
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
	return (
		<div className='w-full md:w-1/2 h-48 md:h-full order-1 md:order-2 relative overflow-hidden bg-slate-100 rounded-r-3xl flex-shrink-0'>
			<div
				className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} opacity-60`}
			/>

			{/* Abstract Shapes/Mockup Representation */}
			<div className='absolute inset-0 flex items-center justify-center p-12'>
				<div className='relative w-full h-full bg-white/80 rounded-tl-2xl border-t border-l border-slate-200 shadow-2xl translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 hover:translate-x-6 hover:translate-y-6 transition-transform duration-500'>
					{/* Fake UI Inside the Mockup */}
					<div className='p-4 border-b border-slate-200 flex gap-2'>
						<div className='w-3 h-3 rounded-full bg-red-400' />
						<div className='w-3 h-3 rounded-full bg-yellow-400' />
						<div className='w-3 h-3 rounded-full bg-green-400' />
					</div>
					<div className='p-8 space-y-4'>
						<div className='w-1/2 h-8 bg-slate-200 rounded-lg' />
						<div className='w-full h-32 bg-slate-200 rounded-lg' />
						<div className='flex gap-4'>
							<div className='w-1/3 h-24 bg-slate-200 rounded-lg' />
							<div className='w-1/3 h-24 bg-slate-200 rounded-lg' />
							<div className='w-1/3 h-24 bg-slate-200 rounded-lg' />
						</div>
					</div>
				</div>
			</div>

			{/* Gradient Overlay for blend */}
			<div className='absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:to-white/90' />
		</div>
	)
}

