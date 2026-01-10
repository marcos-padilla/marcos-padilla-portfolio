'use client'

import { Command } from 'lucide-react'

export function TerminalHeader() {
	return (
		<div className='flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200'>
			<div className='flex space-x-2'>
				<div className='w-3 h-3 rounded-full bg-red-400 border border-red-500' />
				<div className='w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500' />
				<div className='w-3 h-3 rounded-full bg-green-400 border border-green-500' />
			</div>
			<div className='flex items-center space-x-2 text-xs text-slate-500 font-mono'>
				<Command className='w-3 h-3' />
				<span>drift — zsh</span>
			</div>
			<div className='w-8' />
		</div>
	)
}
