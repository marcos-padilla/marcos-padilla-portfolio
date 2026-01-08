'use client'

import { contactInfo } from './data'
import { ContactBackground, ContactInfo, ContactForm } from './components'

export default function ContactSection() {
	return (
		<section
			id='contact'
			className='relative w-full py-24 md:py-32 bg-white text-slate-900 overflow-hidden font-sans'
		>
			<ContactBackground />

			<div className='max-w-7xl mx-auto px-6 relative z-10'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
					<ContactInfo contactInfo={contactInfo} />
					<ContactForm />
				</div>
			</div>
		</section>
	)
}
