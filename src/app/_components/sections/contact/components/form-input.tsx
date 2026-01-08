'use client'

import { cn } from '@/lib/utils'

interface FormInputProps {
	id: string
	label: string
	type?: string
	placeholder?: string
	required?: boolean
	className?: string
}

export function FormInput({
	id,
	label,
	type = 'text',
	placeholder,
	required = false,
	className,
}: FormInputProps) {
	return (
		<div className='space-y-2.5'>
			<label
				htmlFor={id}
				className='block text-sm font-semibold text-slate-900 tracking-tight'
			>
				{label}
				{required && <span className='text-red-500 ml-1'>*</span>}
			</label>
			<input
				type={type}
				id={id}
				name={id}
				required={required}
				placeholder={placeholder}
				className={cn(
					'w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl',
					'text-slate-900 placeholder:text-slate-400',
					'focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500',
					'transition-all duration-200',
					'hover:border-slate-300 hover:bg-white',
					className
				)}
			/>
		</div>
	)
}

