import type { LucideIcon } from 'lucide-react'

export interface SocialLink {
	icon: LucideIcon
	href: string
	label: string
}

export interface ContactInfo {
	email: string
	location: string
	socials: SocialLink[]
}

