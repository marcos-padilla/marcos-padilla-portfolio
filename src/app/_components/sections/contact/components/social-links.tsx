'use client'

import type { SocialLink } from '../types'

interface SocialLinksProps {
	socials: SocialLink[]
}

export function SocialLinks({ socials }: SocialLinksProps) {
	return (
		<div className='mt-12 lg:mt-0 pt-8 border-t border-slate-200'>
			<p className='text-sm text-slate-500 mb-4'>Follow my journey</p>
			<div className='flex gap-4'>
				{socials.map((social, i) => {
					const Icon = social.icon
					return (
						<a
							key={i}
							href={social.href}
							target='_blank'
							rel='noopener noreferrer'
							aria-label={social.label}
							className='p-3 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200 hover:scale-110 transition-all'
						>
							<Icon size={20} />
						</a>
					)
				})}
			</div>
		</div>
	)
}

