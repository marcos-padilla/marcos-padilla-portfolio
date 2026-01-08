'use client'

import { motion } from 'framer-motion'
import { X, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ServiceIcon } from './service-icon'
import type { Service } from '../types'

interface ExpandedCardProps {
	service: Service
	onClose: () => void
}

export function ExpandedCard({ service, onClose }: ExpandedCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12'
		>
			{/* Backdrop */}
			<div
				className='absolute inset-0 bg-black/50 backdrop-blur-md'
				onClick={onClose}
			/>

			{/* Card Container */}
			<motion.div
				layoutId={`card-${service.id}`}
				className='relative w-full max-w-4xl h-full max-h-[90vh] bg-white rounded-2xl overflow-hidden border border-slate-200 flex flex-col md:flex-row shadow-2xl z-10'
			>
				{/* Close Button */}
				<Button
					variant='ghost'
					size='icon'
					onClick={(e) => {
						e.stopPropagation()
						onClose()
					}}
					className='absolute top-6 right-6 z-20 p-2 rounded-full bg-white/90 hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm'
				>
					<X size={20} />
				</Button>

				{/* Left: Visual & Key Info */}
				<div className='w-full md:w-2/5 relative p-8 md:p-12 flex flex-col justify-between overflow-hidden bg-slate-50'>
					{/* Decorative background blobs */}
					<div
						className='absolute top-0 right-0 w-full h-full opacity-10 blur-[60px]'
						style={{
							background: `radial-gradient(circle at 100% 0%, ${service.color}, transparent 70%)`,
						}}
					/>

						<div className='relative z-10'>
							<ServiceIcon
								icon={service.icon}
								color={service.color}
							/>
							<motion.h3
								layoutId={`title-${service.id}`}
								className='mt-8 text-3xl md:text-4xl font-bold text-slate-900 leading-tight'
							>
								{service.title}
							</motion.h3>
							<motion.div
								layoutId={`desc-${service.id}`}
								className='mt-6 flex flex-wrap gap-2'
							>
								{service.details.map((tag, i) => (
									<Badge
										key={i}
										variant='outline'
										className='px-3 py-1 rounded-full text-xs font-medium bg-white border-slate-200 text-slate-700'
									>
										{tag}
									</Badge>
								))}
							</motion.div>
						</div>

						<div className='relative z-10 mt-12 md:mt-0'>
							<h4 className='text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4'>
								Use Cases
							</h4>
							<ul className='space-y-3'>
								{service.useCases.map((useCase, i) => (
									<li
										key={i}
										className='flex items-start gap-3 text-sm text-slate-700'
									>
										<CheckCircle2
											size={16}
											className='mt-0.5 shrink-0'
											style={{
												color: service.color,
											}}
										/>
										{useCase}
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Right: Detailed Content & CTA */}
					<div className='w-full md:w-3/5 relative bg-white flex flex-col max-h-[90vh]'>
						{/* Scroll fade indicators */}
						<div className='absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent pointer-events-none z-10' />
						<div className='absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-10' />
						
						<div className='flex-1 overflow-y-auto custom-scrollbar scroll-smooth min-h-0'>
							<div className='p-8 md:p-12'>
								<div className='prose max-w-none pr-2'>
									<h4 className='text-xl font-semibold text-slate-900 mb-4'>
										About this service
									</h4>
									<p className='text-slate-600 leading-relaxed mb-8'>
										{service.fullDescription}
									</p>

									<h4 className='text-xl font-semibold text-slate-900 mb-4'>
										Key Features
									</h4>
									<div className='grid grid-cols-1 gap-4 mb-12'>
										{service.features.map((feature, i) => (
											<div
												key={i}
												className='p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors'
											>
												<h5 className='font-medium text-slate-900 mb-1'>
													{feature.split(':')[0]}
												</h5>
												<p className='text-sm text-slate-600'>
													Included in my standard
													engagement packages.
												</p>
											</div>
										))}
									</div>
								</div>

								{/* Bottom CTA */}
								<div className='pt-8'>
									<Separator className='mb-6 bg-slate-200' />
									<div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
										<div>
											<p className='text-slate-900 font-medium'>
												Ready to start?
											</p>
											<p className='text-sm text-slate-600'>
												Let&apos;s discuss how I can help.
											</p>
										</div>
										<Button
											size='lg'
											className='w-full sm:w-auto px-8 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 flex items-center justify-center gap-2 shadow-sm'
										>
											Get in Touch <ArrowUpRight size={18} />
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</motion.div>
	)
}

