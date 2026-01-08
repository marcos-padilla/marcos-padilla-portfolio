import type { Project } from './types'

export const projects: Project[] = [
	{
		id: 'proj-1',
		title: 'Business Mate 360',
		category: 'SaaS Platform',
		description:
			'An all-in-one tool for business including: CRM, Inventory, Accounting, Team Management, etc.',
		tech: ['Next.js', 'Laravel', 'PostgreSQL', 'AWS'],
		color: '#3b82f6', // blue-500
		link: 'https://businessmate360.com',
		repo: '',
		imageGradient: 'from-blue-600 to-indigo-900',
	},
	{
		id: 'proj-2',
		title: 'Stratus Clean Palm Beach',
		category: 'Commercial Website',
		description:
			'A modern and professional website for a commercial cleaning company. Features a blog with server-side rendering (SSR) and an AI-powered chatbot capable of handling appointments and customer inquiries.',
		tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI Chatbot'],
		color: '#ef4444', // red-500
		link: 'https://stratuscleanpalmbeach.com',
		repo: '',
		imageGradient: 'from-red-600 to-rose-900',
	},
	{
		id: 'proj-3',
		title: 'Email Automation Agent',
		category: 'AI Automation',
		description:
			'An intelligent email automation agent capable of categorizing, summarizing, answering emails, and answering questions from emails. Streamlines email management with AI-powered processing and response generation.',
		tech: ['Python', 'OpenAI API', 'Email API', 'AI/ML'],
		color: '#14b8a6', // teal-500
		link: '',
		repo: '',
		imageGradient: 'from-teal-600 to-emerald-900',
	},
]

