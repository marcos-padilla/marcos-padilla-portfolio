'use client'

import { Button } from '@/components/ui/button'
import { PROFILE } from '@/data'
import { motion } from 'framer-motion'

interface NavCTAProps {
	variant?: 'desktop' | 'mobile'
	onClick?: () => void
}

export function NavCTA({ variant = 'desktop', onClick }: NavCTAProps) {
	if (variant === 'mobile') {
		return (
			<Button
				onClick={onClick}
				className='w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base transition-colors'
				size='lg'
			>
				{PROFILE.ctaPrimary.label}
			</Button>
		)
	}

	return (
		<Button
			asChild
			size='sm'
			className='hidden md:inline-flex rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-sm hover:shadow-md transition-all'
		>
			<a href={PROFILE.ctaPrimary.href}>
				{PROFILE.ctaPrimary.label}
			</a>
		</Button>
	)
}

