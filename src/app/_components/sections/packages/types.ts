import type { LucideIcon } from 'lucide-react'

export interface PackageItem {
	id: string
	name: string
	description: string
	installCmd: string
	stars: string
	downloads: string
	tags: string[]
	gradient: string
	icon: LucideIcon | React.ComponentType<any>
	span?: string // Class for grid span (e.g., "md:col-span-2")
	showStats?: boolean // Whether to show stars and downloads
	requiresBM360?: boolean // Whether package requires BusinessMate360 account
}

