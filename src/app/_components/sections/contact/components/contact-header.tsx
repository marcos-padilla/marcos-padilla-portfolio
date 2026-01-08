'use client'

import { MessageSquare } from 'lucide-react'

export function ContactHeader() {
	return (
		<>
			<div className='flex items-center gap-2 text-sm font-medium text-blue-600 mb-6 uppercase tracking-wider'>
				<MessageSquare size={16} />
				Contact
			</div>
			<h2 className='text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6'>
				Let's build something{' '}
				<span className='text-slate-500'>extraordinary.</span>
			</h2>
			<p className='text-base text-slate-600 leading-relaxed max-w-lg'>
				Whether you have a project in mind, need a consultant, or
				just want to chat about the latest tech—I'm always open to
				new opportunities.
			</p>
		</>
	)
}

