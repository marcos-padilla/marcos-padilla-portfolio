'use client'

import Link from 'next/link'
import { Command } from 'lucide-react'
import { PROFILE } from '@/data'
import { motion } from 'framer-motion'

export function NavLogo() {
	return (
		<Link
			href='#'
			className='flex items-center gap-2 group relative'
			aria-label='Home'
		>
			<motion.div
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className='w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow'
			>
				<Command size={18} />
			</motion.div>
			<span className='font-bold text-xl tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors'>
				{PROFILE.name.split(' ')[0]}
			</span>
		</Link>
	)
}

