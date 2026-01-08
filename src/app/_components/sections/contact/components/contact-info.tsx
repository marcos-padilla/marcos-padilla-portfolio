'use client'

import { motion } from 'framer-motion'
import { ContactHeader } from './contact-header'
import { EmailCard } from './email-card'
import { LocationCard } from './location-card'
import type { ContactInfo } from '../types'

interface ContactInfoProps {
	contactInfo: ContactInfo
}

export function ContactInfo({ contactInfo }: ContactInfoProps) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -20 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			className='flex flex-col'
		>
			<ContactHeader />

			{/* Contact Details */}
			<div className='mt-12 space-y-4'>
				<EmailCard email={contactInfo.email} />
				<LocationCard location={contactInfo.location} />
			</div>
		</motion.div>
	)
}

