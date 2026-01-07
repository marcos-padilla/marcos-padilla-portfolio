import {
	Box,
	Layers,
	Cpu,
	Zap,
	type LucideIcon,
} from 'lucide-react'
import { SearchIcon } from './components/search-icon'
import type { PackageItem } from './types'

export const packages: PackageItem[] = [
	{
		id: 'pkg-1',
		name: 'Velocity UI',
		description:
			'A high-performance, accessible component library built for speed. Optimized for Next.js and Server Components with zero runtime overhead.',
		installCmd: 'npm install @velocity/ui',
		stars: '1.2k',
		downloads: '45k/mo',
		tags: ['React', 'Tailwind', 'A11y'],
		gradient: 'from-blue-500 to-cyan-400',
		icon: Layers,
		span: 'md:col-span-2',
	},
	{
		id: 'pkg-2',
		name: 'Next-SEO-Blitz',
		description:
			'Automated SEO meta-tag generation and OG image creation. Drop-in solution for perfect social cards.',
		installCmd: 'npm i next-seo-blitz',
		stars: '850',
		downloads: '12k/mo',
		tags: ['SEO', 'Automation'],
		gradient: 'from-purple-500 to-pink-400',
		icon: SearchIcon,
	},
	{
		id: 'pkg-3',
		name: 'Flux State',
		description:
			'Zero-boilerplate global state management. Minimalist API with maximum power and type safety.',
		installCmd: 'npm i flux-state-core',
		stars: '2.1k',
		downloads: '80k/mo',
		tags: ['State', 'TypeScript'],
		gradient: 'from-amber-400 to-orange-500',
		icon: Zap,
	},
	{
		id: 'pkg-4',
		name: 'Animatify',
		description:
			'Physics-based animation primitives for complex UI interactions. Drag, toss, and layout transitions made easy.',
		installCmd: 'npm i animatify',
		stars: '3.4k',
		downloads: '150k/mo',
		tags: ['Animation', 'Physics', 'Gestures'],
		gradient: 'from-emerald-400 to-green-500',
		icon: Box,
		span: 'md:col-span-2',
	},
	{
		id: 'pkg-5',
		name: 'Async-Vault',
		description:
			'Secure, encrypted local storage wrapper with async capabilities and automatic compression.',
		installCmd: 'npm i async-vault',
		stars: '420',
		downloads: '5k/mo',
		tags: ['Storage', 'Security'],
		gradient: 'from-red-500 to-rose-400',
		icon: Cpu,
	},
]

