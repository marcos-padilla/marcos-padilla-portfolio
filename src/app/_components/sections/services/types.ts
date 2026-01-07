import { LucideIcon } from 'lucide-react'

export interface Service {
	id: string
	title: string
	description: string
	fullDescription: string
	icon: LucideIcon
	color: string
	details: string[] // Small pills shown on card
	features: string[] // List shown in modal
	useCases: string[] // Examples shown in modal
}

