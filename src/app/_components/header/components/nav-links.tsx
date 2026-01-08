'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export interface NavLink {
	name: string
	href: string
}

interface NavLinksProps {
	links: NavLink[]
	onLinkClick?: () => void
}

export function NavLinks({ links, onLinkClick }: NavLinksProps) {
	const [activeHash, setActiveHash] = useState('')

	useEffect(() => {
		const updateActiveHash = () => {
			// Get current hash from URL
			const hash = window.location.hash
			
			// If no hash, check scroll position to determine active section
			if (!hash) {
				const sections = links
					.filter(link => link.href.startsWith('#'))
					.map(link => {
						const id = link.href.substring(1)
						const element = document.getElementById(id)
						if (element) {
							const rect = element.getBoundingClientRect()
							return {
								id,
								href: link.href,
								top: rect.top,
								bottom: rect.bottom,
							}
						}
						return null
					})
					.filter(Boolean) as Array<{ id: string; href: string; top: number; bottom: number }>

				// Find the section that's currently in view
				const viewportMiddle = window.innerHeight / 2
				const activeSection = sections.find(
					section => section.top <= viewportMiddle && section.bottom >= viewportMiddle
				) || sections.find(section => section.top <= 100 && section.top >= -100)

				if (activeSection) {
					setActiveHash(activeSection.href)
				} else {
					setActiveHash('#')
				}
			} else {
				setActiveHash(hash)
			}
		}

		updateActiveHash()
		window.addEventListener('hashchange', updateActiveHash)
		window.addEventListener('scroll', updateActiveHash, { passive: true })

		return () => {
			window.removeEventListener('hashchange', updateActiveHash)
			window.removeEventListener('scroll', updateActiveHash)
		}
	}, [links])

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		if (href.startsWith('#')) {
			e.preventDefault()
			const id = href.substring(1)
			const element = document.getElementById(id)
			if (element) {
				const headerOffset = 80 // Account for fixed header
				const elementPosition = element.getBoundingClientRect().top
				const offsetPosition = elementPosition + window.pageYOffset - headerOffset

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth',
				})
			}
		}
		onLinkClick?.()
	}

	return (
		<nav className='hidden md:flex items-center gap-1' aria-label='Main navigation'>
			{links.map((link) => {
				const isActive = activeHash === link.href
				return (
					<Link
						key={link.href}
						href={link.href}
						onClick={(e) => handleLinkClick(e, link.href)}
						className='relative px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-lg group'
					>
						{link.name}
						{/* Active indicator */}
						{isActive && (
							<motion.div
								layoutId='activeNavLink'
								className='absolute inset-0 bg-slate-100 rounded-lg -z-10'
								transition={{
									type: 'spring',
									stiffness: 380,
									damping: 30,
								}}
							/>
						)}
						{/* Hover underline */}
						<span className='absolute bottom-1 left-3 right-3 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full' />
					</Link>
				)
			})}
		</nav>
	)
}

