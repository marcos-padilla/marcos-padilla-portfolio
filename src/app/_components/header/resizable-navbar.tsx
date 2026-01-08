'use client'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from 'framer-motion'

import React, { useRef, useState } from 'react'

interface NavbarProps {
	children: React.ReactNode
	className?: string
}

interface NavBodyProps {
	children: React.ReactNode
	className?: string
	visible?: boolean
}

interface NavItemsProps {
	items: {
		name: string
		link: string
	}[]
	className?: string
	onItemClick?: () => void
}

interface MobileNavProps {
	children: React.ReactNode
	className?: string
	visible?: boolean
}

interface MobileNavHeaderProps {
	children: React.ReactNode
	className?: string
}

interface MobileNavMenuProps {
	children: React.ReactNode
	className?: string
	isOpen: boolean
	onClose: () => void
}

export const Navbar = ({ children, className }: NavbarProps) => {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollY } = useScroll()
	const [visible, setVisible] = useState<boolean>(false)

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (latest > 100) {
			setVisible(true)
		} else {
			setVisible(false)
		}
	})

	return (
		<motion.div
			ref={ref}
			className={cn(
				'fixed inset-x-0 top-4 z-50 w-full px-4',
				className
			)}
		>
			{React.Children.map(children, (child) =>
				React.isValidElement(child)
					? React.cloneElement(
							child as React.ReactElement<{
								visible?: boolean
							}>,
							{ visible }
					  )
					: child
			)}
		</motion.div>
	)
}

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
	return (
		<motion.div
			animate={{
				backdropFilter: visible
					? 'blur(20px) saturate(180%)'
					: 'blur(12px) saturate(150%)',
				backgroundColor: visible
					? 'rgba(255, 255, 255, 0.85)'
					: 'rgba(255, 255, 255, 0.7)',
				boxShadow: visible
					? '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
					: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
				width: visible ? '40%' : '100%',
				borderWidth: visible ? '1px' : '1px',
				borderColor: visible
					? 'rgba(255, 255, 255, 0.3)'
					: 'rgba(255, 255, 255, 0.2)',
			}}
			transition={{
				type: 'spring',
				stiffness: 200,
				damping: 50,
			}}
			style={{
				minWidth: '800px',
			}}
			className={cn(
				'relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-6 py-3 lg:flex',
				className
			)}
		>
			{children}
		</motion.div>
	)
}

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
	const [hovered, setHovered] = useState<number | null>(null)

	const handleLinkClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		if (href.startsWith('#')) {
			e.preventDefault()
			const id = href.substring(1)
			const element = document.getElementById(id)
			if (element) {
				const headerOffset = 100
				const elementPosition = element.getBoundingClientRect().top
				const offsetPosition =
					elementPosition + window.pageYOffset - headerOffset

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth',
				})
			}
		}
		onItemClick?.()
	}

	return (
		<motion.div
			onMouseLeave={() => setHovered(null)}
			className={cn(
				'absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium text-slate-600 transition duration-200 hover:text-slate-900 lg:flex lg:space-x-1',
				className
			)}
		>
			{items.map((item, idx) => (
				<a
					onMouseEnter={() => setHovered(idx)}
					onClick={(e) => handleLinkClick(e, item.link)}
					className='relative px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors'
					key={`link-${idx}`}
					href={item.link}
				>
					{hovered === idx && (
						<motion.div
							layoutId='hovered'
							className='absolute inset-0 h-full w-full rounded-full bg-slate-100/80 backdrop-blur-sm'
							transition={{
								type: 'spring',
								stiffness: 300,
								damping: 30,
							}}
						/>
					)}
					<span className='relative z-20'>{item.name}</span>
				</a>
			))}
		</motion.div>
	)
}

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
	return (
		<motion.div
			animate={{
				backdropFilter: visible
					? 'blur(20px) saturate(180%)'
					: 'blur(12px) saturate(150%)',
				backgroundColor: visible
					? 'rgba(255, 255, 255, 0.85)'
					: 'rgba(255, 255, 255, 0.7)',
				boxShadow: visible
					? '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
					: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
				width: visible ? '90%' : '100%',
				paddingRight: visible ? '12px' : '0px',
				paddingLeft: visible ? '12px' : '0px',
				borderRadius: visible ? '12px' : '2rem',
				borderWidth: '1px',
				borderColor: visible
					? 'rgba(255, 255, 255, 0.3)'
					: 'rgba(255, 255, 255, 0.2)',
			}}
			transition={{
				type: 'spring',
				stiffness: 200,
				damping: 50,
			}}
			className={cn(
				'relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden',
				className
			)}
		>
			{children}
		</motion.div>
	)
}

export const MobileNavHeader = ({
	children,
	className,
}: MobileNavHeaderProps) => {
	return (
		<div
			className={cn(
				'flex w-full flex-row items-center justify-between',
				className
			)}
		>
			{children}
		</div>
	)
}

export const MobileNavMenu = ({
	children,
	className,
	isOpen,
	onClose,
}: MobileNavMenuProps) => {
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
						className='fixed inset-0 z-[45] bg-black/20 backdrop-blur-sm lg:hidden'
					/>
					{/* Menu */}
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{
							type: 'spring',
							stiffness: 300,
							damping: 30,
						}}
						className={cn(
							'absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-2xl bg-white/95 backdrop-blur-xl px-4 py-8 shadow-[0_8px_32px_rgba(0,_0,_0,_0.12),_0_2px_8px_rgba(0,_0,_0,_0.08),_inset_0_1px_0_rgba(255,_255,_255,_0.9)] border border-white/30',
							className
						)}
					>
						{children}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}

export const MobileNavToggle = ({
	isOpen,
	onClick,
}: {
	isOpen: boolean
	onClick: () => void
}) => {
	return (
		<button
			onClick={onClick}
			className='p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100/50 rounded-lg transition-colors'
			aria-label={isOpen ? 'Close menu' : 'Open menu'}
		>
			{isOpen ? (
				<X size={20} className='text-slate-900' />
			) : (
				<Menu size={20} className='text-slate-700' />
			)}
		</button>
	)
}

export const NavbarLogo = ({ children }: { children?: React.ReactNode }) => {
	return <div className='relative z-20 flex items-center'>{children}</div>
}

export const NavbarButton = ({
	href,
	as: Tag = 'a',
	children,
	className,
	variant = 'primary',
	...props
}: {
	href?: string
	as?: React.ElementType
	children: React.ReactNode
	className?: string
	variant?: 'primary' | 'secondary' | 'dark' | 'gradient'
} & (
	| React.ComponentPropsWithoutRef<'a'>
	| React.ComponentPropsWithoutRef<'button'>
)) => {
	const baseStyles =
		'px-4 py-2 rounded-lg text-sm font-semibold relative cursor-pointer transition-all duration-200 inline-block text-center'

	const variantStyles = {
		primary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md',
		secondary:
			'bg-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-100/50',
		dark: 'bg-black text-white hover:bg-slate-900 shadow-lg',
		gradient:
			'bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-lg hover:shadow-xl',
	}

	return (
		<Tag
			href={href || undefined}
			className={cn(baseStyles, variantStyles[variant], className)}
			{...props}
		>
			{children}
		</Tag>
	)
}
