'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FormInput } from './form-input'
import { FormTextarea } from './form-textarea'
import { SubmitButton } from './submit-button'

type FormState = 'idle' | 'submitting' | 'success'

export function ContactForm() {
	const [formState, setFormState] = useState<FormState>('idle')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setFormState('submitting')
		// Simulate network request
		setTimeout(() => {
			setFormState('success')
			// Reset after showing success message
			setTimeout(() => setFormState('idle'), 3000)
		}, 1500)
	}

	return (
		<motion.div
			initial={{ opacity: 0, x: 20 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			className='bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm'
		>
			<form onSubmit={handleSubmit} className='space-y-6'>
				<FormInput
					id='name'
					label='Name'
					placeholder='Your name'
					required
				/>
				<FormInput
					id='email'
					label='Email'
					type='email'
					placeholder='your.email@example.com'
					required
				/>
				<FormTextarea
					id='message'
					label='Message'
					placeholder='Tell me about your project or how I can help...'
					required
					rows={6}
				/>
				<div className='pt-2'>
					<SubmitButton state={formState} />
				</div>
			</form>
		</motion.div>
	)
}

