import {
	BarChart3,
	FileText,
	Database,
	Shield,
} from 'lucide-react'
import type { PackageItem } from './types'

export const packages: PackageItem[] = [
	{
		id: 'pkg-1',
		name: '@bm360/analytics',
		description:
			'A comprehensive web analytics solution that provides everything Google Analytics does and more. Track page views, sessions, custom events, and conversion funnels with privacy-compliant data collection.',
		installCmd: 'npm install @bm360/analytics',
		stars: '0',
		downloads: '0',
		tags: ['Analytics', 'Tracking', 'Business Intelligence'],
		gradient: 'from-indigo-500 to-blue-500',
		icon: BarChart3,
		span: 'md:col-span-2',
		showStats: false,
		requiresBM360: true,
	},
	{
		id: 'pkg-2',
		name: '@bm360/forms',
		description:
			'Build and receive form submissions with ease. Create dynamic forms with conditional logic, file uploads, email notifications, and webhook integrations. Perfect for contact forms, surveys, and lead generation.',
		installCmd: 'npm install @bm360/forms',
		stars: '0',
		downloads: '0',
		tags: ['Forms', 'Data Collection', 'Submissions'],
		gradient: 'from-violet-500 to-purple-500',
		icon: FileText,
		showStats: false,
		requiresBM360: true,
	},
	{
		id: 'pkg-3',
		name: 'typify-db',
		description:
			'Automatically generate TypeScript type definitions from your database schema. Supports SQLite, PostgreSQL, MySQL, and other SQL databases. Maintain type safety between your database and application code.',
		installCmd: 'npm install typify-db',
		stars: '0',
		downloads: '0',
		tags: ['TypeScript', 'Database', 'Code Generation'],
		gradient: 'from-teal-500 to-cyan-500',
		icon: Database,
		showStats: false,
	},
	{
		id: 'pkg-4',
		name: 'env-health',
		description:
			'Validate environment variables at application startup with type checking. Ensures all required variables are present and validates their types, preventing runtime errors from misconfigured environments.',
		installCmd: 'npm install env-health',
		stars: '0',
		downloads: '0',
		tags: ['Environment', 'Validation', 'Type Safety'],
		gradient: 'from-green-500 to-emerald-500',
		icon: Shield,
		span: 'md:col-span-2',
		showStats: false,
	},
]

