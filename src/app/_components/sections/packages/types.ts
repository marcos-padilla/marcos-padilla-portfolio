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
}

