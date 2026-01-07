'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface InstallCommandProps {
	command: string
}

export function InstallCommand({ command }: InstallCommandProps) {
	const [copied, setCopied] = useState(false)

	const copyCommand = () => {
		navigator.clipboard.writeText(command)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<div className='flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 font-mono text-sm text-slate-700 group-hover:border-slate-300 transition-colors'>
			<div className='flex items-center gap-2 overflow-hidden'>
				<span className='text-indigo-600 select-none'>$</span>
				<span className='truncate opacity-70'>{command}</span>
			</div>
			<Button
				variant='ghost'
				size='icon'
				onClick={copyCommand}
				className={cn(
					'h-7 w-7 text-slate-400 hover:text-slate-900',
					copied && 'text-emerald-600'
				)}
				title='Copy to clipboard'
			>
				{copied ? (
					<Check size={14} className='text-emerald-600' />
				) : (
					<Copy size={14} />
				)}
			</Button>
		</div>
	)
}

