'use client'

import { motion } from 'framer-motion'
import { Code2, Mail, Github } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
	{ name: 'Services', link: '#services' },
	{ name: 'Packages', link: '#packages' },
	{ name: 'Projects', link: '#projects' },
	{ name: 'Experience', link: '#experience' },
	{ name: 'Contact', link: '#contact' },
]

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
	if (href.startsWith('#')) {
		e.preventDefault()
		const id = href.substring(1)
		const element = document.getElementById(id)
		if (element) {
			const headerOffset = 100
			const elementPosition = element.getBoundingClientRect().top
			const offsetPosition = elementPosition + window.pageYOffset - headerOffset

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			})
		}
	}
}

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='relative border-t border-slate-200 bg-white/50 backdrop-blur-sm'>
			<div className='mx-auto max-w-7xl px-4 py-12 md:py-16'>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12'>
					{/* Brand Section */}
					<div className='space-y-4'>
						<Link
							href='/'
							className='flex items-center gap-2 text-slate-900 hover:text-slate-700 transition-colors'
						>
							<div className='flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm'>
								<Code2 className='h-5 w-5' />
							</div>
							<span className='text-lg font-semibold'>marcos-padilla.dev</span>
						</Link>
						<p className='text-sm text-slate-600 max-w-xs'>
							Full-stack developer, AI engineer, and data analyst building
							modern web solutions.
						</p>
					</div>

					{/* Navigation Links */}
					<div className='space-y-4'>
						<h3 className='text-sm font-semibold text-slate-900'>Navigation</h3>
						<nav className='flex flex-col space-y-2'>
							{navLinks.map((link) => (
								<motion.a
									key={link.link}
									href={link.link}
									onClick={(e) => scrollToSection(e, link.link)}
									whileHover={{ x: 4 }}
									className='text-sm text-slate-600 hover:text-slate-900 transition-colors w-fit'
								>
									{link.name}
								</motion.a>
							))}
						</nav>
					</div>

					{/* Contact & Social */}
					<div className='space-y-4'>
						<h3 className='text-sm font-semibold text-slate-900'>Connect</h3>
						<div className='flex flex-col space-y-3'>
							<a
								href='mailto:info@marcos-padilla.dev'
								className='flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors group'
							>
								<Mail className='h-4 w-4 group-hover:scale-110 transition-transform' />
								<span>info@marcos-padilla.dev</span>
							</a>
							<a
								href='https://github.com/marcos-padilla'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors group'
							>
								<Github className='h-4 w-4 group-hover:scale-110 transition-transform' />
								<span>GitHub</span>
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='mt-12 border-t border-slate-200 pt-8'>
					<div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
						<p className='text-sm text-slate-600'>
							© {currentYear} Marcos Padilla. All rights reserved.
						</p>
						<p className='text-sm text-slate-500'>
							Built with Next.js, TypeScript, and Tailwind CSS
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
