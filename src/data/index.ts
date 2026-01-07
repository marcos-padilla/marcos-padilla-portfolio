import type {
	Profile,
	Highlight,
	Skills,
	Project,
	PackageItem,
	Service,
	TimelineItem,
} from '@/types'

export const PROFILE: Profile = {
	name: 'Your Name',
	title: 'Data Analyst • Full-Stack Developer',
	location: 'New York, USA',
	blurb: 'I build clean, fast products and analyze data to uncover insights. I blend analytics with engineering to ship measurable outcomes.',
	ctaPrimary: { label: 'Download Resume', href: '#' },
	ctaSecondary: { label: 'Contact', href: '#contact' },
	socials: [
		{ label: 'GitHub', href: '#' },
		{ label: 'LinkedIn', href: '#' },
		{ label: 'Email', href: 'mailto:you@example.com' },
	],
}

export const HIGHLIGHTS: Highlight[] = [
	{ label: 'Years building', value: '3+' },
	{ label: 'Projects shipped', value: '20+' },
	{ label: 'Packages', value: '5+' },
	{ label: 'Focus', value: 'Analytics + Engineering' },
]

export const SKILLS: Skills = {
	Analytics: [
		'SQL (joins, window functions)',
		'Excel (Power Query, pivots)',
		'Python (pandas, numpy)',
		'A/B testing & experimentation',
		'Dashboarding (Looker/Power BI/Tableau)',
	],
	Engineering: [
		'TypeScript / JavaScript',
		'Next.js / React',
		'Node.js',
		'Laravel / PHP',
		'PostgreSQL',
		'CI/CD, Docker',
	],
	'Product & Ops': [
		'Requirements → shipped MVP',
		'Instrumentation & metrics',
		'Performance & reliability',
		'Security basics',
	],
}

export const PROJECTS: Project[] = [
	{
		title: 'BusinessMate360 (Multi-tenant SaaS)',
		description:
			'A multi-tenant CRM + website builder ecosystem with analytics, automation, and AI helpers.',
		tags: ['Next.js', 'Laravel', 'Postgres', 'Multi-tenant', 'Tailwind'],
		links: [
			{ label: 'Case Study', href: '#' },
			{ label: 'Demo', href: '#' },
		],
	},
	{
		title: 'Lead Intelligence Pipeline',
		description:
			'Scrapes + enriches leads, normalizes data, and outputs clean lists with personalized outreach angles.',
		tags: ['Python', 'pandas', 'SQL', 'Automation'],
		links: [{ label: 'Writeup', href: '#' }],
	},
	{
		title: 'Operational Dashboards',
		description:
			'KPIs for ops and sales: cohort retention, funnel conversion, and SLA tracking.',
		tags: ['SQL', 'BI', 'Data Modeling', 'Metrics'],
		links: [{ label: 'Screens', href: '#' }],
	},
	{
		title: 'Website Screenshot Service',
		description:
			'Backend service that captures website screenshots, stores them, and links them back to records.',
		tags: ['Laravel', 'Queues', 'Storage', 'Automation'],
		links: [{ label: 'Repo', href: '#' }],
	},
]

export const PACKAGES: PackageItem[] = [
	{
		name: 'env-assert',
		description:
			'Tiny runtime validator for environment variables with helpful error messages and .env examples.',
		tech: ['Node.js', 'TypeScript'],
		href: '#',
	},
	{
		name: 'csv-cleaner',
		description:
			'Opinionated CSV cleanup + schema checks for messy exports (dates, phones, nulls, trimming).',
		tech: ['TypeScript', 'CLI'],
		href: '#',
	},
	{
		name: 'metrics-lite',
		description:
			'Drop-in app metrics helpers (timers, counters) with minimal overhead.',
		tech: ['TypeScript'],
		href: '#',
	},
]

export const SERVICES: Service[] = [
	{
		title: 'Data analysis & dashboards',
		description:
			'From messy data to crisp decisions: pipelines, models, dashboards, and actionable insight summaries.',
		bullets: [
			'SQL modeling + performance',
			'Excel automation (Power Query)',
			'Python notebooks + reports',
			'KPI design + dashboard builds',
		],
	},
	{
		title: 'Full-stack product builds',
		description:
			'Rapid MVPs with production-minded engineering: auth, billing, multi-tenant, analytics, deployments.',
		bullets: [
			'Next.js + TypeScript UIs',
			'API design (Laravel/Node)',
			'Postgres + migrations',
			'CI/CD + Docker',
		],
	},
	{
		title: 'Automation & integrations',
		description:
			'Connect tools, automate workflows, reduce manual work, and add observability.',
		bullets: [
			'n8n workflows',
			'Webhooks + scheduling',
			'Email parsing & enrichment',
			'Monitoring basics',
		],
	},
]

export const TIMELINE: TimelineItem[] = [
	{
		period: '2025 → Now',
		title: 'Building SaaS + analytics systems',
		org: 'Independent',
		details: [
			'Designed multi-tenant architecture and shipped core CRM workflows.',
			'Implemented KPI dashboards and lead funnels with measurable improvements.',
			'Built automation workflows to reduce ops overhead.',
		],
	},
	{
		period: '2024',
		title: 'Analytics & engineering projects',
		org: 'Freelance',
		details: [
			'Delivered data cleanup + reporting for business ops.',
			'Built modern web experiences with performance-focused UI.',
		],
	},
]
