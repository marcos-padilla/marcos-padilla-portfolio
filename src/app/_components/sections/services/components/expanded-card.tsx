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
					className='absolute inset-0 bg-neutral-950/90 backdrop-blur-md'
					onClick={onClose}
				/>

				{/* Card Container */}
				<motion.div
					layoutId={`card-${service.id}`}
					className='relative w-full max-w-4xl h-full max-h-[90vh] bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 flex flex-col md:flex-row shadow-2xl z-10'
				>
					{/* Close Button */}
					<Button
						variant='ghost'
						size='icon'
						onClick={(e) => {
							e.stopPropagation()
							onClose()
						}}
						className='absolute top-6 right-6 z-20 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white'
					>
						<X size={20} />
					</Button>

					{/* Left: Visual & Key Info */}
					<div className='w-full md:w-2/5 relative p-8 md:p-12 flex flex-col justify-between overflow-hidden bg-neutral-800/50'>
						{/* Decorative background blobs */}
						<div
							className='absolute top-0 right-0 w-full h-full opacity-30 blur-[60px]'
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
								className='mt-8 text-3xl md:text-4xl font-bold text-white leading-tight'
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
										className='px-3 py-1 rounded-full text-xs font-medium bg-white/10 border-white/5 text-neutral-300'
									>
										{tag}
									</Badge>
								))}
							</motion.div>
						</div>

						<div className='relative z-10 mt-12 md:mt-0'>
							<h4 className='text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4'>
								Use Cases
							</h4>
							<ul className='space-y-3'>
								{service.useCases.map((useCase, i) => (
									<li
										key={i}
										className='flex items-start gap-3 text-sm text-neutral-300'
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
					<div className='w-full md:w-3/5 p-8 md:p-12 bg-neutral-900 overflow-y-auto custom-scrollbar'>
						<div className='prose prose-invert max-w-none'>
							<h4 className='text-xl font-semibold text-white mb-4'>
								About this service
							</h4>
							<p className='text-neutral-400 leading-relaxed mb-8'>
								{service.fullDescription}
							</p>

							<h4 className='text-xl font-semibold text-white mb-4'>
								Key Features
							</h4>
							<div className='grid grid-cols-1 gap-4 mb-12'>
								{service.features.map((feature, i) => (
									<div
										key={i}
										className='p-4 rounded-xl bg-neutral-800/50 border border-white/5 hover:border-white/10 transition-colors'
									>
										<h5 className='font-medium text-white mb-1'>
											{feature.split(':')[0]}
										</h5>
										<p className='text-sm text-neutral-400'>
											Included in our standard
											engagement packages.
										</p>
									</div>
								))}
							</div>
						</div>

						{/* Bottom CTA */}
						<div className='mt-auto pt-8'>
							<Separator className='mb-6 bg-white/10' />
							<div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
								<div>
									<p className='text-white font-medium'>
										Ready to start?
									</p>
									<p className='text-sm text-neutral-500'>
										Let&apos;s discuss how we can help.
									</p>
								</div>
								<Button
									size='lg'
									className='w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 flex items-center justify-center gap-2'
								>
									Get in Touch <ArrowUpRight size={18} />
								</Button>
							</div>
						</div>
					</div>
				</motion.div>
			</motion.div>
	)
}

