'use client'

import Link from 'next/link'
import { Code2 } from 'lucide-react'
import { motion } from 'framer-motion'

export function NavLogo() {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		// If we're already on the home page, scroll to top
		if (window.location.pathname === '/') {
			e.preventDefault()
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	return (
		<Link
			href='/'
			onClick={handleClick}
			className='flex items-center gap-2 group relative'
			aria-label='Home'
		>
			<motion.div
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className='w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-lg shadow-slate-900/20 group-hover:shadow-slate-900/30 transition-shadow'
			>
				<Code2 size={18} />
			</motion.div>
			<span className='font-bold text-xl tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors'>
				marcos-padilla.dev
			</span>
		</Link>
	)
}

