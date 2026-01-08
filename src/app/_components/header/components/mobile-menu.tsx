'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NavLinks, type NavLink } from './nav-links'
import { NavCTA } from './nav-cta'
import { PROFILE } from '@/data'

interface MobileMenuProps {
	isOpen: boolean
	onClose: () => void
	links: NavLink[]
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className='fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm md:hidden'
					/>

					{/* Menu Panel */}
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{
							type: 'spring',
							damping: 30,
							stiffness: 300,
						}}
						className='fixed inset-y-0 right-0 z-[70] w-full max-w-sm bg-white shadow-2xl flex flex-col p-6 md:hidden'
					>
						{/* Header */}
						<div className='flex items-center justify-between mb-12'>
							<span className='text-xl font-bold text-slate-900 flex items-center gap-2'>
								<div className='w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600' />
								Menu
							</span>
							<Button
								onClick={onClose}
								variant='ghost'
								size='icon'
								className='p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg'
								aria-label='Close menu'
							>
								<X size={20} />
							</Button>
						</div>

						{/* Links */}
						<div className='flex flex-col gap-2 flex-1'>
							{links.map((link, i) => {
								const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
									if (link.href.startsWith('#')) {
										e.preventDefault()
										const id = link.href.substring(1)
										const element = document.getElementById(id)
										if (element) {
											const headerOffset = 80
											const elementPosition = element.getBoundingClientRect().top
											const offsetPosition = elementPosition + window.pageYOffset - headerOffset

											window.scrollTo({
												top: offsetPosition,
												behavior: 'smooth',
											})
										}
									}
									onClose()
								}

								return (
									<motion.div
										key={link.href}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											delay: 0.1 + i * 0.05,
										}}
									>
										<Link
											href={link.href}
											onClick={handleClick}
											className='text-2xl font-semibold text-slate-700 hover:text-slate-900 flex items-center justify-between group py-3 transition-colors'
										>
											{link.name}
											<ArrowRight
												size={20}
												className='opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-600'
											/>
										</Link>
									</motion.div>
								)
							})}
						</div>

						{/* Footer CTA */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className='mt-auto pt-6 border-t border-slate-200'
						>
							<NavCTA variant='mobile' onClick={onClose} />
						</motion.div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}

