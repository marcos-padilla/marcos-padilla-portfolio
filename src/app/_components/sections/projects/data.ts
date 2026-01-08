import type { Project } from './types'

export const projects: Project[] = [
	{
		id: 'proj-1',
		title: 'Nexus Dashboard',
		category: 'SaaS Platform',
		description:
			'A comprehensive analytics dashboard for fintech companies. Features real-time data visualization, automated reporting pipelines, and role-based access control for enterprise teams.',
		tech: ['Next.js', 'Tremor', 'PostgreSQL', 'AWS'],
		color: '#3b82f6', // blue-500
		link: '#',
		repo: '#',
		imageGradient: 'from-blue-600 to-indigo-900',
	},
	{
		id: 'proj-2',
		title: 'Aura Commerce',
		category: 'E-commerce Headless',
		description:
			'A high-performance headless e-commerce storefront built for speed. includes AI-powered product recommendations, algorithmic search, and instant checkout flows.',
		tech: ['Shopify', 'React', 'Tailwind', 'Redis'],
		color: '#a855f7', // purple-500
		link: '#',
		repo: '#',
		imageGradient: 'from-purple-600 to-fuchsia-900',
	},
	{
		id: 'proj-3',
		title: 'Orbit Social',
		category: 'Social Network',
		description:
			'A decentralized social networking protocol allowing users to own their data. Implements ActivityPub for federation and end-to-end encryption for private messaging.',
		tech: ['TypeScript', 'GraphQL', 'Node.js', 'Socket.io'],
		color: '#14b8a6', // teal-500
		link: '#',
		repo: '#',
		imageGradient: 'from-teal-600 to-emerald-900',
	},
	{
		id: 'proj-4',
		title: 'Vanguard AI',
		category: 'Generative AI Tool',
		description:
			'An enterprise-grade AI writing assistant that learns your brand voice. Includes fine-tuning capabilities, context-aware generation, and team collaboration workspaces.',
		tech: ['OpenAI API', 'Python', 'FastAPI', 'Docker'],
		color: '#f43f5e', // rose-500
		link: '#',
		repo: '#',
		imageGradient: 'from-rose-600 to-red-900',
	},
]

