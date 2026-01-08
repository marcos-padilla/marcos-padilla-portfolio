'use client'

import { Button } from '@/components/ui/button'

interface NavCTAProps {
	variant?: 'desktop' | 'mobile'
	onClick?: () => void
}

const scrollToContact = () => {
	const element = document.getElementById('contact')
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

const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
	e.preventDefault()
	scrollToContact()
}

export function NavCTA({ variant = 'desktop', onClick }: NavCTAProps) {
	if (variant === 'mobile') {
		return (
			<Button
				onClick={() => {
					scrollToContact()
					onClick?.()
				}}
				className='w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base transition-colors'
				size='lg'
			>
				Contact Me
			</Button>
		)
	}

	return (
		<Button
			asChild
			size='sm'
			className='hidden md:inline-flex rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-sm hover:shadow-md transition-all'
		>
			<a href='#contact' onClick={handleContactClick}>
				Contact Me
			</a>
		</Button>
	)
}

