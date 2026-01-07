'use client'

import { Button } from '@/components/ui/button'
import { PROFILE } from '@/data'

const navItems = [
	{ label: 'Projects', href: '#projects' },
	{ label: 'Packages', href: '#packages' },
	{ label: 'Services', href: '#services' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Contact', href: '#contact' },
]

export function TopNav() {
	return (
		<div className='sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur'>
			<div className='mx-auto max-w-6xl px-4'>
				<div className='flex h-14 items-center justify-between'>
					<a
						href='#'
						className='group inline-flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-semibold text-zinc-900'
					>
						<span className='relative'>
							<span className='absolute -inset-2 rounded-xl bg-zinc-100 opacity-0 transition-opacity group-hover:opacity-100' />
							<span className='relative'>{PROFILE.name}</span>
						</span>
					</a>
					<div className='hidden sm:flex items-center gap-1'>
						{navItems.map((it) => (
							<a
								key={it.href}
								href={it.href}
								className='rounded-xl px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition'
							>
								{it.label}
							</a>
						))}
					</div>
					<div className='flex items-center gap-2'>
						<Button
							variant="outline"
							size="sm"
							className='hidden sm:inline-flex rounded-xl border-zinc-200 bg-white hover:bg-zinc-50'
							asChild
						>
							<a href={PROFILE.ctaSecondary.href}>
								{PROFILE.ctaSecondary.label}
							</a>
						</Button>
						<Button
							size="sm"
							className='rounded-xl bg-zinc-900 hover:bg-zinc-800'
							asChild
						>
							<a href={PROFILE.ctaPrimary.href}>
								{PROFILE.ctaPrimary.label}
							</a>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

