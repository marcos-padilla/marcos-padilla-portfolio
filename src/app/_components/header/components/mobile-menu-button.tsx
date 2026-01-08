'use client'

import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface MobileMenuButtonProps {
	onClick: () => void
}

export function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
	return (
		<Button
			onClick={onClick}
			variant='ghost'
			size='icon'
			className='md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors'
			aria-label='Open menu'
		>
			<Menu size={20} />
		</Button>
	)
}

