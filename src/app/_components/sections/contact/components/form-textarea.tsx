'use client'

import { cn } from '@/lib/utils'

interface FormTextareaProps {
	id: string
	label: string
	placeholder?: string
	required?: boolean
	rows?: number
	className?: string
}

export function FormTextarea({
	id,
	label,
	placeholder,
	required = false,
	rows = 6,
	className,
}: FormTextareaProps) {
	return (
		<div className='space-y-2.5'>
			<label
				htmlFor={id}
				className='block text-sm font-semibold text-slate-900 tracking-tight'
			>
				{label}
				{required && <span className='text-red-500 ml-1'>*</span>}
			</label>
			<textarea
				id={id}
				name={id}
				required={required}
				rows={rows}
				placeholder={placeholder}
				className={cn(
					'w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl',
					'text-slate-900 placeholder:text-slate-400',
					'focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500',
					'transition-all duration-200 resize-none',
					'hover:border-slate-300 hover:bg-white',
					className
				)}
			/>
		</div>
	)
}

