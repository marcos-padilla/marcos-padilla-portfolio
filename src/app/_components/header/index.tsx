'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	MobileNavHeader,
	MobileNavMenu,
	MobileNavToggle,
	NavbarLogo,
} from './resizable-navbar'
import { NavLogo } from './components/nav-logo'
import { NavCTA } from './components/nav-cta'

const navLinks = [
	{ name: 'Services', link: '#services' },
	{ name: 'Packages', link: '#packages' },
	{ name: 'Projects', link: '#projects' },
	{ name: 'Experience', link: '#experience' },
	{ name: 'Contact', link: '#contact' },
]

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	// Close mobile menu on route change
	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
		}
	}, [mobileMenuOpen])

	const handleMobileLinkClick = () => {
		setMobileMenuOpen(false)
	}

	return (
		<Navbar>
			{/* Desktop Navigation */}
			<NavBody>
				<NavbarLogo>
					<NavLogo />
				</NavbarLogo>
				<NavItems items={navLinks} />
				<div className='relative z-20 ml-auto'>
					<NavCTA />
				</div>
			</NavBody>

			{/* Mobile Navigation */}
			<MobileNav>
				<MobileNavHeader>
					<NavbarLogo>
						<NavLogo />
					</NavbarLogo>
					<MobileNavToggle
						isOpen={mobileMenuOpen}
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					/>
				</MobileNavHeader>
				<MobileNavMenu
					isOpen={mobileMenuOpen}
					onClose={() => setMobileMenuOpen(false)}
				>
					{navLinks.map((link, i) => {
						const handleClick = (
							e: React.MouseEvent<HTMLAnchorElement>
						) => {
							if (link.link.startsWith('#')) {
								e.preventDefault()
								const id = link.link.substring(1)
								const element =
									document.getElementById(id)
								if (element) {
									const headerOffset = 100
									const elementPosition =
										element.getBoundingClientRect()
											.top
									const offsetPosition =
										elementPosition +
										window.pageYOffset -
										headerOffset

									window.scrollTo({
										top: offsetPosition,
										behavior: 'smooth',
									})
								}
							}
							handleMobileLinkClick()
						}

						return (
							<motion.a
								key={link.link}
								href={link.link}
								onClick={handleClick}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									delay: i * 0.05,
									duration: 0.3,
								}}
								className='text-lg font-semibold text-slate-700 hover:text-slate-900 transition-colors py-2'
							>
								{link.name}
							</motion.a>
						)
					})}
					<div className='mt-4 pt-4 border-t border-slate-200 w-full'>
						<NavCTA
							variant='mobile'
							onClick={handleMobileLinkClick}
						/>
					</div>
				</MobileNavMenu>
			</MobileNav>
		</Navbar>
	)
}
