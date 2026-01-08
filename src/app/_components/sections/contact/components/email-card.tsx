'use client'

import { Mail, ArrowRight } from 'lucide-react'

interface EmailCardProps {
	email: string
}

export function EmailCard({ email }: EmailCardProps) {
	return (
		<a
			href={`mailto:${email}`}
			className='group flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-sm transition-all cursor-pointer'
		>
			<div className='p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors'>
				<Mail size={20} />
			</div>
			<div className='flex-1 min-w-0'>
				<p className='text-xs text-slate-500 font-medium mb-0.5'>
					Email
				</p>
				<p className='text-base font-semibold text-slate-900 truncate group-hover:text-blue-600 transition-colors'>
					{email}
				</p>
			</div>
			<div className='ml-2 text-slate-400 group-hover:text-slate-600 transition-colors'>
				<ArrowRight size={18} />
			</div>
		</a>
	)
}

